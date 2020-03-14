import Vue from 'vue'

import { Square, Link } from './Square'
import Icon from './Icon'

export const icon = Vue.component('icon-button', {
  components: { Icon },
  props: ['attribute'],
  template: `
    <Icon :icon="attribute.icon">
      <slot></slot>
    </Icon>
  `,
  data() {
    return {
      blue: '#0000ff'
    }
  }
})

export const square = Vue.component('square-button', {
  components: { Square },
  props: ['attribute'],
  template: `
    <Square :type="attribute.type" :icon="attribute.icon" @click.native="attribute.event">
      <slot></slot>
    </Square>
  `
})

export const link = Vue.component('link-button', {
  components: { Link },
  props: ['attribute'],
  template: `
    <Link :to="{ name: attribute.component }" :class="attribute.className" @click.native="attribute.event">
      <slot></slot>
    </Link>
  `
})
