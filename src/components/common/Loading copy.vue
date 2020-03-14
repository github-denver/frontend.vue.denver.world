<template>
  <div>
    <div class="error_global" v-if="data.result">
      <p class="text_error">{{ data.message }}</p>
    </div>

    <div class="error_global" v-if="data.result">
      <p class="text_error">{{ data.message }}</p>
    </div>
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
