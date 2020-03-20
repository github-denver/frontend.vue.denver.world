<template>
  <div id="app">
    <router-view name="header" />

    <router-view :key="$route.fullPath" />

    <router-view name="footer" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: sans-serif;
  font-size: 10px;
  line-height: 1;
  color: #333;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style-type: none;
}

img {
  border: 0 none;
  vertical-align: top;
}

a,
a:active,
a:hover,
a:visited,
a:link {
  color: #333;
  text-decoration: none;
}

caption {
  overflow: hidden;
  width: 1px;
  font-size: 1px;
  line-height: 0;
  text-indent: -9999px;
}

.outer_cell {
  display: table;
  width: 100%;
  height: 100%;
}

.outer_cell .inner_cell {
  display: table-cell;
  vertical-align: middle;
}
</style>
