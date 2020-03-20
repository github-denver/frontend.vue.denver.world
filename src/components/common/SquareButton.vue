<template>
  <button :type="attribute.type" :class="['button_global', attribute.className]" v-on="attribute.event ? { click: attribute.event } : null">
    <slot name="icon"></slot>
  </button>
</template>

<script>
import Icon from '@/components/common/Icon'

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

<style>
.button_global {
  display: inline-block;
  border: 0 none;
  font-family: sans-serif;
  line-height: 1;
  background-color: transparent;
  text-align: center;
}

.button_hamburger {
  position: absolute;
  top: 10px;
  left: 10px;
}

.button_close {
  position: absolute;
  top: 20px;
  right: 10px;
}
</style>
