import React, { useEffect, useState } from 'react'
import './less/Means.less'
import { Button, Checkbox, Form, Input, message } from 'antd'
import { GetUserInfoApi, ChangeUserDataApi} from '../request/api'

export default function Means() {
  //const [username1,setUsername1]=useState('')
  //const [password1,setPassword1]=useState('')

  //
  useEffect(()=>{
    GetUserInfoApi().then(res=>{
      if(res.errCode===0){
        message.success(res.message)
        //根本原因在于set是异步的
        //setUsername1(res.data.username)
        //setPassword1(res.data.password)
        //存到sessionStorage
        sessionStorage.setItem('username',res.data.username)
      }
    })
  })

  // 表单提交的事件
  const onFinish = (values) => {
    // 如果表单的username有值，并且不等于初始化时拿到的username，同时密码非空
    if(values.username && values.username!==sessionStorage.getItem('username') && values.password.trim() !== ""){
      // 做表单的提交...
      ChangeUserDataApi({
        username: values.username,
        password: values.password
      }).then(res=>{
        console.log(res)
        // 当你修改成功的时候，不要忘了重新登录
      })
    }
  }

  return (
    <div className='means'>
        <Form
      name="basic" style={{width:'400px'}}
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
    </div>
  )
}
