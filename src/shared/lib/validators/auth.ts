export const validateName = (value: string) => {
  if (value.length < 3) return "Name must be at least 3 characters";
  return "";
};

export const validateEmail = (value: string) => {
  if (!value.includes("@gmail.com")) return "Email must contain @gmail.com";
  return "";
};

export const validatePassword = (value: string) => {
  if (value.length < 6) return "Password must be at least 6 characters";
  if (!/[!@#$%^&*]/.test(value))
    return "Password must contain a special character";
  return "";
};
