const puppeteer = require("puppeteer");

async function getHtml(url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    const html = await page.content();
    return html;
  } catch (error) {
    console.error("Error fetching the URL:", error.message);
  }
}

module.exports = getHtml;
