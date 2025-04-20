<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 定义缩放状态变量
const scale = ref(1);
const maxScale = 2; // 最大缩放比例

// 滚动事件处理函数 - 简化版本
function handleScroll() {
  // 获取滚动位置
  const scrollY = window.scrollY;
  
  // 设置滚动阈值，超过这个值达到最大缩放
  const maxScrollY = 500;
  
  // 计算当前应该的缩放值 (在1到maxScale之间)
  if (scrollY <= maxScrollY) {
    // 线性插值计算缩放值
    scale.value = 1 + (scrollY / maxScrollY) * (maxScale - 1);
  } else {
    // 滚动超过阈值，保持最大缩放
    scale.value = maxScale;
  }
  
  // 输出调试信息
  console.log('Scroll Y:', scrollY, 'Scale:', scale.value);
}

// 组件挂载时添加滚动监听
onMounted(() => {
  console.log('Component mounted, adding scroll listener');
  window.addEventListener('scroll', handleScroll);
  // 初始化
  handleScroll();
});

// 组件卸载时移除滚动监听
onUnmounted(() => {
  console.log('Component unmounted, removing scroll listener');
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="hero-banner">
    <div class="hero-content">
      <div class="hero-title">
        <!-- 使用计算出的缩放值动态设置style -->
        <h1 :style="{ transform: `scale(${scale})` }">INCLUSIVE</h1>
      </div>
    </div>
    <!-- 添加滚动指示器 -->
    <div class="scroll-indicator">
      <div class="scroll-text">向下滚动查看更多</div>
      <div class="scroll-arrow">↓</div>
    </div>
  </div>
</template>

<style scoped>
.hero-banner {
  width: 100%;
  height: 100vh;
  background: linear-gradient(165deg, #c69c6d 0%, #e0bd8f 50%, #c69c6d 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-banner::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 80%;
  background-color: #f0e0c0;
  border-radius: 50% / 40%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  padding: 20px;
}

.hero-title {
  overflow: visible;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-title h1 {
  font-size: 120px;
  font-weight: bold;
  color: #8b4513;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 10px;
  margin: 0;
  background: linear-gradient(45deg, #8b4513, #d2691e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform-origin: center center;
  transition: transform 0.1s ease-out;
  /* 确保元素可以超出父容器 */
  position: relative;
  z-index: 10;
}

/* 滚动指示器 */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 5;
  animation: bounce 2s infinite;
}

.scroll-text {
  color: #8b4513;
  font-size: 16px;
  margin-bottom: 10px;
}

.scroll-arrow {
  color: #8b4513;
  font-size: 24px;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-15px) translateX(-50%);
  }
  60% {
    transform: translateY(-7px) translateX(-50%);
  }
}

@media (max-width: 768px) {
  .hero-title h1 {
    font-size: 80px;
  }
}

@media (max-width: 480px) {
  .hero-title h1 {
    font-size: 60px;
  }
}
</style> 