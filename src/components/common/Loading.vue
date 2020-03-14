<template>
  <div v-if="attribute.result">
    <slot name="loading"></slot>
  </div>
</template>

<script>
export default {
  name: 'Loading',
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
