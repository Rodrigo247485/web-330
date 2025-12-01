"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Rodrigo Piccardo
      Date: 11/30/2025   

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {
  let codeValue = postalCode.value.trim();
  let countryValue = country.value;

  // Clear previous values
  place.value = "";
  region.value = "";

  // Fetch data from the API
  fetch(`https://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Location not found");
      }
      return response.json();
    })
    .then((json) => {
      // Set place and region using bracket notation
      place.value = json.places[0]["place name"];
      region.value =
        json.places[0]["state abbreviation"] || json.places[0]["state"];
    })
    .catch((error) => console.log(error));
};
