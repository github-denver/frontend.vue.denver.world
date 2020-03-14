<template>
  <profile-component>
    <router-link
      :to="{
        name: attribute.authorized ? attribute.component.success : attribute.component.failure
      }"
    >
      <slot name="picture"></slot>

      <span><slot name="text"></slot></span>
    </router-link>
  </profile-component>
</template>

<script>
import Picture from '@/components/common/Picture'

export default {
  name: 'Profile',
  components: { Picture },
  props: {
    attribute: {
      type: Object,
      required: true
    }
  }
}
</script>
