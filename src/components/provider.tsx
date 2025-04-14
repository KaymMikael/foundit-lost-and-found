import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;
