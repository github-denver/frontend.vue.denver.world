<template>
  <div v-bind:class="`box_${data.className}`">
    <label v-bind:for="data.className" v-bind:class="`label_${data.className}`">
      <span v-bind:class="['ico_global', `ico_${data.className}`]">{{ data.text }}</span>
    </label>

    <input
      v-bind:type="data.type"
      v-bind:name="data.className"
      v-bind:id="data.className"
      v-bind:class="`field_${data.className}`"
      v-bind:ref="data.className"
    />
  </div>
</template>

<script>
export default {
  name: 'Upload',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
