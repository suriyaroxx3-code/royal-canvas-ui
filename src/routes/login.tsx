import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type LoginValues = {
  email: string;
  password: string;
  remember: boolean;
};

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [{ title: "Regalia — Login" }],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<LoginValues>({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  function onSubmit(values: LoginValues) {
    setSubmitted(true);
    console.log("Login submitted", values);
  }

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-3xl border border-border/70 bg-card p-8 shadow-lg shadow-black/5 sm:p-10">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Royal sign in</p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to access your courtly dashboard and keep your kingdom running smoothly.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="name@royal.example" type="email" {...field} />
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
                    <Input placeholder="Enter your password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between gap-4">
              <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                  {...form.register("remember")}
                />
                Remember me
              </label>
              <Link to="/register" className="text-sm font-medium text-primary hover:underline">
                Create an account
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>

            {submitted ? (
              <p className="rounded-xl border border-green-400/50 bg-green-500/10 px-4 py-3 text-sm text-green-700">
                Login form submitted. Check the console for sample handling.
              </p>
            ) : null}
          </form>
        </Form>
      </div>
    </div>
  );
}
