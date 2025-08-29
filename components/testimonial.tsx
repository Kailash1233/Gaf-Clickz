"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Enhanced testimonial data with more details
const testimonials = [
  {
    id: 1,
    image: "/profilepic.webp",
    name: "Ameer",
    role: "Professional Photoshoot Client",
    location: "Chennai, India",
    comment:
      "Working with Abdul Gafur was an absolute pleasure! His professionalism and attention to detail made the shoot seamless, and the results were beyond amazing. Every shot captured the essence of what we wanted.",
    rating: 5,
    category: "Professional",
    date: "2024",
    verified: true,
  },
  {
    id: 2,
    image: "/profilepic.webp",
    name: "Suba",
    role: "Maternity Shoot Client",
    location: "Bangalore, India",
    comment:
      "Your photography is absolutely stunning! The baby shower shoot was beautifully managed, and I'm excited to book you for future events. The way you captured those precious moments is priceless.",
    rating: 5,
    category: "Maternity",
    date: "2024",
    verified: true,
  },
  {
    id: 3,
    image: "/profilepic.webp",
    name: "Suresh",
    role: "Puberty Function Client",
    location: "Hyderabad, India",
    comment:
      "You made me feel like family throughout the shoot! Every moment was captured so beautifully, and I'll cherish these memories forever. The attention to cultural details was remarkable.",
    rating: 5,
    category: "Cultural Events",
    date: "2024",
    verified: true,
  },
  {
    id: 4,
    image: "/profilepic.webp",
    name: "Tahir",
    role: "Album Song Shoot Client",
    location: "Mumbai, India",
    comment:
      "Your cinematography skills brought my album song to life! The creativity and attention to detail were truly impressive. The visual storytelling was exactly what I envisioned.",
    rating: 5,
    category: "Cinematography",
    date: "2024",
    verified: true,
  },
  {
    id: 5,
    image: "/profilepic.webp",
    name: "Vijayenthira Poopathy",
    role: "Photography Enthusiast",
    location: "Chennai, India",
    comment:
      "I've seen his skills grow, and now he's an outstanding photographer. His work is always creative and top-notch! The evolution in his style is remarkable.",
    rating: 5,
    category: "Portfolio",
    date: "2024",
    verified: true,
  },
  {
    id: 6,
    image: "/profilepic.webp",
    name: "Sasi Kumar",
    role: "Wedding Client",
    location: "Coimbatore, India",
    comment:
      "Choosing Gaf Clickz for our wedding was the best decision! The photos are stunning, and they perfectly captured our special day. Every emotion, every moment was preserved beautifully.",
    rating: 5,
    category: "Wedding",
    date: "2024",
    verified: true,
  },
  {
    id: 7,
    image: "/profilepic.webp",
    name: "Shoaib",
    role: "Wedding Client",
    location: "Chennai, India",
    comment:
      "The team at Gaf Clickz Studio was professional and made us feel comfortable. Every moment was captured beautifully! The wedding album exceeded all our expectations.",
    rating: 5,
    category: "Wedding",
    date: "2024",
    verified: true,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(handleNext, 5000);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(handleNext, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, handleNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative py-20 px-4 overflow-hidden"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 text-white">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Client Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-quiche tracking-wider bg-gradient-to-r from-slate-900 via-primary to-slate-900 bg-clip-text text-white">
            What Our Clients Say
          </h2>

          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-gotham leading-relaxed">
            Real stories from happy clients who trusted us to capture their most
            precious moments. Every testimonial represents a journey of
            creativity, trust, and excellence.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 100 : -100,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  scale: { type: "spring", stiffness: 300, damping: 30 },
                  duration: 0.6,
                },
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -100 : 100,
                scale: 0.9,
                transition: { duration: 0.4 },
              }}
              className="w-full"
            >
              <Card className="border-0 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden relative group cursor-pointer">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-8 md:p-12 relative">
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-primary/20">
                    <Quote className="w-16 h-16" />
                  </div>

                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    {/* Avatar and Info Section */}
                    <motion.div className="md:col-span-4 flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-xl opacity-30"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <Avatar className="h-28 w-28 border-4 border-white shadow-2xl relative z-10">
                          <AvatarImage
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-primary/80 text-white">
                            {currentTestimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold font-quiche text-slate-900">
                          {currentTestimonial.name}
                        </h3>
                        <p className="text-primary font-medium font-gotham">
                          {currentTestimonial.role}
                        </p>
                        <p className="text-slate-500 text-sm font-gotham">
                          {currentTestimonial.location}
                        </p>

                        {/* Category badge */}
                        <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
                          <span className="text-xs font-medium text-primary">
                            {currentTestimonial.category}
                          </span>
                        </div>

                        {/* Verified badge */}
                        {currentTestimonial.verified && (
                          <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span className="text-xs font-medium text-green-700">
                              Verified Client
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Testimonial Content */}
                    <motion.div className="md:col-span-8">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.span
                            key={i}
                            className="text-2xl text-yellow-400"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                              delay: i * 0.1,
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                          >
                            {i < currentTestimonial.rating ? "★" : "☆"}
                          </motion.span>
                        ))}
                        <span className="ml-3 text-lg font-semibold text-slate-600">
                          {currentTestimonial.rating}.0
                        </span>
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed font-gotham italic mb-6 relative">
                        &ldquo;{currentTestimonial.comment}&rdquo;
                      </blockquote>

                      {/* Date */}
                      <p className="text-sm text-slate-500 font-gotham">
                        {currentTestimonial.date}
                      </p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          {/* Left Navigation */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="h-12 w-12 rounded-full border-2 border-slate-200 border-primary bg-primary hover:bg-primary/80 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <span className="text-sm text-slate-500 font-medium">
              {currentIndex + 1} of {testimonials.length}
            </span>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-500 cursor-pointer",
                  index === currentIndex
                    ? "bg-primary w-8 shadow-lg"
                    : "bg-slate-300 hover:bg-primary/50 hover:w-4"
                )}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500 font-medium">
              Auto-play {isAutoPlaying ? "ON" : "OFF"}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="h-12 w-12 rounded-full border-2 border-slate-200 border-primary bg-primary hover:bg-primary/80 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { label: "Happy Clients", value: "100+" },
            { label: "Projects Completed", value: "200+" },
            { label: "Years Experience", value: "5+" },
            { label: "Satisfaction Rate", value: "99%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 font-quiche">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-gotham">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
