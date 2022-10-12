import Vue from 'vue' // 由于这个地方只是阉割版的没有模板编译器所以实例中通过render函数帮助渲染
// 然后的话这个地方不涉及到this所以用箭头函数
// 如果说这里引入的vue是完整版的即vue/dist/vue.js的话那么 vue实例里可以用模板渲染
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuex from "vuex";
import store from "./store/index";

Vue.use(VueRouter);
Vue.use(ElementUI);



Vue.config.productionTip = false;


new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    },
})