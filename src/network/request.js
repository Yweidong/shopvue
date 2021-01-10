import axios from "axios";
import {Message} from "element-ui";
import router from "../router";

export function request(config) {
    const instance = axios.create({
        baseURL : '',
        timeout : 5000
    })
    //接口响应前拦截器
    instance.interceptors.request.use(config => {
        if (window.sessionStorage.getItem('token')) {
          config.headers['Authorization'] = window.sessionStorage.getItem('token')
        }
        return config;
      },error => {
        console.log(error);
      }
    )

    //接口响应后拦截器
    instance.interceptors.response.use(success => {
      //业务逻辑错误
      if (success.status && success.status == 200) {
        if (success.data.code != 200) {
          Message.error({message:success.data.message})
          return;
        }
      }
      return success.data
    },error => {
      if (error.response.code == 404) {
        Message.error({message:'页面未找到'})
      } else if (error.response.code == 403) {
        Message.error({message: '权限不足，请联系管理员'})
      } else if (error.response.code == 401) {
        Message.error({message:'尚未登录，请登录'})
        router.replace("/Login")
      } else {
        if (error.response.data.message) {
          Message.error({message: error.response.data.message})
        } else {
          Message.error({message: '未知错误'})
        }
      }
      return;
    })
    return instance(config)


}
