// 导入全局CSS样式
import './assets/main.css'

// 导入Vue的createApp函数，用于创建Vue应用实例
import { createApp } from 'vue'
// 导入根组件App
import App from './App.vue'
// 导入路由配置
import router from './router'

// 创建Vue应用实例
const app = createApp(App)

// 使用路由插件
app.use(router)

// 挂载应用到id为'app'的DOM元素上
app.mount('#app')
