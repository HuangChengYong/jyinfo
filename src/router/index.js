import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Dmsca',
      component: () => import('../components/dmsca/Dmsca')
    },
    {
      path: '/devops',
      name: 'Devops',
      component: () => import('../components/devops/Devops')
    },/* 运维 */
    {
      path: '/weak',
      name: 'Weak',
      component: () => import('../components/weak/Weak')
    },/* 弱电 */
    {
      path: '/soft',
      name: 'Soft',
      component: () => import('../components/soft/Software')
    },/* 软件 */
    /* 招聘 */
    {
      path: '/recruitment',
      name: 'Recruitment',
      component: () => import('../components/soft/recruitment')
    },
    /* 简历 */
    {
      path: '/apply/:index_first',
      name: 'Apply',
      component: () => import('../components/soft/apply')
    },
    {
      path: '/hotel',
      name: 'Hotel',
      component: () => import('../components/solution/Hotel')
    },/* 智慧酒店解决方案 */
    {
      path: '/building',
      name: 'Building',
      component: () => import('../components/solution/Building')
    },/* 智慧楼宇解决问题 */
    {
      path: '/community',
      name: 'Community',
      component: () => import('../components/solution/Community')
    },/* 智慧社区解决方案 */
    {
      path: '/hospital',
      name: 'Hospital',
      component: () => import('../components/solution/Hospital')
    },/* 智慧医院解决方案 */
    {
      path: '/park',
      name: 'Park',
      component: () => import('../components/solution/Park')
    }/* 智慧园区解决方案 */
  ]
})


/* 路由跳转之后，重置x和y轴的滚动条为0 */
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router;
