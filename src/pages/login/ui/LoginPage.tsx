import cls from "./LoginPage.module.scss";
import { LoginForm } from "@/features/auth/ui";

export const LoginPage = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.card}>
        <h1 className={cls.title}>Login to your account</h1>
        <LoginForm />
      </div>
    </div>
  );
};
