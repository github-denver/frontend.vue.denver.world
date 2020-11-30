<template>
  <div
    class="thumb_g"
    :style="{
      'padding-top': attribute.style.paddingTop,
      'background-image': `url('${path}/${uploads}/${attribute.thumbnail}')`,
      'background-position': attribute.style.backgroundPosition
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Dimmed from '@/components/unit/Dimmed'

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
    ...mapGetters(['path', 'uploads'])
  }
}
</script>

<style scoped></style>
