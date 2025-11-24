/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Rodrigo Piccardo
  Date: 11/23/2025
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false },
  { tableNumber: 5, capacity: 2, isReserved: false },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  const table = tables.find((t) => t.tableNumber === tableNumber);

  if (!table) {
    callback(`Table ${tableNumber} does not exist.`, "error");
    return;
  }

  if (table.isReserved) {
    callback(`Sorry, Table ${tableNumber} is already reserved.`, "error");
    return;
  }

  // Mark the table as reserved
  table.isReserved = true;

  // Simulate reservation delay
  setTimeout(() => {
    callback(`Success! Table ${tableNumber} has been reserved.`, "success");
  }, time);
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const tableNumber = parseInt(document.getElementById("tableNumber").value);
    const messageDiv = document.getElementById("message");

    if (!name || !tableNumber) {
      messageDiv.textContent = "Please enter your name and a table number.";
      messageDiv.className = "error";
      return;
    }

    reserveTable(
      tableNumber,
      (msg, type) => {
        messageDiv.textContent = msg;
        messageDiv.className = type;
      },
      2000
    );
  });
