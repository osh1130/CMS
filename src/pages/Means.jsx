import React, { useEffect, useState } from 'react'
import './less/Means.less'
import { Button, Checkbox, Form, Input, message,Upload  } from 'antd'
import { GetUserInfoApi, ChangeUserDataApi} from '../request/api'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import {connect} from 'react-redux'

// Limit image size to 200KB
function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 / 1024  < 200;
  if (!isLt2M) {
    message.error('请上传小于200KB的图!');
  }
  return isJpgOrPng && isLt2M;
}

  // Convert image path to base64
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

function Means(props) {
  //const [username1,setUsername1]=useState('')
  //const [password1,setPassword1]=useState('')

  //
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState("")

  


  useEffect(()=>{
    GetUserInfoApi().then(res=>{
      if(res.errCode===0){
        message.success(res.message)
        //set asyn
        //setUsername1(res.data.username)
        //setPassword1(res.data.password)
        //save in sessionStorage
        sessionStorage.setItem('username',res.data.username)
      }
    })
  })

  // clicked upload image
  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>{
        setLoading(false)
        setImageUrl(imageUrl)
        // store picture name
        localStorage.setItem('avatar', info.file.response.data.filePath)
        //window.location.reload()
        // use react-redux
        props.addKey()
      }
      );
    }
  };

  // form submit event
  const onFinish = (values) => {
    // If the username of the form has a value and is not equal to the username obtained during initialization, and the password is not empty
    if(values.username && values.username!==sessionStorage.getItem('username') && values.password.trim() !== ""){
      // Do form submission...
      ChangeUserDataApi({
        username: values.username,
        password: values.password
      }).then(res=>{
        console.log(res)
        // When you modify successfully, don't forget to log in again
      })
    }
  }

  // upload button
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );


  return (
    <div className='means'>
        <Form
      name="basic" 
      style={{width:'400px'}}
      //initialValues={{
      //  username: username1,
      //  Password:password1
      //}}
      onFinish={onFinish}
      //onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Modify Username"
        name="username"
      >
        <Input placeholder='please input your new username'/>
      </Form.Item>

      <Form.Item
        label="Modify Password"
        name="password"
      >
        <Input.Password placeholder='please input your new password'/>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit" style={{float:'right'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>

    <p>Click below to modify the avatar：</p>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        headers={{"cms-token": localStorage.getItem('cms-token')}}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    //changeMsgFn(){
    //  let action = {type: 'changeUsername', value: 'hello world'}
    //  dispatch(action)
    //},
    addKey(){
      dispatch({type: "addKeyFn"})
    }
  }
}

export default connect(null, mapDispatchToProps)(Means)
