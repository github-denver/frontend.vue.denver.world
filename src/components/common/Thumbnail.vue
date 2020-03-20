<template>
  <div
    class="thumbnail_global"
    :style="{
      'padding-top': attribute.style.paddingTop,
      'background-image': `url('${path}/${uploads}/${attribute.thumbnail}')`
    }"
  >
    <slot></slot>
  </div>
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

<style>
.thumbnail_global {
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
