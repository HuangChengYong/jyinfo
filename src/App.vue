<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.onresize = () => {
      window.location.reload()
      window.scrollTo(0, 0)
    };
  }
}
</script>
<style>
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

a,
a:active,/* 正在点击的链接 */
a:hover,/* 鼠标悬浮时的链接 */
a:visited,/* 已经访问过的链接 */
a:link{/* 已经被正常访问过的链接 */
  text-decoration: none;
}

a {
  outline: none;
  color: #ffffff;
}
#app{
  padding: 0;
  margin: -0.2rem 0 0;
}
</style>
