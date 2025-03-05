"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function EnquireForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    otherService: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/manqvkjg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        otherService: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-800 to-black text-white flex flex-col md:flex-row items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start gap-8 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Book Shoot
            <br />
            Now
          </h1>
          <p className="mt-8 text-base md:text-lg max-w-md">
            Select a service and fill out the form to book your shoot today!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Enter Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent border-gray-600 focus:border-white h-12 text-white placeholder:text-gray-400"
            />

            <div className="flex gap-2">
              <div className="w-16">
                <Input
                  type="text"
                  value="+91"
                  readOnly
                  className="bg-transparent border-gray-600 h-12 text-white text-center"
                />
              </div>
              <div className="flex-1">
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-gray-600 focus:border-white h-12 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            <Input
              type="email"
              name="email"
              placeholder="Enter Your Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent border-gray-600 focus:border-white h-12 text-white placeholder:text-gray-400"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="bg-white border-gray-600 focus:border-white h-12 text-black w-full px-4 rounded-md"
            >
              <option value="" disabled>
                Select a Service *
              </option>
              <option value="Marriage">Marriage</option>
              <option value="Birthday">Birthday</option>
              <option value="Event">Event</option>
              <option value="Functions">Functions</option>
              <option value="Maternity">Maternity</option>
              <option value="Celebrity">Celebrity</option>
              <option value="Portrait Photoshoot">Portrait Photoshoot</option>
              <option value="Product Photography">Product Photography</option>
              <option value="Others">Others</option>
            </select>

            {formData.service === "Others" && (
              <Input
                type="text"
                name="otherService"
                placeholder="Specify your service *"
                value={formData.otherService}
                onChange={handleChange}
                required
                className="bg-transparent border-gray-600 focus:border-white h-12 text-white placeholder:text-gray-400"
              />
            )}

            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="bg-transparent border-gray-600 focus:border-white text-white placeholder:text-gray-400 resize-none"
            />

            <Button
              type="submit"
              className="w-full bg-white hover:bg-gray-200 text-black font-medium rounded-full h-12"
            >
              Submit
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
