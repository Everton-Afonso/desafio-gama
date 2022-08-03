import { createContext, useState } from "react";

interface CartContextProps {
  children: JSX.Element | JSX.Element[];
}

export const CartContext = createContext({} as any);

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <CartContext.Provider value={{isSidebarOpen, setIsSidebarOpen}}>
      {children}
    </CartContext.Provider>
  );
};
