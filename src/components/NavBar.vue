<script setup>
// 定义导航菜单项和子菜单
const navItems = [
  { 
    name: 'Project', 
    path: '/project',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Contribution', path: '/contribution' },
      { name: 'Description', path: '/description' },
      { name: 'Design', path: '/design' },
      { name: 'Engineering', path: '/engineering' },
      { name: 'Implementation', path: '/implementation' },
      { name: 'Notebook', path: '/notebook' },
      { name: 'Results', path: '/results' }
    ]
  },
  { 
    name: 'Technology', 
    path: '/technology', 
    hasDropdown: true,
    dropdownItems: [
      { name: 'Experiments', path: '/experiments' },
      { name: 'Measurement', path: '/measurement' },
      { name: 'Improved Parts', path: '/improved-parts' },
      { name: 'Part Collection', path: '/part-collection' },
      { name: 'Parts List', path: '/parts-list' },
      { name: 'Safety', path: '/safety' },
      { name: 'Software', path: '/software' },
      { name: 'Hardware', path: '/hardware' }
    ]
  },
  { 
    name: 'Community', 
    path: '/community', 
    hasDropdown: true,
    dropdownItems: [
      { name: 'Education', path: '/education' },
      { name: 'Entrepreneurship', path: '/entrepreneurship' },
      { name: 'Inclusivity', path: '/inclusivity' },
      { name: 'Integrated HP', path: '/integrated-hp' },
      { name: 'Presentation', path: '/presentation' },
      { name: 'Promotion Video', path: '/promotion-video' },
      { name: 'Sustainable', path: '/sustainable' },
      { name: 'Wiki @gitlab', path: '/wiki-gitlab' }
    ]
  },
  { 
    name: 'Team', 
    path: '/team', 
    hasDropdown: true,
    dropdownItems: [
      { name: 'Attributions', path: '/attributions' },
      { name: 'Collaborations', path: '/collaborations' },
      { name: 'Heritage', path: '/heritage' },
      { name: 'Members', path: '/members' }
    ]
  }
]
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo部分 -->
      <div class="logo">
        <router-link to="/">
          <span class="logo-text">SUSTech-BIO</span>
        </router-link>
      </div>
      
      <!-- 导航链接部分 -->
      <div class="nav-links">
        <ul>
          <li v-for="(item, index) in navItems" :key="index" class="nav-item">
            <router-link :to="item.path" class="nav-link">
              {{ item.name }}
              <span v-if="item.hasDropdown" class="dropdown-icon">▼</span>
            </router-link>
            
            <!-- 下拉菜单 -->
            <div v-if="item.hasDropdown && item.dropdownItems" class="dropdown-menu">
              <router-link 
                v-for="(dropdownItem, dropIndex) in item.dropdownItems" 
                :key="dropIndex"
                :to="dropdownItem.path" 
                class="dropdown-item"
              >
                {{ dropdownItem.name }}
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      
      <!-- 搜索框 -->
      <div class="search-container">
        <div class="search-box">
          <i class="search-icon">🔍</i>
          <span class="search-text">Search</span>
          <span class="search-shortcut">Ctrl K</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: #c69c6d;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 10px 0;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 100%;
  margin: 0 auto;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
}

.nav-links ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  font-size: 18px;
}

.dropdown-icon {
  font-size: 10px;
  margin-left: 5px;
}

/* 下拉菜单样式 */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #abd3ff;
  min-width: 200px;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity 0.3s, transform 0.3s, visibility 0.3s;
  z-index: 100;
  overflow: hidden;
}

/* 当鼠标悬停在导航项上时显示下拉菜单 */
.nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 12px 16px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s;
  font-size: 16px;
}

.dropdown-item:hover {
  background-color: #9ec6ff;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-box {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 5px 15px;
  border-radius: 20px;
}

.search-icon {
  margin-right: 8px;
}

.search-text {
  color: white;
}

.search-shortcut {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 10px;
  font-size: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .nav-links {
    width: 100%;
    margin-top: 10px;
  }
  
  .nav-links ul {
    flex-direction: column;
    width: 100%;
  }
  
  .dropdown-menu {
    position: static;
    width: 100%;
    box-shadow: none;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out, opacity 0.3s;
  }
  
  .nav-item:hover .dropdown-menu {
    opacity: 1;
    max-height: 500px;
  }
  
  .search-container {
    width: 100%;
    margin-top: 10px;
  }
  
  .search-box {
    width: 100%;
    justify-content: space-between;
  }
}

/* 添加router-link激活状态的样式 */
.router-link-active {
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

/* 下拉菜单项激活状态 */
.dropdown-item.router-link-active {
  background-color: #9ec6ff;
  font-weight: bold;
}
</style> 