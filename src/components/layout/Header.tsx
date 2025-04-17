
import React from 'react';
import { Search, Bell, Sun, ChevronDown } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = "Club summary" }) => {
  return (
    <header className="bg-liga-card h-16 w-full border-b border-gray-800 flex items-center px-4">
      <h1 className="text-xl font-bold mr-auto">{title}</h1>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for liga soccer..." 
            className="bg-liga-background border border-gray-800 rounded-md pl-10 pr-4 py-1.5 w-64 text-sm focus:outline-none focus:ring-1 focus:ring-liga-accent"
          />
        </div>
        
        <button className="p-2 rounded-md hover:bg-liga-accent/10">
          <Sun className="w-5 h-5 text-gray-400" />
        </button>
        
        <button className="p-2 rounded-md hover:bg-liga-accent/10 relative">
          <Bell className="w-5 h-5 text-gray-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-liga-red rounded-full"></span>
        </button>
        
        <div className="flex items-center">
          <div className="flex items-center space-x-2 border border-gray-800 rounded-md p-1 px-2">
            <span className="text-xs text-gray-400">From scout</span>
            <span className="bg-yellow-400 w-2 h-2 rounded-full"></span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
            <img 
              src="https://i.pravatar.cc/32?img=5" 
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Lottie Poole</p>
            <p className="text-xs text-gray-400">lorett@example.com</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;
