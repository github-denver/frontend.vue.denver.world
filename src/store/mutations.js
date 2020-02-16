import {
  FETCH_POST_LIST,
  SEARCH_INFO,
  FETCH_POST,
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO
} from './mutation-types'
import Cookies from 'js-cookie'
import api from '@/api'

export default {
  [FETCH_POST_LIST](state, payload) {
    console.log('[mutations.js] [FETCH_POST_LIST] → payload: ', payload)

    state.posts = payload.posts
    console.log('[mutations.js] [FETCH_POST_LIST] → state.posts: ', state.posts) // prettier-ignore

    state.pagination = payload.pagination
    console.log('[mutations.js] [FETCH_POST_LIST] → state.pagination: ', state.pagination) // prettier-ignore
  },
  [SEARCH_INFO](state, payload) {
    console.log('[mutations.js] [SEARCH_INFO] → payload: ', payload)

    state.search.select = payload.select
    console.log('[mutations.js] [SEARCH_INFO] → state.select: ', state.select) // prettier-ignore

    state.search.keyword = payload.keyword
    console.log('[mutations.js] [SEARCH_INFO] → state.keyword: ', state.keyword) // prettier-ignore
  },
  [FETCH_POST](state, post) {
    console.log('[mutations.js] [FETCH_POST] → state.post: ', state.post)
    console.log('[mutations.js] [FETCH_POST] → typeof state.post: ', typeof state.post) // prettier-ignore

    console.log(' ')

    console.log('[mutations.js] [FETCH_POST] → post: ', post)
    console.log('[mutations.js] [FETCH_POST] → typeof post: ', typeof post)

    state.post = post
  },
  [SET_ACCESS_TOKEN](state, accessToken) {
    console.log('[mutations.js] [SET_ACCESS_TOKEN] → accessToken: ', accessToken) // prettier-ignore

    if (accessToken) {
      state.accessToken = accessToken
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      Cookies.set('accessToken', accessToken)
    }
  },
  [SET_MY_INFO](state, user) {
    console.log('[mutations.js] [SET_MY_INFO] → user: ', user)

    if (user) {
      state.user = user
    }
  },
  [DESTROY_ACCESS_TOKEN](state) {
    state.accessToken = ''
    delete api.defaults.headers.common.Authorization
    Cookies.remove('accessToken')
  },
  [DESTROY_MY_INFO](state) {
    state.user = null
  }
}
