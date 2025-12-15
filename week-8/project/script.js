/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Rodrigo Piccardo
  Date: 12/14/2025
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  {
    title: "Harry Potter",
    director: "Chris Columbus",
    year: 2001,
    synopsis:
      "A young boy discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry, where he begins his magical journey.",
  },
  {
    title: "The Lord of the Rings",
    director: "Peter Jackson",
    year: 2001,
    synopsis:
      "A hobbit named Frodo embarks on a perilous journey to destroy the One Ring and save Middle-earth from the Dark Lord Sauron.",
  },
  {
    title: "Ready Player One",
    director: "Steven Spielberg",
    year: 2018,
    synopsis:
      "In a dystopian future, a young gamer enters a virtual reality universe to find an Easter egg left by the creator, with the prize of immense fortune.",
  },
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!title) {
        reject("Please enter a movie title.");
        return;
      }

      const movie = movies.find(
        (m) => m.title.toLowerCase() === title.toLowerCase()
      );

      if (movie) {
        resolve(movie);
      } else {
        reject(`Movie "${title}" not found.`);
      }
    }, 1000);
  });
}

document
  .getElementById("movie-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    // Implement this function
    const titleInput = document.getElementById("title-input").value.trim();
    const titleEl = document.getElementById("movie-title");
    const directorEl = document.getElementById("movie-director");
    const yearEl = document.getElementById("movie-year");
    const synopsisEl = document.getElementById("movie-synopsis");
    const errorEl = document.getElementById("error-message");

    titleEl.textContent = "";
    directorEl.textContent = "";
    yearEl.textContent = "";
    synopsisEl.textContent = "";

    try {
      const movie = await fetchMovie(titleInput);
      errorEl.textContent = "";

      titleEl.textContent = `Title: ${movie.title}`;
      directorEl.textContent = `Director: ${movie.director}`;
      yearEl.textContent = `Release Year: ${movie.year}`;
      synopsisEl.textContent = `Synopsis: ${movie.synopsis}`;
    } catch (error) {
      errorEl.textContent = error;
    }
  });
