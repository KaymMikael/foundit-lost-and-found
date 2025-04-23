import MyReportsProvider from "@/contexts/MyReportsContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider>
      <MyReportsProvider>{children}</MyReportsProvider>
    </ThemeProvider>
  );
};

export default Provider;
