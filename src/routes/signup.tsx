"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Eye, EyeClosed, Ban } from "lucide-react";

import ProductLogo from "@/components/ProductLogo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { signupUserSchema } from "@/schema/auth";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPasswordMatch, setConfirmPasswordMatch] = useState(true);

  const form = useForm<z.infer<typeof signupUserSchema>>({
    resolver: zodResolver(signupUserSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = (values: z.infer<typeof signupUserSchema>) => {
    setConfirmPasswordMatch(values.confirmPassword === values.password);
    if (values.confirmPassword === values.password) {
      navigate({ to: "/workspace" });
    }
  };

  return (
    <div className="grid grid-cols-2 w-full h-lvh">
      <div className="bg-fade-bg py-8 px-4 flex items-start">
        <ProductLogo />
      </div>

      <div className="p-8 flex gap-4 justify-center items-center flex-col min-w-[500px] max-w-[600px] mx-auto my-0 ">
        {!confirmPasswordMatch && (
          <Alert variant="warning">
            <Ban />
            <AlertTitle>Password mismatch !!</AlertTitle>
            <AlertDescription>
              Entered password and confirm password do not match
            </AlertDescription>
          </Alert>
        )}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" w-full flex flex-col space-y-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="flex gap-2 items-center">
                      <Input
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        {...field}
                      />
                      <div>
                        {!showPassword ? (
                          <EyeClosed onClick={toggleShowPassword} />
                        ) : (
                          <Eye onClick={toggleShowPassword} />
                        )}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm password"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>

        <div className=" w-full justify-center  flex items-center">
          <Button variant="link">
            <p>Already a customer ?</p>
            <Link to="/login" className="text-secondary-text">
              Login
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
