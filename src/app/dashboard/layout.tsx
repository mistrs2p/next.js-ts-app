import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "dashboard description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      {children}
    </div>
  );
}
