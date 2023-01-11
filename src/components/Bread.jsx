import React, { useEffect } from 'react'
import { Breadcrumb } from 'antd'
import { useState } from 'react'
import {useLocation} from 'react-router-dom'

export default function Bread() {
  const [breadname,setBreadname]=useState('')
  const{pathname} =useLocation()

  useEffect(()=>{
    switch(pathname){
        //case "/listtable":
        //    setBreadname("table");
        //    break;
        case "/listlist":
              setBreadname("view article list");
              break;
        case "/edit":
            setBreadname("article editor");
            break;
        case "/means":
            setBreadname("modify means");
            break;
        default:
            //Going from the edit button to edit the breadcrumbs should also be modified
            setBreadname(pathname.includes('edit') ? 'article editor' : "");
            break;
    }
  },[pathname])
  return (
    <div>
        <Breadcrumb style={{height:'30px'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item><a href="">{breadname}</a></Breadcrumb.Item>
        </Breadcrumb>
    </div>
  )
}
