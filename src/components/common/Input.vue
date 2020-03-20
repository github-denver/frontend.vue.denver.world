<template>
  <fragment>
    <label v-if="attribute.title" :for="attribute.id" class="title">{{ attribute.title }}</label>
    <span class="group">
      <input
        :type="attribute.type"
        :name="attribute.keyword"
        :id="attribute.id"
        class="field"
        :ref="attribute.id"
        @input="$emit('input', $event.target.files[0])"
      />
    </span>
  </fragment>
</template>

<script>
export default {
  name: 'Input',
  props: {
    attribute: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
