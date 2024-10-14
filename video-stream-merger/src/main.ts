import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)

// SRS相关地址
app.config.globalProperties.$srsServerAPIURL = 'http://192.168.101.99:1985/';
app.config.globalProperties.$srsServerRTCURL = 'webrtc://192.168.101.99:8085/live/';
app.config.globalProperties.$srsServerFlvURL = 'http://192.168.101.99:8085/live/';
app.mount('#app')
