"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { cn } from "~/lib/utils"

import { Input } from "./ui/input";
import { useForm } from "react-hook-form"
import { Button } from "./ui/button";

export default function ChangePasswordForm(){
    const form = useForm();

    const onSubmit = (value: any) =>{
        console.log(value);
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>New password</FormLabel>
                        <FormControl>
                            <Input className="focus:ring-[#2c963f] focus:ring-1" type="password" placeholder="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="_confirm_password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirm password.</FormLabel>
                        <FormControl>
                            <Input className="focus:ring-[#2c963f] focus:ring-1" type="password" placeholder="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <div className="mt-6">
                    <Button className={"w-full text-white font-medium text-lg bg-[#2c963f] hover:bg-[#59b26a]"} type="submit">Confirm</Button>
                </div>
            </form>
        </Form>
    )
}