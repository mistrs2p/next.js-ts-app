import React from "react";

async function Loading() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, 2000);
  });
  return (
    <div className="w-full h-[500px] bg-blue-300 grid place-items-center animate-spin">
      Loading Team Page ...
    </div>
  );
}

export default Loading;
