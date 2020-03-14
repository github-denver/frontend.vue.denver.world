<template>
  <span :class="['ico_global', data.className]">{{ data.text }}</span>
</template>

<script>
export default {
  name: 'Square',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
