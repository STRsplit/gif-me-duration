const base64Img = require('base64-img');
const gifyParse = require('gify-parse');

const base64Async = (url) => {
  return new Promise((resolve, reject) => {
    base64Img.requestBase64(url, (err, res, body) => {
      if (err) reject(err);
      else resolve(body)
    })
  });
};

const getDuration = async (url) => {
  const b64 = await base64Async(url);
  const b64Stripped = b64.replace(/^data:image\/[a-z]+;base64,/, "");
  const pictureDatainBinary = Buffer.from(b64Stripped, 'base64');
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
  base64Async,
  getDuration,
  attachDuration,
  coreFunction
}
