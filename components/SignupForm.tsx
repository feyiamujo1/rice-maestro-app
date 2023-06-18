"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form"
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod"
import { SignupFormSchema } from "~/lib/validation-schema";
import * as z from "zod"

export default function SignupForm(){
    const form = useForm<z.infer<typeof SignupFormSchema>>({
        resolver: zodResolver(SignupFormSchema)
    });

    const onSubmit = (value: z.infer<typeof SignupFormSchema>) =>{
        console.log(value);
    }
    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input className="focus:ring-[#2c963f] focus:ring-1" type="text" placeholder="Fullname" {...field} />
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
                            <Input className="focus:ring-[#2c963f] focus:ring-1" type="email" placeholder="email" {...field} />
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
                            <Input className="focus:ring-[#2c963f] focus:ring-1" type="tel" placeholder="phone number" {...field} />
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
                            <Input className="focus:ring-[#2c963f] focus:ring-1" type="password" placeholder="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <div className="mt-6">
                    <Button className={"w-full text-white font-medium text-lg bg-[#2c963f] hover:bg-[#59b26a]"} type="submit">Register</Button>
                </div>
            </form>
        </Form>
    )
}