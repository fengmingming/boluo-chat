import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uviewPlus, { setConfig } from 'uview-plus'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.use(uviewPlus)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif