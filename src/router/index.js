import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Soft',
      component: () => import('../components/soft/Software')
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
    /* 成功案例 */
    {
      path: '/cases',
      name: 'Cases',
      component: () => import('../components/soft/SuccessCase')
    },
    /* 关于我们 */
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: () => import('../components/aboutUs/aboutUs')
    },
    /*聊天室*/
    {
      path: '/chat',
      name: 'SingleChat',
      component: () => import('../components/chat/SingleChat')
    },
    {
      path: '/kylin',
      name: 'Kylin',
      component: () => import('../components/kylin/Kylin')
    },/* 麒麟大数据 */
    {
      path: '/dmsca',
      name: 'Dmsca',
      component: () => import('../components/dmsca/Dmsca')
    },/* 端玛科技 */
    {
      path: '/soft/download',
      name: 'Download',
      component: () => import('../components/soft/Download')
    },/* 端玛科技 */
    {
      path: '/solution/:param',
      name: 'Solution',
      component: () => import('../components/solution/Solution')
    },/* 解决方案 */
  ]
})


/* 路由跳转之后，重置x和y轴的滚动条为0 */
router.afterEach(() => {
  window.scrollX = 0;
})

/*router.beforeEach((to, from, next) => {
  let token = router.app.$storage.fetch("token");
  let needAuth = to.matched.some(item => item.meta.login);
  if(!token && needAuth) return next({path: "/login"});
  next();
})*/
export default router;
