<template>
  <div class="grp_profile">
    <router-link
      :to="{
        name: attribute.authorized ? attribute.component.success : attribute.component.failure
      }"
      class="link_profile"
    >
      <slot name="picture"></slot>

      <span class="txt_profile"><slot name="text"></slot></span>
    </router-link>
  </div>
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

<style scoped></style>
