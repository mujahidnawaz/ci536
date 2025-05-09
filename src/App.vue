<script setup>
</script>

<template>
  <div class="app-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <h1 class="logo">GameHub</h1>
      </div>
      <ul class="menu-list">
        <li>
          <router-link to="/">
            <font-awesome-icon :icon="['fas', 'home']" />
            <span class="ms-2">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/cart">
            <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            <span class="ms-2">Cart</span>
          </router-link>
        </li>
        <!-- Example additional link -->
        <li>
          <router-link to="/about">
            <font-awesome-icon :icon="['fas', 'info-circle']" />
            <span class="ms-2">About</span>
          </router-link>
        </li>
      </ul>
    </aside>

    <!-- Main content area -->
    <div class="main-content">
      <nav class="top-nav">
        <span class="nav-title">Welcome to Game Marketplace</span>
      </nav>

      <div class="content-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.sidebar {
  width: 240px;
  background-color: #2C3E50;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.sidebar-header {
  margin-bottom: 30px;
}

.logo {
  font-size: 1.8rem;
  color: #0190B2;
  margin: 0;
}

.menu-list {
  list-style: none;
  padding: 0;
}

.menu-list li {
  margin-bottom: 15px;
}

.menu-list a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.menu-list a:hover {
  background-color: #0190B2;
}

.menu-list a.router-link-exact-active {
  background-color: #0190B2;
  font-weight: bold;
}

.menu-list font-awesome-icon {
  margin-right: 10px;
}

.main-content {
  flex: 1;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: column;
}

.top-nav {
  background-color: #0190B2;
  padding: 15px 20px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.content-wrapper {
  flex: 1;
  padding: 30px;
  background-color: white;
  margin: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow-y: auto;
}

.content-wrapper::-webkit-scrollbar {
  width: 8px;
}

.content-wrapper::-webkit-scrollbar-thumb {
  background-color: #C0392B;
  border-radius: 4px;
}
</style>
