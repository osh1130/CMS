import React from 'react'
import {Outlet} from 'react-router-dom'
import { Layout } from 'antd'
import Header from './components/Header' 
import Aside from './components/Aside'
import Bread from './components/Bread'


const {Sider, Content } = Layout


export default function App() {
  return (
    <Layout id='apppage'>
      <Header/>
      <div className='container'>
        <Aside/>
        <div className='container_box'>
            <Bread/>
            <div className='container_content'>
              <Outlet />
            </div>
        </div>
      </div>
      <footer>Footer &copy; 2022 Author Vivi</footer>
     </Layout>
    
  )
}
