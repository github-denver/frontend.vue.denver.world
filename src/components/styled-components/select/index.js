import Vue from 'vue'

import Select from './Select'

export const select = Vue.component('select-component', {
  components: { Select },
  props: ['attribute'],
  template: `
    <Select :className="attribute.className">
      <slot></slot>
    </Select>
  `
})
