import type { InputHTMLAttributes, ReactNode } from "react";
import cls from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export const Input = ({ icon, id, ...props }: InputProps) => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.inputContainer}>
        <input id={id} className={cls.input} {...props} />
        {icon && <div className={cls.icon}>{icon}</div>}
      </div>
    </div>
  );
};
