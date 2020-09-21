<template>
  <div class="jy_navbar">
    <div class="nav_content">
      <div class="nav_logo">
        <img src="https://www.jy-info.com/img/logo.png" alt="logo">
      </div>
      <div class="nav_list">
        <ul>
            <li class="nav_li">
              <router-link id="jy_nav_active" to="/">首页</router-link>
            </li>
            <li class="nav_li" @mouseover="mouseoverMenu($event)" @mouseout="mouseoutMenu($event)">
              <a>产品&nbsp;<span class="glyphicon glyphicon-menu-down" /></a><br/>
              <div class="dropdown_menu jy_nav_hidden">
                <ul>
                  <li><a>产品 1</a></li>
                  <li><a>产品 2</a></li>
                  <li><a>产品 3</a></li>
                </ul>
              </div>
            </li>
            <li class="nav_li" @mouseover="mouseoverMenu($event)" @mouseout="mouseoutMenu($event)">
              <a class="core_profession">核心业务&nbsp;<span class="glyphicon glyphicon-menu-down" /></a><br/>
              <div class="dropdown_menu jy_nav_hidden">
                <ul>
                  <li><router-link to="/soft">软件</router-link></li>
                  <li><router-link to="/weak">弱电</router-link></li>
                  <li><router-link to="/devops">运维</router-link></li>
                  <li><router-link to="/kylin">麒麟大数据</router-link></li>
                  <li><router-link to="/dmsca">端玛科技</router-link></li>
                </ul>
              </div>
            </li>
            <li class="nav_li">
              <a>成功案例</a>
            </li>
            <li class="nav_li">
              <a>关于我们</a>
            </li>
            <li class="nav_li">
              <router-link to="/recruitment">企业招聘</router-link>
            </li>
          </ul>
      </div>
      <div class="nav_list_phone glyphicon glyphicon-menu-hamburger" @click="handlePhoneMenu"></div>
    </div>
    <div class="nav_phone_list" v-show="navPhoneMenuIsShow">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/">产品&nbsp;<span class="glyphicon glyphicon-menu-down" /></router-link>
        </li>
        <li>
          <router-link to="/">核心业务&nbsp;<span class="glyphicon glyphicon-menu-down" /></router-link>
        </li>
        <li>
          <router-link to="/">成功案例</router-link>
        </li>
        <li>
          <router-link to="/">关于我们</router-link>
        </li>
        <li>
          <router-link to="/recruitment">企业招聘</router-link>
        </li>
      </ul>
    </div>
    <div class="nav_underscore"></div>
  </div>
</template>

<script>
export default {
  name: "JyHeader",
  data () {
    return {
      currentMenu: 0,
      navPhoneMenuIsShow: false
    }
  },
  methods: {
    // 鼠标移入菜单事件，更改图标和CSS样式
    mouseoverMenu (event) {
      event.currentTarget.firstElementChild.firstElementChild.className = "glyphicon glyphicon-menu-up"
      event.currentTarget.lastElementChild.className = "dropdown_menu jy_nav_show"
      event.currentTarget.firstElementChild.setAttribute('style', 'border-bottom: 0.02rem solid transparent;')
    },
    // 鼠标移出菜单事件，更改图标和CSS样式
    mouseoutMenu (event) {
      event.currentTarget.firstElementChild.firstElementChild.className = "glyphicon glyphicon-menu-down"
      event.currentTarget.lastElementChild.className = "dropdown_menu jy_nav_hidden"
    },
    // 点击菜单添加 .active 样式
    clickMenu () {
      let navMenuList = document.getElementsByClassName("nav_li");
      let that = this;
      for (let i = 0; i < navMenuList.length; i++) {
        navMenuList[i].onclick= function() {
          navMenuList[that.currentMenu].getElementsByTagName("a")[0].id = "no_active";
          navMenuList[i].getElementsByTagName("a")[0].id = "jy_nav_active";
          that.currentMenu = i
        }
      }
    },
    // 鼠标滚动修改导航栏背景，下划线的显示与隐藏
    handleScroll: function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let nav = document.getElementsByClassName('jy_navbar')[0];
      let nav_underscore = document.getElementsByClassName('nav_underscore')[0];
      // 判断背景色
      if (scrollTop === 0) {
        nav.setAttribute('style','background-color:transparent;');
        nav_underscore.setAttribute('style','background:rgba(255,255,255,1);opacity:0.4;');
      } else {
        nav.setAttribute('style','background-color:#111F35;');
        nav_underscore.setAttribute('style','background-color: transparent;');
      }
    },
    // 点击汉堡按钮，显示/隐藏手机导航栏
    handlePhoneMenu () {
      this.navPhoneMenuIsShow = !this.navPhoneMenuIsShow;
    }
  },
  created() {
  },
  mounted() {
    this.clickMenu()
    window.addEventListener('scroll', this.handleScroll, true)
  },
  beforeDestroy() {
    // 离开该页面需要移除这个监听的事件，不然会报错
    window.removeEventListener('scroll', this.handleScroll, true)
  },
}
</script>

