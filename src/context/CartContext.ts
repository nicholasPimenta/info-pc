import { createContext } from 'react';

export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
    description?: string;
    category?: string;
  }

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cartCount: number;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  cartCount: 0,
});