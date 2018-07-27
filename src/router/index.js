import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vue',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '',
      name: 'layout',
      component: () => import('views/layout/layout'),
      // redirect: '/vue',
      children: []
    }
  ]
})
