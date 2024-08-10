
import usePatientStore from "/src/store/patient"
import { Button ,Space,Tag,Image,Collapse} from '@nutui/nutui-react-taro'
import { ArrowDown } from '@nutui/icons-react-taro'
import { getCurrentInstance } from "@tarojs/runtime";

import Taro from '@tarojs/taro'

import {format} from 'date-fns'


import { View } from '@tarojs/components'
import './index.scss'
import Logo from "/src/pages/static/img/login.png"
import { useEffect, useState } from "react";

import { getPatient ,getDetail } from "/src/apis/patient";



export default function Details(){

  const {setFollowList,followList,updatePatent,patient} = usePatientStore((state) => state)

  const [patients,setPatients] =useState({})

  const { router } = getCurrentInstance();

  useEffect(()=>{
    console.log(router?.params.id)

    getPatientDetail({idCard:router?.params.id})

  },[])

  const getPatientDetail = async(data:any)=>{

    //const res = await getPatient(data)

    const details = await getDetail({})
    console.log('detail',details)


    // if(res.code==0){

    //   console.log('detail',res.data.data[0])

    //   setPatients(res.data.data[0])
  
    //   updatePatent(res.data.data[0])

    // }else{
      
    // }



    // const sortedArray = res.data.data.data[0].followList?.sort(
    //   (a, b) => b.thisDate - a.thisDate
    // )
  
    // setFollowList(sortedArray)

  }



  const makePhone =()=>{
    console.log(patient)

  }

  const formateStatus =(status)=>{

    if(status==0)return <div>未开始</div>
    if(status==1)return <div>进行中</div>
    if(status==2)return <div>已结束</div>

  }

  const toFinish =()=>{
    Taro.redirectTo({url:"/pages/follow/finish"})
  }




  return  <View className="idCard">
    <Space direction="vertical"  style={{backgroundColor:"white"}}>

      <Space align={'center'}>
        <span style={{fontSize:'18px'}}>{patients.name}</span>
        <Tag style={{marginLeft:"6px",width:"44px",height:"18px"}} type="success">{patients?.followList?.length}次随访</Tag>
        <Tag style={{marginLeft:"6px",width:"44px",height:"18px"}} type="success">{patients.caseId}</Tag>
      </Space>

      <Space style={{marginLeft:"20px"}} justify={'between'}>

        <Space direction="vertical">
          <div>
            <span style={{marginLeft:'10px'}}>{patients.sex}</span>
            <span style={{marginLeft:'10px'}}> {patients.age}</span>
            <span style={{marginLeft:'10px'}}>{patients?.selectDisease?.en}</span>
          </div>

          <div>
            还有十天
          </div>
        
        </Space>

        <Space style={{fontSize:"16px"}}>

          <Space  direction={'vertical'} align={'center'}>
            <Image src={Logo}  width="15" height="15" />
            <div onClick={makePhone}>拨打电话q</div>
    
          </Space>

          <Space direction={'vertical'} align={'center'}>
            <Image src={Logo}  width="15" height="15" />
            <div>发送短信</div>
    
          </Space>

        </Space>
        
      </Space>

    </Space>

    <Collapse style={{
      marginTop:'10px',
      marginLeft:"-30px",
      '--nutui-collapse-wrapper-content-padding':'0 0'
    }} defaultActiveName={['1']} expandIcon={<ArrowDown />}>
        <Collapse.Item  title="诊疗信息" name="1">

        {followList.map((item)=> <Space style={{background:'rgba(245, 252, 252, 1)',marginLeft:"30px",marginTop:"10px",padding:"10px 10px"}} direction='vertical'>
          <Space justify='between' onClick={toFinish}>
            
            {formateStatus(item.status)}
            <div>{format(item.thisDate,"MM-d")}-{format(item.nextDate,"MM-d")}</div>
          </Space>
          <div onClick={toFinish}>李医生（北京市顺义区医院）</div>
         </Space>)}
         
         

        </Collapse.Item>
        <Collapse.Item title="病史" name="2">
          <Space style={{marginLeft:"30px"}}>
            ddd

          </Space>
        </Collapse.Item>
        <Collapse.Item title="病种名称" name="3" >
         <Space style={{marginLeft:"30px"}} direction="vertical" >
         
          <Space align="center" justify="between">

            <div>强直性脊柱炎</div>

            <Button>转病种</Button>

          </Space>

          <Space direction="vertical">
            <div>1.下背痛的病程至少了个月，疼痛随活动改善休衤啭鬻艫田息不缓解</div>
            <div>1.下背痛的病程至少了个月，疼痛随活动改善休衤啭鬻艫田息不缓解</div>
            <div>1.下背痛的病程至少了个月，疼痛随活动改善休衤啭鬻艫田息不缓解</div>
          </Space>
            
          </Space>
        </Collapse.Item>
      </Collapse>
  </View>
}