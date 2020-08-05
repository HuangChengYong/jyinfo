<template>
  <div class="my_header">
    <div id="navigation" class="navigation_bar" >
      <div class="navigation_left">
        <img src="//jy-info.qicp.vip/static/jyinfo_logo.png" alt="甲悦信息" class="jylogo">
      </div>
      <div class="navigation_right">
        <button type="button" class="btn btn-default navbar-btn">首页</button>
        <button type="button" class="btn btn-default navbar-btn">产品</button>
        <button type="button" class="btn btn-default navbar-btn">核心业务</button>
        <button type="button" class="btn btn-default navbar-btn">成功案例</button>
        <button type="button" class="btn btn-default navbar-btn">关于我们</button>
        <button type="button" class="btn btn-default navbar-btn">企业招聘</button>
      </div>
      <div id="xbk"></div>
    </div>
  </div>
</template>

<script>
import dataSource from "../assets/utils/devops-data";

export default {
  name: "MyHeader",
  methods: {
    // 保存滚动值，这是兼容的写法
    handleScroll: function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let navigation = document.getElementById('navigation');
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
.navigation_bar {
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  z-index: 1;
}

/* 导航栏左 */
.navigation_bar .navigation_left {
  position: absolute;
  width: 666px;
  height: 70px;
}

/* 导航栏右 */
.navigation_bar .navigation_right {
  position: absolute;
  width: 1254px;
  height: 70px;
  left: 666px;
  padding-left: 64px;
}
.navigation_bar .navigation_right button {
  margin: 26px 54px;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: 400;
  font-size:16px;
  color:rgba(255,255,255,1);
  opacity:0.6;
}

/* logo图 */
.navigation_bar .jylogo {
  width: 146px;
  height: 38px;
  position: absolute;
  top: 16px;
  left: 260px;
}

.navigation_bar #xbk {
  width:1920px;
  height:2px;
  position: relative;
  top: 70px;
  background-color: #FFFFFF;
  opacity:0.4;
}
</style>
