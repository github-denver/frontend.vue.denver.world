import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '@/components/AppHeader'
// import AppFooter from '@/components/AppFooter'
import MainPage from '@/pages/MainPage'
import AppMenu from '@/components/AppMenu'
import WelcomePage from '@/pages/WelcomePage'
import MemberCreatePage from '@/pages/MemberCreatePage'
import LoginPage from '@/pages/LoginPage'
import ProfileEditPage from '@/pages/ProfileEditPage'
import PostListPage from '@/pages/PostListPage'
import PostCreatePage from '@/pages/PostCreatePage'
import PostViewPage from '@/pages/PostViewPage'
import PostEditPage from '@/pages/PostEditPage'
import GalleryListPage from '@/pages/GalleryListPage'
import store from '@/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/menu',
      name: 'AppMenu',
      component: AppMenu
    },
    {
      path: '/welcome',
      name: 'WelcomePage',
      component: WelcomePage,
      alias: '/member',
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters

        if (isAuthorized) {
          alert('로그인한 상태에서는 접근할 수 없어요!')

          next({ name: 'MainPage' })
        }

        next()
      }
    },
    {
      path: '/member/register',
      name: 'MemberCreatePage',
      component: MemberCreatePage,
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters

        if (isAuthorized) {
          alert('로그인한 상태에서는 접근할 수 없어요!')

          next({ name: 'MainPage' })
        }

        next()
      }
    },
    {
      path: '/member/login',
      name: 'LoginPage',
      component: LoginPage,
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters

        if (isAuthorized) {
          alert('로그인한 상태에서는 접근할 수 없어요!')

          next({ name: 'MainPage' })
        }

        next()
      }
    },
    {
      path: '/member/profile',
      name: 'ProfileEditPage',
      component: ProfileEditPage,
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters

        if (!isAuthorized) {
          alert('로그인 안 한 상태에서는 접근할 수 없어요!')

          next({ name: 'LoginPage' })
        }

        next()
      }
    },
    {
      path: '/gallery/:service/list/:number',
      name: 'GalleryListPage',
      components: {
        header: AppHeader,
        default: GalleryListPage
        // footer: AppFooter,
      },
      props: {
        default: true
      }
    },
    {
      path: '/board/:service/list/:number',
      name: 'PostListPage',
      components: {
        header: AppHeader,
        default: PostListPage
        // footer: AppFooter,
      },
      props: {
        default: true
      }
    },
    {
      path: '/board/:service/create',
      name: 'PostCreatePage',
      components: {
        header: AppHeader,
        default: PostCreatePage
      },
      props: {
        default: true
      },
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters

        if (!isAuthorized) {
          alert('로그인 안 한 상태에서는 접근할 수 없어요!')

          next({ name: 'LoginPage' })
        }

        next()
      }
    },
    {
      path: '/board/:service/:number',
      name: 'PostViewPage',
      components: {
        header: AppHeader,
        default: PostViewPage
        // footer: AppFooter,
      },
      props: {
        default: true
      }
    },
    {
      path: '/board/:service/:number/edit',
      name: 'PostEditPage',
      components: {
        header: AppHeader,
        default: PostEditPage
      },
      props: {
        default: true
      },
      beforeEnter(to, from, next) {
        const { isAuthorized } = store.getters
        console.log('[router/index.js] PostEditPage → store.getters: ', store.getters) // prettier-ignore

        if (!isAuthorized) {
          alert('로그인이 필요해요!')

          next({ name: 'LoginPage' })
        }

        console.log('[router/index.js] PostEditPage → to.params: ', to.params)

        store
          .dispatch('fetchPost', {
            category: to.params.service,
            number: to.params.number
          })
          .then(() => {
            console.log('[router/index.js] PostEditPage → store.state.post: ', store.state.post) // prettier-ignore
            console.log('[router/index.js] PostEditPage → store.state.user.id: ', store.state.user.id) // prettier-ignore

            const post = store.state.post[0]
            console.log('[router/index.js] PostEditPage → post: ', post)

            const isAuthor = post.id === store.state.user.id

            if (isAuthor) {
              console.log('[router/index.js] PostEditPage → 사용자가 일치합니다') // prettier-ignore
              console.log('[router/index.js] PostEditPage → isAuthor: ', isAuthor) // prettier-ignore

              next()
            } else {
              alert('게시물의 작성자만 게시물을 수정할 수 있습니다.')

              next(false)
            }
          })
          .catch((error) => {
            console.error(error)

            alert(error.response.data.msg)

            next(false)
          })
      }
    },
    {
      path: '/',
      name: 'MainPage',
      components: {
        header: AppHeader,
        default: MainPage
        // footer: AppFooter,
      }
    }
  ]
})
