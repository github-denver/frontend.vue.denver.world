export default {
  isAuthorized(state) {
    const { accessToken, user } = state
    console.log('[getters.js] isAuthorized () → state: ', state)

    console.log('[getters.js] isAuthorized () → accessToken.length > 0 && !user: ', accessToken.length > 0 && !!user) // prettier-ignore
    return accessToken.length > 0 && !!user
  }
}
