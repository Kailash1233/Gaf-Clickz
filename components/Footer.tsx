"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Address */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-xl text-gray-300 mb-4">
              Gaf Clickz
            </h3>
            <p className="text-gray-400">123 Photography Street</p>
            <p className="text-gray-400">Chennai, Tamil Nadu</p>
            <p className="text-gray-400">India</p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="flex flex-col md:items-center">
            <h3 className="font-semibold text-xl text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-white transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-white transition"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Categories & Policies */}
          <div className="flex flex-col md:items-end">
            <h3 className="font-semibold text-xl text-gray-300 mb-4">
              Categories
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/wedding" className="hover:text-white transition">
                  Wedding
                </Link>
              </li>
              <li>
                <Link href="/animals" className="hover:text-white transition">
                  Animals
                </Link>
              </li>
              <li>
                <Link href="/fashion" className="hover:text-white transition">
                  Fashion
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold text-xl text-gray-300 mb-4">
                Privacy Policy
              </h3>
              <ul className="text-gray-400">
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-white transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {year} Gaf Clickz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
