import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from './NavLink';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const servicesDropdown = {
    items: [
      { label: 'Budgeting Planning and Forecasting', href: '#1' },
      { label: 'App Development', href: '#app-development' },
      { label: 'Digital Marketing', href: '#digital-marketing' },
      { label: 'Brand Strategy', href: '#brand-strategy' },
      { label: 'IT Consulting', href: '#it-consulting' }
    ]
  };
  const BusinessDropdown = {
    items: [
      { label: 'Budgeting Planning and Forecasting ', href: '#Budgeting Planning and Forecasting' },
      { label: 'Zero based budgeting', href: '#Zero based budgeting' },
      { label: 'Historical data based budgeting  ', href: '#Budget monitoring and Control' },
      { label: 'Services for Shared Services Models', href: '#Services for Shared Services Models' },
     
    ]
  };
  const ExpertiseDropdown = {
    items: [
      { label: '(R&D)  Centers', href: '#services' },
      { label: 'GOI Projects', href: '#services' },
      { label: 'NGO', href: '#services' },
      { label: 'MSME', href: '#services' }
    ]
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
              Nav<span className="text-accent-500">PBCS</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#home" isScrolled={isScrolled}>Home</NavLink>
            <NavLink href="#DirectExpenses"  isScrolled={isScrolled}>Explore</NavLink>
            <NavLink href="#Expertise" isScrolled={isScrolled} dropdown={ExpertiseDropdown}>Expertise</NavLink>
            <NavLink href="#Business Services" isScrolled={isScrolled} dropdown={BusinessDropdown}>Business Services</NavLink>
            <NavLink href="#pricing" isScrolled={isScrolled}>Pricing</NavLink>
            
            <a
  href="#contact"
  className="inline-block bg-accent-500 hover:bg-accent-600 text-white py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
>
  Contact Us
</a>

          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-primary-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } absolute top-full left-0 w-full`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <NavLink href="#Home" isMobile>Home</NavLink>
            <NavLink href="#explore" isMobile dropdown={servicesDropdown}>Explore</NavLink>
            <NavLink href="#Expertise" isMobile dropdown={ExpertiseDropdown}>Features</NavLink>
            <NavLink href="#Business Services" isScrolled={isScrolled} dropdown={BusinessDropdown}>Business Services</NavLink>
            <NavLink href="#Pricing" isMobile>Team</NavLink>
            
            <button className="bg-accent-500 hover:bg-accent-600 text-white py-2 px-6 rounded-full transition duration-300 w-full mt-4">
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;