<template>
  <button
    :type="data.type"
    :class="data.className"
    @click="data.event && data.event()"
  >
    {{ data.text }}
  </button>
</template>

<script>
export default {
  name: 'Rectangle',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
