import { useEffect, useState } from "react";
import type { ProductType } from "../types/product";

export  function useCart() {
  const [cart, setCart] = useState<ProductType[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (product: ProductType) => {
    setCart((prev) => [...prev, product]);
  };
  
  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
    

  return {
    cart,
    addToCart,
    removeFromCart,
  };
}
