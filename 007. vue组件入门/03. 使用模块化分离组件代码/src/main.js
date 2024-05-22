// 启动代码
import Vue from '../lib/vue.js';
import App from './App.js';

new Vue({
  render(h) {
    return h(App);
  },
}).$mount('#app');
