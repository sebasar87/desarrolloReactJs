import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Crear el proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <CartContext.Provider value={{ cart, count, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};