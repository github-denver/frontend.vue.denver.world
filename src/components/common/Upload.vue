<template>
  <div :class="`box_${data.className}`">
    <label :for="data.className" :class="`label_${data.className}`">
      <span :class="['ico_global', `ico_${data.className}`]">{{
        data.text
      }}</span>
    </label>

    <input
      :type="data.type"
      :name="data.className"
      :id="data.className"
      :class="`field_${data.className}`"
      :ref="data.className"
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
