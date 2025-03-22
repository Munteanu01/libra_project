'use client'
import "./globals.css";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', 
});

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-background text-text scroll-smooth ">
        <Navbar />
        {children}
        <Footer />        
      </body>
    </html>
  );
}
