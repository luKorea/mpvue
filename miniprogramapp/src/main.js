import Vue from 'vue'
import App from './App'
import Fly from 'flyio/dist/npm/wx'
import store from './store/store'

const fly = new Fly;

// 设置vue提示工具
Vue.config.productionTip = false;
// 将store实例挂载到Vue原型链上
Vue.prototype.$store = store;
Vue.prototype.$fly = fly;

// 声明当前组件类型
App.mpType = 'app';
// 生成应用实例
const app = new Vue(App);
// 挂载到整个应用
app.$mount();
