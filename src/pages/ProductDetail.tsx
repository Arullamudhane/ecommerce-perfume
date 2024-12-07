import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingBag, Heart, Share2, Info, Clock, Droplets } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { perfumes } from '../data/perfumes';
import CommentSection from '../components/CommentSection';
import { Comment } from '../types';

// Sample comments data
const sampleComments: Comment[] = [
  {
    id: 1,
    userId: 2,
    productId: 1,
    userName: "Sarah Johnson",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
    text: "This perfume is absolutely divine! The blend of notes creates such a unique and sophisticated scent that lasts all day. I've received countless compliments wearing it.",
    date: "2024-03-15T10:00:00Z",
    likes: 12
  },
  {
    id: 2,
    userId: 3,
    productId: 1,
    userName: "Michael Chen",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4,
    text: "Great fragrance with excellent longevity. The only reason I'm giving it 4 stars instead of 5 is that the initial spray is quite strong, but it settles beautifully after 15 minutes.",
    date: "2024-03-14T15:30:00Z",
    likes: 8
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState(100);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  
  const perfume = perfumes.find(p => p.id === Number(id));

  if (!perfume) {
    return <div className="text-center py-12">Product not found</div>;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
            </button>
          </div>

          {/* Product Info */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-900">{perfume.name}</h1>
            <p className="mt-2 text-lg text-gray-500">{perfume.brand}</p>

            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < perfume.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="ml-3 text-sm text-gray-500">
                {perfume.rating} ({perfume.reviews} reviews)
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900">{formatPrice(perfume.price)}</h2>
              <p className="mt-1 text-sm text-gray-500">Free shipping on orders above ₹2999</p>
            </div>

            {/* Size Selection */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <div className="mt-2 grid grid-cols-3 gap-4">
                {[50, 75, 100].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-3 text-sm font-medium rounded-md ${
                      selectedSize === size
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {size}ml
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-8 flex space-x-4">
              <button
                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: perfume })}
                className="flex-1 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </button>
              <button className="p-3 rounded-md border border-gray-300 hover:bg-gray-50">
                <Share2 className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Product Details Tabs */}
            <div className="mt-12">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  {['description', 'notes', 'details'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab
                          ? 'border-purple-600 text-purple-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="mt-8">
                {activeTab === 'description' && (
                  <div className="prose max-w-none">
                    <p className="text-gray-700">{perfume.description}</p>
                  </div>
                )}

                {activeTab === 'notes' && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900">Top Notes</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {perfume.fragrance_notes.top.map((note) => (
                          <span key={note} className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Middle Notes</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {perfume.fragrance_notes.middle.map((note) => (
                          <span key={note} className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Base Notes</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {perfume.fragrance_notes.base.map((note) => (
                          <span key={note} className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Droplets className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-700">Size: {perfume.size_ml}ml</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-700">Longevity: 8-10 hours</span>
                    </div>
                    <div className="flex items-center">
                      <Info className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-700">
                        {perfume.in_stock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews and Comments Section */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
          <div className="mt-8">
            <CommentSection productId={perfume.id} comments={sampleComments} />
          </div>
        </div>
      </div>
    </div>
  );
}