/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Created an array of objects filled

const quotes = [
  {
    quote: "If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off... no matter what they say.",
    source: "Barbara McClintock",
    citation: "Nobel Peace Prize Speech",
    year: 1983
  },

  {
  quote: "Science and everyday life cannot and should not be separated.",
  source: "Rosalind Franklin",
  citation: "Nobel Peace Prize Speech",
  year: 1940
  },

  {
  quote: "I hadn't been aware that there were doors closed to me until I started knocking on them.",
  source: "Gertrude B. Elion",
  citation: "Harvard University",
  year: 1920
  },

  {
  quote: "Don’t let anyone rob you of your imagination, your creativity, or your curiosity. It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
  source: "Mae Jemison",
  citation: "NASA",
  year: 1983
  },
  
  {
  quote: "We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.",
  source: "Marie Curie",
  citation: "Yale University",
  year: 1920
  },

];

//console.log("this is the quote", quotes)



/***
 * `getRandomQuote` function
***/

let number;

function getRandomQuote(array) {
  number = Math.ceil(Math.random() * quotes.length-1);
  console.log("NUMBA", number);
  let quoteGiven = quotes[number];
  console.log("quotegiven:", quoteGiven);
  return quoteGiven;
}

getRandomQuote();
/***
 * `printQuote` function
***/

function printQuote() {
  //return ("hello")
  let savedQuote = getRandomQuote();
  let html = `
  
    <p class="quote"> ${savedQuote.quote} </p> 
    <p class="source"> ${savedQuote.source}
    `
  
  if(savedQuote.quote) {
    html += `<span class="citation">${savedQuote.citation}</span>`;
  }
  
   if(savedQuote.year) {
     html += `<span class="year">${savedQuote.year}</span>`;
    
   }
    html += '</p>';
  
  console.log("i am clicking")

  document.getElementById("quote-box").innerHTML = html;

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);