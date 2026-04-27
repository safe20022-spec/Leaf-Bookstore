// src/Components/layout/Header.tsx
import { Search, ShoppingCart, Bell, Menu, User, LogOut } from 'lucide-react';
import { useAuthStore } from '../../Store/useAuthStore';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-8">
        
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-200">
            L
          </div>
          <span className="text-2xl font-black text-gray-900 tracking-tighter">LUMINA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-gray-500">
          <Link to="/" className="text-green-600">Home</Link>
          <Link to="/books" className="hover:text-green-600 transition-colors">Shop</Link>
          <a href="#" className="hover:text-green-600 transition-colors">Categories</a>
          <a href="#" className="hover:text-green-600 transition-colors">About</a>
        </nav>

        <div className="hidden md:flex flex-1 max-w-md relative group">
          <input 
            type="text" 
            placeholder="Search books, authors, genres..." 
            className="w-full bg-gray-50 border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-green-500 transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600" size={18} />
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-3 md:gap-5">
              <button className="relative p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
                <Bell size={22} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>

              <button className="relative p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
                <ShoppingCart size={22} />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
              </button>

              <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-gray-100 overflow-hidden border border-gray-200">
                   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-xs font-bold text-gray-900 truncate w-20">{user?.name}</p>
                  <button 
                    onClick={logout}
                    className="text-[10px] text-red-500 font-bold hover:underline flex items-center gap-1"
                  >
                    <LogOut size={10} /> Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login" className="hidden sm:block px-6 py-3 text-sm font-bold text-gray-600 hover:text-green-600 transition-colors">
                Log In
              </Link>
              <Link to="/signup" className="px-6 py-3 bg-green-600 text-white text-sm font-bold rounded-2xl shadow-lg shadow-green-100 hover:bg-green-700 transition-all active:scale-95">
                Sign Up
              </Link>
            </div>
          )}

          <button className="lg:hidden p-2 text-gray-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;