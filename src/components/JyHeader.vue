<template>
  <div class="nav">
    <div class="jy_nav">
      <div class="jy_nav_content">
        <div class="jy_nav_logo">
          <img class="logo_img" src="//jy-info.qicp.vip/static/jyinfo_logo.png" alt="logo">
        </div>
        <div class="jy_nav_menu">
          <div class="menu-md">
            <ul>
              <li><a href="#">首页</a></li>
              <li>
                <a href="#">产品</a>
                <span class="glyphicon glyphicon-menu-down btn-xs" aria-hidden="true" />
              </li>
              <li>
                <a href="#" class="dropdown-toggle">核心业务</a>
                <span class="glyphicon glyphicon-menu-down btn-xs" aria-hidden="true" />
              </li>
              <li><a href="#">成功案例</a></li>
              <li><a href="#">关于我们</a></li>
              <li><a href="#">企业招聘</a></li>
            </ul>
          </div>
          <div class="menu-xs">
            <span class="glyphicon glyphicon-menu-hamburger btn-lg" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
    <div class="xbk"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    handleScroll: function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let navigation = document.getElementsByClassName('jy_nav')[0];
      let navigation_xbk = document.getElementsByClassName('xbk')[0];
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
div, span,
ul, li,
a{
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  font-weight: 400;
}
a:hover {
  text-decoration: none;
}
ul,li {
  list-style: none;
}

/* 导航栏 */
.jy_nav {
  width: 19.2rem;
  height: 0.7rem;
  position: fixed;
  top: 0;
  z-index: 10;
}

/* 导航栏内容部分 */
.jy_nav .jy_nav_content {
  width: 14rem;
  height: 0.7rem;
  margin: 0 auto;
  display: flex;
}
/* 导航栏——logo部分 */
.jy_nav .jy_nav_logo {
  width: 1.46rem;
  height: 100%;
  display: flex;
  align-items: center;
}
.jy_nav .jy_nav_logo .logo_img {
  width: 1.46rem;
  height: 0.38rem;
}

/* 导航栏——菜单部分 */
.jy_nav .jy_nav_menu {
  width: 8.76rem;
  height: 0.7rem;
  margin-left: 3.78rem;
  text-align: center;
  display: flex;
  align-items: center;
}
.jy_nav_menu ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.jy_nav_menu ul li {
  height: 0.7rem;
  float: left;
  display: flex;
  align-items: center;
}
.jy_nav_menu ul li a {
  width: 0.75rem;
  height: 0.16rem;
  font-size: 0.16rem;
  font-family: Microsoft YaHei,sans-serif;
  font-weight: 400;
  color: #ffffff;
  opacity:0.6;
}
.jy_nav_menu ul li span {
  font-size: 0.16rem;
  color: #ffffff;
  opacity:0.6;
  position: relative;
  left: -0.01rem ;
}
.jy_nav_menu ul li:hover {
  border-bottom: 0.02rem solid #ffffff;
}
.jy_nav_menu ul li:hover a {
  opacity: 1;
}
.jy_nav_menu ul li:hover span {
  opacity: 1;
}


@media screen and (min-width: 768px) {
  .menu-md {
    display: block;
    width: 100%;
  }
  .menu-xs {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .jy_nav {
    height: 0.7rem;
  }
  .menu-md {
    display: none;
  }
  .menu-xs {
    display: block;
    width: 100%;
    text-align: right;
  }
  .menu-xs span {
    margin: 0 0.5rem;
    color: white;
  }
}

</style>
