import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Devops',
      component: () => import('../components/devops/Devops')
    },
    // {
    //   path: '/devops',
    //   name: 'Devops',
    //   component: () => import('../components/devops/Devops')
    // },
    {
      path: '/weak',
      name: 'Weak',
      component: () => import('../components/weak/Weak')
    },
    {
      path: '/soft',
      name: 'Soft',
      component: () => import('../components/soft/Software')
    },
    {
      path: '/recruitment',
      name: 'Recruitment',
      component: () => import('../components/soft/recruitment')
    }
  ]
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)

})

export default router;
