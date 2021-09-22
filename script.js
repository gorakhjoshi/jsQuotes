'use strict';

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  quoteText.textContent = quote.text;
  authorText.textContent = quote.author;
}

const getQuotes = async () => {
  const apiUrl = 'https://type.fit/api/quotes';
  const response = await fetch(apiUrl);
  apiQuotes = await response.json();

  newQuote();
};

getQuotes();
