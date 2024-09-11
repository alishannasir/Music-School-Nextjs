import Navbar from "@/Components/Navbar/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Music School",
  description: "Start your journey here! The Music School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
       <div className="releative w-full flex items-center justify-center">
       <Navbar/>
       </div>
        {children}
      </body>
    </html>
  );
}
