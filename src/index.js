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
  .action((url, selector, options) => {
    try {
      getHtml(url).then((html) => {
        const textContent = getTextContent(html, selector, options);
        console.log(
          textContent.length == 0
            ? "No elements found for the given selector."
            : textContent
        );
      });
    } catch (error) {
      console.error("Error: ", error.message);
    }
  });

program.parse();
