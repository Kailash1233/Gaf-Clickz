"use client";

import Image from "next/image";
import { imageLoader } from "@/app/lib/imageLoader";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/types/testimonial";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface TestimonialSliderCardProps {
  testimonials: Testimonial[];
}

export default function TestimonialSliderCard({
  testimonials,
}: TestimonialSliderCardProps) {
  return (
    <section className="w-full py-16 ">
      <div className="mx-auto lg:max-w-7xl px-4 sm:px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          What Our Clients Say
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Hear from our valued clients about their experiences working with us.
          We take pride in helping businesses thrive through exceptional
          service.
        </p>
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 px-4"
              >
                <Card className="shadow-lg rounded-lg overflow-hidden bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 ease-in-out">
                  <CardContent className="flex flex-col items-center justify-center p-8">
                    <q className="text-xl text-gray-600 italic leading-relaxed mb-6">
                      {testimonial.quote}
                    </q>
                    <div className="flex items-center gap-4">
                      <Image
                        loader={imageLoader}
                        className="h-14 w-14 rounded-full border-2 border-gray-300"
                        height={56}
                        width={56}
                        alt={testimonial.name}
                        src={testimonial.imgSrc}
                        loading="lazy"
                      />
                      <div>
                        <p className="text-lg font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-gray-700" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-gray-700" />
        </Carousel>
      </div>
    </section>
  );
}
