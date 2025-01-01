'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Despre noi', 'Portofoliu', 'Servicii', 'Contact'];
  return (
    <nav className="bg-transparent text-white absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img className='sm:pt-20 max-w-24 pt-10 sm:max-w-32 absolute z-50' src="logo.png" alt="" />
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {links.slice(0, -1).map((link) => (
              <a href="#" className="relative inline-block group" key={link}>
                <span className="font-semibold lg:text-xl text-lg">{link}</span>
                <span className="absolute left-0 bottom-[-3px] w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="border-[3px] border-primary pb-1 px-2 rounded-md font-semibold lg:text-xl text-lg hover:bg-primary hover:text-white transition-all duration-200 ease-in-out"
            >
              Contact
            </a>
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
        transition={{ duration: 0.2 }}
        className={`absolute top-0 left-0 right-0 overflow-hidden bg-black z-40`}
      >
        <div className="px-2 pb-3 space-y-1 sm:px-3 h-screen pt-32">
          {links.map((item) => (
            <motion.a
              key={item}
              href="#"
              className={`flex justify-center px-3 py-2 text-base font-medium ${
                item === 'Contact'
                  ? ''
                  : 'hover:border-secondary border-4 border-transparent'
              }`}
              initial={{ y: -10 }}
              animate={isOpen ? { y: 0 } : { y: -10 }}
              transition={{ duration: 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
