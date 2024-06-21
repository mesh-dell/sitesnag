const cheerio = require("cheerio");

const getTextContent = (html, selectorCSS, options) => {
  const $ = cheerio.load(html);

  let textContent;
  if (options.first) {
    textContent = $(`.${selectorCSS}`).first().text();
    return textContent;
  }
  textContent = $(`.${selectorCSS}`).text();
  return textContent;
};

module.exports = getTextContent;
