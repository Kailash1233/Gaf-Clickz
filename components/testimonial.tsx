"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/profilepic.webp",
    name: "Ameer",
    userName: "Client",
    comment:
      "Working with Abdul Gafur was an absolute pleasure! His professionalism and attention to detail made the shoot seamless, and the results were beyond amazing.",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Suba",
    userName: "Maternity Shoot Client",
    comment:
      "Your photography is absolutely stunning! The baby shower shoot was beautifully managed, and I’m excited to book you for future events.",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Suresh",
    userName: "Puberty Function Client",
    comment:
      "You made me feel like family throughout the shoot! Every moment was captured so beautifully, and I’ll cherish these memories forever.",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Tahir",
    userName: "Album Song Shoot Client",
    comment:
      "Your cinematography skills brought my album song to life! The creativity and attention to detail were truly impressive.",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Vijayenthira Poopathy",
    userName: "Photography Enthusiast",
    comment:
      "I've seen his skills grow, and now he’s an outstanding photographer. His work is always creative and top-notch!",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Sasi Kumar",
    userName: "Wedding Client",
    comment:
      "Choosing Gaf Clickz for our wedding was the best decision! The photos are stunning, and they perfectly captured our special day.",
    rating: 5.0,
  },
  {
    image: "/profilepic.webp",
    name: "Shoaib",
    userName: "Wedding Client",
    comment:
      "The team at Gaf Clickz Studio was professional and made us feel comfortable. Every moment was captured beautifully!",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-chloe tracking-widest">
          What Our Clients Are Saying
        </h2>
        <p className="mt-2 text-lg font-gotham">
          Real stories from happy clients who trusted us to capture their
          special moments.
        </p>
      </div>

      <Carousel
        opts={{ align: "start" }}
        className="relative w-full max-w-4xl mx-auto overflow-hidden"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="w-full sm:w-1/2 lg:w-1/3 px-2"
            >
              <Card className="bg-white shadow-lg rounded-lg">
                <CardContent className="p-6">
                  <div className="flex gap-1 pb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="size-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{`"${review.comment}"`}</p>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt="Profile Pic" />
                      <AvatarFallback>NA</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {review.name}
                      </CardTitle>
                      <CardDescription className="text-gray-500">
                        {review.userName}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 -translate-x-full" />
        <CarouselNext className="absolute right-0 translate-x-full" />
      </Carousel>
    </section>
  );
};
