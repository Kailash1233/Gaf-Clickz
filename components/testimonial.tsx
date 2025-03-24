// "use client";

// import { Star } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "./ui/carousel";

// interface ReviewProps {
//   image: string;
//   name: string;
//   userName: string;
//   comment: string;
//   rating: number;
// }

// const reviewList: ReviewProps[] = [
//   {
//     image: "/profilepic.webp",
//     name: "Ameer",
//     userName: "Client",
//     comment:
//       "Working with Abdul Gafur was an absolute pleasure! His professionalism and attention to detail made the shoot seamless, and the results were beyond amazing.",
//     rating: 5.0,
//   },
//   {
//     image: "/profilepic.webp",
//     name: "Suba",
//     userName: "Maternity Shoot Client",
//     comment:
//       "Your photography is absolutely stunning! The baby shower shoot was beautifully managed, and I’m excited to book you for future events.",
//     rating: 5.0,
//   },
//   {
//     image: "/profilepic.webp",
//     name: "Suresh",
//     userName: "Puberty Function Client",
//     comment:
//       "You made me feel like family throughout the shoot! Every moment was captured so beautifully, and I’ll cherish these memories forever.",
//     rating: 5.0,
//   },
//   {
//     image: "/profilepic.webp",
//     name: "Tahir",
//     userName: "Album Song Shoot Client",
//     comment:
//       "Your cinematography skills brought my album song to life! The creativity and attention to detail were truly impressive.",
//     rating: 5.0,
//   },
//   {
//     image: "/profilepic.webp",
//     name: "Vijayenthira Poopathy",
//     userName: "Photography Enthusiast",
//     comment:
//       "I've seen his skills grow, and now he’s an outstanding photographer. His work is always creative and top-notch!",
//     rating: 5.0,
//   },
//   {
//     image: "/profilepic.webp",
//     name: "Sasi Kumar",
//     userName: "Wedding Client",
//     comment:
//       "Choosing Gaf Clickz for our wedding was the best decision! The photos are stunning, and they perfectly captured our special day.",
//     rating: 5.0,
//   },
//   {
//     image: "/profilepic.webp",
//     name: "Shoaib",
//     userName: "Wedding Client",
//     comment:
//       "The team at Gaf Clickz Studio was professional and made us feel comfortable. Every moment was captured beautifully!",
//     rating: 5.0,
//   },
// ];

// export const TestimonialSection = () => {
//   return (
//     <section id="testimonials" className="">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl md:text-4xl font-bold mt-2 font-quiche tracking-widest">
//           What Our Clients Are Saying
//         </h2>
//         <p className="mt-2 text-lg font-gotham">
//           Real stories from happy clients who trusted us to capture their
//           special moments
//         </p>
//       </div>

//       <Carousel
//         opts={{ align: "start" }}
//         className="relative w-full max-w-4xl mx-auto overflow-hidden"
//       >
//         <CarouselContent>
//           {reviewList.map((review) => (
//             <CarouselItem
//               key={review.name}
//               className="w-full sm:w-1/2 lg:w-1/3 px-2"
//             >
//               <Card className="bg-white shadow-lg rounded-lg">
//                 <CardContent className="p-6">
//                   <div className="flex gap-1 pb-4">
//                     {[...Array(5)].map((_, index) => (
//                       <Star
//                         key={index}
//                         className="size-4 fill-primary text-primary"
//                       />
//                     ))}
//                   </div>
//                   <p className="text-gray-700">{`"${review.comment}"`}</p>
//                 </CardContent>
//                 <CardHeader>
//                   <div className="flex items-center gap-4">
//                     <Avatar>
//                       <AvatarImage src={review.image} alt="Profile Pic" />
//                       <AvatarFallback>NA</AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <CardTitle className="text-lg font-semibold">
//                         {review.name}
//                       </CardTitle>
//                       <CardDescription className="text-gray-500">
//                         {review.userName}
//                       </CardDescription>
//                     </div>
//                   </div>
//                 </CardHeader>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="absolute left-0 -translate-x-full" />
//         <CarouselNext className="absolute right-0 translate-x-full" />
//       </Carousel>
//     </section>
//   );
// };

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";

// Testimonial data
const testimonials = [
  {
    id: 1,
    image: "/profilepic.webp",
    name: "Ameer",
    comment:
      "Working with Abdul Gafur was an absolute pleasure! His professionalism and attention to detail made the shoot seamless, and the results were beyond amazing.",
    rating: 5,
  },
  {
    id: 2,
    image: "/profilepic.webp",
    name: "Suba",
    comment:
      "Your photography is absolutely stunning! The baby shower shoot was beautifully managed, and I’m excited to book you for future events.",
    rating: 5,
  },
  {
    id: 3,
    image: "/profilepic.webp",
    name: "Suresh",
    comment:
      "You made me feel like family throughout the shoot! Every moment was captured so beautifully, and I’ll cherish these memories forever.",
    rating: 5,
  },
  {
    id: 4,
    image: "/profilepic.webp",
    name: "Tahir",
    comment:
      "Your cinematography skills brought my album song to life! The creativity and attention to detail were truly impressive.",
    rating: 5,
  },
  {
    id: 5,
    image: "/profilepic.webp",
    name: "Vijayenthira Poopathy",
    comment:
      "I've seen his skills grow, and now he’s an outstanding photographer. His work is always creative and top-notch!",
    rating: 5,
  },
  {
    id: 6,
    image: "/profilepic.webp",
    name: "Sasi Kumar",
    comment:
      "Choosing Gaf Clickz for our wedding was the best decision! The photos are stunning, and they perfectly captured our special day.",
    rating: 5,
  },
  {
    id: 7,
    image: "/profilepic.webp",
    name: "Shoaib",
    comment:
      "The team at Gaf Clickz Studio was professional and made us feel comfortable. Every moment was captured beautifully!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current); // Clear previous interval before setting a new one

    intervalRef.current = setInterval(handleNext, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center mb-4 font-quiche tracking-widest">
        Client Testimonials
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-gotham">
        Hear what clients have to say about working with us.
      </p>

      <div className="relative max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={testimonials[currentIndex].id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
              },
            }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            className="w-full"
          >
            <Card className="border-none bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <Avatar className="h-24 w-24 border-4 border-background">
                      <AvatarImage
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                      />
                      <AvatarFallback>
                        {testimonials[currentIndex].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">
                          {i < testimonials[currentIndex].rating ? "★" : "☆"}
                        </span>
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl italic mb-6 font-gotham">
                      {testimonials[currentIndex].comment}
                    </blockquote>

                    <div>
                      <div className="font-semibold font-quiche">
                        {testimonials[currentIndex].name}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls */}
        <div className="flex justify-between mt-6">
          <Button
            variant="secondary"
            size="icon"
            onClick={handlePrev}
            className="rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-primary w-4"
                    : "bg-muted hover:bg-primary/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="secondary"
            size="icon"
            onClick={handleNext}
            className="rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
