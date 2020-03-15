import Vue from 'vue'

import Input from './Input'

export const input = Vue.component('input-component', {
  components: { Input },
  props: ['attribute'],
  template: `
    <Input :className="attribute.className">
      <slot></slot>
    </Input>
  `
})
