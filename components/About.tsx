import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-3xl font-bold text-black text-center mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Learn more about who we are, what we do, and our mission to deliver exceptional solutions for our clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/images/Animals.jpg"
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-black mb-4">
              Who We Are
            </h3>
            <p className="text-gray-700 mb-4">
              We are a team of passionate individuals committed to creating impactful solutions for our clients. With years of experience, we bring innovation, dedication, and expertise to every project we take on.
            </p>
            <h3 className="text-xl font-semibold text-black mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              Our mission is to empower businesses and individuals by delivering top-notch services that drive success. We strive to exceed expectations and build long-lasting relationships with our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
