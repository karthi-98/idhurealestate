'use client'

import { useState, useEffect } from 'react';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

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
        isScrollingDown && isScrolled ? 'mx-12 md:mx-24 lg:mx-32 mt-2' : 'mx-4 mt-4'
      }`}>
        <nav className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg transition-all duration-300 ease-in-out ${
          isScrollingDown && isScrolled ? 'px-4 py-2' : 'px-6 py-4'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className={`font-heading font-bold text-white transition-all duration-300 ${
                isScrollingDown && isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                Idhu<span className="text-accent">RealEstate</span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className={`hidden md:flex items-center transition-all duration-300 ${
              isScrollingDown && isScrolled ? 'space-x-4' : 'space-x-8'
            }`}>
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-body text-sm font-medium text-white/90 hover:text-accent transition-all duration-300 hover:scale-110 transform hover:cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button className={`bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 hover:cursor-pointer ${
                isScrollingDown && isScrolled ? 'px-4 py-2 text-xs' : 'px-6 py-3 text-sm'
              }`}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                </svg>
                <span className={isScrollingDown && isScrolled ? 'hidden sm:inline' : ''}>Get Hot Leads Now</span>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white/90 hover:text-white transition-colors duration-300"
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
          <div id="mobile-menu" className="hidden md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                  }}
                  className="font-body text-sm font-medium text-left text-white/90 hover:text-accent transition-all duration-300 hover:translate-x-2 transform"
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