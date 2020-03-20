<template>
  <div class="group_message" v-if="attribute.result">
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

<style>
.group_message {
  margin-top: 10px;
}

.group_message .text_message {
  font-size: 14px;
}
</style>
