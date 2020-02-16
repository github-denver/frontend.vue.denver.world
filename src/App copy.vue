<template>
  <div id="app">
    <!-- <app-header /> -->
    <router-view name="header" />
    <router-view v-bind:key="$route.fullPath" />
    <!-- <router-view name="footer" /> -->
  </div>
</template>

<script>
// import AppHeader from '@/components/AppHeader'

export default {
  name: 'App'
  // components: { AppHeader },
}
</script>

<style>
/* @import 'http://localhost:3000/css/ui.css'; */
</style>
