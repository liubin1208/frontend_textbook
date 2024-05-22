<template>
  <div
    class="card-container"
    :class="{
      flip: showFlip,
    }"
    ref="card"
  >
    <div class="card1 card-item">{{ next }}</div>
    <div class="card2 card-item">{{ next }}</div>
    <div class="card3 card-item">{{ current }}</div>
    <div class="card4 card-item">{{ current }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
    },
  },
  mounted() {
    this.$refs.card.addEventListener(
      'transitionend',
      this.transitionEndHandler
    );
  },
  beforeDestroy() {
    this.$refs.card.removeEventListener(
      'transitionend',
      this.transitionEndHandler
    );
  },
  data() {
    return {
      current: this.value,
      next: 0,
      showFlip: false,
    };
  },
  methods: {
    transitionEndHandler() {
      this.showFlip = false;
      this.current = this.next;
    },
  },
  watch: {
    value(newVal, oldVal) {
      this.showFlip = true;
      this.current = oldVal;
      this.next = newVal;
    },
  },
};
</script>

<style scoped>
.card-container {
  background: #d7d7d7;
  width: 100px;
  height: 100px;
  position: relative;
  perspective: 500px;
  font-size: 4em;
  text-align: center;
}
.card-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  height: 2px;
  background: linear-gradient(to bottom, #000, #000 1px, #fff 1px);
  width: 100%;
  margin-top: -1px;
  z-index: 99;
}

.card-item {
  position: absolute;
  width: 100%;
  height: 50%;
  left: 0;
  top: 0;
  overflow: hidden;
  background: #000;
  color: #fff;
}
.card1 {
  line-height: 100px;
}
.card2 {
  top: 50%;
  line-height: 0;
  transform-origin: center top;
  backface-visibility: hidden;
  transform: rotateX(180deg);
  z-index: 2;
}

.card3 {
  line-height: 100px;
  transform-origin: center bottom;
  backface-visibility: hidden;
  z-index: 2;
}

.card4 {
  top: 50%;
  line-height: 0;
}

.card-container.flip .card2 {
  transform: rotateX(0);
}
.card-container.flip .card3 {
  transform: rotateX(-180deg);
}

.card-container.flip .card-item {
  transition: 0.5s;
}
</style>
