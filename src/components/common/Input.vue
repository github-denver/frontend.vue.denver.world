<template>
  <span :class="['group_field', attribute.className]">
    <label v-if="attribute.title" :for="attribute.id" class="label_local">{{ attribute.title }}</label>
    <span class="box_field">
      <input v-if="attribute.value" :type="attribute.type" :name="attribute.keyword" :id="attribute.id" :value="value" @change="onChange" class="field_local" />

      <input v-else :type="attribute.type" :name="attribute.keyword" :id="attribute.id" class="field_local" @input="$emit('input', $event.target.value)" />
    </span>
  </span>
</template>

<script>
export default {
  name: 'Input',
  props: {
    attribute: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      value: ''
    }
  },
  created() {
    this.value = this.attribute.value
    console.log('☆ created() → this.value: ', this.value)
  },
  methods: {
    onChange() {
      console.log('methods → updateValue → event.target.valu: ', event.target.value)

      this.value = event.target.value
      console.log('methods → updateValue → this.value: ', this.value)

      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style>
.group_field {
  display: inline-block;
  position: relative;
}

.group_field .label_local {
  font-size: 14px;
  font-weight: 700;
}

.group_field .box_field {
  display: block;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
}

.group_field .field_local {
  width: 100%;
  height: 38px;
  padding: 10px;
  border: 0 none;
  box-sizing: border-box;
  font-size: 14px;
  font-family: sans-serif;
}

.group_field .field_local[type='file'] {
  height: auto;
}

.group_field.full {
  display: block;
  margin-top: 20px;
}

.group_field.full .box_field {
  margin-top: 10px;
}

.group_field.underline {
  display: block;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}

.group_field.underline .label_local {
  float: left;
  padding: 12px 12px 0;
}

.group_field.underline .box_field {
  overflow: hidden;
  display: block;
  margin: 0 10px 0 0;
  border: 0 none;
}
</style>
