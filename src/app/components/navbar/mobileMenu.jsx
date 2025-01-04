import { motion } from 'framer-motion';
import NavLink from './navLinks'; // Import NavLink component

export default function MobileMenu({ isOpen, links, handleLinkClick }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? "100vh" : 0,
        opacity: isOpen ? 1 : 0
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut"
      }}
      className="absolute top-0 left-0 right-0 overflow-hidden bg-black z-40 md:hidden"
    >
      <div className="px-2 space-y-4 sm:px-3 h-screen w-screen flex flex-col items-center justify-center pb-32">
        {links.map(({ text, href }) => (
          <motion.div
            key={text}
            initial={{ y: -20, opacity: 0 }}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
              ease: "easeInOut"
            }}
            className="pt-7"
          >
            <NavLink link={text} href={href} onClick={handleLinkClick} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
