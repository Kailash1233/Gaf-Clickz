"use client";
import React from "react";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card1";
import { Building2, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
  lastName: z.string().min(2).max(255),
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
    const { firstName, phone, email, subject, message } = values;
    const formspreeEndpoint = "https://formspree.io/f/xjvnqvzo";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          phone,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset(); // Reset form on successful submission
      } else {
        alert("Error sending message. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error sending message. Please try again.");
    }
  }

  return (
    <section id="contact" className="container py-24 sm:py-32 left-6">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contact
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold">Connect With Us</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Let&apos;s Connect and Cook Up Some Digital Success Together!
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-1">
                <Building2 />
                <div className="font-bold">Find us</div>
              </div>
              <div>Chennai, Tamil Nadu</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Phone />
                <div className="font-bold">Call us</div>
              </div>
              <div>+91 63690 50929</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Mail />
                <div className="font-bold">Mail US</div>
              </div>
              <div>info@adszoo.in</div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card mb-2">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder=" Name " {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    
                  />

                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="yourmail@gmail.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                  <div className="flex flex-col gap-1.5">
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => {
                        const [selectedValue, setSelectedValue] = useState("")
                        const [otherInput, setOtherInput] = useState("")

                        return (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value)
                                setSelectedValue(value)
                              }}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                              </FormControl>
                              <div className="bg-white">
                                <SelectContent>
                                  <SelectItem value="Wedding">
                                    Wedding
                                  </SelectItem>
                                  <SelectItem value="Events">
                                    Events
                                  </SelectItem>
                                  <SelectItem value="Lead Generation">
                                    Potrait
                                  </SelectItem>
                                  <SelectItem value="Social Media Management">
                                    Ads Shoot
                                  </SelectItem>
                                  <SelectItem value="Graphic Design">
                                    video shoot 
                                  </SelectItem>
                                  <SelectItem value="Video Editing">
                                    Birthday shoot
                                  </SelectItem>
                                  <SelectItem value="others">
                                    Others
                                  </SelectItem>
                                </SelectContent>
                              </div>
                            </Select>
                            {selectedValue === "others" && (
                              <input
                                type="text"
                                placeholder="Please specify"
                                value={otherInput}
                                onChange={(e) => {
                                  setOtherInput(e.target.value)
                                  field.onChange(e.target.value)
                                }}
                                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            )}
                            <FormMessage />
                          </FormItem>
                        )
                      }}
                    />
                  </div>
                

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Your message..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="my-2 ">Send message</Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
export default ContactUs;
