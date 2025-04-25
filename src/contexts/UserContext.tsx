import { User } from "@/types/index.type";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface UserContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({
    id: uuidv4(),
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    avatar: "https://github.com/shadcn.png",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
