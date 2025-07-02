import React from 'react';
import { Heart, Code2, Coffee, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mohammed-arfath-r',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/Mohammed0Arfath',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:mohammedarfath02003@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className={`relative py-12 border-t ${
      darkMode 
        ? 'bg-slate-900 border-slate-800' 
        : 'bg-white border-slate-200'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                }`}>
                  MA
                </div>
                <div>
                  <div className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Mohammed Arfath
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    AI/ML Engineer & Software Developer
                  </div>
                </div>
              </div>
              
              <p className={`text-sm mb-6 max-w-md ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Passionate about building AI-powered solutions that make a difference. 
                Currently pursuing Integrated M.Tech at VIT Vellore and aspiring to join FAANG companies.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700' 
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className={`font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`text-sm transition-colors hover:text-blue-500 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className={`font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Get In Touch
              </h3>
              <div className="space-y-2 text-sm">
                <div className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  📧 mohammedarfath02003@gmail.com
                </div>
                <div className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  📱 +91 8072781649
                </div>
                <div className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  📍 VIT Vellore, Tamil Nadu, India
                </div>
                <div className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  🕒 Available 9 AM - 6 PM IST
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={`border-t pt-8 ${
            darkMode ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Copyright */}
              <div className={`flex items-center space-x-2 text-sm mb-4 md:mb-0 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <span>© 2025 Mohammed Arfath – Built with</span>
                <Code2 className="w-4 h-4 text-blue-500" />
                <span>&</span>
                <Coffee className="w-4 h-4 text-amber-500" />
                <span>using React & Tailwind CSS</span>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Top</span>
              </button>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className={`mt-8 text-center p-6 rounded-xl ${
            darkMode 
              ? 'bg-slate-800/50 border border-slate-700/50' 
              : 'bg-slate-50 border border-slate-200/50'
          }`}>
            <p className={`text-sm italic ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              "The best way to predict the future is to create it." - Peter Drucker
            </p>
            <p className={`text-xs mt-2 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Turning Ideas into AI-Powered Realities ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;