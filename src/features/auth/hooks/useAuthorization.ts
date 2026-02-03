import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useAuthStore } from "@/entities/user/model/authStore";
import type { ChangeEvent, FormEvent } from "react";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "@/shared/lib/validators/auth";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export interface FormValues {
  name: string;
  email: string;
  password: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

export interface IUseAuthorization {
  form: FormValues;
  errors: FormErrors;
  submitted: boolean;
  isValid: string | boolean;
  isLoading: boolean;
  handleChange: (
    field: keyof FormValues,
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  handleLogout: () => void;
}

export const useAuthorization = (): IUseAuthorization => {
  const navigate = useNavigate();
  const { login, isLoading, logout } = useAuthStore();

  const [form, setForm] = useState<FormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const errors: FormErrors = {
    name: validateName(form.name),
    email: validateEmail(form.email),
    password: validatePassword(form.password),
  };

  const isValid =
    Object.values(errors).every((err) => !err) &&
    form.name &&
    form.email &&
    form.password;

  const handleChange =
    (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isValid) return;

    await login({ name: form.name, email: form.email });
    navigate("/profile");
  };

  const handleLogout = async () => {
    logout();
    setForm(initialValues);
    navigate("/login");
  };

  return {
    form,
    errors,
    submitted,
    isValid,
    isLoading,
    handleChange,
    handleSubmit,
    handleLogout,
  };
};
