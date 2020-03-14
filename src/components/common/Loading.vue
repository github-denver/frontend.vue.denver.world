<template>
  <loading-component v-if="attribute.result">
    <slot name="loading"></slot>
  </loading-component>
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
