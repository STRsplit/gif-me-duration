const gifyParse = require('gify-parse');
const axios = require('axios');

const getDuration = async (url) => {
  const { data: b64 } = await axios(url, { responseType: 'arraybuffer' });
  const pictureDatainBinary = Buffer.from(b64, 'base64');
  return gifyParse.getInfo(pictureDatainBinary).duration;
};

const attachDuration = async (url) => {
  const duration = await getDuration(url);
  return Object.assign({}, { url, duration })
};

module.exports = async (urls) => {
  let gifURLs = [].concat(urls);
  const promisedUrls = gifURLs.map(attachDuration)
  return await Promise.all(promisedUrls);
};
