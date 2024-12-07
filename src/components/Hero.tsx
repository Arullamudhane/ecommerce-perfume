import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Luxury Perfume"
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Discover Your Signature Scent
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Explore our curated collection of luxury fragrances from the world's most prestigious perfume houses.
          Each scent tells a unique story, waiting to become part of yours.
        </p>
        <div className="mt-10">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center px-8 py-4 border-2 border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            Shop Now
            <ArrowRight className="ml-3 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}