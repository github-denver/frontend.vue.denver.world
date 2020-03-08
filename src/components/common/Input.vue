<template>
  <div class="group_field">
    <label v-bind:for="data.label" v-bind:class="`label_${data.className}`">{{ data.text }}</label>

    <span class="field_global">
      <input
        v-bind:type="data.type"
        v-bind:name="data.name"
        v-bind:id="data.label"
        v-bind:class="`field_${data.className}`"
        v-on:input="$emit('input', $event.target.value)"
      />
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
