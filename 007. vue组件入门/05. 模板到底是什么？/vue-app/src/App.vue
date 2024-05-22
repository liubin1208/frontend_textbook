<template>
  <div>
    <star-rate></star-rate>
    <star-rate></star-rate>
    <star-rate></star-rate>
  </div>
</template>

<script>
import StarRate from './components/StarRate.vue';
console.log(StarRate);
export default {
  components: {
    'star-rate': StarRate,
  },
};
</script>
