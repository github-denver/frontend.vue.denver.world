<template>
  <button :type="attribute.type" :class="['btn_g btn_rectangle', attribute.className]" v-on="attribute.event ? { click: attribute.event } : null">
    <slot>{{ attribute.text }}</slot>
  </button>
</template>

<script>
export default {
  name: 'RectangleButton',
  props: {
    attribute: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
