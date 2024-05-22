<template>
  <div class="container">
    <div class="star-item">
      <label class="title">满意度</label>
      <star-rate></star-rate>
      <span class="desc">3/5</span>
    </div>
    <div class="star-item">
      <label class="title">用户星级</label>
      <star-rate></star-rate>
      <span class="desc">5/10</span>
    </div>
    <div class="star-item">
      <label class="title">经验等级</label>
      <star-rate></star-rate>
      <span class="desc">1/3</span>
    </div>
  </div>
</template>

<script>
import StarRate from './components/StarRate.vue';

export default {
  components: {
    StarRate,
  },
};
</script>

<style scoped>
.container {
  color: #333;
  font-size: 12px;
}
.star-item {
  display: flex;
  column-gap: 1em;
  align-items: center;
}
.title {
  width: 50px;
  text-align: right;
}
.desc {
  letter-spacing: 3px;
  color: #888;
}
</style>
