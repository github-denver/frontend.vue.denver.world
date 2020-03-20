<template>
  <div class="subject_global">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Subject'
}
</script>

<style scoped>
.subject_global {
  display: block;
  overflow: hidden;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
