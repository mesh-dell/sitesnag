const cheerio = require("cheerio");

const getTextContent = (html, selectorCSS) => {
  const $ = cheerio.load(html);
  const textContent = $(`.${selectorCSS}`).text();
  return textContent;
};

export default getTextContent;
