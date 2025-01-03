// NavLink.js
import Link from 'next/link';

export default function NavLinks({ link, href, onClick }) {
  return (
    <Link href={href} className="relative inline-block group" onClick={onClick}>
      <span className="font-semibold lg:text-xl md:text-lg text-3xl">{link}</span>
      <span className="absolute left-0 bottom-[-3px] w-0 h-[3px] bg-secundary group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </Link>
  );
}
