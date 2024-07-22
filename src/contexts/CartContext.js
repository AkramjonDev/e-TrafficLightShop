"use client";
import { createContext, useState, useLayoutEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useLayoutEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) ?? [];
    const savedTotalPrice = JSON.parse(localStorage.getItem("totalPrice")) ?? 0;
    if (savedCart.length) {
      setCartItems(savedCart);
    }
    setTotalPrice(savedTotalPrice);
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
    setTotalPrice(newTotalPrice);
    localStorage.setItem("totalPrice", JSON.stringify(newTotalPrice));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCartItems);
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    const newCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    localStorage.removeItem("cart");
    localStorage.removeItem("totalPrice");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
