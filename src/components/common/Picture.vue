<template>
  <div class="group_picture" v-if="isAuthorized">
    <img v-bind:src="`${localhost}/${uploads}/${user.picture}`" v-bind:alt="user.name" class="thumbnail_picture" />
  </div>

  <div class="group_picture" v-else>
    <img v-bind:src="`${localhost}/${uploads}/default_picture.png`" alt="기본 이미지" class="thumbnail_picture" />
  </div>
</template>

<script>
import { localhost, uploads } from '../../../config/setting'

export default {
  name: 'Picture',
  props: {
    isAuthorized: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      required: false
    }
  },
  computed: {
    localhost() {
      return localhost
    },
    uploads() {
      return uploads
    }
  }
}
</script>
