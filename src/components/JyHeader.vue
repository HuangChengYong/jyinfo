<template>
  <div>
    <nav id="jy_nav" class="row navbar navbar-default navbar-fixed-top">
      <div class="col-md-1 col-lg-1 "></div>
      <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2 jy_nav_logo">
        <img src="//jy-info.qicp.vip/static/jyinfo_logo.png" alt="logo">
      </div>
      <div class="col-xs-6 col-sm-9 col-md-1 col-lg-2"></div>
      <div class="hidden-xs hidden-sm col-md-8 col-lg-7 jy_nav_list container">
        <ul class="nav navbar-nav">
          <li><a href="#">首页</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">产品 <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">产品 1</a></li>
              <li><a href="#">产品 2</a></li>
              <li><a href="#">产品 3</a></li>
<!--              <li role="separator" class="divider"></li>-->
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">核心业务 <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#"><router-link to="/soft">软件</router-link></a></li>
              <li><a href="#"><router-link to="/weak">弱电</router-link></a></li>
              <li><a href="#"><router-link to="/">运维</router-link></a></li>
            </ul>
          </li>
          <li><a href="#">成功案例</a></li>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">企业招聘</a></li>
        </ul>
      </div>
    </nav>
    <div id="xbk"></div>
  </div>
</template>

<script>
export default {
  name: "JyHeader",
  methods: {
    handleScroll: function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let navigation = document.getElementById('jy_nav');
      let navigation_xbk = document.getElementById('xbk');
      // 判断背景色
      if (scrollTop === 0) {
        navigation.setAttribute('style','background-color:transparent;');
        navigation_xbk.setAttribute('style','background:rgba(255,255,255,1);opacity:0.4;');
      } else {
        navigation.setAttribute('style','background-color:#111F35;');
        navigation_xbk.setAttribute('style','background-color: transparent;');
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed() {
    // 离开该页面需要移除这个监听的事件，不然会报错
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
/* 导航栏 */
.navbar {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 0.16rem;
}
/* 导航栏 logo部分 */
.navbar .jy_nav_logo {
  text-align: center;
  line-height: 0.7rem;
}
.navbar .jy_nav_logo img {
  width: 1.46rem;
  height: 0.38rem;
  margin-left: 0.3rem;
}
/* 导航栏 列表部分 */
.navbar .jy_nav_list{
  line-height: 0.7rem;
}
.jy_nav_list ul li{
  text-align: center;
}
.jy_nav_list ul li a {
  font-family: Microsoft YaHei,serif;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.38rem;
  opacity:0.6;
}
/*鼠标划过(停留)的链接*/
.jy_nav_list ul li a:hover {
  text-decoration: none;
  color: #ffffff;
  opacity: 1;
}
/* 正在点击的链接*/
.jy_nav_list ul li a:active {
  text-decoration: none;
  background: transparent;
  color: #ffffff;
  opacity: 1;
}
/* 设置已访问的链接的样式 */
.jy_nav_list ul li a:visited{
  text-decoration: none;
  color: #ffffff;
  opacity:0.6;
}
.jy_nav_list ul li a:link {
  text-decoration: none;
  color: #ffffff;
}
.jy_nav_list .navbar-nav .dropdown .dropdown-menu {
  width: 1.26rem;
  margin: 0;
  padding: 0;
  background-color: yellow;
}

.jy_nav_list .navbar-nav .dropdown .dropdown-menu:hover {
  color: #ffffff;
}
.jy_nav_list .navbar-nav .dropdown .dropdown-menu li a {
  width: 1.46rem;
  opacity: 1;
  color: black;
  background-color: #ffffff;
  overflow: hidden;
}

.jy_nav_list ul li {
  width: 1.46rem;
}

#xbk {
  height: 0.02rem;
  position: relative;
  top: 0.7rem;
  opacity:0.4;
  background-color: #FFFFFF;
}
</style>
