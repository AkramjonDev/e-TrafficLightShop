import { useState, useContext } from "react";
import CartContext from "@/contexts/CartContext";
const useCounter = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    addToCart(product);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      const productIndex = cartItems.findIndex(
        (item) => item.id === product.id
      );
      if (productIndex !== -1) {
        removeFromCart(productIndex);
      }
    }
  };
  return {
    count,
    handleIncrement,
    handleDecrement,
  };
};

export default useCounter;
