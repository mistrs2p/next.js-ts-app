import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 mx-auto bg-black/60">
      <div className="absolute top-1/2 righ-1/2 left-1/2 bottom-1/2 w-full sm:8/12 lg:1/2 p-6">
        {children}
      </div>
    </div>
  );
}
