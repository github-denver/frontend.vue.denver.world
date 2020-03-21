export default {
  isAuthorized(state) {
    const { accessToken, user } = state
    console.log('[getters.js] isAuthorized () → state: ', state)

    console.log('[getters.js] isAuthorized () → accessToken.length > 0 && !user: ', accessToken.length > 0 && !!user)
    return accessToken.length > 0 && !!user
  },
  path() {
    return 'http://localhost:3000'
  },
  uploads() {
    return 'uploads'
  }
}
