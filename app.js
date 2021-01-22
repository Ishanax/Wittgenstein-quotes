var quotes = [
  "The difficulty in philosophy is to say no more than we know. - 1935",
  "What cannot be imagined cannot even be talked about. - 1916",
  "Uttering a word is like striking a note on the keyboard of the imagination. - 1953",
  "The world is the totality of facts, not things. -1922",
  "I work quite diligently and wish that I were better and smarter. And these both are one and the same. - 1917",
  "One often makes a remark and only later sees how true it is. - 1914",
  "Logic takes care of itself; all we have to do is to look and see how it does it. - 1914",
  "My difficulty is only an - enormous- difficulty of expression. - 1915"
]

function newQuote(){ 

  var randomInteger = Math.floor(Math.random()* (quotes.length));
  console.log(randomInteger);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomInteger];
}