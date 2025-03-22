"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return
    
    const handleClickOutside = (e) => {
      if (e.target.closest('nav')) return
      setIsOpen(false)
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const links = [
    { text: "Servicii", href: "/#servicii" } ,
    { text: "Despre", href: "/despre" },
    { text: "Portofoliu", href: "/portofoliu" },
    { text: "Contact", href: "/contact", isButton: true },
  ]

  return (
    <header className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 shadow-lg' : 'bg-black'}`}>
      <nav className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-20">
            <Image
              src="/logo.png"
              alt="Libra Security Logo"
              width={150}
              height={60}
              priority
              className="h-auto w-auto max-h-12"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className={`text-white font-medium hover:text-accent transition-colors text-lg ${
                  link.isButton
                    ? "bg-accent hover:text-white hover:bg-accent/80 px-6 py-2 rounded-md"
                    : ""
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white relative z-20" 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown menu with animation */}
        <div 
          className={`fixed inset-0 top-20 bg-black z-10 md:hidden transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col items-center w-full p-6 space-y-6 pt-10 h-full">
            {links.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`w-full text-center py-2 my-2 rounded-md text-xl font-medium transition-colors ${
                  link.isButton
                    ? "bg-accent text-white hover:bg-accent/90 border-none"
                    : "text-white hover:text-accent"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}