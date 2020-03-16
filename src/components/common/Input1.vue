<template>
  <div class="group_field">
    <label :for="data.label" :class="`label_${data.className}`">{{ data.text }}</label>

    <span class="field_global">
      <input :type="data.type" :name="data.name" :id="data.label" :class="`field_${data.className}`" @input="$emit('input', $event.target.value)" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
