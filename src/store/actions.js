import { FETCH_POST_LIST, SEARCH_INFO, FETCH_POST, SET_ACCESS_TOKEN, SET_MY_INFO, DESTROY_ACCESS_TOKEN, DESTROY_MY_INFO } from './mutation-types'
import api from '@/api'

export default {
  fetchPostList({ commit }, payload) {
    commit(FETCH_POST_LIST, { posts: [], pagination: {} })

    const { category, number, select, keyword } = payload

    let url = ''

    if (typeof keyword !== 'undefined' && keyword.length > 0) {
      url = `/api/board/${category}/list/${number}?select=${select}&keyword=${keyword}`
    } else {
      url = `/api/board/${category}/list/${number}`
    }

    return api.get(url, { headers: { Pragma: 'no-cache' } }).then((response) => {
      const { list, pagination, select, keyword } = response.data

      commit(FETCH_POST_LIST, { posts: list, pagination: pagination })
      commit(SEARCH_INFO, { select: select, keyword: keyword })
    })
  },
  searchInfo({ commit }, payload) {
    const { select, keyword } = payload

    commit(SEARCH_INFO, { select: select, keyword: keyword })
  },
  updateProfile({ commit }, payload) {
    return api
      .post('/api/profile', payload)
      .then((response) => {
        const { accessToken } = response.data
        // console.log('[actions.js] updateProfile () → accessToken: ', accessToken)

        commit(SET_ACCESS_TOKEN, accessToken)

        return api.get('/api/me', {
          params: {
            accessToken: accessToken
          }
        })
      })
      .then((response) => {
        // console.log('[actions.js] signin () → [SET_MY_INFO] > response: ', response)

        commit(SET_MY_INFO, response.data.user2)
      })
  },
  fetchPost({ commit }, payload) {
    const { category, number, select, keyword } = payload
    // console.log('[actions.js] fetchPost () → payload: ', payload)

    // console.log('[actions.js] fetchPost () → `/board/${category}/view/${number}`: ', `/board/${category}/view/${number}`)

    return api.get(`/api/board/${category}/view/${number}`).then((response) => {
      // console.log('[actions.js] fetchPost () → response: ', response)

      const { result } = response.data

      commit(FETCH_POST, result)
      commit(SEARCH_INFO, { select: select, keyword: keyword })
    })
  },
  signin({ commit }, payload) {
    const { id, password } = payload
    // console.log('[actions.js] signin () → payload: ', payload)

    return api
      .post('/api/login', { id, password })
      .then((response) => {
        console.log('[actions.js] signin () → response: ', response)

        const { accessToken } = response.data
        // console.log('[actions.js] signin () → accessToken: ', accessToken)

        commit(SET_ACCESS_TOKEN, accessToken)

        return api.get('/api/me', {
          params: {
            accessToken: accessToken
          }
        })
      })
      .then((response) => {
        // console.log('[actions.js] signin () → [SET_MY_INFO] > response: ', response)

        commit(SET_MY_INFO, response.data.user2)
      })
  },
  signinByToken({ commit }, token) {
    // console.log('[actions.js] signinByToken () → token: ', token)

    commit(SET_ACCESS_TOKEN, token)

    return api.get('/api/me', { params: { accessToken: token } }).then((response) => {
      // console.log('[actions.js] signinByToken () → response: ', response)

      commit(SET_MY_INFO, response.data.user2)
    })
  },
  signout({ commit }) {
    return api.get('/api/logout').then((response) => {
      // console.log('[actions.js] signout () → response: ', response.data)

      commit(DESTROY_MY_INFO)
      commit(DESTROY_ACCESS_TOKEN)
    })
  }
}
