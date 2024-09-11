import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";

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
