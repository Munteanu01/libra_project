
import "./globals.css";
import Navbar from './components/navbar/navbar'
import Clients from './components/clients'
import Footer from './components/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-sans bg-primary"
      >
        <Navbar />
        {children}
        <Clients />
        <Footer />
      </body>
    </html>
  );
}
