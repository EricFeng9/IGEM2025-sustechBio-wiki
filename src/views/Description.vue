<template>
  <div class="description-page">
    <!-- 页面内容容器 -->
    <div class="content-container">
      <h1 class="page-title">Description</h1>
      
      <!-- 项目介绍部分 -->
      <section class="section">
        <h2 class="section-title">项目概述</h2>
        <div class="section-content">
          <p>
            MINERAL项目旨在通过合成生物学技术，开发一种新型生物传感系统，用于检测和提取环境中的矿物质，特别是镍等重金属。
            通过设计特定的生物传感器和代谢路径，我们的系统能够对特定矿物质做出响应，并触发下游的代谢过程。
          </p>
          
          <p>
            项目背景源于对环境污染和资源可持续利用的关注。随着工业发展，重金属污染已成为全球性环境问题，
            同时这些金属也是宝贵的资源。我们的项目旨在解决这一双重挑战。
          </p>
        </div>
      </section>
      
      <!-- 项目目标部分 -->
      <section class="section">
        <h2 class="section-title">项目目标</h2>
        <div class="section-content">
          <ul class="goals-list">
            <li>开发对镍等重金属高度敏感的生物传感器</li>
            <li>构建能够从环境中提取重金属的微生物系统</li>
            <li>设计安全、高效的金属回收过程</li>
            <li>提供一种环保、可持续的重金属治理方案</li>
          </ul>
        </div>
      </section>
      
      <!-- 创新点部分 -->
      <section class="section">
        <h2 class="section-title">创新点</h2>
        <div class="section-content">
          <p>
            与传统的重金属处理方法相比，我们的生物传感和提取系统具有以下创新点：
          </p>
          
          <div class="innovation-cards">
            <div class="card">
              <h3>高灵敏度检测</h3>
              <p>利用合成生物学设计的传感系统，能够检测极低浓度的目标金属离子</p>
            </div>
            
            <div class="card">
              <h3>选择性提取</h3>
              <p>针对特定金属设计的代谢路径，实现高选择性金属提取</p>
            </div>
            
            <div class="card">
              <h3>环境友好</h3>
              <p>整个过程无需添加化学试剂，减少二次污染</p>
            </div>
            
            <div class="card">
              <h3>可扩展性</h3>
              <p>模块化设计使系统可应用于多种重金属的检测和提取</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Description.vue 组件
// 这个组件展示项目的详细描述信息，包括项目概述、目标和创新点
// 暂时不需要额外的脚本逻辑，这是一个静态展示页面
</script>

<style scoped>
/* 页面整体样式 */
.description-page {
  padding-top: 80px; /* 为固定导航栏留出空间 */
  min-height: 100vh;
  background-color: #f9f4e8; /* 保持与主页相同的背景色 */
}

/* 内容容器样式 */
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* 页面标题样式 */
.page-title {
  font-size: 42px;
  color: #8b4513; /* 保持与主题一致的棕色 */
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 15px;
  border-bottom: 2px solid #c69c6d;
}

/* 章节样式 */
.section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 32px;
  color: #8b4513;
  margin-bottom: 20px;
}

.section-content {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

.section-content p {
  margin-bottom: 20px;
}

/* 目标列表样式 */
.goals-list {
  padding-left: 20px;
}

.goals-list li {
  margin-bottom: 10px;
  position: relative;
  padding-left: 15px;
}

.goals-list li::before {
  content: "•";
  color: #c69c6d;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* 创新点卡片样式 */
.innovation-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.card {
  flex: 1 1 calc(50% - 20px);
  min-width: 250px;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card h3 {
  color: #8b4513;
  margin-bottom: 10px;
  font-size: 20px;
}

.card p {
  color: #666;
  font-size: 15px;
  line-height: 1.5;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .content-container {
    padding: 20px;
  }
  
  .page-title {
    font-size: 32px;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .card {
    flex: 1 1 100%;
  }
}
</style> 