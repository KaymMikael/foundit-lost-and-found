import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Error using this hook, please check context provider");
  }

  return context;
};

export default useUser;
