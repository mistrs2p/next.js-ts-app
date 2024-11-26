import React from "react";

async function AnalyticsPage() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, 1000);
  });
  return (
    <div className="w-full h-[400px] bg-green-300 grid place-items-center transition-all">
      Analytics Page
    </div>
  );
}

export default AnalyticsPage;
