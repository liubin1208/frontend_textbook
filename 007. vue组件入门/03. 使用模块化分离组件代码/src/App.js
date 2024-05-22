import StarRate from './components/StarRate.js';

const template = `
<div>
  <star-rate></star-rate>
  <star-rate></star-rate>
  <star-rate></star-rate>
  <star-rate></star-rate>
</div>
`;

// 根组件
export default {
  components: {
    'star-rate': StarRate,
  },
  template,
};
