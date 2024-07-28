import { createContext, useContext, useEffect, useState } from "react";
import { CheckoutProductCardProps } from "@/components/organisms/CheckoutProductCard";

type CartContextValue = {
  cartItems: CheckoutProductCardProps[];
  addToCart: (product: Omit<CheckoutProductCardProps, "count">) => void;
  removeFromCart: (productId: string) => void;
  decrementCount: (productId: string) => void;
};

export const CartContext = createContext({} as CartContextValue);

export const useCart = () => useContext(CartContext);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CheckoutProductCardProps[]>([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(sessionStorage.getItem("cart") || "[]");
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (product: Omit<CheckoutProductCardProps, "count">) => {
    if (typeof window !== "undefined") {
      const storedCartItems = JSON.parse(
        sessionStorage.getItem("cart") || "[]"
      ) as CheckoutProductCardProps[];

      if (storedCartItems.some((item) => item.id === product.id)) {
        const updatedCartItems = storedCartItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        sessionStorage.setItem("cart", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        return;
      }

      const updatedCartItems = [...storedCartItems, { ...product, count: 1 }];
      sessionStorage.setItem("cart", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (productId: string) => {
    if (typeof window !== "undefined") {
      const storedCartItems = JSON.parse(
        sessionStorage.getItem("cart") || "[]"
      ) as CheckoutProductCardProps[];

      const updatedCartItems = storedCartItems.filter(
        (item) => item.id !== productId
      );
      sessionStorage.setItem("cart", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    }
  };

  const decrementCount = (productId: string) => {
    if (typeof window !== "undefined") {
      const storedCartItems = JSON.parse(
        sessionStorage.getItem("cart") || "[]"
      ) as CheckoutProductCardProps[];
      const updatedCartItems = storedCartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
      sessionStorage.setItem("cart", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, decrementCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
