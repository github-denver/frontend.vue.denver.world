<template>
  <span :class="['group_field', attribute.className]">
    <label v-if="attribute.title" :for="attribute.id" class="label_local">{{ attribute.title }}</label>
    <span class="box_field">
      <fragment v-if="attribute.type !== 'file'">
        <input
          v-if="attribute.value"
          :type="attribute.type"
          :name="attribute.id"
          :id="attribute.id"
          :value="value"
          @change="onChange"
          class="field_local 111"
        />

        <input v-else :type="attribute.type" :name="attribute.id" :id="attribute.id" class="field_local 222" @input="$emit('input', $event.target.value)" />
      </fragment>

      <input v-else :type="attribute.type" :name="attribute.id" :id="attribute.id" class="field_local 333" @change="onUpload" />
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
    console.log('☆ created() → this.value: ', this.value)
  },
  methods: {
    onChange() {
      console.log('methods → updateValue → event.target.valu: ', event.target.value)

      this.value = event.target.value
      console.log('methods → updateValue → this.value: ', this.value)

      this.$emit('input', event.target.value)
    },
    onUpload(event) {
      console.log('window.FileReader: ', window.FileReader)

      console.log(' ')

      if (window.FileReader) {
        console.log('event.target.files[0]: ', event.target.files[0])
        console.log('event.target.files[0].type: ', event.target.files[0].type)

        console.log(' ')

        console.log('event.target.files[0].type.match(/image/): ', event.target.files[0].type.match(/image\//))
        console.log('!event.target.files[0].type.match(/image/): ', !event.target.files[0].type.match(/image\//))

        console.log(' ')

        // 이미지 파일만 통과합니다.
        if (!event.target.files[0].type.match(/image\//)) return

        // 읽기
        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])

        this.files = event.target.files[0]
        console.log('this.files: ', this.files)

        console.log(' ')

        // 읽은 후
        reader.onload = (event) => {
          console.log('event.target: ', event.target)

          console.log(' ')

          this.result = event.target.result
          // console.log('this.url: ', this.url)

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
