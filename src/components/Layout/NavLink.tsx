import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, active }) => {
  return (
    <a 
      href={href} 
      className={`px-2 py-1 text-sm font-medium transition-colors ${
        active 
          ? 'text-white border-b-2 border-indigo-500' 
          : 'text-slate-300 hover:text-white'
      }`}
    >
      {children}
    </a>
  );
};