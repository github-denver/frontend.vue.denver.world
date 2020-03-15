<template>
  <picture-component :attribute="attribute">
    <img
      :src="`${path}/${uploads}/${attribute.authorized ? attribute.user.picture : 'default_picture.png'}`"
      :alt="attribute.authorized ? attribute.user.name : '기본 이미지'"
    />
  </picture-component>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Picture',
  props: {
    attribute: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['path', 'uploads'])
  }
}
</script>
