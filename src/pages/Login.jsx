import React from 'react'
import "./less/login.less"
import { Button, Checkbox, Form, Input,message  } from 'antd'
import logoImg from "../assets/logo.png"
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import {Link,useNavigate} from "react-router-dom"
import { LoginApi } from '../request/api'


export default function Login() {
  const navigate = useNavigate()
  const onFinish = (values) => {
    //console.log('Success:', values);
  LoginApi({
      username: values.username,
      password: values.password
    }).then(res=>{
      //console.log(res)
      if(res.errCode===0){
        message.success(res.message);
        //存储数据,不作为字符串储存是因为这么储存容易拿
        localStorage.setItem("avatar",res.data.avatar)
        localStorage.setItem("cms-token",res.data['cms-token'])
        localStorage.setItem("editable",res.data.editable)
        localStorage.setItem("player",res.data.player)
        localStorage.setItem("username",res.data.username)
        //并跳转到根路径
        setTimeout(()=>navigate('/'),1500)
      } else{
        message.error(res.message);
      }
    }) //跨域
  };
  
  
  return (
    <div className='login'>
      <div className='loginbox'>
            <img src={logoImg} alt="" /> 
            <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder='please input your username'/>
            </Form.Item>

            <Form.Item
              
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password size="large" prefix={<LockOutlined className="site-form-item-icon" />} placeholder='Please input your password'/>
            </Form.Item>

            <Form.Item>
              <Link to="/register">No account?Register now</Link>
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" block>
                log in
              </Button>
            </Form.Item>
          </Form>
      </div>
    </div>
  )
}
