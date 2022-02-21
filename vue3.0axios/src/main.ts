import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import hyRequest from './service'

createApp(App).use(store).use(router).mount('#app')

hyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独响应的response')
      return res
    }
  }
})
