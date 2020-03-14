<template>
  <div
    :style="{
      'background-image': `url('${localhost}/${uploads}/${attribute.thumbnail}')`
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { localhost, uploads } from '../../../config/setting'

import Dimmed from '@/components/common/Dimmed'

export default {
  name: 'Thumbnail',
  components: { Dimmed },
  props: {
    attribute: {
      type: Object,
      required: true
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

<style scoped>
div {
  padding-top: 52.734375%;
  border-radius: 16px;
  font-size: 1px;
  font-size: 0.1rem;
  line-height: 1;
  color: transparent;
  background-color: #f9f9f9;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
