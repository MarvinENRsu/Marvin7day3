<template>
  <nav>
    <div class="topnav">
      <router-link to="/" class="router-link">ข้อ6,7</router-link> |
      <router-link to="/formLayout" class="router-link">ข้อ1,3</router-link>
      <router-link to="/testModal" class="router-link">ข้อ2</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style lang="sass">
@import './src/assets/main.sass'
</style>
