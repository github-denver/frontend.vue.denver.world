<template>
  <span :class="['icon_global', attribute.className]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    attribute: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.icon_global {
  display: inline-block;
  overflow: hidden;
  width: 30px;
  height: 30px;
  font-size: 1px;
  line-height: 0;
  color: transparent;
  background-image: url(~@/assets/images/ico_global.png);
  background-repeat: no-repeat;
  background-size: 160px auto;
  vertical-align: middle;
}

.icon_profile {
  background-position: -35px 0;
}

.icon_logout {
  background-position: -105px 0;
}

.icon_login {
  background-position: -70px 0;
}

.icon_join {
  background-position: -105px -35px;
}

.icon_close {
  background-position: -35px -35px;
}
</style>
