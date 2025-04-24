import { ItemsReportsContext } from "@/contexts/ItemsReportsContext";
import { useContext } from "react";

const useItemsReports = () => {
  const context = useContext(ItemsReportsContext);

  if (!context) {
    throw new Error("Error using this hook, please check context provider");
  }

  return context;
};

export default useItemsReports;
