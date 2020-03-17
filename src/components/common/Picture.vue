<template>
  <picture-component :attribute="attribute">
    <img
      v-if="attribute.authorized"
      :src="!!attribute.picture ? attribute.picture : `${path}/${uploads}/${user.picture}`"
      :alt="attribute.authorized ? user.name + '/수정' : '기본 이미지'"
    />
    <img v-else :src="!!attribute.picture ? attribute.picture : `${path}/${uploads}/default_picture.png`" alt="가입" />

    <!-- <img v-else :src="!!attribute.picture ? `${path}/${uploads}/${attribute.picture}` : `${path}/${uploads}/default_picture.png`" alt="게시판 목록" /> -->

    <slot name="upload"></slot>
  </picture-component>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
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
    ...mapGetters(['path', 'uploads']),
    ...mapState(['user'])
  },
  methods: {}
}
</script>
