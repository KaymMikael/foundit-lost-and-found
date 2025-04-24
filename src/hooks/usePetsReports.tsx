import { PetsReportsContext } from "@/contexts/PetsReportsContext";
import { useContext } from "react";

const usePetsReport = () => {
  const context = useContext(PetsReportsContext);

  if (!context) {
    throw new Error("Error using this hook, please check context provider");
  }

  return context
};

export default usePetsReport