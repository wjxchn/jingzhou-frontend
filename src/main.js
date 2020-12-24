// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

<<<<<<< HEAD

//var axios = require('axios')
//axios.defaults.baseURL = 'http://106.14.12.11:8443'

=======
//axios.defaults.baseURL = 'http://106.14.12.11:8443'
>>>>>>> 90722a7993c3ff96f7019595d84f4171e0a2e44f
Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
