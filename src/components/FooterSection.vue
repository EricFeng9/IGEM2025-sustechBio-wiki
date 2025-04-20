<script setup>
// 无需额外的脚本逻辑
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>SUSTech-BIO iGEM</h3>
        <p>南方科技大学 iGEM 团队</p>
        <p>© 2023-2024 All Rights Reserved</p>
      </div>
      
      <div class="footer-section">
        <h4>快速链接</h4>
        <ul>
          <li><a href="#project">项目</a></li>
          <li><a href="#technology">技术</a></li>
          <li><a href="#community">社区</a></li>
          <li><a href="#team">团队</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>联系我们</h4>
        <p>邮箱: igem@sustech.edu.cn</p>
        <p>地址: 广东省深圳市南山区学苑大道1088号南方科技大学</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #8b4513;
  color: white;
  padding: 40px 0;
  width: 100%;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
}

.footer-section h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.footer-section h4 {
  font-size: 18px;
  margin-bottom: 15px;
}

.footer-section p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.8);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: white;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }
  
  .footer-section {
    margin-bottom: 30px;
  }
}
</style> 