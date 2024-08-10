import axios from "axios";
import Taro from '@tarojs/taro'
import { ApiResponseType } from "./types";

const request = axios.create({
    baseURL: "https://p9s5xa.laf.run"
});


// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log('response',response)
    return response.data;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export function post(url, data) {
    return new Promise((resolve, reject) => {
        request.post(url, data)
        .then(res => {
            console.log('postresponse',res)
          resolve(res);
        })
        .catch(err => {
          /* reject(err.data) */
          console.log('这是http.js页面报的错:' + err.data)

         Taro.showToast({title:'error',icon:"error",duration:2000})
        })
    });
  }

  export function testPost<T>(url, data):Promise<[any,any]> {
    return new Promise((resolve, reject) => {
        request.post(url, data)
        .then(res => {
            console.log('postresponse',res)
          resolve([res ,null]);
        })
        .catch(err => {

          resolve([null,err]);
          /* reject(err.data) */
        //   console.log('这是http.js页面报的错:' + err.data)

        //  Taro.showToast({title:'error',icon:"error",duration:2000})
        })
    });
  }


  // 明天加上泛型 判断非泛型返回的是否错误

export default request;