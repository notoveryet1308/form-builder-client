import { signupUserSchema } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useSignupMutation from "./useSignupMutation";
import { useNavigate } from "@tanstack/react-router";

const useSignupData = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPasswordMatch, setConfirmPasswordMatch] = useState(true);

  const form = useForm<z.infer<typeof signupUserSchema>>({
    resolver: zodResolver(signupUserSchema),
    defaultValues: {
      email: "user_3@gmail.com",
      firstName: "user",
      lastName: "",
      password: "Test@123",
      confirmPassword: "Test@123",
    },
  });
  const { mutate, isLoading, error } = useSignupMutation();
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const onSuccess = () => {
    navigate({ to: "/login" });
  };

  const onSubmit = (values: z.infer<typeof signupUserSchema>) => {
    setConfirmPasswordMatch(values.confirmPassword === values.password);
    if (values.confirmPassword === values.password) {
      mutate({
        variables: {
          email: values.email,
          lastName: values.password,
          password: values.password,
          firstName: values.firstName,
        },
        onSuccess,
      });
    }
  };

  return {
    form,
    error,
    onSubmit,
    isLoading,
    showPassword,
    toggleShowPassword,
    confirmPasswordMatch,
  };
};

export default useSignupData;
