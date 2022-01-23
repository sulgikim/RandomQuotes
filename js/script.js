/*300323120*/

//Set up quotes array of object
const quotes = [
    {quote: 'Anybody who tells you money can’t buy happiness never had any.', source: 'Samuel L. Jackson', year: 2004},
    {quote: 'There is only one certainty in life and that is that nothing is certain.', source: 'G.K. Chesterton', year: 1926},
    {quote: 'Oh yes, the past can hurt. But you can either run from it, or learn from it.', source: 'Rafiki', citation: 'Movie(The Lion King)'},
    {quote: 'Differences of habit and language are nothing at all, if our aims are identical and our hearts are open.', source: 'J.K. Rowling', citation: 'Book(Harry Potter and the Goblet of Fire)'},
    {quote: 'If you want to live a happy life, tie it to a goal, not to people or things.', source: 'Albert Einstein'}
];



//create getRandomQuote() function returning random quote
function getRandomQuote(){
    let index = quotes.length; //get the length of quotes array
    const randomNumber = Math.floor(Math.random() * index); //generate random number based on the length of array (0-4)
    const randomQuote = quotes[randomNumber]; //generate random quote from array based on randomNumber generated above
    return randomQuote;
}



//create printQuote function : print quote in the element 'quote-box' 
function printQuote() {
    let randomQuote = getRandomQuote(quotes); //generate random quote

    //add quote and source in <p> tag
    //leave <p class='source'> tag not closed
    let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p>\n<p class='source'>" + randomQuote.source; 

    //if citation property exist in its object, add the citation in <span> tag
    if(randomQuote.hasOwnProperty('citation')) {
        PtoHTML1 += "\n<span class='citation'>" + randomQuote.citation + "</span>";
    }
    //if year property exist in its object, add the year in <span> tag
    if(randomQuote.hasOwnProperty('year')) {
        PtoHTML1 += "\n<span class='year'>" + randomQuote.year + "</span>";
    }
    // close <p class='source'> tag
    PtoHTML1 += "</p>";

    //print the string created above in 'quote-box' element 
    document.getElementById('quote-box').innerHTML = PtoHTML1;
}


//add event listener when the button 'load-quote' clicked to generate random quote  
document.getElementById('load-quote').addEventListener("click", printQuote, false);  