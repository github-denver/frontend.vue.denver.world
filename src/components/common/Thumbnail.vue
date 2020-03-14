<template>
  <thumbnail-component
    :attribute="{
      style: {
        paddingTop: attribute.style.paddingTop
      }
    }"
    :style="{
      'background-image': `url('${path}/${uploads}/${attribute.thumbnail}')`
    }"
  >
    <slot></slot>
  </thumbnail-component>
</template>

<script>
import { mapGetters } from 'vuex'

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
    ...mapGetters(['path', 'uploads'])
  }
}
</script>
