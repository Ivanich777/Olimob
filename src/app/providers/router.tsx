import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "@/pages/login/ui";
import { ProfilePage } from "@/pages/profile/ui";
import { useAuthStore } from "@/entities/user/model/authStore";
import type { JSX } from "react";
import { NotFoundPage } from "@/pages/not-found";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAuthStore((s) => s.user);
  return user ? children : <Navigate to="/login" />;
};

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAuthStore((s) => s.user);
  return !user ? children : <Navigate to="/profile" />;
};

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
