<template>
  <button :type="attribute.type" :class="['btn_global', attribute.className]" v-on="attribute.event ? { click: attribute.event } : null">
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

<style>
.btn_global {
  display: inline-block;
  border: 0 none;
  font-family: sans-serif;
  line-height: 1;
  background-color: transparent;
  text-align: center;
}

.btn_hamburger {
  position: absolute;
  top: 10px;
  left: 10px;
}

.btn_close {
  position: absolute;
  top: 20px;
  right: 10px;
}
</style>
