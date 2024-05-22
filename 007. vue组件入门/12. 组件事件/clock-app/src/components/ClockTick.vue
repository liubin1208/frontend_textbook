<template>
  <div class="clock">
    <div class="tick">
      <clock-card :value="clock.hour"></clock-card>
      <span class="split">:</span>
      <clock-card :value="clock.minute"></clock-card>
      <span class="split">:</span>
      <clock-card :value="clock.second"></clock-card>
    </div>
  </div>
</template>

<script>
import ClockCard from './ClockCard.vue';
export default {
  components: {
    ClockCard,
  },
  props: {
    initSeconds: {
      type: Number,
      required: true,
    },
  },
  beforeDestroy() {
    clearInterval(this.timerId);
  },
  data() {
    return {
      seconds: 0,
      timerId: null,
      start: 0,
    };
  },
  computed: {
    clock() {
      let s = this.seconds;
      const hour = Math.floor(s / 3600)
        .toString()
        .padStart(2, '0');
      s -= hour * 3600;
      const minute = Math.floor(s / 60)
        .toString()
        .padStart(2, '0');
      s -= minute * 60;
      const second = s.toString().padStart(2, '0');
      return {
        hour,
        minute,
        second,
      };
    },
  },
  watch: {
    initSeconds: {
      immediate: true,
      handler(val) {
        this.seconds = val;
        clearInterval(this.timerId);
        this.timerId = setInterval(this.tickHandler, 1000);
        this.start = Date.now();
      },
    },
  },
  methods: {
    tickHandler() {
      this.seconds--;
      if (this.seconds === 0) {
        clearInterval(this.timerId);
        const duration = Date.now() - this.start;
        // 触发事件
        this.$emit('over', duration);
        return;
      }
    },
  },
};
</script>

<style scoped>
.clock {
  display: flex;
  justify-content: center;
}
.tick {
  display: flex;
  column-gap: 10px;
  align-items: center;
}
.split {
  font-size: 5em;
  transform: translateY(-10px);
  color: #999;
}
</style>
