import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  // Handle scroll spy and header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = menuItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? (darkMode 
            ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg' 
            : 'bg-white/95 backdrop-blur-lg border-b border-slate-200/50 shadow-lg')
        : (darkMode 
            ? 'bg-slate-900/70 backdrop-blur-lg border-b border-slate-700/30' 
            : 'bg-white/70 backdrop-blur-lg border-b border-slate-200/30')
    }`}>
      <div className="w-full px-4 py-4">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-3 min-w-0 flex-shrink-0">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 flex-shrink-0 ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' 
                : 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg'
            }`}>
              MA
            </div>
            <div className="min-w-0">
              <div className={`font-bold text-lg truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Mohammed Arfath
              </div>
              <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                AI/ML Engineer
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg ${
                  activeSection === item.href.substring(1)
                    ? (darkMode 
                        ? 'text-blue-400 bg-blue-500/20' 
                        : 'text-blue-600 bg-blue-100')
                    : (darkMode 
                        ? 'text-slate-300 hover:text-blue-400 hover:bg-slate-800' 
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100')
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-105 flex-shrink-0 ${
                darkMode 
                  ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700 shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 shadow-lg'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA Button - Desktop */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="hidden md:flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
            >
              Hire Me
            </a>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-3 rounded-xl transition-all duration-300 hover:scale-105 flex-shrink-0 ${
                darkMode 
                  ? 'hover:bg-slate-800' 
                  : 'hover:bg-slate-100'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={darkMode ? 'text-white' : 'text-slate-900'} size={20} />
              ) : (
                <Menu className={darkMode ? 'text-white' : 'text-slate-900'} size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t ${
            darkMode ? 'border-slate-700/50' : 'border-slate-200/50'
          }`}>
            <nav className="flex flex-col space-y-2 pt-4 max-w-7xl mx-auto">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-300 py-3 px-4 rounded-lg text-left ${
                    activeSection === item.href.substring(1)
                      ? (darkMode 
                          ? 'text-blue-400 bg-blue-500/20' 
                          : 'text-blue-600 bg-blue-100')
                      : (darkMode 
                          ? 'text-slate-300 hover:text-blue-400 hover:bg-slate-800' 
                          : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100')
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile CTA */}
              <button
                onClick={() => scrollToSection('#contact')}
                className="mt-4 w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg text-sm"
              >
                Hire Me
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;