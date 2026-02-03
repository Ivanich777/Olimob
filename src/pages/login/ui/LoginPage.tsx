import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { FormField } from "@/shared/ui/FormField";
import cls from "./LoginPage.module.scss";

export const LoginPage = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.card}>
        <h1 className={cls.title}>Login to your account</h1>

        <form className={cls.form}>
          <FormField label="Name">
            <Input placeholder="Enter your name" />
          </FormField>

          <FormField label="Email">
            <Input placeholder="example@gmail.com" />
          </FormField>

          <FormField label="Password">
            <Input type="password" placeholder="••••••••" />
          </FormField>

          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};
