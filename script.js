'use strict';

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quote.author) {
    authorText.textContent = 'unknown';
  } else {
    quoteText.textContent = quote.text;
  }
  authorText.textContent = quote.author;

  if (quote.text.length > 50) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
}

const getQuotes = async () => {
  const apiUrl = 'https://type.fit/api/quotes';
  const response = await fetch(apiUrl);
  apiQuotes = await response.json();

  newQuote();
};

getQuotes();
