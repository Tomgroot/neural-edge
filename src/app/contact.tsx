"use client";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import GradientText from "@/components/GradientText/GradientText";
import {useForm} from "react-hook-form";
import {Form, FormField, FormMessage} from "@/components/ui/form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircle, Check} from "lucide-react";
import {useState} from "react";

export default function ContactForm() {
    const formSchema = z.object({
        email: z.string().min(2, {
            message: "Email should be filled in.",
        }).max(50),
        phone: z.string().max(50).optional(),
    })

    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            phone: undefined,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch("https://tomgroot.nl/api/neural-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email: values.email, phone: values.phone}),
            });

            if (response.ok) {
                setSuccess(true);
            } else {
                setFailure(true);
            }
        } catch (e) {
            if (e instanceof Error) {
                setFailure(true);
            }
        }
    }

    return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm flex flex-col gap-3">
                    {failure && (<Alert variant="destructive" className="text-left">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle className="mb-0">Something went wrong, try again</AlertTitle>
                    </Alert>)}
                    {success && (<Alert className="text-left">
                        <Check className="h-4 w-4" />
                        <AlertTitle>Thanks for sharing your contact details</AlertTitle>
                        <AlertDescription>We will get in contact with you as soon as possible.</AlertDescription>
                    </Alert>)}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <div className="flex items-start flex-col gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input {...field} type="email" />
                                <FormMessage className="!text-blue" />
                            </div>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({field}) => (
                            <div className="flex items-start flex-col gap-1.5">
                                <Label htmlFor="phone">Phone (optional)</Label>
                                <Input {...field} type="tel" />
                                <FormMessage className="!text-blue"/>
                            </div>
                        )}
                    />
                    <button type="submit" onClick={() => {
                        setSuccess(false);
                        setFailure(false);
                    } }>
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={10}
                            showBorder={true}
                            className="px-6 py-3 cursor-pointer"
                        >
                            Send details
                        </GradientText>
                    </button>
                </form>
            </Form>
    );
}
