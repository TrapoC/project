import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 pt-8 pb-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Curved bottom-left corner */}
      <div className="absolute bottom-0 left-0 w-24 h-24">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,100 L 0,0 Q 0,100 100,100 Z"
            fill="white"
          />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">devjobs</h1>
          <div className="flex items-center space-x-4">
            <Sun className={`w-5 h-5 transition-colors duration-200 ${darkMode ? 'text-white/60' : 'text-white'}`} />
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="sr-only"
              />
              <div className="w-12 h-6 bg-white rounded-full transition-colors duration-200">
                <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-indigo-500 rounded-full transition-transform duration-200 ${
                  darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}></div>
              </div>
            </label>
            <Moon className={`w-5 h-5 transition-colors duration-200 ${darkMode ? 'text-white' : 'text-white/60'}`} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;