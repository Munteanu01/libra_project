// MobileMenuButton.js
export default function MobileButton({ isOpen, setIsOpen }) {
  return (
    <button className="z-50 group w-8 h-8 flex flex-col justify-center items-center absolute right-6 top-6" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle menu">
      <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ease-out absolute ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
      <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ease-out absolute ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
    </button>
  );
}
