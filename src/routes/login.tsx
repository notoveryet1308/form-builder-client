import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Login,
});

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { loginUserSchema } from "../schema/auth";

function Login() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginUserSchema>>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginUserSchema>) => {
    console.log(values);
    navigate({ to: "/workspace" });
  };

  return (
    <div className=" grid grid-cols-2 w-full h-lvh">
      <div className="bg-fade-bg py-8 px-4 flex items-start">
        <ProductLogo />
      </div>

      <div className=" w-full p-8 flex gap-4 justify-center items-center flex-col min-w-[500px] max-w-[600px] mx-auto my-0 ">
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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </Form>
        <Label>or</Label>
        <div className=" w-full justify-center  flex items-center">
          <Button variant="link">
            <p>Register here?</p>
            <Link to="/signup" className="text-secondary-text">
              Signup
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
