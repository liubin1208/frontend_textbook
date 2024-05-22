import axios from 'axios';
import { load } from 'cheerio';
import fs from 'fs';

async function fetchHTML(page) {
  const offset = (page - 1) * 30;
  const resp = await axios.get(
    `https://www.maoyan.com/films?showType=3&offset=${offset}`,
    {
      headers: {
        'User-Agent': `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36`,
        Cookie: `uuid_n_v=v1; uuid=13EFE580D36511EDBE787F4E202C3018787FC762C78148FDADD73454290B395F; _csrf=5ab55ef26e6b344fc30ff08564bc687cf68a1257e15639d4d3baaae47fba7eb9; _lxsdk_cuid=183a6a04d1ec8-0466b161042d44-1a525635-168000-183a6a04d1ec8; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1680666672; _lx_utm=utm_source%3DBaidu%26utm_medium%3Dorganic; _lxsdk=13EFE580D36511EDBE787F4E202C3018787FC762C78148FDADD73454290B395F; Hm_lpvt_703e94591e87be68cc8da0da7cbd0be2=1680668712; __mta=217888425.1680666672358.1680668576333.1680668712525.11; _lxsdk_s=1874f8a3c0a-fe-c74-e18%7C%7C25`,
      },
    }
  );
  return resp.data;
}

function parse(html) {
  const $ = load(html);
  const elems = $(`.movie-list dd`);
  return elems.map((i, el) => {
    const poster = $(el).find('.movie-poster img:last-child').attr('data-src');
    const title = $(el).find('.movie-item-title').prop('title');
    return {
      poster,
      title,
    };
  });
}
const filename = './movie.md';
function fileInit() {
  fs.writeFileSync(
    filename,
    `| 海报 | 电影名 |
  | ------ | ------- |
  `
  );
}
fileInit();

async function appendFile(content) {
  return fs.promises.writeFile(filename, content, {
    flag: 'a',
  });
}

async function save(movieList) {
  const content = [...movieList]
    .map((it) => `| ![](${it.poster}) | ${it.title} |`)
    .join('\n');
  await appendFile(content);
}

export default async function fetchPage(page) {
  try {
    const html = await fetchHTML(page);
    const movieList = parse(html);
    await save(movieList);
    console.log(`数据抓取：第${page}页【完成】`);
  } catch {
    console.log(`数据抓取：第${page}页【失败】`);
  }
}
