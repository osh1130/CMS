import React, { useEffect,useState } from 'react'
import { AppstoreOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {useNavigate, useLocation} from "react-router-dom"

export default function Aside() {
    const navigate=useNavigate()
    const location=useLocation()
    const [defaultkey,setDefaultkey]=useState('')

    function getItem(label, key, icon, children, type) {
        return {
          key,
          icon,
          children,
          label,
          type,
        };
      }

      const items = [ 
        getItem('查看文章列表list', 'listlist', <AppstoreOutlined />, ),
        //getItem('查看文章列表table', 'listtable', <AppstoreOutlined />, ),
        getItem('文章编辑', 'edit',<EditOutlined />, ),
        getItem('修改资料', 'means', <SettingOutlined />, ),
      ];

  useEffect(()=>{
    let path=location.pathname;
    let key=path.split('/')[1];
    setDefaultkey(key)
  })

    const onClick = (e) => {
        //console.log('/', e.key);
        navigate('/'+e.key)
        setDefaultkey(e.key)
      };

  return (
    <div>
        <Menu
            theme='dark'
            onClick={onClick}
            className="aside"
            style={{
                width: 256,
            }}
            selectedKeys={[defaultkey]}
            mode="inline"
            items={items}
        />

    </div>
  )
}
