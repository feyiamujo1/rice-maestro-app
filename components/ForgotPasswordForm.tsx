"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Input } from "./ui/input";
import { useForm } from "react-hook-form"
import { Button } from "./ui/button";
import { ForgotPasswordFormSchema } from "~/lib/validation-schema";

export default function ForgotPasswordForm(){
    const form = useForm<z.infer<typeof ForgotPasswordFormSchema>>({
        resolver: zodResolver(ForgotPasswordFormSchema)
    });

    const onSubmit = (value: z.infer<typeof ForgotPasswordFormSchema>) =>{
        console.log(value);
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>A password reset link will be sent to the email you provide below.</FormLabel>
                        <FormControl>
                            <Input className="focus:ring-[#2c963f] focus:ring-1" type="email" placeholder="email" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <div className="mt-6">
                    <Button className={"w-full text-white font-medium text-lg bg-[#2c963f] hover:bg-[#59b26a]"} type="submit">Send</Button>
                </div>
            </form>
        </Form>
    )
}