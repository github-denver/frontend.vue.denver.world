<template>
  <upload-component>
    <label :for="attribute.className">
      <span :class="attribute.className">
        <slot name="text"></slot>
      </span>
    </label>

    <input type="file" :name="attribute.className" :id="attribute.className" @change="onChange" />
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
  },
  data() {
    return {
      url: null
    }
  },
  methods: {
    onChange(event) {
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
        console.log('event.target.files[0]: ', event.target.files[0])

        console.log(' ')

        // 읽은 후
        reader.onload = (event) => {
          console.log('event.target: ', event.target)

          console.log(' ')

          this.url = event.target.result
          // console.log('this.url: ', this.url)

          const formData = new FormData()
          formData.append('url', this.url)

          this.$emit('parentChange', formData)
        }
      } else {
      }
    }
  }
}
</script>
