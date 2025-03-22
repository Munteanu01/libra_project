"use client"

import Link from "next/link"

const links = [
  { text: "Despre noi", href: "/despre" },
  { text: "Portofoliu", href: "/portofoliu" },
  { text: "Servicii", href: "/#servicii" },
  { text: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white  py-10 border-t-2 border-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">S.C. C&G LIBRA SECURITY S.R.L.</h3>
            <p>Soluții de securitate de încredere pentru casa și afacerea dumneavoastră</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Link-uri rapide</h3>
            <ul>
              {links.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Adresă: Strada Exemplu, Nr. 123, Bucuresti</p>
            <p>Telefon: +40 123 456 789</p>
            <p>Email: contact@libra.ro</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Libra Security. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}

