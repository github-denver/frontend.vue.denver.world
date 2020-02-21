import {
  FETCH_POST_LIST,
  SEARCH_INFO,
  FETCH_POST,
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO
} from './mutation-types'
import api from '@/api'

// prettier-ignore
export default {
  fetchPostList({ commit }, payload) {
    const { category, number, select, keyword } = payload
    console.log('[actions.js] fetchPostList () → payload: ', payload)

    console.log(' ')

    console.log('[actions.js] fetchPostList () → select: ', select)
    console.log('[actions.js] fetchPostList () → typeof select: ', typeof select)

    console.log(' ')

    console.log('[actions.js] fetchPostList () → keyword: ', keyword)
    console.log('[actions.js] fetchPostList () → typeof keyword: ', typeof keyword)

    console.log(' ')

    let url = ''

    console.log("[actions.js] fetchPostList () → typeof keyword !== 'undefined' && keyword.length > 0: ", typeof keyword !== 'undefined' && keyword.length > 0)

    console.log(' ')

    if (typeof keyword !== 'undefined' && keyword.length > 0) {
      url = `/api/board/${category}/list/${number}?select=${select}&keyword=${keyword}`
    } else {
      url = `/api/board/${category}/list/${number}`
    }
    console.log('[actions.js] fetchPostList () → url: ', url)

    console.log(' ')

    return api.get(url).then((response) => {
      console.log('[actions.js] fetchPostList () → response.data: ', response.data)

      console.log(' ')

      console.log('[actions.js] fetchPostList () → typeof response.data: ', typeof response.data)
      console.log('[actions.js] fetchPostList () → typeof response.data.list: ', typeof response.data.list)

      console.log(' ')

      const { list, pagination, select, keyword } = response.data
      console.log('[actions.js] fetchPostList () → list: ', list)
      console.log('[actions.js] fetchPostList () → pagination: ', pagination)
      console.log('[actions.js] fetchPostList () → select: ', select)
      console.log('[actions.js] fetchPostList () → keyword: ', keyword)

      console.log(' ')

      commit(FETCH_POST_LIST, { posts: list, pagination: pagination })
      commit(SEARCH_INFO, { select: select, keyword: keyword })
    })
  },
  searchInfo({ commit }, payload) {
    const { select, keyword } = payload
    console.log('[actions.js] searchInfo () → payload: ', payload)

    console.log(' ')

    console.log('[actions.js] searchInfo () → select: ', select)
    console.log('[actions.js] searchInfo () → typeof select: ', typeof select)

    console.log(' ')

    console.log('[actions.js] searchInfo () → keyword: ', keyword)
    console.log('[actions.js] searchInfo () → typeof keyword: ', typeof keyword)

    console.log(' ')

    commit(SEARCH_INFO, { select: select, keyword: keyword })
  },
  updateProfile({ commit }, payload) {
    console.log('[actions.js] updateProfile () → payload: ', payload)

    console.log(' ')

    return api.post('/api/profile', payload).then((response) => {
      console.log('[actions.js] updateProfile () → response.data: ', response.data)
      console.log('[actions.js] updateProfile () → response.data.user: ', response.data.user)

      console.log(' ')

      const { accessToken } = response.data
      console.log('[actions.js] updateProfile () → accessToken: ', accessToken)

      console.log(' ')

      commit(SET_ACCESS_TOKEN, accessToken)

      return api.get('/api/me', {
        params: {
          accessToken: accessToken
        }
      })
    })
    .then((response) => {
      console.log('[actions.js] signin () → [SET_MY_INFO] > response: ', response)

      console.log(' ')

      commit(SET_MY_INFO, response.data.user2)
    })
  },
  fetchPost({ commit }, payload) {
    const { category, number, select, keyword } = payload
    console.log('[actions.js] fetchPost () → payload: ', payload)
    console.log('[actions.js] fetchPost () → typeof number: ', typeof number)

    console.log(' ')

    console.log('[actions.js] fetchPost () → `/board/${category}/view/${number}`: ', `/board/${category}/view/${number}`)

    console.log(' ')

    return api.get(`/api/board/${category}/view/${number}`).then((response) => {
      console.log('[actions.js] fetchPost () → response.data: ', response.data)
      console.log('[actions.js] fetchPost () → typeof response.data: ', typeof response.data)
      console.log('[actions.js] fetchPost () → response.data.result: ', response.data.result)
      console.log('[actions.js] fetchPost () → typeof response.data.result: ', typeof response.data.result)

      console.log(' ')

      const { result } = response.data

      commit(FETCH_POST, result)
      commit(SEARCH_INFO, { select: select, keyword: keyword })
    })
  },
  signin({ commit }, payload) {
    const { id, password } = payload
    console.log('[actions.js] signin () → payload: ', payload)

    console.log(' ')

    return api.post('/api/login', { id, password }).then((response) => {
      console.log('[actions.js] signin () → response: ', response)

      console.log(' ')

      const { accessToken } = response.data
      console.log('[actions.js] signin () → accessToken: ', accessToken)

      console.log(' ')

      commit(SET_ACCESS_TOKEN, accessToken)

      return api.get('/api/me', {
        params: {
          accessToken: accessToken
        }
      })
    })
    .then((response) => {
      console.log('[actions.js] signin () → [SET_MY_INFO] > response: ', response)

      console.log(' ')

      commit(SET_MY_INFO, response.data.user2)
    })
  },
  signinByToken({ commit }, token) {
    console.log('[actions.js] signinByToken () → token: ', token)

    console.log(' ')

    commit(SET_ACCESS_TOKEN, token)

    return api.get('/api/me', { params: { accessToken: token } }).then((response) => {
      console.log('[actions.js] signinByToken () → response.data: ', response.data)
      console.log('[actions.js] signinByToken () → response.data.user: ', response.data.user)

      console.log(' ')

      commit(SET_MY_INFO, response.data.user2)
    })
  },
  signout({ commit }) {
    return api.get('/api/logout').then((response) => {
      console.log('[actions.js] signout () → response.data: ', response.data)

      console.log(' ')

      commit(DESTROY_MY_INFO)
      commit(DESTROY_ACCESS_TOKEN)
    })
  }
}
