'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavLink from './navLinks'; // Import NavLink component
import MobileButton from './mobileButton'; // Import MobileButton component
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { text: 'Despre noi', href: '/despre-noi' },
    { text: 'Portofoliu', href: '/portofoliu' },
    { text: 'Servicii', href: '/servicii' },
    { text: 'Contact', href: '/contact' }
  ];

  const handleLinkClick = () => setIsOpen(false); // Close the menu when a link is clicked

  useEffect(() => {
    // Disable scrolling when the menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup the effect on component unmount or when the menu is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className="bg-transparent text-white absolute top-0 left-0 right-0 z-50 sm:pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div>
            <Link href={'/'} onClick={handleLinkClick}>
              <img className="max-w-24 top-4 left-1 md:top-10 md:max-w-32 absolute z-50" src="logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {links.slice(0, -1).map(({ text, href }) => (
              <NavLink key={text} link={text} href={href} onClick={handleLinkClick} />
            ))}
            <Link href={links[3].href} className="border-[3px] border-primary pb-1 px-2 rounded-md font-semibold lg:text-xl text-lg hover:bg-primary hover:text-white transition-all duration-200 ease-in-out" onClick={handleLinkClick}>
              Contact
            </Link>
          </div>
          <div className="flex md:hidden">
            <MobileButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={isOpen ? { height: "100vh" } : { height: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-0 right-0 overflow-hidden bg-black z-40 md:hidden">
        <div className="px-2 space-y-4 sm:px-3 h-screen w-screen flex flex-col items-center justify-center pb-32">
          {links.map(({ text, href }) => (
            <motion.div key={text} initial={{ y: -10 }} animate={isOpen ? { y: 0 } : { y: -10 }} transition={{ duration: 0.1 }
            } className='pt-7'>
              <NavLink className="" link={text} href={href} onClick={handleLinkClick} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
