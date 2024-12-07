export interface Perfume {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  fragrance_notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  size_ml: number;
  rating: number;
  reviews: number;
  in_stock: boolean;
}

export interface CartItem extends Perfume {
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

export interface DeliveryAddress {
  fullName: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export interface Comment {
  id: number;
  userId: number;
  productId: number;
  userName: string;
  userAvatar: string;
  rating: number;
  text: string;
  date: string;
  likes: number;
}