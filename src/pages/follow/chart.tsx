
import { Space ,Input,Popup} from '@nutui/nutui-react-taro';

import { Order } from '@nutui/icons-react-taro'

import { useState } from 'react';

import usePatientStore from "/src/store/patient"

import type { Patient, CheckList } from '/src/utils/types'

import {format} from 'date-fns'

export default function Chart(){

  const {showPopup,setShowPopup,currentChartData,followList} = usePatientStore((state) => state)

  console.log(followList)



  const series = { name: '', data: [] }

  const categories:string[]= []

  const test =(array:String[])=>{

  }

  followList.forEach( (item:Patient,index)=>{

    const checkList = item.checkList as CheckList
    
    console.log(checkList)

    if(checkList){
      if(checkList[currentChartData.checkName]){
        const checkNameValue = checkList[currentChartData.checkName];

        series.data.push(checkNameValue[currentChartData.title])

        const checkDate = format(item.thisDate,"yyyy-MM-d")

        categories.push(checkDate)
      }
     
    }

  
  });

  console.log(series)
  console.log(categories)

  // 获取store 计算数据

  return <>


    <Popup
        visible={showPopup}
        style={{ height: '60%',width:"100%",top:"200px" }}
        position="top"
     
        onClose={() => {
          setShowPopup()
        }}
      >
        <Space direction='vertical'>
          {currentChartData.checkName}
          {currentChartData.title}

        </Space>
      </Popup>

  </>

}