import { useState, useEffect, useRef } from "react";

const QuoteCard = () => {
  const quoteAPI = "https://api.quotable.io/random";
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const intervalRef = useRef(null); // to keep track of timeout

  // Function to fetch a quote
  const fetchQuote = async () => {
    try {
      const response = await fetch(quoteAPI);
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote(); // get first quote on mount
  }, []);

  useEffect(() => {
    if (!quote) return;

    const wordCount = quote.split(" ").length;
    const delay = wordCount * 1000;

    // Set timeout to fetch next quote
    intervalRef.current = setTimeout(() => {
      fetchQuote();
    }, delay);

    // Clear timeout on quote change or unmount
    return () => clearTimeout(intervalRef.current);
  }, [quote]);

  return (
    <div className="card shadow-sm p-3 mb-4 border-0" style={{ maxWidth: '600px', margin: 'auto' }}>
      <div className="card-body">
        <blockquote className="blockquote mb-0 border-start ps-4">
          <p>{quote}</p>
          <footer className="blockquote-footer mt-2">{author}</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default QuoteCard;
