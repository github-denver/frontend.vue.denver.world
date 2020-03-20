import Vue from 'vue'

import List from './List'

export const galleryList = Vue.component('gallery-list-component', {
  components: { List },
  props: ['attribute'],
  template: `
    <List>
      <slot></slot>
    </List>
  `
})
