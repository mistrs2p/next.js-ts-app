import React from "react";

async function TeamPage() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, 2000);
  });
  return (
    <div className="w-full h-[500px] bg-blue-300 grid place-items-center transition-all">
      Team Page
    </div>
  );
}

export default TeamPage;
