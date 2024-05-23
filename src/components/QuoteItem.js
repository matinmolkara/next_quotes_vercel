'use client'
import React, { useState, useEffect } from "react";
import 'animate.css'
function QuoteItem({quotes}) {
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 6000); 
  
      return () => {
        clearInterval(interval); 
      };
    });
  
    const currentQuote = quotes && quotes.length > 0 ? quotes[quoteIndex] : null;
  return (
    <>
         {currentQuote && ( <h2>{currentQuote.address.street}</h2> )}  {/* Check for currentQuote before rendering */}
      {currentQuote && ( <h1 className="animate__animated animate__lightSpeedInLeft">{currentQuote.name}</h1> )}
    </>
  )
}

export default QuoteItem