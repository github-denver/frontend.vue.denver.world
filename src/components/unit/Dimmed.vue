<template>
  <div class="dimmed_global">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Dimmed'
}
</script>

<style>
.dimmed_global {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
  border-radius: 0 0 16px 16px;
  line-height: 1.4;
  background: rgba(0, 0, 0, 0);
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.5)));
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#000000', GradientType=0);
}
</style>
