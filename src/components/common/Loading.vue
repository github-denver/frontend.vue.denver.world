<template>
  <div class="error_global" v-if="data.result">
    <p class="text_error">Loading: {{ data.message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
