<!-- prettier-ignore -->
<template>
  <div id="app">
    <router-view name="header" />

    <router-view :key="$route.fullPath" />

    <router-view name="footer" />
  </div><!-- // app -->
</template>

<script>
export default {
  name: 'App'
}
</script>
