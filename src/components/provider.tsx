import ItemsReportsProvider from "@/contexts/ItemsReportsContext";
import MyReportsProvider from "@/contexts/MyReportsContext";
import PetsReportsProvider from "@/contexts/PetsReportsContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import UserProvider from "@/contexts/UserContext";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider>
      <UserProvider>
        <MyReportsProvider>
          <ItemsReportsProvider>
            <PetsReportsProvider>{children}</PetsReportsProvider>
          </ItemsReportsProvider>
        </MyReportsProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default Provider;
