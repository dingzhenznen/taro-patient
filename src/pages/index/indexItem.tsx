import React, { useState, useEffect, useRef } from 'react'
import { Button ,Cell,Space,Tag,Image} from "@nutui/nutui-react-taro"

import { Message, Phone, User} from '@nutui/icons-react-taro'

import Taro from '@tarojs/taro'
import Logo from "/src/pages/static/img/login.png"

import usePatientStore from '/src/store/patient'



export default function IndexItem({patient}){

  const {updatePatent,setFollowList} = usePatientStore((state)=>state)



  const handleDetail =()=>{

    const sortedArray =patient.followList?.sort(
      (a, b) => b.thisDate - a.thisDate
    )
    setFollowList(sortedArray)

    Taro.redirectTo({url:"/pages/index/details?id="+patient.idCard})

  }
 

  return <Space direction="vertical" style={{backgroundColor:"white",marginTop:'20px'}}>

  <Cell style={{boxShadow:'0 0 0 0',margin:'0'}} title={
      <div>
        <span>{patient.name}</span>
        <Tag style={{marginLeft:"6px",width:"44px",height:"18px"}} type="success">{patient.followList.length}次随访</Tag>
      </div>
    } 
    extra={<div>距离下次还剩余10天</div>}
    />

  <Space style={{marginLeft:"20px"}}>
      <span>{patient.sex}</span>
      <span>{patient.age}</span>
      <span>{patient.disease}</span>
  </Space>
  <Space justify={'around'}>
    <Space onClick={handleDetail}  style={{alignItems:'center'}} >
      <Image src={Logo}  width="12" height="12" />
      <div onClick={handleDetail}>随访</div>
    </Space>
    <Button fill="none"  icon={<Message />}>短信提醒</Button>
    <Button fill="none"  icon={<Phone />} >拨打电话</Button>
  </Space>

</Space>

}