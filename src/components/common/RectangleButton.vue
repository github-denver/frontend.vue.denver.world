<template>
  <button :type="attribute.type" :class="attribute.className" @click="attribute.event && attribute.event()">
    {{ attribute.text }}
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
