import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "@/pages/login/ui";
import { ProfilePage } from "@/pages/profile/ui";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
