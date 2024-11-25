import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Student Management / Student Portal",
  description: "This is for Students and Faculty in the University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=""> {children} </body>
    </html>
  );
}
