"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '../../../app/configs/constants';

interface NavItemsProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const NavItems: React.FC<NavItemsProps> = ({ mobile, onItemClick }) => {
  const pathname = usePathname();

  return (
    <nav className={`${mobile ? 'flex flex-col gap-1' : 'flex items-center gap-8'}`}>
      {navItems.map((i: NavItems, index: number) => {
        const isActive = pathname === `/${i.title.toLowerCase()}`;
        return (
          <Link
            key={index}
            href={`/${i.title.toLowerCase()}`}
            onClick={onItemClick}
            className={`
              relative text-[15px] font-medium transition-all duration-300 ease-out
              ${mobile ? 'w-full text-lg py-3 px-4 rounded-lg' : 'py-2'}
              ${isActive
                ? 'text-[#3B82F6]'
                : 'text-[#1E3A5F] hover:text-[#3B82F6]'
              }
            `}
          >
            {i.title}
            {isActive && !mobile && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#3B82F6]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavItems;