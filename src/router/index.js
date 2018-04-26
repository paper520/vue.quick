import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//路由跳转的组件，要提前注入
import PageOne from '../components/PageOne.vue';
import PageTwo from '../components/PageTwo.vue';

//路由配置
const router = new VueRouter({
    routes: [{
        path: '/',//dsfs
        redirect: 'PageOneLink'
    },
    {
        path: '/PageOneLink',
        component: PageOne
    },
    {
        path: '/PageTwoLink',
        component: PageTwo
    }
    ]
});

export default router;
