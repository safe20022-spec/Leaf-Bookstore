// src/components/layout/Header.tsx
import { Search, ShoppingCart, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-8">
        
        {/* Logo & Menu */}
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold text-green-600 flex items-center gap-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded-lg">L</span>
            Leaf
          </div>
          <button className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-md text-sm font-semibold text-gray-700">
            <Menu className="w-4 h-4 text-green-600" />
            Menu
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative">
          <input 
            type="text" 
            placeholder="Search over 30 million book titles" 
            className="w-full bg-gray-50 border border-transparent rounded-md py-2.5 px-4 pr-12 focus:bg-white focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
          />
          <div className="absolute right-2 top-1.5 bg-green-600 p-2 rounded-md cursor-pointer">
            <Search className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Actions (Guest Mode) */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border-l pl-4 ml-2">
            <button className="text-gray-700 font-semibold px-4 py-2 hover:text-green-600">Login</button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 shadow-lg shadow-green-100 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;