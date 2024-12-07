import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { perfumes } from '../data/perfumes';

export default function Products() {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    brand: 'all',
    priceRange: 'all',
    fragranceType: 'all',
    size: 'all'
  });

  const { searchQuery, setSearchQuery, filteredItems } = useSearch(perfumes, filters);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Our Collection</h1>
          <p className="mt-4 max-w-xl mx-auto text-base text-gray-500">
            Discover our curated selection of premium fragrances
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mt-8 relative max-w-xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search perfumes..."
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 max-w-xl mx-auto grid grid-cols-2 gap-4 sm:grid-cols-4">
            <select
              value={filters.brand}
              onChange={(e) => handleFilterChange('brand', e.target.value)}
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
            >
              <option value="all">All Brands</option>
              <option value="Royal Essence">Royal Essence</option>
              <option value="Aqua Luxe">Aqua Luxe</option>
              <option value="Floral Dreams">Floral Dreams</option>
            </select>

            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
            >
              <option value="all">All Prices</option>
              <option value="under5000">Under ₹5,000</option>
              <option value="5000-10000">₹5,000 - ₹10,000</option>
              <option value="above10000">Above ₹10,000</option>
            </select>

            <select
              value={filters.size}
              onChange={(e) => handleFilterChange('size', e.target.value)}
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
            >
              <option value="all">All Sizes</option>
              <option value="50">50ml</option>
              <option value="100">100ml</option>
              <option value="200">200ml</option>
            </select>

            <select
              value={filters.fragranceType}
              onChange={(e) => handleFilterChange('fragranceType', e.target.value)}
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
            >
              <option value="all">All Types</option>
              <option value="floral">Floral</option>
              <option value="oriental">Oriental</option>
              <option value="fresh">Fresh</option>
            </select>
          </div>
        )}

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {filteredItems.map((perfume) => (
            <div
              key={perfume.id}
              onClick={() => navigate(`/product/${perfume.id}`)}
              className="group relative cursor-pointer"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{perfume.name}</h3>
                <p className="text-sm text-gray-500">{perfume.brand}</p>
                <p className="mt-2 text-lg font-medium text-gray-900">
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    maximumFractionDigits: 0,
                  }).format(perfume.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-500">No perfumes found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}