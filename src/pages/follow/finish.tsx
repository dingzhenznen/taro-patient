import { View } from '@tarojs/components'
import { Button ,Space,Tag,Image,Collapse} from '@nutui/nutui-react-taro'

import Taro from '@tarojs/taro'
export default function Finish(){

  const toPath =(paths)=>{

    Taro.redirectTo({url:paths})

  }

  return  <View className="idCard">

    <Space>
     
      <Space><div>基本信息</div></Space>
      <Space><div>随访信息</div></Space>
      <Space><div onClick={()=>toPath("/pages/follow/checklist")}>检验单</div></Space>
    </Space>
    
  </View>
}