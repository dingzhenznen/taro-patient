import React, { useState, useEffect, useRef } from 'react'
import { Button ,Cell,VirtualList,Space,Tag,Image} from "@nutui/nutui-react-taro"

import { Jd } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'


import { SearchBar, Toast } from '@nutui/nutui-react-taro'

import Filter from './filter'

import IndexItem from './indexItem'

import { patientList } from '/src/apis/patient'
import { parseJSON } from 'date-fns'

function Index() {

  const [showRight, setShowRight] = useState(false)

  const [patients,setPatients] = useState([])


  useEffect(() => {

    getList()

    getJSON("https://p9s5xa.laf.run/handleFetch").then(function(json) {
      
      console.log('Contents: ' + JSON.stringify(json));
    }, function(error) {
      console.error('出错了', error);
    });
  
  }, [])

  const getList = async()=>{
    const res = await patientList({userId:'test'});

    if(res.code==0){
      setPatients(res.data)
    }else{
      console.log(2222)

      // Taro.showToast({title:'网络有误',icon:'error',duration:1000})
      
    }

   
  }

  const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject){
      const handler = function() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();
  
    });
  
    return promise;
  };

  const handleFilter =(data:any)=>{

    console.log(data)

  }

  const datas = [
    {name:'张三',num:6,sex:"男",age:35,disease:'TAK',phone:'188'},
    {name:'李四',num:3,sex:"男",age:31,disease:'TAK',phone:'188'},
    {name:'张三',num:1,sex:"女",age:30,disease:'Spa',phone:'188'},
  ]

  const handleAdd = ()=>{

    // console.log(patients)
   
    Taro.redirectTo({url:"/pages/index/idCard?param=11"})
  }




  return (
    
    <View className="idCard">

      <Button onClick={handleAdd} block type="primary">
        add
      </Button>
        {/* <Cell>
        <Button style={{margin:"0 auto"}} type="primary" className="btn" onClick={handleAdd}>
          添加
        </Button>
        </Cell> */}

      <SearchBar style={{padding:0}} left="" right={<div onClick={()=>setShowRight(true)}>测试1</div>} onSearch={() => {}} />

      <Filter showRight={showRight} setShowRight={setShowRight} handleFilter ={handleFilter} />

      {
         patients.map(item=> <IndexItem patient={item} />)
      }
    
       
      </View>
   
  )
}

export default Index
