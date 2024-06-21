# sitesnag

**sitesnag** is a command-line interface (CLI) application that allows you to scrape text content from a web page using Puppeteer and Cheerio. It accepts a URL and a CSS selector as arguments using the `commander` module and prints the text content of the element that matches the selector. Additionally, it supports an option to display only the text content of the first matched element.

## Installation

Ensure you have Node.js (>=12.0.0) installed on your system. Clone the repository and install dependencies using npm:

```bash
git clone https://github.com/mesh-dell/sitesnag.git
cd sitesnag
npm install
```

## Usage

To use `sitesnag`, run the CLI command `snag` followed by a URL, a CSS selector, and optionally `--first`:

```bash
node sitesnag.js snag <URL> <Selector> [--first]
```

### Arguments

- `<URL>`: URL of the web page from which to scrape text content.
- `<Selector>`: CSS selector to target the element whose text content you want to scrape.

### Options

- `--first`: Display only the text content of the first element that matches the selector.

### Examples

1. Scrape the text content of the `text-xl` class from `https://example.com`:

   ```bash
   node sitesnag.js snag https://example.com text-xl
   ```

2. Scrape the text content of the first `text-white` class from `https://anotherexample.com`:

   ```bash
   node sitesnag.js snag https://anotherexample.com text-white --first
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.