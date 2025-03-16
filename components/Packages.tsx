"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

const packages = [
  {
    title: "Wedding Photography",
    description:
      "Capture your special day with our professional wedding photography services. Relive every moment with stunning, high-quality images.",
    image: "/images/Wedding1.jpg",
  },
  {
    title: "Maternity Shoot",
    description:
      "Preserve the beauty of motherhood with a heartwarming maternity photoshoot. Perfect for capturing this precious phase of life.",
    image: "/images/PreWedding.jpg",
  },
  {
    title: "Event Photoshoot",
    description:
      "From birthdays to corporate events, we cover it all with professional-grade photography to make your event unforgettable.",
    image: "/images/events.jpg",
  },
  {
    title: "Fashion Photoshoot",
    description:
      "Get a high-end fashion photoshoot experience with expert lighting and posing guidance to bring out your best look.",
    image: "/images/fashion.jpg",
  },
  {
    title: "Product Photography",
    description:
      "Showcase your products in the best light with high-quality, professionally edited images for eCommerce and marketing.",
    image: "/images/product.jpg",
  },
  {
    title: "Portfolio Shoot",
    description:
      "Create a stunning portfolio for your modeling or acting career with professionally curated photoshoots.",
    image: "/images/Celebrity.jpg",
  },
];

export function Packages() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState<"loading" | "success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mjkykylr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", date: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16"
      id="packages"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold text-center mb-8 font-chloe"
        >
          Photography Packages
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center text-lg text-gray-400 mb-12 max-w-3xl mx-auto font-gotham"
        >
          Explore our wide range of photography services designed to capture
          your special moments with creativity and precision.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white text-black rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full h-64">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={400}
                  height={256}
                  className="object-cover w-full h-full"
                  priority={index === 0}
                  unoptimized
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold font-chloe">
                  {pkg.title}
                </h2>
                <p className="text-gray-700 text-sm mt-2 font-gotham">
                  {pkg.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-black font-bold py-3 px-6 rounded-full transition border border-black"
            onClick={() => setIsOpen(true)}
          >
            Get a Quote
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <Dialog.Title className="text-2xl font-bold mb-4 text-black">
            Get a Quote
          </Dialog.Title>
          {status === "success" ? (
            <p className="text-green-600">
              Your request has been submitted successfully!
            </p>
          ) : status === "error" ? (
            <p className="text-red-600">
              Something went wrong. Please try again.
            </p>
          ) : (
            <>
              <p className="text-gray-600 mb-4">
                Fill in your details and we will get back to you soon.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 rounded text-black"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-2 rounded text-black"
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border p-2 rounded text-black"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border p-2 rounded text-black"
                  rows={3} // ✅ Use a number instead of a string
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-black text-white font-bold py-2 px-4 rounded-full transition"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                </button>
              </form>
            </>
          )}
          <button
            onClick={() => {
              setIsOpen(false);
              setStatus(null);
            }}
            className="mt-4 text-black font-bold py-2 px-4 rounded-full border border-black transition"
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}

export default Packages;
