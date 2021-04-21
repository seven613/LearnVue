import Vue from 'vue'
import VueRouter from 'vue-router'



const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
// 1.安装插件

Vue.use(VueRouter)

// 2.创建路由对象
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home

    },

    {
        path: '/category',
        component: Category

    },
    {
        path: '/cart',
        component: Cart

    },
    {
        path: '/profile',
        component: Profile

    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

// 解决 组件双击报错

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function repalce(location) {
    return originalReplace.call(this, location).catch(err => err);
};



// 3.导出router
export default router