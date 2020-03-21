<template>
  <button :type="attribute.type" :class="['button_global2', attribute.className]" v-on="attribute.event ? { click: attribute.event } : null">
    <slot>{{ attribute.text }}</slot>
  </button>
</template>

<script>
export default {
  name: 'RectangleButton',
  props: {
    attribute: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.button_global2 {
  width: 100%;
  padding: 13px 0;
  border: 1px solid #ff4646;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  background-color: transparent;
  text-align: center;
}

.button_action {
  color: #fff;
  border-color: transparent;
  background-color: #ff4646;
}

.button_delete {
  color: #fff;
  border-color: transparent;
  background-color: rgba(88, 100, 125, 1);
}

.button_search {
  color: #fff;
  border-color: transparent;
  background-color: rgba(88, 100, 125, 1);
}
</style>
