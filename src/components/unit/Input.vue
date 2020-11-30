<template>
  <span :class="['grp_field', attribute.className]">
    <label v-if="attribute.title" :for="attribute.id" class="lab_field">{{ attribute.title }}</label>
    <span v-if="attribute.type !== 'file'" class="box_field">
      <input v-if="attribute.value" :type="attribute.type" :name="attribute.id" :id="attribute.id" :value="value" @change="onChange" class="field_comm" />

      <input v-else :type="attribute.type" :name="attribute.id" :id="attribute.id" class="field_comm" @input="$emit('input', $event.target.value)" />
    </span>

    <span v-else class="box_field">
      <input :type="attribute.type" :name="attribute.id" :id="attribute.id" class="field_comm" @change="onUpload" />
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
      value: '',
      files: null,
      result: null
    }
  },
  created() {
    this.value = this.attribute.value
    // console.log('created() → this.value: ', this.value)
  },
  methods: {
    onChange() {
      this.value = event.target.value
      // console.log('methods → updateValue → this.value: ', this.value)

      this.$emit('input', event.target.value)
    },
    onUpload(event) {
      if (window.FileReader) {
        // 이미지 파일만 통과합니다.
        if (!event.target.files[0].type.match(/image\//)) return

        // 읽기
        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])

        this.files = event.target.files[0]
        // console.log('this.files: ', this.files)

        // 읽은 후
        reader.onload = (event) => {
          this.result = event.target.result
          // console.log('this.result: ', this.result)

          const formData = new FormData()
          formData.append('files', this.files)
          formData.append('result', this.result)

          this.$emit('parentChange', formData)
        }
      } else {
      }
    }
  }
}
</script>

<style scoped></style>
