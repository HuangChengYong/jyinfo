import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JyHeader',
      component: () => import('../components/JyHeader')
    },
    {
      path: '/devops',
      name: 'Devops',
      component: () => import('../components/devops/Devops')
    },
    {
      path: '/weak_current',
      name: 'WeakCurrent',
      component: () => import('../components/weakcurrent/WeakCurrent')
    },
    {
      path: '/soft',
      name: 'Soft',
      component: () => import('../components/soft/Software')
    }
  ]
})
