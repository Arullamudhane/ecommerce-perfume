import { Heart } from 'lucide-react';
import { Perfume } from '../types';
import { useCart } from '../context/CartContext';

interface PerfumeCardProps {
  perfume: Perfume;
  onFavoriteToggle: (id: number) => void;
  isFavorite: boolean;
}

export default function PerfumeCard({ perfume, onFavoriteToggle, isFavorite }: PerfumeCardProps) {
  const { dispatch } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={perfume.image}
          alt={perfume.name}
          className="h-full w-full object-cover object-center"
        />
        <button
          onClick={() => onFavoriteToggle(perfume.id)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-900">{perfume.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{perfume.brand}</p>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            {formatPrice(perfume.price)}
          </p>
        </div>
        <div className="mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < perfume.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-500">
              ({perfume.reviews} reviews)
            </span>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: perfume })}
            className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}