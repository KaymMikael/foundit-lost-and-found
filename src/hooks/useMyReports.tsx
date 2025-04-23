import { MyReportsContext } from "@/contexts/MyReportsContext";
import { useContext } from "react";

const useMyReports = () => {
  const context = useContext(MyReportsContext);

  if (!context) {
    throw new Error("Error using this hook, please check context provider");
  }

  return context;
};

export default useMyReports;
