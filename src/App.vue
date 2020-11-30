<template>
  <div id="app">
    <div class="inner_global">
      <router-view name="header" />

      <router-view :key="$route.fullPath" />

      <router-view name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/common.css';
</style>
