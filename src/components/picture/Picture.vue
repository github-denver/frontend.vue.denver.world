<template>
  <picture-component :attribute="attribute">
    <fragment v-if="attribute.state !== 'board'">
      <img v-if="attribute.authorized" :src="!!attribute.picture ? attribute.picture : `${path}/${uploads}/${user.picture}`" :alt="user.name" />
      <img v-else :src="!!attribute.picture ? attribute.picture : `${path}/${uploads}/default_picture.png`" alt="" />
    </fragment>

    <img v-else :src="`${path}/${uploads}/${attribute.picture}`" alt="" />

    <slot name="upload"></slot>
  </picture-component>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Upload from '@/components/picture/Upload'

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
