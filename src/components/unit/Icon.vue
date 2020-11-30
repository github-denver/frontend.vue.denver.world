<template>
  <span :class="['ico_g', attribute.className]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    attribute: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
