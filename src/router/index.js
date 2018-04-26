import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//路由跳转的组件，要提前注入
import PageOne from '../components/PageOne.vue';//【地方一】
import PageTwo from '../components/PageTwo.vue';

//路由配置
const router = new VueRouter({
    routes: [{
        path: '/',//【地方二】
        redirect: 'PageOneLink'
    },
    {
        path: '/PageOneLink',//【地方三】
        component: PageOne
    },
    {
        path: '/PageTwoLink',//【地方四】
        component: PageTwo
    }
    ]
});

export default router;
