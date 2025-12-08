/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Rodrigo Piccardo
  Date: 12/07/2025
  Filename: chefs.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  {
    name: "Emma Carter",
    specialty: "Italian pasta dishes",
    weakness: "Baking desserts",
    restaurantLocation: "Sunset Bistro",
  },
  {
    name: "Liam Thompson",
    specialty: "Gourmet burgers",
    weakness: "Seafood",
    restaurantLocation: "Maple Grill",
  },
  {
    name: "Sofia Martinez",
    specialty: "Vegan cuisine",
    weakness: "Spicy dishes",
    restaurantLocation: "Green Fork",
  },
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve(chefs[0]);
      } else {
        reject("Failed to retrieve Chef 1 data.");
      }
    }, 2000);
  });
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[1]);
    }, 3000);
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(chefs[2]);
    }, 4000);
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then(
  (results) => {
    results.forEach((result, index) => {
      const chefDiv = document.getElementById(`chef${index + 1}`);
      chefDiv.innerHTML = ""; 

      if (result.status === "fulfilled") {
        const chef = result.value;
        chefDiv.innerHTML = `
          <h2>${chef.name}</h2>
          <p><strong>Specialty:</strong> ${chef.specialty}</p>
          <p><strong>Weakness:</strong> ${chef.weakness}</p>
          <p><strong>Restaurant:</strong> ${chef.restaurantLocation}</p>
        `;
      } else {
        const errorMsg = document.createElement("p");
        errorMsg.textContent = result.reason;
        errorMsg.classList.add("error-message");
        chefDiv.appendChild(errorMsg);
      }
    });
  }
);
