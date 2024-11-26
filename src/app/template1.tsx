"use client";

import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    console.log("Creating templates");
  }, []);
  return <div>{children}</div>;
}
