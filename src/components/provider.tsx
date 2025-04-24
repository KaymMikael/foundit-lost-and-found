import ItemsReportsProvider from "@/contexts/ItemsReportsContext";
import MyReportsProvider from "@/contexts/MyReportsContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider>
      <MyReportsProvider>
        <ItemsReportsProvider>{children}</ItemsReportsProvider>
      </MyReportsProvider>
    </ThemeProvider>
  );
};

export default Provider;
