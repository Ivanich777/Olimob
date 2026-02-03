import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { FormField } from "@/shared/ui/FormField";
import cls from "./LoginForm.module.scss";
import { useAuthorization } from "@/features/auth/hooks/useAuthorization.ts";
import { PasswordInput } from "@/shared/ui/PasswordInput/PasswordInput.tsx";

export const LoginForm = () => {
  const {
    form,
    errors,
    submitted,
    isValid,
    isLoading,
    handleChange,
    handleSubmit,
  } = useAuthorization();

  return (
    <form className={cls.form} onSubmit={handleSubmit}>
      <FormField label="Name" error={submitted ? errors.name : undefined}>
        <Input
          id="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange("name")}
          disabled={isLoading}
        />
      </FormField>

      <FormField label="Email" error={submitted ? errors.email : undefined}>
        <Input
          placeholder="example@gmail.com"
          value={form.email}
          onChange={handleChange("email")}
          disabled={isLoading}
        />
      </FormField>

      <FormField
        label="Password"
        error={submitted ? errors.password : undefined}
      >
        <PasswordInput
          id="password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange("password")}
          disabled={isLoading}
        />
      </FormField>

      <Button type="submit" disabled={isLoading || !isValid}>
        {isLoading ? "Loading…" : "Login"}
      </Button>
    </form>
  );
};
