<script setup>
// 导入组件
import HeroBanner from '../components/HeroBanner.vue'
</script>

<template>
  <main class="home-page">
    <!-- 英雄大图区域 -->
    <HeroBanner />
    
    <!-- 项目介绍部分 -->
    <section id="project-section" class="section project-section">
      <div class="container">
        <h2 class="section-title">项目介绍</h2>
        <p class="section-content">
          我们的MINERAL项目旨在通过合成生物学手段，开发一种新型生物传感系统，用于检测和提取环境中的矿物质。
          通过设计特定的生物传感器和代谢路径，我们的系统能够对特定矿物质做出响应，并触发下游的代谢过程。
        </p>
        <div class="content-features">
          <div class="feature">
            <h3>环境友好</h3>
            <p>我们的系统利用生物技术，避免了传统采矿过程中的环境污染问题。</p>
          </div>
          <div class="feature">
            <h3>高效检测</h3>
            <p>通过精心设计的生物传感器，可以高效、准确地检测出环境中的目标矿物质。</p>
          </div>
          <div class="feature">
            <h3>可持续性</h3>
            <p>该技术为矿物资源的可持续利用提供了新思路，有助于解决资源枯竭问题。</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 技术部分 -->
    <section id="technology-section" class="section tech-section">
      <div class="container">
        <h2 class="section-title">技术原理</h2>
        <p class="section-content">
          MINERAL项目基于最新的合成生物学技术，通过以下几个关键步骤来实现我们的目标：
        </p>
        <div class="tech-process">
          <div class="process-step">
            <h3>步骤 1: 生物传感</h3>
            <p>设计特异性蛋白质，能够与目标矿物质分子结合并产生信号。</p>
          </div>
          <div class="process-step">
            <h3>步骤 2: 信号转导</h3>
            <p>将检测信号转化为基因表达调控信号，激活特定的代谢通路。</p>
          </div>
          <div class="process-step">
            <h3>步骤 3: 矿物提取</h3>
            <p>通过激活的代谢通路，合成能够提取或富集目标矿物质的蛋白质。</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* 首页特定样式 */
.home-page {
  flex: 1;
  margin-top: 60px; /* 为固定导航栏留出空间 */
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 其他样式都在App.vue中全局定义，这里只需添加特定于首页的样式 */
</style> 