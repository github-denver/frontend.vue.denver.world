import Vue from 'vue'

import Latest from './Latest'
import List from './List'
import Read from './Read'
import Visual from './Visual'

export const postLatestList = Vue.component('post-latest-list-component', {
  components: { Latest },
  props: ['attribute'],
  template: `
    <Latest>
      <slot></slot>
    </Latest>
  `
})

export const postVisual = Vue.component('visual-component', {
  components: { Visual },
  props: ['attribute'],
  template: `
    <Visual>
      <slot></slot>
    </Visual>
  `
})

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
