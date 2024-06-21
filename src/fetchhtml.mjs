async function getHtml(url) {
  const response = await fetch(url);
  switch (response.status) {
    // status "OK"
    case 200:
      var template = await response.text();
      console.log(template);
      break;
    // status "Not Found"
    case 404:
      console.log("Not Found");
      break;
  }
}

export default getHtml;
