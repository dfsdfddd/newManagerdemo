// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import './element-variables.scss'
import App from './App'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import * as filters from './utils/filters'
Vue.config.productionTip = false

Vue.prototype.moment = require('moment')
Vue.use(ElementUI, {
  size: 'medium'
})

// 注册全局filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: {
    // 空的实例放到根组件下，所有的子组件都能调用
    Bus: new Vue()
  }
})
