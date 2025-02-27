import React, { createContext, useState, useEffect, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
  imageUrl: string;
  description?: string;
}

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cartCount: number
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  cartCount: 0,
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const productExists = prevCart.find(item => item.id === product.id);
      if (productExists) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item => (item.id === id ? { ...item, quantity } : item)).filter(item => item.quantity && item.quantity > 0)
    );
  };

  const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};