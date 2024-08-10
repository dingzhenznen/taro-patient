import request from "/src/utils/request";

import { post ,testPost} from "/src/utils/request";

import Taro from '@tarojs/taro'

export const getDetail= async(data)=>{

 // return await request({url:'/handleFetch',method:'POST',data});

 return await testPost('/handleFetch',data)

}

export const patientList = async (data) => {
  
    //return await request({ url: '/mini/patient/list', data, method: 'POST' })
     return request.post('/mini/patient/list', data)
     .then((res)=>{
      
      return res
     }).catch((err)=>{
      Taro.showToast({title:'网络有误',icon:'error',duration:1000})
      console.log(err)
      return err
     })
}

export const getPatient = async (data) => {
  //return await request({url: '/mini/patient/getPatient',data,method: 'POST'})
  return await post('/mini/patient/getPatient',data)
}