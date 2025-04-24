import { ReportsContext } from "@/contexts/ReportsContext";
import { useContext } from "react";

const useReports = () => {
  const context = useContext(ReportsContext);

  if (!context) {
    throw new Error("Error using this hook, please check context provider");
  }

  return context;
};

export default useReports;
