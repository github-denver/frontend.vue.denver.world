<template>
  <picture-component :attribute="attribute">
    <!-- <img
      :src="`${path}/${uploads}/${attribute.authorized ? attribute.user.picture : 'default_picture.png'}`"
      :alt="attribute.authorized ? attribute.user.name : '기본 이미지'"
    /> -->
    typeof attribute.picture: {{ attribute.picture !== '' }}
    <img v-if="attribute.picture !== ''" :src="attribute.picture" :alt="attribute.authorized ? attribute.user.name : '기본 이미지'" />

    <slot name="upload"></slot>
  </picture-component>
</template>

<script>
import { mapGetters } from 'vuex'
import Upload from '@/components/common/Upload'

export default {
  name: 'Picture',
  components: { Upload },
  props: {
    attribute: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['path', 'uploads'])
  },
  methods: {}
}
</script>
