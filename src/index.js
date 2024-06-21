const { Command } = require("commander");
const getHtml = require("./fetchhtml.js");
const getTextContent = require("./cheerio.js");

const program = new Command();

program
  .name("sitesnag")
  .description(
    "CLI application that takes a URL and a CSS selector arguments and prints the text content of the element that matches the selector"
  )
  .version("1.0.0");

program
  .command("snag")
  .description(
    "Print the text content of the element that matches the passed CSS selector"
  )
  .argument("<URL>", "URL to scrape")
  .argument("<Selector>", "CSS selector")
  .option("--first", "display just the first element's text content")
  .option("-s, --separator <char>", "separator character", ",")
  .action((url, selector, options) => {
    const limit = options.first ? 1 : undefined;
    // console.log(url.split(options.separator, limit) + "\n" + selector);

    getHtml(url).then((html) => {
      const textContent = getTextContent(html, selector);
      console.log(
        textContent.length == 0
          ? "No elements found for the given selector."
          : textContent
      );
    });
  });

program.parse();
