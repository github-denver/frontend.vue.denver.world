<template>
  <div class="grp_message" v-if="attribute.result">
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

<style>
.grp_message {
  margin-top: 10px;
}

.grp_message .txt_message {
  font-size: 14px;
}
</style>
