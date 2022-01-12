import Vue from 'vue'
import App from './App.vue'

//产品的提示信息（开发时一般为否，发布时可以改成true）

Vue.config.productionTip = false

//.$mount('#app')就是直接挂载el没有区别

new Vue({
  render: h => h(App),
}).$mount('#app');
