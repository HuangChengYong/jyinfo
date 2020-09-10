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
</style>
