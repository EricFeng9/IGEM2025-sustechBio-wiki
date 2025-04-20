// 导入Vue Router必要的函数
import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
// 注意：使用Vue Router的懒加载特性可以提高应用性能
// 只有当路由被访问时才会加载对应组件
const routes = [
  {
    // 路径为'/'的路由，对应网站首页
    path: '/',
    name: 'Home',
    // 重定向到项目页面
    redirect: '/project'
  },
  {
    // 项目相关路由
    path: '/project',
    name: 'Project',
    // 懒加载Home组件
    component: () => import('../views/Home.vue')
  },
  {
    // Description页面路由
    path: '/description',
    name: 'Description',
    // 懒加载Description组件
    component: () => import('../views/Description.vue')
  }
  // 可以根据需要添加更多路由
]

// 创建路由实例
const router = createRouter({
  // 使用HTML5 History模式，创建干净的URL（没有#）
  history: createWebHistory(),
  // 应用配置的路由
  routes
})

// 导出路由实例，将在main.js中使用
export default router 