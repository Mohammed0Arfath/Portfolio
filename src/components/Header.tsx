import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${
      darkMode 
        ? 'bg-slate-900/90 border-slate-700/50' 
        : 'bg-white/90 border-slate-200/50'
    }`}>
      <div className="w-full px-3 sm:px-4 py-3">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center space-x-2 min-w-0 flex-shrink-0">
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm transition-colors flex-shrink-0 ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' 
                : 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
            }`}>
              MA
            </div>
            <span className={`font-bold text-sm sm:text-lg truncate max-w-[140px] sm:max-w-none ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Mohammed Arfath
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 whitespace-nowrap ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
                darkMode 
                  ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors flex-shrink-0 ${
                darkMode 
                  ? 'hover:bg-slate-800' 
                  : 'hover:bg-slate-100'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={darkMode ? 'text-white' : 'text-slate-900'} size={18} />
              ) : (
                <Menu className={darkMode ? 'text-white' : 'text-slate-900'} size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-3 pb-3 border-t ${
            darkMode ? 'border-slate-700/50' : 'border-slate-200/50'
          }`}>
            <nav className="flex flex-col space-y-1 pt-3 max-w-7xl mx-auto">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 py-2 px-3 rounded-lg ${
                    darkMode 
                      ? 'text-slate-300 hover:bg-slate-800' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;