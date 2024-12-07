import { Perfume } from '../types';

export const perfumes: Perfume[] = [
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
  },
  {
    id: 4,
    name: "Royal Amber",
    brand: "Royal Essence",
    price: 18999,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94c5b3f1?ixlib=rb-4.0.3",
    description: "An opulent blend of rare amber and exotic spices",
    fragrance_notes: {
      top: ["Cardamom", "Bergamot"],
      middle: ["Amber", "Vanilla"],
      base: ["Sandalwood", "Patchouli"]
    },
    size_ml: 100,
    rating: 4.7,
    reviews: 89,
    in_stock: true
  }
];