<template>
  <div v-bind:class="`group_${data.className}`" v-if="isAuthorized">
    <router-link v-bind:to="{ name: data.component.success }" v-bind:class="`link_${data.className}`">
      <Picture v-bind:isAuthorized="isAuthorized" v-bind:user="user" />

      <span v-bind:class="`text_${data.className}`">{{ user.name }}</span>
    </router-link>
  </div>

  <div v-bind:class="`group_${data.className}`" v-else>
    <router-link v-bind:to="{ name: data.component.failure }" v-bind:class="data.className">
      <Picture v-bind:isAuthorized="isAuthorized" />

      <span v-bind:class="`text_${data.className}`">{{ data.message.failure }}</span>
    </router-link>
  </div>
</template>

<script>
import Picture from './Picture'

export default {
  name: 'Profile',
  components: { Picture },
  props: {
    isAuthorized: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      required: false
    },
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
