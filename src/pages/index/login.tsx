import {  View } from '@tarojs/components'
import { Image,Button } from '@nutui/nutui-react-taro'

import Logo from "/src/pages/static/img/login.png"

import { Cell,Input } from '@nutui/nutui-react-taro'
import './index.scss'
import { useState } from 'react'


function Login(){

  const [mobile,setMobile] =useState('')

  const [code,setCode] =useState('')

  const sendCode =()=>{
    console.log(11)
  }

  return  <View className="idCard">

    <div className='header' style={{height:'280px',display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center'}}>

      <Image src={Logo}  width="80" height="80" />
      <div >患者管理平台</div>
     
    </div>

    <div className='body'>

      <div>手机号</div>

   

      <Input
        placeholder="请输入文本"
        value={mobile}
        onChange={(v) => {
          setMobile(v)
        }}
      />

      {mobile?<Cell
      title={'tst'}
      />:''}

      <Cell 
      style={{
        padding: 0,
        '--nutui-cell-divider-border-bottom': '0',
      }}
      align='center'
      title={ 
        <Input
          placeholder="请输入文本"
          onChange={(v) => {
            console.log('onChange', v)
          }}
        />
      }

      extra={<div onClick={sendCode}>获取验证码</div>}
      />

    </div>

  </View>

}
export default Login;