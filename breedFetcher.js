const request = require("request");

const args = process.argv.slice(2);
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body); // to turn body string into an object
  if (data.length === 0) {
    console.log("Breed not found");
  } else {
    console.log(error, data[0].description);
  }
});