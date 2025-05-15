import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled?: boolean;
  isMobile?: boolean;
  dropdown?: {
    items: Array<{
      label: string;
      href: string;
    }>;
  };
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isScrolled = true, isMobile = false, dropdown }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const baseClasses = "relative font-medium transition-colors duration-300";
  const mobileClasses = "text-primary-900 block py-2";
  const desktopClasses = `${isScrolled ? 'text-primary-900' : 'text-white'} hover:text-accent-500`;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (dropdown) {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: (target as HTMLElement).offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (dropdown && !isMobile) {
    return (
      <div 
        ref={dropdownRef}
        className="relative group"
      >
        <button
          className={`${baseClasses} ${desktopClasses} flex items-center gap-1`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {children}
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-200 transform origin-top ${isDropdownOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'} group-hover:opacity-100 group-hover:visible group-hover:scale-100`}>
          {dropdown.items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-accent-500 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                  window.scrollTo({
                    top: (target as HTMLElement).offsetTop - 100,
                    behavior: 'smooth'
                  });
                }
                setIsDropdownOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (dropdown && isMobile) {
    return (
      <div>
        <button
          className={`${baseClasses} ${mobileClasses} w-full flex items-center justify-between`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {children}
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`pl-4 mt-2 space-y-2 transition-all duration-200 ${isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          {dropdown.items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block py-2 text-gray-600 hover:text-accent-500 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                  window.scrollTo({
                    top: (target as HTMLElement).offsetTop - 100,
                    behavior: 'smooth'
                  });
                }
                setIsDropdownOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
    >
      {children}
      {!isMobile && !dropdown && (
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
      )}
    </a>
  );
};

export default NavLink;