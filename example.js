/* filename: sophisticated_code*/

// This code is an implementation of a movie ticket booking system.
// It includes functionalities like seat selection, ticket price calculation,
// and booking confirmation.

// Define the movie shows with their timing and prices
const shows = [
  { name: 'Avengers: Endgame', timing: '2:00 PM', price: 12.99 },
  { name: 'Toy Story 4', timing: '5:00 PM', price: 10.99 },
  { name: 'The Lion King', timing: '8:00 PM', price: 14.99 }
];

// Define the auditorium seating layout with available seats and rows
const seatingLayout = {
  rows: 10,
  seatsPerRow: 10,
  availableSeats: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  ]
};

// Initialize variables
let selectedMovie = null;
let selectedTiming = null;
let selectedSeats = [];
let totalPrice = 0;

// Display available shows
console.log('Available Shows:');
shows.forEach((show, index) => {
  console.log(`${index + 1}. ${show.name} (${show.timing}) - $${show.price.toFixed(2)}`);
});

// User selects a show
const userInput = prompt('Enter the show number to book a ticket:');
const selectedShowIndex = parseInt(userInput) - 1;

// Validate the selected show index
if (selectedShowIndex < 0 || selectedShowIndex >= shows.length) {
  console.log('Invalid show number.');
  process.exit(1);
}

// Set the selected show
selectedMovie = shows[selectedShowIndex].name;
selectedTiming = shows[selectedShowIndex].timing;

// Display seating layout
console.log(`\nSeating Layout for ${selectedMovie} (${selectedTiming}):`);
console.log('-----------------------');
for (let row = 0; row < seatingLayout.rows; row++) {
  console.log(`Row ${row + 1}: ${seatingLayout.availableSeats[row].join(', ')}`);
}

// User selects seats
let selectedSeat = prompt('Enter the seat number to select (comma-separated):');

while (selectedSeat !== 'done') {
  // Parse and validate the selected seats
  const seats = selectedSeat.split(',').map(Number);
  const invalidSeats = seats.filter(
    seat => seat < 1 || seat > seatingLayout.seatsPerRow || !seatingLayout.availableSeats[row][seat - 1]
  );

  if (invalidSeats.length > 0) {
    console.log(`Invalid seats: ${invalidSeats.join(', ')}. Please select valid seats.`);
  } else {
    selectedSeats.push(...seats);
    seats.forEach(seat => {
      seatingLayout.availableSeats[row][seat - 1] = false;
    });
  }

  selectedSeat = prompt('Enter the seat number to select (comma-separated), or "done" to finish:');
}

// Calculate the total price
totalPrice = selectedSeats.reduce((total, seat) => total + shows[selectedShowIndex].price, 0);

// Display booking confirmation
console.log('\nBooking Confirmation:');
console.log(`Movie: ${selectedMovie}`);
console.log(`Timing: ${selectedTiming}`);
console.log(`Number of Seats: ${selectedSeats.length}`);
console.log(`Total Price: $${totalPrice.toFixed(2)}`);

// Update seating layout
console.log('\nUpdated Seating Layout:');
console.log('-----------------------');
for (let row = 0; row < seatingLayout.rows; row++) {
  console.log(`Row ${row + 1}: ${seatingLayout.availableSeats[row].join(', ')}`);
}

// End of the code.