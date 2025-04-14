import { createContext, useEffect, useState } from "react";

type Theme = "dark";

type ThemeProps = {
  children: React.ReactNode;
};

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeState = {
  theme: "dark",
  setTheme: () => null,
};

export const ThemeContext = createContext<ThemeState>(initialState);

export function ThemeProvider({ children, ...props }: ThemeProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
  }, []);

  return (
    <ThemeContext.Provider {...props} value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
