import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/devops',
      name: 'Devops',
      component: () => import('../components/devops/Devops')
    },
    {
      path: '/hexagon',
      name: 'Hexagon',
      component: () => import('../components/Hexagon')
    }
  ]
})
