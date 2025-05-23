import MyReportsProvider from "@/contexts/MyReportsContext";
import ReportsProvider from "@/contexts/ReportsContext";
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
        <ReportsProvider>
          <MyReportsProvider>{children}</MyReportsProvider>
        </ReportsProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default Provider;
