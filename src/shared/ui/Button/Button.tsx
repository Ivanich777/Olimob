import cls from "./Button.module.scss";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button = ({
  children,
  loading,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button className={cls.button} disabled={disabled || loading} {...props}>
      {loading ? "Loading…" : children}
    </button>
  );
};
