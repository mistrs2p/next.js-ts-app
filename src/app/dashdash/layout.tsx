import React from "react";

function layout({
  children,
  team,
  analytics,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <>
      {children}{" "}
      <div className="grid grid-cols-2">
        {team}
        {analytics}
      </div>
    </>
  );
}

export default layout;
