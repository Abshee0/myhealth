import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface NavDropdownProps {
  items: Record<string, string[]>;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({ items }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleItemClick = (item: string) => {
    const path = item.toLowerCase().replace(/\s+/g, '-');
    if (path === 'reception') {
      navigate('/reception');
    } else if (path === 'dashboard') {
      navigate('/');
    } else if (path === 'samples') {
      navigate('/laboratory/samples');
    } else if (path === 'phlebotomy') {
      navigate('/laboratory/phlebotomy');
    }
  };

  return (
    <div 
      className="absolute top-full left-0 mt-1 bg-slate-800 rounded-md shadow-lg py-2 min-w-[220px] z-50"
      onMouseLeave={() => setActiveSubmenu(null)}
    >
      {Object.entries(items).map(([category, subitems]) => (
        <div
          key={category}
          className="relative"
          onMouseEnter={() => setActiveSubmenu(category)}
        >
          <button
            className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-between group"
          >
            {category}
            <ChevronRight size={14} className="opacity-50 group-hover:opacity-100" />
          </button>
          
          {activeSubmenu === category && (
            <div className="absolute left-full top-0 mt-0 ml-0.5 bg-slate-800 rounded-md shadow-lg py-2 min-w-[240px]">
              {subitems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 whitespace-nowrap"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};