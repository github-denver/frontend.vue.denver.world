<template>
  <button v-bind:type="data.type" v-bind:class="data.className" v-on:click="data.event">
    <icon-square
      v-if="data.icon"
      v-bind:data="{
        className: data.icon,
        text: data.text
      }"
    />
  </button>
</template>

<script>
import IconSquare from '@/components/icon/Square'

export default {
  name: 'Square',
  components: { IconSquare },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
