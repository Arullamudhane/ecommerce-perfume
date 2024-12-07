import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const { state } = useCart();
  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              LuxeScents
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600">New Arrivals</Link>
              <Link to="/" className="text-gray-700 hover:text-purple-600">Collections</Link>
              <Link to="/" className="text-gray-700 hover:text-purple-600">Brands</Link>
              <Link to="/" className="text-gray-700 hover:text-purple-600">Gift Sets</Link>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-purple-600">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/favorites" className="text-gray-700 hover:text-purple-600">
              <Heart className="w-5 h-5" />
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-purple-600">
              <User className="w-5 h-5" />
            </Link>
            <button
              onClick={onCartClick}
              className="text-gray-700 hover:text-purple-600 relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button className="md:hidden text-gray-700">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}