<template>
  <button :type="attribute.type" :class="['btn_g', attribute.className]" v-on="attribute.event ? { click: attribute.event } : null">
    <slot name="icon"></slot>
  </button>
</template>

<script>
import Icon from '@/components/unit/Icon'

export default {
  name: 'SquareButton',
  props: {
    attribute: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
