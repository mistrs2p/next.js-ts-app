// import React from "react";
// import axios from "axios";
// import axiosInstance from "@/lib/axios";

// // async function fetchFacts() {
// //   "use client";
// //   const response = await axios.get(`https://api.api-ninjas.com/v1/facts`, {
// //     params: { limit: 2 },
// //     headers: { "X-Api-Key": "veJO3JLwTP/lmnMyPhoYDA==ffFMEMs1klQnCXU0" },
// //   });
// //   return response.data;
// // }

// async function page() {
//   //   const res = await fetch(`https://api.api-ninjas.com/v1/facts`, {
//   //     headers: {
//   //       "X-Api-Key": "veJO3JLwTP/lmnMyPhoYDA==ffFMEMs1klQnCXU0",
//   //     },
//   //     cache: "force-cache",
//   //     next: {
//   //       revalidate: 1 ,
//   //     },
//   //   });
//   //   if (!res.ok) {
//   //     throw new Error(`HTTP error! status: ${res.status}`);
//   //   }

//   const facts = await axiosInstance.get(`https://api.api-ninjas.com/v1/facts`, {
//     headers: {
//       "X-Api-Key": "veJO3JLwTP/lmnMyPhoYDA==ffFMEMs1klQnCXU0",
//     },
//   });

//   console.log(facts);
//   return (
//     <div>
//       {/* {facts.map((fact: any, index: number) => (
//         <h1 key={index}>{fact.fact}</h1>
//       ))} */}
//       Hi
//     </div>
//   );
// }

// export default page;

import axiosInstance from "@/lib/axios";
import axios from "axios";

export default async function Page() {
  try {
    const response = await axiosInstance.get(
      "https://api.api-ninjas.com/v1/facts",
      {
        headers: {
          "X-Api-Key": "veJO3JLwTP/lmnMyPhoYDA==ffFMEMs1klQnCXU0",
        },
      },
    );

    const facts = response.data;

    if (!Array.isArray(facts)) {
      throw new Error("Unexpected API response: facts should be an array.");
    }

    // Render the response data
    return (
      <div>
        <h1>Facts</h1>
        {facts.map((fact, index) => (
          <p key={index}>{fact.fact}</p>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading facts. Please try again later.</div>;
  }
}
