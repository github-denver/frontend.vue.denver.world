<template>
  <upload-component>
    <label :for="attribute.className">
      <span :class="attribute.className">
        <slot name="text"></slot>
      </span>
    </label>

    <input type="file" :name="attribute.className" :id="attribute.className" :ref="attribute.className" />
  </upload-component>
</template>

<script>
export default {
  name: 'Upload',
  props: {
    attribute: {
      type: Object,
      required: true
    }
  }
}
</script>
