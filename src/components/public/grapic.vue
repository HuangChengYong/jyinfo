<template>
  <div class="hexagon">
    <div class="hexagon_left"></div>
    <div class="hexagon_center"></div>
    <div class="hexagon_right"></div>
    <div class="hexagon_content">
      <img :src="allRound.desopsImg" :alt="allRound.desopsImg">
      <span class="hexagon_title">{{ allRound.desopsName }}</span>
      <span class="hexagon_despo_content" v-for=" (item, index) in allRound.desopsContent" :key="index">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grapic",
  data() {
    return {

    }
  },
  props: ['allRound']
}
</script>

<style scoped>
  @import "../../../src/assets/css/hexagon.css";
</style>
