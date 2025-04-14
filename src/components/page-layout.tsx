import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return <div className="max-w-7xl mx-auto py-14 px-3">{children}</div>;
};

export default PageLayout;
