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
              <li class="jy_active"><a href="#">首页</a></li>
              <li @mouseover="mouseoverMenu($event)" @mouseout="mouseoutMenu($event)">
                <a href="#">产品&nbsp;<span class="glyphicon glyphicon-menu-down menu_icon" aria-hidden="true"></span></a>
                <div class="dropdownMenu jy_hidden">
                  <ul>
                    <li><a href="#">产品 a</a></li>
                    <li><a href="#">产品 b</a></li>
                    <li><a href="#">产品 c</a></li>
                  </ul>
                </div>
              </li>
              <li @mouseover="mouseoverMenu($event)" @mouseout="mouseoutMenu($event)">
                <a href="#" class="dropdown-toggle">核心业务&nbsp;<span class="glyphicon glyphicon-menu-down menu_icon" aria-hidden="true"></span></a>
                <div class="dropdownMenu jy_hidden">
                  <ul>
                    <router-link to="/soft"><li><a href="#">软件</a></li></router-link>
                    <router-link to="/weak"><li><a href="#">弱电</a></li></router-link>
                    <router-link to="/devops"><li><a href="#">运维</a></li></router-link>
                  </ul>
                </div>
              </li>
              <li><a href="#">成功案例</a></li>
              <li><a href="#">关于我们</a></li>
              <li><router-link to="/recruitment">企业招聘</router-link></li>
            </ul>
          </div>
          <div class="menu-xs">
            <div @click="showMenu" class="glyphicon glyphicon-menu-hamburger" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
    <div class="phone-menu" v-show="menuShow">
      <div><a href="#">首页</a></div>
      <div><a href="#">产品</a></div>
      <div><a href="#">核心业务</a></div>
      <div><a href="#">成功案例</a></div>
      <div><a href="#">关于我们</a></div>
      <div><router-link to="/recruitment"><a href="#">企业招聘</a></router-link></div>
    </div>
    <div class="xbk"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      menuShow: false,
      menuCount: 0
    }
  },
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
    },
    showMenu () {
      this.menuShow = this.menuShow !== true;
    },
    mouseoverMenu (that) {
      that.currentTarget.firstElementChild.firstElementChild.className = "glyphicon glyphicon-menu-up";
      that.currentTarget.lastElementChild.className = "dropdownMenu jy_show";
    },
    mouseoutMenu (that) {
      that.currentTarget.firstElementChild.firstElementChild.className = "glyphicon glyphicon-menu-down";
      that.currentTarget.lastElementChild.className = "dropdownMenu jy_hidden";
    },
    clickMenu () {
      let menu = document.getElementsByClassName("menu-md")[0].firstElementChild.getElementsByTagName("li");
      let menuLength = menu.length;
      let that = this;
      for(let i=0; i< menuLength; i++){
        menu[i].onclick= function() {
          alert(that.menuCount)
          alert(i)
          menu[that.menuCount].className = "";
          menu[i].className = "active";
          that.menuCount = i
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
    this.clickMenu();
  },
  destroyed() {
    // 离开该页面需要移除这个监听的事件，不然会报错
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.jy_hidden {
  display: none;
}
.jy_show {
  display: block;
}
.jy_active{
  border-bottom: #ffffff solid 2px;
}
.jy_active > a {
  color: black;
}

/* 导航栏 */
.nav {
  width: 19.2rem;
}
.nav:hover {
  background-color: #111F35;
}

.jy_nav {
  width: 19.2rem;
  height: 0.7rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
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
.jy_nav_menu > .menu-md > ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.jy_nav_menu > .menu-md > ul > li {
  height: 0.7rem;
  float: left;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.jy_nav_menu > .menu-md > ul > li > a {
  width: 0.62rem;
  height: 0.16rem;
  font-size: 0.16rem;
  font-family: Microsoft YaHei,sans-serif;
  font-weight: 400;
  color: #ffffff;
  padding: 0 -0.19rem;
  opacity:0.6;
  white-space: nowrap;
}
.jy_nav_menu  > .menu-md > ul > li > a > span {
  font-size: 0.12rem;
  color: #ffffff;
  opacity:0.6;
}
.jy_nav_menu > .menu-md > ul > li:hover {
  border-bottom: 0.02rem solid #ffffff;
}
.jy_nav_menu > .menu-md > ul > li:hover > a {
  opacity: 1;
}

.jy_nav_menu .menu-md .dropdownMenu {
  width: 1rem;
  position: absolute;
  top: 0.7rem;
  background-color: #111F35;
}
.jy_nav_menu .menu-md .dropdownMenu ul {
}
.jy_nav_menu .menu-md .dropdownMenu ul li {
  height: 0.45rem;
}
.jy_nav_menu .menu-md .dropdownMenu ul li:hover {
  background-color: #8c8c8c;
}

.jy_nav_menu .menu-md .dropdownMenu ul li a {
  line-height: 0.45rem;
  font-size: 0.16rem;
  color: #ffffff;
}

/* 下划线 */
.nav .xbk{
  width: 19.2rem;
  height: 0.01rem;
  background:rgba(255,255,255,1);
  opacity:0.4;
  position: fixed;
  top: 0.7rem;
  z-index: 100;
}

/* 手机菜单 */
.phone-menu {
  z-index: 100;
  color: #ffffff;
  background-color: #111F35;

}
.phone-menu div {
  height: 0.6rem;
  display: flex;
  align-items: center;
}
.phone-menu div a{
  margin: 0 auto;
  color: white;
}
.phone-menu div:hover {
  background-color: #8c8c8c;
}
.menu-md {
  display: block;
  width: 100%;
}
.menu-xs {
  display: none;
}


@media screen and (max-width: 768px) {
  .nav {
    background-color: #111F35;
  }
  .jy_nav {

  }
  .jy_nav_content {
    width: 6rem;
    margin: 0 auto;
  }
  .jy_nav_logo img {
    margin-left: -1.3rem;
  }
  .jy_nav_menu {
    margin-right: 1.3rem;
  }
  .menu-md {
    display: none;
  }
  .menu-xs {
    display: block;
  }

  .menu-xs div {
    color: #ffffff;
  }

  .phone-menu{
    width: 9.4rem;
  }
}

</style>
