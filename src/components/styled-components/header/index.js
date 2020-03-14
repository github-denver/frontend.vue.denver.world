import Vue from 'vue'

import Header from './Header'
import Heading from './Heading'
import Utility from './Utility'
import Item from './Item'
import Menu from './Menu'
import Navigation from './Navigation'

export const header = Vue.component('header-component', {
  components: { Header },
  props: ['attribute'],
  template: `
    <Header>
      <slot></slot>
    </Header>
  `
})

export const heading = Vue.component('heading-component', {
  components: { Heading },
  props: ['attribute'],
  template: `
    <Heading>
      <slot></slot>
    </Heading>
  `
})

export const utility = Vue.component('utility-component', {
  components: { Utility },
  props: ['attribute'],
  template: `
    <Utility>
      <slot></slot>
    </Utility>
  `
})

export const item = Vue.component('item-component', {
  components: { Item },
  props: ['attribute'],
  template: `
    <Item>
      <slot></slot>
    </Item>
  `
})

export const menu = Vue.component('menu-component', {
  components: { Menu },
  props: ['attribute'],
  template: `
    <Menu>
      <slot></slot>
    </Menu>
  `
})

export const navigation = Vue.component('navigation-component', {
  components: { Navigation },
  props: ['attribute'],
  template: `
    <Navigation>
      <slot></slot>
    </Navigation>
  `
})
