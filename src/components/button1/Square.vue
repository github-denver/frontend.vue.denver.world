<template>
  <button :type="data.type" :class="data.className" @click="data.event">
    <icon-square :data="{ className: data.icon, text: data.text }" />
  </button>
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
