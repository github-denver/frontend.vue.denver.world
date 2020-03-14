<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Subject'
}
</script>

<style scoped>
span {
  display: block;
  overflow: hidden;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
