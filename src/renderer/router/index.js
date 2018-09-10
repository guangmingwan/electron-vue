import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root-page',
      component: require('@/components/app.vue').default,
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
