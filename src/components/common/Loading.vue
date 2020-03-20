<template>
  <div class="group_message" v-if="attribute.result">
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
.group_message {
  margin-top: 10px;
}

.group_message .text_message {
  font-size: 14px;
}
</style>
