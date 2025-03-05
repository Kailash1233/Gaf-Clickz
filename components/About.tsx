import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-black py-16" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">
          About Us
        </h2>
        <p className="text-xl text-gray-200 text-center mb-12 max-w-3xl mx-auto">
          Learn more about{" "}
          <span className="font-semibold text-white">who we are</span>,
          <span className="font-semibold text-white"> what we do</span>, and our
          commitment to providing exceptional solutions for our clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="/myimages/gaf.jpg"
              alt="Abdul Gafur"
              width={500} // Adjust width as needed
              height={500} // Adjust height as needed
              className="rounded-xl shadow-lg transform transition duration-300"
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                About Abdul Gafur
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                <span className="font-medium text-white">Abdul Gafur</span> is a
                seasoned photographer with a unique ability to capture moments
                in time, inviting viewers to experience the emotions, stories,
                and beauty encapsulated in each shot. Through his keen eye for
                composition and detail, he elevates ordinary scenes into
                extraordinary works of art, encouraging others to see the world
                from a new perspective.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-200 leading-relaxed">
                His work not only reflects technical mastery but also a profound
                passion for storytelling. Whether capturing the grandeur of
                nature, the intimacy of human connections, or the vibrant pulse
                of city life, Gafur&apos;s photography invites people to explore
                new dimensions of the world around them.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Our <span className="font-medium text-white">mission</span> is
                to empower businesses and individuals by providing exceptional
                services that drive success. We are committed to exceeding
                expectations and fostering long-lasting relationships with our
                clients, helping them achieve their goals with innovative
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
