import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/vue',
    name: 'HelloWorld',
    component: () =>
        import('@/components/HelloWorld')
  },
  {
    path: '',
    name: 'layout',
    component: () =>
        import('views/layout/layout'),
    redirect: '/businessInfo',
    children: [{
      path: 'businessInfo',
      name: 'businessInfo',
      component: () =>
          import('components/businessManager/businessInfo'),
      children: [{
        path: 'infoAddorEdit',
        name: 'infoAddorEdit',
        component: () =>
            import('components/businessManager/infoAddorEdit')
      }]

    }, {
      path: 'businessAudits',
      name: 'businessAudits',
      component: () =>
          import('components/businessManager/businessAudits')
    }]
  }
  ]
})
