'use strict';

// let apiQuotes = [];

function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
}

// const getQuotes = async () => {
//   const apiUrl = 'https://type.fit/api/quotes';
//   const response = await fetch(apiUrl);
//   apiQuotes = await response.json();

//   newQuote();
// };

// getQuotes();

newQuote();
