import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { useState } from 'react';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Navbar onCartClick={() => setIsCartOpen(true)} />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
            {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
          </div>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;