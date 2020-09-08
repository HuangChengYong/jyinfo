<template>
  <div class="hexagon">
    <div class="hexagon_left"></div>
    <div class="hexagon_center"></div>
    <div class="hexagon_right"></div>
    <div class="hexagon_content">
      <img :src="allRound.image" :alt="allRound.title">
      <span class="hexagon_title">{{ allRound.title }}</span>
      <span class="hexagon_span" v-for=" (item, index) in allRound.content" :key="index">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hexagon",
  data() {
    return {

    }
  },
  props: ['allRound']
}
</script>

<style scoped>
@import "../../assets/css/hexagon.css";
</style>
