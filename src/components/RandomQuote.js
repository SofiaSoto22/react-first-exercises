import { useState } from "react";

export default function RandomQuoteGenerator() {
  const [quote, setQuote] = useState("");
  let options = {
    method: "GET",
    headers: { "x-api-key": "CWFJDniy+DMLTaxW85tBtQ==7CXn7WkB1J46cXgA" },
  };

  let url = "https://api.api-ninjas.com/v1/quotes";

  const generateQuote = () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((quote) => {
        console.log(quote);
        setQuote(quote[0].quote);
      });
  };

  return (
    <div>
      <button onClick={generateQuote}>HIT ME!</button>
      <div>{quote}</div>
    </div>
  );
}
