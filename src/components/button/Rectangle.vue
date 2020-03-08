<template>
  <button v-bind:type="data.type" v-bind:class="data.className" v-on:click="data.event && data.event()">
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
