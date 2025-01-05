'use client'
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Clients from "./components/clients";
import Footer from "./components/footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current path

  return (
    <html lang="en">
      <body className="font-sans bg-primary scroll-smooth">
        <Navbar />
        {children}
        {pathname !== "/contact" && pathname !== "/portofoliu"   && <Clients />}
        <Footer />
        {/* Conditionally render the footer */}
        
      </body>
    </html>
  );
}
