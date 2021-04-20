/* 封装axios请求 */

import axios from 'axios'


// 4.第四种方案
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 1.请求拦截器，第一个参数是配置信息，拦截之后必须回传，否则config就丢失了
    // 作用：(1)拦截config中一些不符合服务器要求的信息
    //      (2)请求加载大量数据时，需要进度条显示的时候，可以先显示出来，响应成功后则隐藏图标
    //      (3)登录信息中含有必要的token时候，拦截是否存在，不存在直接让其跳转到登录页面
    // instance.interceptors.request.use(config => {
    //     // console.log(config);
    //     return config
    // }, error => {
    //     console.log(error)
    // })
    // 2.响应拦截
    instance.interceptors.response.use(res=>{
        console.log(res.data);
        return res.data
    },err =>{
        console.log(err);
    })

    // instance 本身也是返回then catch
    return instance(config)
}

// 3.第三种封装方案
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })

//         instance(config)
//         .then(res => {
//             resolve(res)
//         })
//         .catch(err => {
//             reject(err)
//         })
//     })
// }



// 2.第二种封装方案
// export function request(config){ //参数：config，请求的参数
//         //1.创建axios实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })
//         // 2.发送网络请求
//         instance(config)
//             .then(res => {
//                 success(res)
//             })
//             .catch(error => {
//                 failure(error)
//             })
//     }


// 1.第一种封装方案
// export function request(config, success, failure) { //参数：config，请求的参数,success 将成功结果回调出去，failure将失败信息回调出去
//     //1.创建axios实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     // 2.发送网络请求
//     instance(config)
//     .then(res => {
//         success(res) 
//     })
//     .catch(error => {
//         failure(error)
//     })
// }