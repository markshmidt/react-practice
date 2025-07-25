import React, {useState, useEffect} from 'react';
function Quote() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

   const fetchQuote= ()=>{
    fetch('https://api.quotable.io/random?limit=1')
    .then(response=> response.json())
    .then(data =>{
        console.log(data)

      setQuote(data.content);
      setAuthor(data.author);
        console.log("Quote fetched:", data.content, "by", data.author);
    })
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