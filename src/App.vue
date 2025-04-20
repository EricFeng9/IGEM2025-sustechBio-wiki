<script setup>
// 导入必要的组件
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="app">
    <!-- 导航栏 - 在所有页面中共享 -->
    <NavBar />
    
    <!-- 路由视图 - 根据当前路由动态显示不同的页面内容 -->
    <router-view></router-view>
    
    <!-- 页脚 - 在所有页面中共享 -->
    <FooterSection />
  </div>
</template>

<style>
/* 全局App样式 */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 全局共享样式 */
.section-title {
  font-size: 32px;
  color: #8b4513;
  margin-bottom: 20px;
  text-align: center;
}

.section-content {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.project-section {
  background-color: #f9f4e8;
  padding: 60px 0;
}

.tech-section {
  background-color: #fff;
  padding: 60px 0;
}

.content-features, .tech-process {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
}

.feature, .process-step {
  flex-basis: calc(33.33% - 20px);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.tech-section .process-step {
  background-color: #f9f4e8;
}

.feature:hover, .process-step:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.feature h3, .process-step h3 {
  color: #8b4513;
  margin-bottom: 10px;
  font-size: 20px;
}

.feature p, .process-step p {
  color: #666;
  font-size: 15px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .content-features, .tech-process {
    flex-direction: column;
  }
  
  .feature, .process-step {
    flex-basis: 100%;
  }
}
</style>

