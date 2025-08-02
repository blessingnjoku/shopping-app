import React, { createContext, useContext, useState } from "react";

type LikedContextType = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
};

const LikedContext = createContext<LikedContextType>({
  favorites: [],
  toggleFavorite: () => {},
});

export const LikedProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <LikedContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </LikedContext.Provider>
  );
};

export const useLiked = () => useContext(LikedContext);
