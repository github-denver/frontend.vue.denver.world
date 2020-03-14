<template>
  <div v-if="isAuthorized" :class="`${attribute.className}`">
    <router-link
      :to="{
        name: attribute.component.success
      }"
      :class="`link_${attribute.className}`"
    >
      <Picture :isAuthorized="isAuthorized" :user="user" />

      <span :class="`text_${attribute.className}`">
        {{ user.name }}
      </span>
    </router-link>
  </div>
  <div v-else :class="`${attribute.className}`">
    <router-link
      :to="{
        name: attribute.component.failure
      }"
      :class="`link_${attribute.className}`"
    >
      <Picture :isAuthorized="isAuthorized" />

      <span :class="`text_${attribute.className}`">
        {{ attribute.message.failure }}
      </span>
    </router-link>
  </div>
</template>

<script>
import Picture from './Picture'

export default {
  name: 'Profile',
  components: { Picture },
  props: {
    attribute: {
      type: Object,
      required: true
    },
    isAuthorized: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      required: false
    }
  }
}
</script>

<style scoped>
.profile:first-child {
  border-top: 0 none;
}

.profile {
  display: table;
  width: 100%;
  padding: 10px 50px 10px 10px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  box-sizing: border-box;
  background-color: #fff;
  text-align: left;
}

.link_profile {
  display: block;
  font-size: 0;
}

.text_profile {
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  vertical-align: middle;
}
</style>
