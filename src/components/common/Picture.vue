<template>
  <div :class="['group_picture', attribute.className]">
    <fragment v-if="attribute.state !== 'board'">
      <img
        v-if="attribute.authorized"
        :src="!!attribute.picture ? attribute.picture : `${path}/${uploads}/${user.picture}`"
        class="thumbnail_local 111"
        :alt="user.name"
      />
      <img v-else :src="!!attribute.picture ? attribute.picture : `${path}/${uploads}/default_picture.png`" class="thumbnail_local 222" alt="" />
    </fragment>

    <img v-else :src="`${path}/${uploads}/${attribute.picture}`" class="thumbnail_local 333" alt="" />

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

<style>
.group_picture {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #f9f9f9;
  vertical-align: middle;
}

.group_picture .thumbnail_local {
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 100%;
}

.group_picture.register {
  display: block;
  width: 100px;
  height: 100px;
  margin: 20px auto 0;
}
</style>
