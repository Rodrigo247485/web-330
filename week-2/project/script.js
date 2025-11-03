/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Rodrigo piccardo
  Date: 11/2/2025
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return {
        getName: function() {
            return name;
        },
        getGender: function() {
            return gender;
        },
        getClass: function() {
            return characterClass;
        }
    };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
    const name = document.getElementById("heroName").value.trim();
    const gender = document.getElementById("heroGender").value;
    const charClass = document.getElementById("heroClass").value;
  if (!name || !gender || !charClass) {
    alert("Please fill in all fields!");
    return; 
}
  // TODO: Create character
    const hero = createCharacter(name, gender, charClass);

  // TODO: Display character information
  const outputDiv = document.getElementById("characterOutput");
    outputDiv.innerHTML = `
        <h2>Your Hero</h2>
        <p><strong>Name:</strong> ${hero.getName()}</p>
        <p><strong>Gender:</strong> ${hero.getGender()}</p>
        <p><strong>Class:</strong> ${hero.getClass()}</p>
    `;
});