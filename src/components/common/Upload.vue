<template>
  <div class="grp_upload">
    <label :for="attribute.id" class="label_local">
      <span :class="['ico_global', attribute.icon]">
        <slot name="text"></slot>
      </span>
    </label>

    <input type="file" :name="attribute.id" :id="attribute.id" class="field_local" @change="onChange" />
  </div>
</template>

<script>
export default {
  name: 'Upload',
  props: {
    attribute: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      files: null,
      result: null
    }
  },
  methods: {
    onChange(event) {
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

<style>
.grp_upload {
  position: absolute;
  right: 0;
  bottom: 0;
  border: 1px solid #e9e9e9;
  border-radius: 100%;
  font-size: 1px;
  line-height: 0;
  color: transparent;
  background-color: #fff;
}

.grp_upload .label_local {
  display: block;
  width: 30px;
  height: 30px;
}

.grp_upload .ico_picture {
  width: 30px;
  height: 30px;
  background-position: -70px -35px;
}

.grp_upload .field_local[type='file'] {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 1px;
  height: 1px;
}
</style>
