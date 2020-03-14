<template>
  <div v-if="attribute.result">
    <slot name="empty"></slot>
  </div>
</template>

<script>
export default {
  name: 'Empty',
  props: {
    attribute: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
div {
  margin-top: 10px;
}

p {
  font-size: 14px;
}
</style>
