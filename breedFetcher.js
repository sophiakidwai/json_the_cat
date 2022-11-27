const request = require("request");

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    }
  
    const data = JSON.parse(body); // to turn body string into an object
    if (data.length === 0) {
      callback(error);
    } else {
      callback(error, data[0].description);
    }
  });

};

module.exports = { fetchBreedDescription };