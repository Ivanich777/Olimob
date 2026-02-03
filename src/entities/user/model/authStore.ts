import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;

  login: (user: User) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,

      login: async (user) => {
        set({ isLoading: true });

        await new Promise((resolve) => setTimeout(resolve, 2000));

        set({
          user,
          isLoading: false,
        });
      },

      logout: async () => {
        set({ isLoading: true });

        await new Promise((resolve) => setTimeout(resolve, 2000));

        set({ user: null, isLoading: false });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
