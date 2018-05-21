import Vue from 'vue'
import App from './App.vue'
import imgshadowblur from './lib/index.js'
Vue.use(imgshadowblur)
new Vue({
  el: '#app',
  render: h => h(App)
})
