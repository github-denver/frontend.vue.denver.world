<template>
  <div id="app">
    <router-view name="header" />
    <router-view v-bind:key="$route.fullPath" />
    <router-view name="footer" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
