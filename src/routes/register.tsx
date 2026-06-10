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

type RegisterValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [{ title: "Regalia — Register" }],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<RegisterValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: RegisterValues) {
    setSubmitted(true);
    console.log("Registration submitted", values);
  }

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-3xl border border-border/70 bg-card p-8 shadow-lg shadow-black/5 sm:p-10">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Royal registration</p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Create your account</h1>
          <p className="text-sm text-muted-foreground">
            Register to command the court, manage decrees, and keep your treasury in order.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                    <Input placeholder="Create a password" type="password" {...field} />
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
                    <Input placeholder="Repeat your password" type="password" {...field} />
                  </FormControl>
                  <FormMessage>
                    {field.value && field.value !== form.getValues("password")
                      ? "Passwords must match"
                      : null}
                  </FormMessage>
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
              <span>Already registered?</span>
              <Link to="/login" className="font-medium text-primary hover:underline">
                Sign in
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Create account
            </Button>

            {submitted ? (
              <p className="rounded-xl border border-green-400/50 bg-green-500/10 px-4 py-3 text-sm text-green-700">
                Registration submitted. Check the console for sample handling.
              </p>
            ) : null}
          </form>
        </Form>
      </div>
    </div>
  );
}
