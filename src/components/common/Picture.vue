<template>
  <div v-if="attribute.state !== 'board'" :class="['grp_picture', attribute.className]">
    <img v-if="attribute.authorized" :src="!!attribute.picture ? attribute.picture : `${path}/${uploads}/${user.picture}`" class="thumb_picture" :alt="user.name" />
    <img v-else :src="!!attribute.picture ? attribute.picture : `${path}/${uploads}/default_picture.png`" class="thumb_picture" alt="" />

    <slot name="upload"></slot>
  </div>

  <div v-else :class="['grp_picture', attribute.className]">
    <img :src="`${path}/${uploads}/${attribute.picture}`" class="thumb_picture" alt="" />

    <slot name="upload"></slot>
  </div>
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

<style scoped></style>
