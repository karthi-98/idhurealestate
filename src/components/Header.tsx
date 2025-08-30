'use client'

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Our Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 50);
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsScrollingDown(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${className || ''}`}>
      <div className={`transition-all duration-300 ease-in-out ${
        isScrollingDown && isScrolled ? 'mx-2 sm:mx-4 md:mx-12 lg:mx-24 xl:mx-32 mt-2' : 'mx-2 sm:mx-4 mt-2 sm:mt-4'
      }`}>
        <nav className={`backdrop-blur-md ${theme === 'light' ? 'bg-white/80 border-2 border-gray-200/60' : 'bg-white/10 border-2 border-white/15'} rounded-2xl shadow-lg transition-all duration-300 ease-in-out ${
          isScrollingDown && isScrolled ? 'px-3 sm:px-4 py-2' : 'px-4 sm:px-6 py-3 sm:py-4'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Idhu Real Estate Logo"
                  className={`h-8 sm:h-10 transition-all duration-300 ${isScrollingDown && isScrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-10'}`}
                />
                {/* <span className={`ml-2 font-heading font-bold text-white transition-all duration-300 ${
                  isScrollingDown && isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
                }`}>
                  Idhu<span className="text-accent">RealEstate</span>
                </span> */}
              </a>
            </div>

            {/* Desktop Menu */}
            <div className={`hidden md:flex items-center transition-all duration-300 ${
              isScrollingDown && isScrolled ? 'space-x-4' : 'space-x-8'
            }`}>
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-body text-sm font-medium ${theme === 'light' ? 'text-gray-700 hover:text-accent' : 'text-white/90 hover:text-accent'} transition-all duration-300 hover:scale-110 transform hover:cursor-pointer`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Theme Switcher & CTA Button */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-white/10'} ${
                  isScrollingDown && isScrolled ? 'p-1.5' : 'p-2'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className={`w-5 h-5 text-gray-700 hover:text-accent`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className={`w-5 h-5 text-white/90 hover:text-accent`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              <button className={`bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 hover:cursor-pointer ${
                isScrollingDown && isScrolled ? 'px-3 py-2 text-xs' : 'px-4 py-2.5 sm:px-6 sm:py-3 text-sm'
              }`}>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                </svg>
                <span className="hidden sm:inline whitespace-nowrap">Get Hot Leads Now</span>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className={`md:hidden ${theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'} transition-colors duration-300`}
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                    mobileMenu.classList.toggle('hidden');
                  }
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className={`hidden md:hidden mt-4 pt-4 ${theme === 'light' ? 'border-t border-gray-200/50' : 'border-t border-white/20'}`}>
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                  }}
                  className={`font-body text-sm font-medium text-left ${theme === 'light' ? 'text-gray-700 hover:text-accent' : 'text-white/90 hover:text-accent'} transition-all duration-300 hover:translate-x-2 transform`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}