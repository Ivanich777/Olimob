import { useState } from "react";
import { Input } from "@/shared/ui/Input";
import CheckPasswordIcon from "@/shared/assets/icons/CheckPassword.svg?react";
import LockPasswordIcon from "@/shared/assets/icons/LockPassword.svg?react";

export const PasswordInput = (props: any) => {
  const { value } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      {...props}
      type={showPassword ? "text" : "password"}
      icon={
        showPassword && value !== "" ? (
          <LockPasswordIcon
            width={20}
            height={20}
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <CheckPasswordIcon
            display={value === "" ? "none" : "block"}
            width={20}
            height={20}
            onClick={() => setShowPassword(true)}
          />
        )
      }
    />
  );
};
