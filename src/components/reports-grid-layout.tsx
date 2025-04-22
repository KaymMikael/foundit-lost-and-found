import React from "react";

interface ReportsGridLayoutProps {
  children: React.ReactNode;
}

const ReportsGridLayout = ({ children }: ReportsGridLayoutProps) => {
  return (
    <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {children}
    </div>
  );
};

export default ReportsGridLayout;
