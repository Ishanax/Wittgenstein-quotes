var quotes = [
  "The difficulty in philosophy is to say no more than we know.",
  "What cannot be imagined cannot even be talked about.",
  "Uttering a word is like striking a note on the keyboard of the imagination.",
  "The world is the totality of facts, not things.",
  "I work quite diligently and wish that I were better and smarter. And these both are one and the same.",
  "One often makes a remark and only later sees how true it is.",
  "Logic takes care of itself; all we have to do is to look and see how it does it.",
  "If people never did silly things nothing intelligent would ever get done.",
  "A serious and good philosophical work could be written consisting entirely of jokes.",
  "Nothing is so difficult as not deceiving oneself.",
  "My difficulty is only an - enormous- difficulty of expression."
]

function newQuote(){ 

  var randomInteger = Math.floor(Math.random()* (quotes.length));
  console.log(randomInteger);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomInteger];
}