<template>
  <div class="container">
    <p>5秒后跳转到首页</p>
    <clock-tick @over="handler" :init-seconds="5"></clock-tick>
  </div>
</template>

<script>
import ClockTick from './components/ClockTick.vue';
export default {
  components: {
    ClockTick,
  },
  methods: {
    handler(duration) {
      // console.log('结束了', duration);
      location.href = 'https://www.baidu.com';
    },
  },
};
</script>

<style scoped></style>
