import Vue from 'vue'

import List from './List'
import Read from './Read'

export const postList = Vue.component('post-list-component', {
  components: { List },
  props: ['attribute'],
  template: `
    <List>
      <slot></slot>
    </List>
  `
})

export const postRead = Vue.component('post-read-component', {
  components: { Read },
  props: ['attribute'],
  template: `
    <Read>
      <slot></slot>
    </Read>
  `
})
