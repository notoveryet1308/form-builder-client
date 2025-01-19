import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { loginUserSchema } from "@/schema/auth";
import useLoginQuery from "./useLoginQuery";

const useLoginData = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginUserSchema>>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: "user_two@gmail.com",
      password: "Test@123",
    },
  });

  const { mutate, isLoading, data, error } = useLoginQuery();
  const onSuccess = () => {
    navigate({ to: "/workspace" });
  };

  const onSubmit = (values: z.infer<typeof loginUserSchema>) => {
    mutate({
      variables: values,
      onSuccess,
    });
  };

  return { form, onSubmit, isLoading, error, data };
};

export default useLoginData;
