import React from "react";

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-100">
      This is only for Marketing Pages {children}
    </div>
  );
}

export default MarketingLayout;
