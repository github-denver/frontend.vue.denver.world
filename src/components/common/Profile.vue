<template>
  <div class="grp_profile">
    <router-link
      :to="{
        name: attribute.authorized ? attribute.component.success : attribute.component.failure
      }"
      class="link_profile"
    >
      <slot name="picture"></slot>

      <span class="text_profile"><slot name="text"></slot></span>
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

<style>
.grp_profile:first-child {
  border-top: 0 none;
}

.grp_profile {
  display: table;
  width: 100%;
  padding: 10px 50px 10px 10px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  box-sizing: border-box;
  background-color: #fff;
  text-align: left;
}

.grp_profile .link_profile {
  display: block;
  font-size: 0;
}

.grp_profile .text_profile {
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  vertical-align: middle;
}
</style>
