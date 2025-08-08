import React, {useState, useEffect} from 'react';
function Quote() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

   async function fetchQuote(){
    try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();

    console.log(data);
    setQuote(data.quote);
    setAuthor(data.author);
    console.log("Quote fetched:", data.quote, "by", data.author);
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
   }
     useEffect(() => {
    fetchQuote();
  }, []);

    return (
        <div className="quote-component">
            <h1>Random Quote</h1>
            <p className="quote-text">{quote}</p>
            <p className="quote-author">- {author}</p>
            <button className="fetch-quote-button" onClick={fetchQuote}>
                Fetch New Quote
            </button>
        </div>
    );
}
export default Quote;