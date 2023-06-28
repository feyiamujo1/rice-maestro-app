"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { SignupFormSchema } from "~/lib/validation-schema";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
  });

  const onSubmit = async (value: z.infer<typeof SignupFormSchema>) => {
    setLoading(true);
    setError("");

    try {
      const newUser = await (
        await fetch("http://localhost:3000/api/sanity/signUp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        })
      ).json();

      if (newUser?.error) {
        setError(newUser.error);
        return;
      }

      const res = await signIn("sanity-login", {
        redirect: false,
        email: value.email,
        password: value.password,
      });

      if (res?.error) {
        setError(res.error);
        return;
      }

      router.push("/");
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  className="focus:ring-1 focus:ring-[#2c963f]"
                  type="text"
                  placeholder="Fullname"
                  {...field}
                />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="focus:ring-1 focus:ring-[#2c963f]"
                  type="email"
                  placeholder="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  className="focus:ring-1 focus:ring-[#2c963f]"
                  type="tel"
                  placeholder="phone number"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    const phone = value.replace(/\D/g, "");
                    field.onChange(phone);
                  }}
                />
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
                <Input
                  className="focus:ring-1 focus:ring-[#2c963f]"
                  type="password"
                  placeholder="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && (
          <div className="text-sm font-medium text-red-500">{error}</div>
        )}
        <div className="mt-6">
          <Button
            className={
              "w-full bg-[#2c963f] text-lg font-medium text-white hover:bg-[#59b26a]"
            }
            disabled={loading}
            type="submit"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
}
