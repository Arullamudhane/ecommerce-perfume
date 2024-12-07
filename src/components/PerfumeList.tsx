import { useState } from 'react';
import PerfumeCard from './PerfumeCard';
import { Perfume } from '../types';

const perfumes: Perfume[] = [
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
  },
  {
    id: 2,
    name: "Ocean Breeze",
    brand: "Aqua Luxe",
    price: 8999,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3",
    description: "Fresh aquatic notes combined with coastal flowers",
    fragrance_notes: {
      top: ["Sea Salt", "Bergamot"],
      middle: ["Jasmine", "Lily"],
      base: ["Driftwood", "White Musk"]
    },
    size_ml: 75,
    rating: 4.6,
    reviews: 95,
    in_stock: true
  },
  {
    id: 3,
    name: "Velvet Rose",
    brand: "Floral Dreams",
    price: 15999,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3",
    description: "A sophisticated blend of premium roses and precious woods",
    fragrance_notes: {
      top: ["Bulgarian Rose", "Pink Pepper"],
      middle: ["May Rose", "Peony"],
      base: ["White Wood", "Vanilla"]
    },
    size_ml: 50,
    rating: 4.9,
    reviews: 156,
    in_stock: true
  }
];

export default function PerfumeList() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {perfumes.map((perfume) => (
            <PerfumeCard
              key={perfume.id}
              perfume={perfume}
              onFavoriteToggle={toggleFavorite}
              isFavorite={favorites.includes(perfume.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}