'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Make sure to import Link here

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Despre noi', 'Portofoliu', 'Servicii', 'Contact'];

  // Function to handle closing the menu when a link or logo is clicked
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-transparent text-white absolute top-0 left-0 right-0 z-50 sm:pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="">
            {/* Added handleLinkClick to the logo link */}
            <Link href={'/'} onClick={handleLinkClick}>
              <img
                className='max-w-24 sm:t-10 pt-5 sm:max-w-32 absolute z-50'
                src="logo.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {links.slice(0, -1).map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative inline-block group"
                onClick={handleLinkClick} // Close the menu on click
              >
                <span className="font-semibold lg:text-xl text-lg">{link}</span>
                <span className="absolute left-0 bottom-[-3px] w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="border-[3px] border-primary pb-1 px-2 rounded-md font-semibold lg:text-xl text-lg hover:bg-primary hover:text-white transition-all duration-200 ease-in-out"
              onClick={handleLinkClick} // Close the menu on click
            >
              Contact
            </Link>
          </div>
          <div className="flex md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 z-50 relative"
              aria-expanded={isOpen ? "true" : "false"}
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? 'Close' : 'Open'}
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={isOpen ? { height: "100vh" } : { height: 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute top-0 left-0 right-0 overflow-hidden bg-black z-40`}
      >
        <div className="px-2 pb-3 space-y-1 sm:px-3 h-screen pt-32">
          {links.map((item) => (
            <motion.div
              key={item}
              initial={{ y: -10 }}
              animate={isOpen ? { y: 0 } : { y: -10 }}
              transition={{ duration: 0.1 }}
            >
              {item === 'Contact' ? (
                <Link
                  href="/contact"
                  className="flex justify-center px-3 py-2 text-base font-semibold border-4 pb-3 border-primary"
                  onClick={handleLinkClick} // Close the menu on click
                >
                  {item}
                </Link>
              ) : (
                <Link
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex justify-center px-3 py-2 text-base font-semibold hover:border-secondary border-4 border-transparent"
                  onClick={handleLinkClick} // Close the menu on click
                >
                  {item}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
