"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Mail, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card1";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  phone: z.string().min(10).max(15),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      phone: "",
      email: "",
      subject: "Wedding",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formspreeEndpoint = "https://formspree.io/f/xjvnqvzo";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Error sending message. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error sending message. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="container py-24 sm:py-32 text-white bg-black"
    >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg text-white mb-2 tracking-wider">Contact</h2>
          <h2 className="text-3xl md:text-4xl font-bold">Connect With Us</h2>
          <p className="mb-8 text-white">
            Let's Connect and Cook Up Some Digital Success Together!
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 mb-1">
              <Building2 className="text-white" />
              <span className="font-bold text-white">Find us</span>
            </div>
            <p className="text-white">Chennai, Tamil Nadu</p>

            <div className="flex gap-2 mb-1">
              <Phone className="text-white" />
              <span className="font-bold text-white">Call us</span>
            </div>
            <p className="text-white">+91 63690 50929</p>

            <div className="flex gap-2 mb-1">
              <Mail className="text-white" />
              <span className="font-bold text-white">Mail us</span>
            </div>
            <p className="text-white">info@adszoo.in</p>
          </div>
        </div>

        <Card className="bg-black text-white border-white">
          <CardHeader className="text-white text-2xl"></CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-black border-white text-white"
                          placeholder="Name"
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
                      <FormLabel className="text-white">Phone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          className="bg-black border-white text-white"
                          placeholder="Phone number"
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
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="bg-black border-white text-white"
                          placeholder="yourmail@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Subject</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-black border-white text-white">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black text-white border-white">
                          <SelectItem value="Wedding">Wedding</SelectItem>
                          <SelectItem value="Events">Events</SelectItem>
                          <SelectItem value="Portrait">Portrait</SelectItem>
                          <SelectItem value="Ads Shoot">Ads Shoot</SelectItem>
                          <SelectItem value="Video Shoot">
                            Video Shoot
                          </SelectItem>
                          <SelectItem value="Birthday Shoot">
                            Birthday Shoot
                          </SelectItem>
                          <SelectItem value="Others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          className="bg-black border-white text-white resize-none"
                          placeholder="Your message..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="bg-white text-black border-black hover:bg-gray-200">
                  Send message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </section>
  );
};
export default ContactUs;
