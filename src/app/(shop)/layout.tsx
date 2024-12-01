import React from "react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-green-300">This is only for Shop Pages {children}</div>
  );
}
