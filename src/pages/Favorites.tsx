import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Perfume } from '../types';
import { useCart } from '../context/CartContext';

export default function Favorites() {
  const { dispatch } = useCart();
  const [favorites, setFavorites] = useState<Perfume[]>([
    {
      id: 1,
      name: "Mystic Oud",
      brand: "Royal Essence",
      price: 12999,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3",
      description: "A rich blend of exotic oud wood and mystical oriental spices",
      fragrance_notes: {
        top: ["Saffron", "Rose"],
        middle: ["Oud Wood", "Patchouli"],
        base: ["Amber", "Musk"]
      },
      size_ml: 100,
      rating: 4.8,
      reviews: 128,
      in_stock: true
    }
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-6">My Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites yet</p>
      ) : (
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
          {favorites.map((perfume) => (
            <div key={perfume.id} className="group relative bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="h-full w-full object-cover object-center"
                />
                <button
                  onClick={() => removeFavorite(perfume.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                  <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">{perfume.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{perfume.brand}</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">{formatPrice(perfume.price)}</p>
                <button
                  onClick={() => dispatch({ type: 'ADD_TO_CART', payload: perfume })}
                  className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}