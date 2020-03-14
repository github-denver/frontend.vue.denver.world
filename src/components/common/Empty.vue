<template>
  <empty-component v-if="attribute.result">
    <slot name="empty"></slot>
  </empty-component>
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
