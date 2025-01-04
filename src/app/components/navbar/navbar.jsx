'use client';
import { useState, useEffect } from 'react';
import NavLink from './navLinks'; // Import NavLink component
import Button from './button'; // Import MobileButton component
import Link from 'next/link';
import MobileMenu from './mobileMenu'; // Import the new MobileMenu component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // State to track mounting

  const links = [
    { text: 'Despre noi', href: '/despre' },
    { text: 'Portofoliu', href: '/portofoliu' },
    { text: 'Servicii', href: '/servicii' },
    { text: 'Contact', href: '/contact' }
  ];

  const handleLinkClick = () => setIsOpen(false); // Close the menu when a link is clicked

  useEffect(() => {
    setIsMounted(true); // Mark as mounted after the component mounts on the client

    // Disable scrolling when the menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup when unmounting
    };
  }, [isOpen]);

  if (!isMounted) {
    return null; // Prevent SSR mismatch
  }

  return (
    <nav className="bg-transparent text-white absolute top-0 left-0 right-0 z-50 sm:pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div>
            <Link href={'/'} onClick={handleLinkClick}>
              <img className="max-w-24 top-4 left-1 lg:left-10 md:top-10 md:max-w-32 absolute z-50" src="logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {links.slice(0, -1).map(({ text, href }) => (
              <NavLink key={text} link={text} href={href} onClick={handleLinkClick} />
            ))}
            <Link href={links[3].href} className="border-[3px] border-secundary pb-1 px-2 rounded-md font-semibold lg:text-xl text-lg hover:bg-secundary hover:text-white transition-all duration-200 ease-in-out" onClick={handleLinkClick}>
              Contact
            </Link>
          </div>
          <div className="flex md:hidden">
            <Button isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isOpen} links={links} handleLinkClick={handleLinkClick} />
    </nav>
  );
}
