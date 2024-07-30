// Array of quote objects
let quotes = [
    { text: "Quote 1 text", category: "Category 1" },
    { text: "Quote 2 text", category: "Category 2" },
    // Add more quotes as needed
];

// Function to display a random quote
function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    
    // Display the random quote in the DOM
    // You can manipulate the DOM here to display the quote
}

// Function to create and add a new quote
function createAddQuoteForm() {
    // JavaScript
const quotes = ["Quote 1", "Quote 2", "Quote 3"];

const quoteForm = document.getElementById('quoteForm');
const newQuoteInput = document.getElementById('newQuoteInput');
const quoteList = document.getElementById('quoteList');

quoteForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newQuote = newQuoteInput.value;
    quotes.push(newQuote);
    
    displayQuotes();
    newQuoteInput.value = '';
});

function displayQuotes() {
    quoteList.innerHTML = '';
    quotes.forEach(function(quote) {
        const li = document.createElement('li');
        li.textContent = quote;
        quoteList.appendChild(li);
    });
}

displayQuotes();
    // Create a form to add new quotes
    // Handle user input to add new quotes to the array
}

// Event listeners or triggers for invoking the functions based on user interactions
// You can add event listeners to trigger the functions based on user interactions

// Example event listener for showing a random quote on button click
document.getElementById("randomQuoteBtn").addEventListener("click", showRandomQuote);

// Example event listener for displaying the add quote form
document.getElementById("addQuoteBtn").addEventListener("click", createAddQuoteForm);

