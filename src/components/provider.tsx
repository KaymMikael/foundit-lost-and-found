import config from "@/config/config";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider>
      <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
        {children}
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default Provider;
