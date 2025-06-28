import React from 'react';
import { Heart, Code2 } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 border-t ${
      darkMode 
        ? 'bg-slate-900 border-slate-800' 
        : 'bg-white border-slate-200'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' 
                : 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
            }`}>
              MA
            </div>
            <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Mohammed Arfath
            </span>
          </div>

          <div className={`flex items-center space-x-2 text-sm ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            <span>and</span>
            <Code2 className="w-4 h-4 text-blue-500" />
            <span>by Mohammed Arfath © 2024</span>
          </div>

          <div className={`text-sm mt-4 md:mt-0 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Turning Ideas into AI-Powered Realities
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;