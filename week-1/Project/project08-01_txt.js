"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Rodrigo Piccardo
      Date:   10/26/2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/







/*---------------Interface Code -----------------*/
"use strict";

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

function Timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// runPause method on Timer prototype
Timer.prototype.runPause = function(timer, minBox, secBox) {
  if (timer.timeID) {
    // Timer is running; pause it
    clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    // Timer is paused; start it
    timer.timeID = setInterval(function countdown() {
      if (timer.seconds > 0) {
        timer.seconds--;
      } else if (timer.minutes > 0) {
        timer.minutes--;
        timer.seconds = 59;
      } else {
        // Timer reached 0:0, stop it
        clearInterval(timer.timeID);
        timer.timeID = null;
      }

      // Update display
      minBox.value = timer.minutes;
      secBox.value = timer.seconds;
    }, 1000);
  }
};

const myTimer = new Timer(Number(minBox.value), Number(secBox.value));

// Update timer when input boxes change
minBox.onchange = function() {
  myTimer.minutes = Number(minBox.value);
};

secBox.onchange = function() {
  myTimer.seconds = Number(secBox.value);
};

// Run/pause timer when button is clicked
runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
};