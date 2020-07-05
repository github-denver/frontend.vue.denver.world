export default {
  isAuthorized(state) {
    const { accessToken, user } = state
    // console.log('[getters.js] isAuthorized () → accessToken: ', accessToken)
    // console.log('[getters.js] isAuthorized () → user: ', user)

    const result = accessToken.length > 0 && !!user
    // console.log('[getters.js] isAuthorized () → result: ', result)

    return result
  },
  path() {
    return 'http://localhost:4000'
  },
  uploads() {
    return 'uploads'
  }
}
