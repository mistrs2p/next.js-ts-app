import React from "react";

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-300">This is only for Shop Pages {children}</div>
  );
}

export default MarketingLayout;
