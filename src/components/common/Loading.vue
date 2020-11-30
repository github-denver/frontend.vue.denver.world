<template>
  <div class="grp_loading" v-if="attribute.result">
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

<style scoped></style>
