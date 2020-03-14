// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'

import './components/styled-components';

Vue.config.productionTip = false

Vue.use(require('vue-moment'))

const init = () => {
  const savedToken = Cookies.get('accessToken')
  console.log('[main.js] init () → savedToken: ', savedToken)

  if (savedToken) {
    console.log('[main.js] init () → savedToken: ', savedToken)

    return store.dispatch('signinByToken', savedToken)
  } else {
    return Promise.resolve()
  }
}

init().then(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
})
