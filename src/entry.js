import Vue from 'vue';
import App from './App.vue';

// 1.引入刚刚配置的路由（router/index.js）
import router from './router';

//根对象
var vm = new Vue({
    //挂载点
    el: '#root',
    //2.使用刚刚的路由配置
    router: router,
    //启动组件
    render: function (callback) {
        return callback(App);
    }
});
