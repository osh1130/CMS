import React from 'react'
import { Pagination, List, Skeleton,Button,message } from 'antd'
import { useState,useEffect } from 'react'
import { ArticleListApi, ArticleDelApi } from '../request/api'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'



export default function Listlist() {
  const [list, setList] = useState([]);
  const [total,setTotal] = useState(0)
  const [current,setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(4)
  const navigate = useNavigate()
  const [update, setUpdate] = useState(1)
  
  //encapsulation request for every page
  const getList = (num) =>{
    ArticleListApi({
      num:current,
      count:pageSize
    }).then(res=>{
      //console.log(res)
      //console.log(localStorage.getItem("cms-token"));
      if(res.errCode===0){
        let{arr,total, num,count} = res.data;
        setList(arr);
        setTotal(total);
        setCurrent(num);
        setPageSize(count);
      }
    })
  }

  //request for list data: componentDidMount
  useEffect(()=>{
    getList(current)
  },[])

  // componentDidUpdate
  useEffect(() => {
    getList(current)
  }, [update])

  //pagenation
  const onChange = (page) => {
    //console.log(page);
    //setCurrent(page); asyn
    getList(page);
  };

  const delFn = (id) => {
    //console.log(id);
    ArticleDelApi({id}).then(res=>{
      //console.log(res)
      if(res.errCode===0){
        message.success(res.message)
        //Refresh the page, or re-request the data of this list window.reload call getList(1) to increase the detection of variables
        setUpdate(update+1)
      }
    })
  };


  return (
    <div className='listtable' style={{padding:'20px'}}>
        <List
        className="demo-loadmore-list"
        //loading={initLoading}
        itemLayout="horizontal"
        //loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions=
            {[<Button type='primary' onClick={()=>navigate('/edit/'+item.id)}>edit</Button>,
             <Button type='danger'onClick={()=>delFn(item.id)}>delet</Button>]}
          >
            <Skeleton loading={false} active>
              <List.Item.Meta
                //avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.subTitle}
              />
              <div>{moment(item.date).format("YYYY-MM-DD hh:mm:ss")}</div>
            </Skeleton>
          </List.Item>
        )}
      />
      <Pagination style={{float:'right',marginTop:'20px'}} onChange={onChange} total={total} current={current} pageSize={pageSize}/>
    </div>
  )
}
