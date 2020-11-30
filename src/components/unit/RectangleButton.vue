<template>
  <button :type="attribute.type" :class="['btn_global2', attribute.className]" v-on="attribute.event ? { click: attribute.event } : null">
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
.btn_global2 {
  width: 100%;
  padding: 13px 0;
  border: 1px solid #0074c2;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  background-color: transparent;
  text-align: center;
}

.btn_action {
  color: #fff;
  border-color: transparent;
  background-color: #0074c2;
}

.btn_delete {
  color: #fff;
  border-color: transparent;
  background-color: #000;
}

.btn_search {
  color: #fff;
  border-color: transparent;
  background-color: #000;
}
</style>
