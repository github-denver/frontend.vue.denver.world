<template>
  <div class="grp_loading" v-if="attribute.result">
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

<style scoped></style>
