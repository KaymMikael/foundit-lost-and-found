import db from "@/instantdb/database";
import { User } from "@instantdb/react";

const useProfile = (user: User | null | undefined) => {
  const {
    isLoading: isProfileLoading,
    data: profileData,
    error: profileError,
  } = db.useQuery(
    user
      ? {
          profiles: {
            $: {
              where: {
                $user: user.id,
              },
            },
          },
        }
      : null
  );

  return { isProfileLoading, profileData, profileError };
};

export default useProfile;
