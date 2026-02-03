import type { ReactNode } from "react";
import cls from "./FormField.module.scss";

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

export const FormField = ({ label, error, children }: FormFieldProps) => {
  return (
    <div className={cls.field}>
      <label className={cls.label}>{label}</label>
      {children}
      <span className={cls.error}>{error || "\u00A0"}</span>
    </div>
  );
};
