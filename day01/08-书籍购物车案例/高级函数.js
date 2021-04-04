// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程(第一公民：对象)/函数式编程(第一公民：函数)
// filter/map/reduce
// filter中的回调函数有一个要求：必须返回boolean,true:函数内部会自动将这次回调的n加入到新的数组
//                                          false:函数内部会过滤掉这次的n
const nums = [10, 20, 111, 222, 444, 40, 50]

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total)

let total = nums.filter(function (n) {
    return n < 100
}).map(function (n) {
    return n * 2
}).reduce(function (preValue, n) {
    return preValue + n
}, 0)
console.log(total);

// 1.filter的函数使用

let newNums = nums.filter(function (n) {
    return n < 100
})
console.log(newNums);
// 2.map函数使用
// 
let new2Nums = newNums.map(function (n) {
    return n * 2
})

console.log(new2Nums);
// 3.reduce函数的使用过
// reduce 对数组中的所有内容进行汇总
let new3Nums = new2Nums(function (preValue, n) {
    return preValue + n
}, 0)

console.log(new3Nums);