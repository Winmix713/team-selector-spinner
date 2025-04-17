
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, UserCircle, ShoppingCart, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-16 md:w-64 bg-liga-card flex flex-col border-r border-gray-800">
      <div className="p-4 border-b border-gray-800">
        <Link to="/" className="flex items-center">
          <div className="bg-yellow-500 text-black font-bold rounded px-1">
            <span className="text-xs">liga</span>
          </div>
          <div className="bg-black text-white font-bold rounded px-1 ml-0.5">
            <span className="text-xs">soccer</span>
          </div>
          <span className="ml-2 text-white font-medium hidden md:block">Liga Soccer</span>
        </Link>
      </div>
      
      <nav className="flex-1 py-4">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className="flex items-center px-4 py-3 text-white hover:bg-liga-accent/10 rounded-md mx-2"
            >
              <LayoutDashboard className="w-5 h-5 mr-3" />
              <span className="hidden md:block">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/matches" 
              className="flex items-center px-4 py-3 text-gray-400 hover:bg-liga-accent/10 rounded-md mx-2"
            >
              <CalendarDays className="w-5 h-5 mr-3" />
              <span className="hidden md:block">Matches</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/profile" 
              className="flex items-center px-4 py-3 text-gray-400 hover:bg-liga-accent/10 rounded-md mx-2"
            >
              <UserCircle className="w-5 h-5 mr-3" />
              <span className="hidden md:block">Profile</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/ecommerce" 
              className="flex items-center px-4 py-3 text-gray-400 hover:bg-liga-accent/10 rounded-md mx-2"
            >
              <ShoppingCart className="w-5 h-5 mr-3" />
              <span className="hidden md:block">E-commerce</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <Link 
          to="/settings" 
          className="flex items-center px-4 py-2 text-gray-400 hover:bg-liga-accent/10 rounded-md"
        >
          <Settings className="w-5 h-5 mr-3" />
          <span className="hidden md:block">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
