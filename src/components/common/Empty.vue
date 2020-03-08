<template>
  <div class="error_global" v-if="data.result">
    <p class="text_error">Empty: {{ data.message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Empty',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
