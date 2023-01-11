import React, { useEffect, useState } from 'react'
import { Button, PageHeader, Modal, Form, Input,message } from 'antd'
import moment from 'moment'
import E from 'wangeditor'
import { ArticleAddApi, ArticleSearchApi, ArticleUpdateApi } from '../request/api'
import {useParams, useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

let editor = null

export default function Edit() {
  const [content, setContent] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [form] = Form.useForm();
  const navigate = useNavigate()
  let {pathname} = useLocation()
  let params  = useParams()		// get the current path of id

  // request
  const dealData = (errCode, msg) => {
    setIsModalVisible(false); // close Modal
    if (errCode === 0) {
      message.success(msg)
      setTimeout(() => {
        // navigate list page
        navigate('/listlist')
      }, 1500)
    } else {
      message.error(msg)
    }
  }

  

  //Modal clicked Submit
  const handleOk = () => {
    //setIsModalOpen(false);
    form
      .validateFields()    // validate   field
      .then((values) => {
        // form.resetFields();   // reset
        let { title, subTitle } = values;
        // The id in the address bar means that you want to update an article now
        if (params.id) {
          // Request to update an article
          ArticleUpdateApi({ title, subTitle, content, id: params.id }).then(res => dealData(res.errCode, res.message))
        } else {
          // Request to add an article
          ArticleAddApi({ title, subTitle, content }).then(res => dealData(res.errCode, res.message))
        }
      })
      .catch(() => false);
  };
  

  // componentDidMount
  useEffect(() => {
    editor = new E('#div1')
    editor.config.onchange = (newHtml) => {
      setContent(newHtml)
    }
    editor.create()

    //Make a request based on the address bar id
    if(params.id){
      ArticleSearchApi({id: params.id}).then(res => {
        //console.log(res)
        if(res.errCode===0){
          //let {title,subTitle} = res.data;
          //setContent(content);
          editor.txt.html(res.data.content) // Reset editor content
          setTitle(res.data.title)
          setSubTitle(res.data.subTitle)
        }
      })
    }

    return () => {
      // Destroy the editor when the component is destroyed Note: The class writing method needs to be called in componentWillUnmount
      editor.destroy()
    }
  },[pathname])
  
  return (
    <div>
      <PageHeader 
      ghost={false}
      onBack={params.id ? () =>  window.history.back(): null}
      title="Edit"
      subTitle={'Date: '+moment(new Date()).format("YYYY-MM-DD")}
      extra={<Button key="1" type="primary" onClick={()=>setIsModalOpen(true)}>Submit</Button>}
    > </PageHeader>

      <div id="div1" style={{ padding: '0 20px 20px', background: '#fff' }}></div>

      <Modal zIndex={99999} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={()=>setIsModalOpen(false)} >
      
      <Form
          form={form}
          name="basic"
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 21 }}
          autoComplete="off"
          //Set the initial value for the pop-up box (find and define it by name as the key)
          initialValues={{ title, subTitle }}
        >
          <Form.Item
            label="title"
            name="title"
            rules={[{ required: true, message: 'Please fill in the title' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="subTitle"
            name="subTitle"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
    
  )
}
