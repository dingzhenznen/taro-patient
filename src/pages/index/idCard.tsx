import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Cell,Input ,Button} from "@nutui/nutui-react-taro"
import './index.scss'
import Taro, { useDidShow } from '@tarojs/taro'
import { getCurrentInstance } from '@tarojs/runtime'

function IdCard() {

  const [val, setVal] = useState('')

  const handleClick = async()=>{
    // const response = await fetch('https://p9s5xa.laf.run/handleFetch');
    // const result = await response.json()
    // console.log(result)

    // const res = await Taro.request({url:"https://p9s5xa.laf.run/handleFetch"})
    // console.log(res)
    Taro.redirectTo({url:"/pages/index/bases"})
  }


  const { router } = getCurrentInstance();
  console.log(router.params)
  return (
  
      <View className="idCard">

        <Cell.Group>
          <Cell title="Switch" align="center" extra={  
              <Input
                value={val}
                onChange={(val)=>setVal(val)}
                placeholder="请输入文本"
              />
          } />
        </Cell.Group>

        <Button onClick={handleClick} block style={{marginTop:"300px"}} type="success">
          submit
        </Button>
    
       
      </View>
  
  )
}

export default IdCard