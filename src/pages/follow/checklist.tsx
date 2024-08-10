import React, { useState } from 'react'
import { Tabs,Button } from '@nutui/nutui-react-taro'

import InputChart from './inputChart'


import Chart from './chart'

import usePatientStore from "/src/store/patient"

const Checklist = () => {
  const [tabValue, setTabValue] = useState<string | number>('0')

  const {currentChartData} = usePatientStore((state) => state)


  const itemConfig={
    bloodRoutine:{
      WBC:{type:1,en:'WBC',china:'低密度脂蛋白',unit:'*10^9个/L',range:[4,10]},
      HB:{type:1,en:'HB',china:'血红蛋白',unit:'*10^9个/L',range:[5,30]},
    },
    renalFunction:{
      ALT:{type:1,en:'ALT',china:'丙氨酸',unit:'*10^9个/L',range:[4,10]},
      AST:{type:1,en:'AST',china:'总胆红素',unit:'*10^9个/L',range:[4,10]},
    }
  }

  const [form,setForm] =useState({
    bloodRoutine:{
      WBC:'',
      HB:'',
    },
    renalFunction:{
      ALT:'',
      AST:''
    }
  })

  return (
    <>
      <Tabs
        value={tabValue}
        onChange={(value) => {
          setTabValue(value)
        }}
      >
        <Tabs.TabPane title="血常规">
          {Object.keys(form.bloodRoutine).map(item=> <InputChart 
            checkName ="bloodRoutine"
            initData={form.bloodRoutine[item]}
            onchange={(value)=>setForm({...form,bloodRoutine:{...form.bloodRoutine,[item]:value}})}
            configData={itemConfig.bloodRoutine[item]} 
           />)}
        
        </Tabs.TabPane>
        <Tabs.TabPane title="肝肾功">
          {Object.keys(form.renalFunction).map(item=> <InputChart 
            checkName ="renalFunction"
            initData={form.renalFunction[item]}
            onchange={(value)=>setForm({...form,renalFunction:{...form.renalFunction,[item]:value}})}
            configData={itemConfig.renalFunction[item]} 
           />)}
        </Tabs.TabPane>
        <Tabs.TabPane title="百亿补贴">百亿补贴</Tabs.TabPane>
        <Tabs.TabPane title="今日聚超值">今日聚超值</Tabs.TabPane>
        <Tabs.TabPane title="真好真便宜">真好真便宜</Tabs.TabPane>
      </Tabs>

      <Chart  />




    <Button onClick={
      ()=>{
        // Object.keys(form.bloodRoutine).map(item=>{
        //   // console.log(itemConfig.bloodRoutine[item])
        // })
        console.log(form)

        console.log(currentChartData)
      }
     }>console</Button>

    </>
  )
}
export default Checklist
