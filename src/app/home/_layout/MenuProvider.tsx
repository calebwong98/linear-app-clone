"use client";

import { createContext, useContext, useState } from "react";

const MenuContext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggle: () => void;
}>({ isOpen: false, setIsOpen: () => {}, toggle: () => {} });

export function useMenu() {
  return useContext(MenuContext);
}

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{ isOpen, setIsOpen, toggle: () => setIsOpen((prev) => !prev) }}
    >
      {children}
    </MenuContext.Provider>
  );
}
