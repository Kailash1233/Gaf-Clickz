"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import About from "@/components/About";
import Packages from "@/components/Packages";
import EnquireForm from "@/components/enquire-form";
import ContactPage from "@/components/contact-page";
import PortfolioPage from "@/components/Portfolio";
import { TestimonialSection } from "@/components/testimonial";

export default function Home() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const getImageSrc = () =>
      // window.innerWidth < 768 ? "/GafClickz1.jpg" : "/GafClickz.jpg";
      window.innerWidth < 768
        ? "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Home/GafClickz1.jpg"
        : "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Home/GafClickz.jpg";

    const handleResize = () => setImageSrc(getImageSrc());

    handleResize(); // Set initial image source after mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="relative bg-black text-white">
      {/* Background Image Section */}
      <div className="relative w-full h-screen">
        {imageSrc && (
          <div className="absolute inset-0 z-0">
            <img
              src={imageSrc}
              alt="Gaf Clickz Landing"
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Navbar Above the Background */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>
      </div>

      <div id="gallery">
        <PortfolioPage />
      </div>
      {/* Other Content Below */}
      {/* <div id="gallery">
        <Gallery />
      </div> */}

      <div id="about">
        <About />
      </div>

      <div id="packages">
        <Packages />
      </div>

      <div id="testimonials">
        <TestimonialSection />
      </div>

      <div id="contact">
        <EnquireForm />
      </div>

      <div id="Footer">
        <ContactPage />
      </div>
    </main>
  );
}
