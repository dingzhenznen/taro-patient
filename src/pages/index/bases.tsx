import React, { useState } from 'react'

import { View } from '@tarojs/components'
import { Cell ,Form,
  Button,
  Input,
  TextArea,
  Radio,
  Checkbox,
  Picker,
  DatePicker
} from "@nutui/nutui-react-taro"
import { User ,ArrowRight} from '@nutui/icons-react-taro'
import './index.scss'
import Taro from '@tarojs/taro'

import MyDate from './myDate'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}

function Bases() {


  interface userInfo{
    name?:string
    mobile?:string
    date?:string
    city?:string
  }

  const [originData, setData] = useState<userInfo>({date:''})

  const [username,setUsername] = useState('')
  const handleSetdata =(dataobj:any)=>{
    console.log(dataobj)
    setData(dataobj)
    console.log(222,originData)

  }

  const date= new Date()
  const defaultDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`

useState(()=>{
  originData.date=defaultDate;
  originData.city='';
})

  // console.log(data.date)

  const pickerOptions = [
    { value: 4, text: 'BeiJing' },
    { value: 1, text: 'NanJing' },
    { value: 2, text: 'WuXi' },
    { value: 8, text: 'DaQing' },
    { value: 9, text: 'SuiHua' },
    { value: 10, text: 'WeiFang' },
    { value: 12, text: 'ShiJiaZhuang' },
  ]

  const [show1, setShow1] = useState(false)


  const submitSucceed = (values: any) => {
    console.log(originData)
    console.log(values)
    return

    Taro.redirectTo({"url":"/pages/follow/follow"})
    
  }

  return (
  
      <View className="bases">
      
        <Cell
          title={
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <User />
              <span style={{ marginLeft: '5px' }}>我是标题</span>
            </div>
          }
           extra=""
        />

      <Form
        labelPosition="left"
        onFinish={(values) => submitSucceed(values)}
        footer={
          <>
            <Button formType="submit" block type="primary">
              提交
            </Button>
          </>
        }
      >
        <Form.Item
          required
          label="姓名"
          name="username"
          rules={[
            { max: 5, message: '姓名不能超过5个字' },
            { required: true, message: '请输入字段姓名' },
          ]}
          initialValue={originData.name}
        >
          <Input
            className="nut-input-text"
            placeholder="请输入字段姓名"
            type="text"  
            value={username}
            onChange={(v)=>setUsername(v)}
          />
        </Form.Item>
        {username?'ddd':''}
        <Form.Item
          label="电话"
          name="mobile"
          rules={[
            { max: 15, message: '手机号能超过11个字' },
            { required: true, message: '请输入手机号' },
          ]}
          initialValue={originData.mobile}
        >
          <TextArea value={originData.mobile} placeholder="请输入手机号" maxLength={100} />
        </Form.Item>

        <Form.Item
          label="日期"
          name="date"
          rules={[
          ]}      
        >

          <MyDate dateTime={originData.date} onchange={handleSetdata} />
        </Form.Item>

        <Form.Item
          label="日期2"
          name="date2"
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(event, ref: any) => {
            //]ref.open()
            setShow1(true)
          }}
        >

<Cell style={{marginTop:"-10px"}}
        align="flex-start"
        title={"dateTime"}
      
        description={

          <DatePicker
            title="日期选择"
            visible={show1}
            pickerProps={{
              popupProps: { zIndex: 1220 },
            }}
          
            showChinese
            onCancel={() => setShow1(false)}
            onConfirm={(options, values) => {
              setShow1(false)
             
              
            }}
          />
        }
      />

        </Form.Item>

        <Form.Item
          label="冠心病"
          name="guanxin"
          rules={[
          ]}      
        >
            <Radio.Group defaultValue="" direction="horizontal">
              <Radio value="1">选项1</Radio>
              <Radio  value="2">
                选项2
              </Radio>
              <Radio value="3">选项3</Radio>
            </Radio.Group>
        
        </Form.Item>

        <Form.Item
          label="xuanxiang"
          name="xuanxiang"
          rules={[
          ]}      
        >
          <Checkbox.Group
            direction="horizontal"
          >
            <Checkbox value="1">选项</Checkbox>
            <Checkbox value="2">选项</Checkbox>
            <Checkbox value="3">选项</Checkbox>
            <Checkbox value="4">选项</Checkbox>
          </Checkbox.Group>
        
        </Form.Item>


        <Form.Item
          label="Picker"
          name="picker"
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(event, ref: any) => {

            console.log(ref)
            ref.open()
          }}
        >

     

          <Picker options={[pickerOptions]}>
            {(value: any) => {
              console.log('ddd',value)
              return (
                <Cell
                  style={{
                    padding: 0,
                    '--nutui-cell-divider-border-bottom': '0',
                  }}
                  className="nutui-cell--clickable"
                  title={
                    value.length
                      ? pickerOptions.filter((po) => po.value === value[0])[0]
                          ?.text
                      : 'Please select'
                  }
                  extra={<ArrowRight />}
                  align="center"
                >
                </Cell>
              )
            }}
          </Picker>

     

        
        
        </Form.Item>
       
      </Form>
       
    
       
      </View>
  
  )
}

export default Bases