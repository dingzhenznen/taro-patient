
import { Space ,Input} from '@nutui/nutui-react-taro';

import { Order } from '@nutui/icons-react-taro'

import Chart from './chart';
import { useState } from 'react';

import usePatientStore from "/src/store/patient"



export default function InputChart({configData,initData,onchange,checkName}){

  console.log(checkName)



  const {setShowPopup,setCurrentChartData} = usePatientStore((state) => state)


  return <Space style={{width:"100%"}} align='center' className='main' justify="between">

    <Space style={{width:"20%",fontSize:"12px"}} className='left' direction="vertical">
      <Space>{configData.en}</Space>
      <Space>{configData.china}</Space>
    </Space>

    <Space align='center' style={{fontSize:"10px"}}>

      <Input value={initData} onChange={onchange} style={{fontSize:"10px",width:"40px",'--nutui-input-padding':'10px 0px'}} placeholder='选填'/>
      <div >{configData.unit}</div>
    </Space>

    <Space className='range' align='center' style={{fontSize:"12px"}}><div>{configData.range[0]}-{configData.range[1]}</div></Space>

    <Order onClick={
      ()=>{ 
        setShowPopup() 
        setCurrentChartData({checkName,title:configData.en})
      }}/>
  </Space>
}