<style scoped>
a,
a:hover {
  text-decoration-line: none;
}

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
ol, ul, li {
  list-style: none;
}

#jy_nav_active {
  color: #FFFFFF!important;
  border-bottom: 0.02rem solid #ffffff!important;
  opacity: 1!important;
}
.jy_nav_show {
  display: block;
}
.jy_nav_hidden {
  display: none;
}

/* 导航栏 */
.jy_navbar {
  width: 19.2rem;
  height: 0.7rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

/* 导航栏内容部分 */
.jy_navbar > .nav_content {
  width: 14rem;
  height: 0.7rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

/* 导航栏内容部分——nav_logo */
.jy_navbar > .nav_content > .nav_logo {
  width: 1.46rem;
  height: 0.7rem;
  display: flex;
  align-items: center;
}
.jy_navbar > .nav_content > .nav_logo > img {
  width: 100%;
  height: 0.38rem;
}

/* 导航栏内容部分——nav_list */
.jy_navbar > .nav_content > .nav_list {
  width: 9.02rem;
  height: 0.7rem;
  display: block;
}
.jy_navbar > .nav_content > .nav_list > ul {
  width: 100%;
  height: 0.7rem;
  display: flex;
  justify-content: space-between;
}
.jy_navbar > .nav_content > .nav_list > ul:hover {
  cursor: pointer;
}
.jy_navbar > .nav_content > .nav_list > ul > li {
  width: 1.08rem;
  height: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.jy_navbar > .nav_content > .nav_list > ul > li > a {
  width: 0.62rem;
  height: 0.7rem;
  font-size: 0.16rem;
  font-family: Microsoft YaHei,sans-serif;
  font-weight: 400;
  color: #FFFFFF;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
.jy_navbar > .nav_content > .nav_list > ul > li > a[class='core_profession'] {
  justify-content: left;
}
/*悬停在li标签，更改a标签的css*/
.jy_navbar > .nav_content > .nav_list > ul > li:hover > a {
  border-bottom: 0.02rem solid #ffffff;
  opacity: 1;
}

.jy_navbar > .nav_content > .nav_list .dropdown_menu {
  width: 1rem;
  position: absolute;
  top: 0.7rem;
  background-color: #111F35;
  margin-left: 0.2rem;
}
.jy_navbar > .nav_content > .nav_list > ul > li > .dropdown_menu > ul {
  width: 100%;
}
.jy_navbar > .nav_content > .nav_list > ul > li > .dropdown_menu > ul  li {
  width: 100%;
  height: 0.45rem;
  display: flex;
  align-items: center;
  text-align: center;
}
.jy_navbar > .nav_content > .nav_list > ul > li > .dropdown_menu > ul  li:hover {
  background-color: #8c8c8c;
}
.jy_navbar > .nav_content > .nav_list > ul > li > .dropdown_menu > ul  li > a {
  width: 100%;
  font-size: 0.16rem;
  color: #ffffff;
}

/* 下划线 */
.nav_underscore {
  width: 19.2rem;
  height: 0.01rem;
  background:rgba(255,255,255,1);
  opacity:0.4;
}

/* 菜单栏手机区域 */
.nav_list_phone {
  display: none;
}


@media screen and (max-width: 768px) {
  .nav_list {
    display: none !important;
  }
  .nav_list_phone {
    display: block;
  }
  .nav_underscore {
    display: none;
  }

  .jy_navbar {
    width: 100%;
    margin: 0 auto;
    background-color: #111F35 !important;
  }
  .jy_navbar > .nav_content {
    width: 75%;
  }
  .jy_navbar > .nav_content > .nav_logo {
  }
  .jy_navbar > .nav_content > .nav_list_phone {
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .jy_navbar > .nav_phone_list {
    width: 100%;
    background-color: #111F35;
    border-top: 0.01rem solid #ffffff;
    text-align: center;
  }

  .jy_navbar > .nav_phone_list > ul {
    width: 100%;
    height: 100%;
  }
  .jy_navbar > .nav_phone_list > ul > li {
    width: 100%;
    height: 0.7rem;
    line-height: 0.7rem;
  }
  .jy_navbar > .nav_phone_list > ul > li:hover {
    background-color: #8c8c8c;
  }
  .jy_navbar > .nav_phone_list > ul > li a{
    width: 100%;
    color: #ffffff;
  }
}
</style>
