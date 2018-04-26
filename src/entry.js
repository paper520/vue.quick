import Vue from 'vue';
import App from './App.vue';

//根对象
var vm = new Vue({
    //挂载点
    el: '#root',
    //启动组件
    render: function (callback) {
        return callback(App);
    }
});