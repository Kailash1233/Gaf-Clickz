"use client";
import { Dock } from "@/components/Dock";
import { HeroParallaxDemo } from "@/components/Parallax";
import TestimonialSlider from "@/components/testimonials-slider";
import TestimonialSliderCard from "@/components/testimonials-slider-card";
import { Gallery } from "@/components/Gallery";

import Head from "next/head";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Packages from "@/components/Packages";
import Terms from "@/components/Terms";
import Footer from "@/components/Footer";

const testimonials = [
  {
    quote:
      "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
    name: "Rose Roberson",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=1",
  },
  {
    quote:
      "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.",
    name: "Chace Rodgers",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=10",
  },
  {
    quote:
      "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
    name: "Cornelius Sheppard",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=9",
  },
  {
    quote:
      "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    name: "Chace Rodgers",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=7",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    name: "Cornelius Sheppard",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=8",
  },
  {
    quote:
      "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
    name: "Chace Rodgers",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=2",
  },
  {
    quote:
      "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
    name: "Cornelius Sheppard",
    role: "CEO at Company",
    imgSrc: "https://i.pravatar.cc/120?img=3",
  },
];


export default function Home() {
  return (
    <>
      <Head>
        <title>Gafclickz</title>
        <meta
          name="description"
          content="I transform ordinary scenes into extraordinary works of art, drawing viewers into my world and encouraging them to discover new perspectives through my lens."
        />
      </Head>
        <main>
          <div id="hero">
            <HeroParallaxDemo />
          </div>
          <div id="gallery">
            <Gallery />
          </div>
          <div id="about">
            <About />
          </div>
          <div className="flex min-h-screen flex-col items-center justify-between py-24 px-5">
            <div className="container" id="testimonials">
              <h1 className="text-5xl font-extrabold text-center mt-4">Testimonials</h1>
              <TestimonialSliderCard testimonials={testimonials} />
            </div>
            <div id="packages">
              <Packages />
            </div>
            <div id="contact">
              <ContactUs />
              <Terms />
            </div>
            <div id="Footer">
              <Footer />
            </div>
          </div>
            <Dock />
        </main>
    </>
  );
}
