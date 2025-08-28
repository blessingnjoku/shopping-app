// ThemeContext.tsx
import { Colors } from "@/constants/Colors";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeType = "light" | "dark";

type ThemeContextType = {
  colors: typeof Colors.light;
  theme: ThemeType;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderCustom = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const systemColorScheme = useColorScheme(); // detects system theme
  const [theme, setTheme] = useState<ThemeType>(systemColorScheme ?? "light");

  useEffect(() => {
    // Automatically update if system theme changes
    setTheme(systemColorScheme ?? "light");
  }, [systemColorScheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const colors = Colors[theme];

  return (
    <ThemeContext.Provider value={{ colors, theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeColors = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeColors must be used within ThemeProviderCustom");
  }
  return context;
};
