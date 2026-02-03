import type { InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = ({ error, ...props }: InputProps) => {
  return (
    <div className={cls.wrapper}>
      <input className={`${cls.input} ${error ? cls.error : ""}`} {...props} />
      {error && <span className={cls.errorText}>{error}</span>}
    </div>
  );
};
