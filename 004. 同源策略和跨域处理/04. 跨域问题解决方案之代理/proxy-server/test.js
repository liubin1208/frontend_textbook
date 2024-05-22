const axios = require('axios');

axios.get('https://pvp.qq.com/web201605/js/herolist.json').then((resp) => {
  console.log(resp.data);
});
