import Script from "next/script";
import React from "react";
import sleep from "sleep-promise";
async function Test() {
  const res = await fetch(
    "https://api.api-ninjas.com/v1/quotes?category=happiness",
    {
      headers: {
        "X-Api-Key": "veJO3JLwTP/lmnMyPhoYDA==ffFMEMs1klQnCXU0",
      },
      next: {
        revalidate: 2,
      },
    },
  );

  const quotes = await res.json().then(sleep(2000));
  console.log(quotes);
  //   throw new Error("this is a custom error");
  return (
    <div>
      {quotes.map((quote: any, index: number) => (
        <h1 key={index}>{quote.quote}</h1>
      ))}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        strategy="lazyOnload"
        // onLoad={() => console.log("Script is ready")}
      />
    </div>
  );
}

export default Test;
