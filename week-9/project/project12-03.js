"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Rodrigo Piccardo 
      Date: 12/21/2025

      Filename: project12-03.js
*/

$(document).ready(function() {
  // Apply click() to article > h2
  $("article > h2").click(function() {
    // Step 4: Declare variables
    const heading = $(this);
    const list = heading.next(); // next sibling element
    const headingImage = heading.children("img"); // img inside h2

    // Step 5: Slide toggle the list over 0.5 seconds
    list.slideToggle(500);

    // Step 6: Toggle the heading image symbol
    if (headingImage.attr("src") === "plus.png") {
      headingImage.attr("src", "minus.png");
    } else {
      headingImage.attr("src", "plus.png");
    }
  });
});
