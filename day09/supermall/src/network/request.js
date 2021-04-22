/* 封装axios请求 */

import axios from 'axios'


// 4.第四种方案
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    // 1.请求拦截器，第一个参数是配置信息，拦截之后必须回传，否则config就丢失了
    // 作用：(1)拦截config中一些不符合服务器要求的信息
    //      (2)请求加载大量数据时，需要进度条显示的时候，可以先显示出来，响应成功后则隐藏图标
    //      (3)登录信息中含有必要的token时候，拦截是否存在，不存在直接让其跳转到登录页面
    instance.interceptors.request.use(config => {
        console.log(config);
        return config
    }, error => {
        console.log(error)
    })
    // 2.响应拦截
    instance.interceptors.response.use(res=>{
        // console.log(res.data);
        return res.data  // 必须返回 否则报错
    },err =>{
        // console.log(err);
        return err //必须返回 否则报错
    })

    // instance 本身也是返回then catch
    return instance(config)
}

