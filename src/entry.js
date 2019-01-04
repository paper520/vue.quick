import Vue from 'vue';
import App from './App.vue';

// 1.引入刚刚配置的路由（router/index.js）
import routerObj from './router';

import clay from 'clay-core';

//根对象
var vm = new Vue({
    //挂载点
    el: clay('#root')[0],
    //2.使用刚刚的路由配置
    router: routerObj,
    //启动组件
    render: function (createElement) {
        return createElement(App);
    },
    //下面是Vue对象的几种状态
    beforeCreate: function () {
        console.debug('Vue对象目前状态：beforeCreate');
    },
    created: function () {
        console.debug('Vue对象目前状态：created');
    },
    beforeMount: function () {
        console.debug('Vue对象目前状态：beforeMount');
    },
    mounted: function () {
        console.debug('Vue对象目前状态：mounted');
    },
    beforeUpdate: function () {
        console.debug('Vue对象目前状态：beforeUpdate');
    },
    updated: function () {
        console.debug('Vue对象目前状态：updated');
    },
    beforeDestroy: function () {
        console.debug('Vue对象目前状态：beforeDestroy');
    },
    destroyed: function () {
        console.debug('Vue对象目前状态：destroyed');
    }
});
