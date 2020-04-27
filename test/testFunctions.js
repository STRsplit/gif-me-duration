const gifyParse = require('gify-parse');
const fetch = require('node-fetch');

const getDuration = async (url) => {
  const buffer = await fetch(url).then(res => res.arrayBuffer());
  const pictureDatainBinary = Buffer.from(buffer, 'base64');
  return gifyParse.getInfo(pictureDatainBinary).duration;
};

const attachDuration = async (url) => {
  const duration = await getDuration(url);
  return Object.assign({}, { url, duration })
};

const coreFunction = async (urls) => {
  urls = [].concat(urls)
  const promisedUrls = urls.map(attachDuration)
  return await Promise.all(promisedUrls);
}

module.exports = {
  getDuration,
  attachDuration,
  coreFunction
}
