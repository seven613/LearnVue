import Vue from "vue";
import App from "./App.vue";
// import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
/*        1.axios的基本使用            */
// 发送请求，默认为get
// axios({
//   url: "http://123.207.32.32:8000/home/multidata",
//   method: "get", // post,put,delet
// }).then((res) => {
//   console.log(res);
// });
// //请求得另一张形式，都是同样的功能
// // axios.get(url)

// axios({
//   url: "http://123.207.32.32:8000/home/data",
//   params: {
//     type: "pop",
//     page: 1,
//   },
// }).then((res) => {
//   console.log(res);
// });

/*     2.并发请求,使用all方法，里面传入请求数组，最后then处理       */
// axios
//   .all([
//     axios({
//       url: "http://123.207.32.32:8000/home/multidata",
//     }),
//     axios({
//       url: "http://123.207.32.32:8000/home/data",
//       params: {
//         type: "sell",
//         page: 4,
//       },
//     }),
//   ])
//   .then((res) => {
// // 获取的是两个请求的结果
//     console.log(res);
//   });

// axios
//   .all([
//     axios({
//       url: "http://123.207.32.32:8000/home/multidata",
//     }),
//     axios({
//       url: "http://123.207.32.32:8000/home/data",
//       params: {
//         type: "sell",
//         page: 4,
//       },
//     }),
//   ])
//   .then(axios.spread((res1, res2) => {
//     // axios.spread将两个请求的结果分开
//     console.log(res1);
//     console.log(res2);
//   }));
/*              对象的解构、数组的解构               */
// 对象的解构
// const obj = {
//   name: 'zhangsan',
//   age: 13
// }
// const {
//   name,
//   age
// } = obj;

// // 数组的解构
// const names=['why','koby','james']
// // 可以如下写,获取数组的元素
// const name1=names[0]
// const name2=names[1]
// const name3=names[2]
// // 结构的方式
// const [name1,name2,name3]=names;

/********************* axios 的全局配置 ********************* */
// axios.defaults.baseURL = "http://123.207.32.32:8000";// baseURL 区分大小写，不要写错了
// axios.defaults.timeout = 5000;//5秒超时

// console.log(axios.defaults)
// axios
//   .all([
//     axios({
//       url: "/home/multidata",
//     }),
//     axios({

//       url: "/home/data",
//       params: {
//         type: "sell",
//         page: 4,
//       },
//     }),
//   ])
//   .then(axios.spread((res1, res2) => {
//     // axios.spread将两个请求的结果分开
//     console.log(res1);
//     console.log(res2);
//   }));




/*        4.创建对应的axios请求实例       */

// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })

// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// })

// instance1({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:4
//   }
// }).then(res=>{
//   console.log(res);
// })

/* 5.封装request模块    */

import {request} from './network/request'

// (1)第一种封装方案引用
// request({
//   url: 'home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err);
// })

// (2)第二种封装方案
// request({
//   baseConfig:{

//   },
//   success:function(){

//   },
//   failure:function(){

//   }
// })
// （3）第三种封装方案
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err => {
  console.log(err);
})