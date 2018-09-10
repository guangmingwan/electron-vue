import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/foo',
      name: 'foo-page',
      component: require('@/components/FooPage').default
      ,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '*',
      redirect: '/'
      ,
      meta: {
        keepAlive: true
      }
    }
  ]
})
