<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.onresize = () => {
      window.location.reload()
    };
  }

}
</script>

<style>
div {
  padding: 0;
  margin: 0;
}
</style>
