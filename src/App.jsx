import React,{useState} from 'react'
import {Outlet} from 'react-router-dom'
import { Layout } from 'antd'
import Header from './components/Header' 
import Aside from './components/Aside'
import Bread from './components/Bread'
import {connect} from 'react-redux'




function App(props) {
  //const [mykey,setMyKey]=useState(1)

  return (
    <Layout id='apppage'>
      <Header key={props.mykey} />
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

const mapStateToProps = (state) =>{
  return{
    mykey: state.mykey
  }
}

export default  connect(mapStateToProps)(App)
