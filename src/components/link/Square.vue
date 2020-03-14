<template>
  <router-link :to="{ name: data.component }" :class="data.className" @click.native="data.event && data.event()">
    <icon-square :data="{ className: data.icon, text: data.text }" />
  </router-link>
</template>

<script>
import IconSquare from '@/components/icon/Square'

export default {
  name: 'Square',
  components: { IconSquare },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
