// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowUp } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ContactPage() {
//   const [activeNav, setActiveNav] = useState("Contact");

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white"
//     >
//       <div className="container mx-auto px-4 md:px-8 py-12 overflow-hidden">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Side - Navigation */}
//           <motion.div
//             initial={{ x: window.innerWidth < 768 ? 0 : -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             <nav className="space-y-6">
//               <NavItem number="01" title="Home" active={activeNav === "Home"} />
//               <NavItem
//                 number="02"
//                 title="About"
//                 active={activeNav === "About"}
//               />
//               <NavItem
//                 number="03"
//                 title="Projects"
//                 active={activeNav === "Projects"}
//               />
//               <NavItem number="04" title="Blog" active={activeNav === "Blog"} />
//               <NavItem
//                 number="05"
//                 title="Contact"
//                 active={activeNav === "Contact"}
//               />
//             </nav>

//             <div className="pt-16">
//               <Link href="/" className="inline-block ">
//                 <Image
//                   src="/gaf.jpeg"
//                   alt="Gafclickz Logo"
//                   width={100}
//                   height={100}
//                   className="opacity-90 rounded-full"
//                 />
//               </Link>
//             </div>
//           </motion.div>

//           {/* Right Side - Contact Info */}
//           <motion.div
//             initial={{ x: 50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="lg:pl-12 pt-8 lg:pt-0"
//           >
//             <h1 className="text-5xl md:text-7xl font-bold mb-16">
//               Get In Touch
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
//               <div className="space-y-6">
//                 <div>
//                   <h2 className="text-xl font-medium mb-4">Say hello at:</h2>
//                   <a
//                     href="mailto:gafclickz@gmail.com"
//                     className="text-gray-300 hover:text-white transition-colors"
//                   >
//                     gafclickz@gmail.com
//                   </a>
//                 </div>

//                 <div>
//                   <p className="text-gray-300">
//                     Pallavaram, Chennai
//                     <br />
//                     Tamilnadu
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <h2 className="text-xl font-medium mb-4">Follow Us</h2>
//                 <div className="grid grid-cols-2 gap-y-3">
//                   <SocialLink title="Facebook" />
//                   <SocialLink title="Instagram" />
//                   <SocialLink title="Youtube" />
//                   <SocialLink title="Whatsapp" />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="border-t border-gray-800 py-6 mt-0">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center"
//         >
//           <p className="text-gray-400 text-sm">
//             Copyright © 2025 Gafclickz. All rights reserved | Designed by{" "}
//             <Link
//               href="https://adszoo.in"
//               className="text-white hover:underline"
//             >
//               Adszoo
//             </Link>
//           </p>

//           <button
//             onClick={scrollToTop}
//             className="mt-4 md:mt-0 bg-white text-black rounded-full p-3 hover:bg-gray-200 transition-colors"
//             aria-label="Scroll to top"
//           >
//             <ArrowUp size={16} />
//           </button>
//         </motion.div>
//       </footer>
//     </motion.div>
//   );
// }

// function NavItem({
//   number,
//   title,
//   active,
// }: {
//   number: string;
//   title: string;
//   active: boolean;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//       className="border-b border-gray-800 pb-6"
//     >
//       <Link
//         href={`/${title.toLowerCase()}`}
//         className={`group flex items-center ${
//           active ? "opacity-100" : "opacity-70 hover:opacity-100"
//         } transition-opacity`}
//       >
//         <span className="text-sm mr-4 opacity-60">{number}</span>
//         <span className="text-3xl font-medium">{title}</span>
//       </Link>
//     </motion.div>
//   );
// }

// function SocialLink({ title }: { title: string }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Link
//         href={`https://${title.toLowerCase()}.com`}
//         className="text-gray-300 hover:text-white transition-colors"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         {title}
//       </Link>
//     </motion.div>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function NavItem({
    number,
    title,
    route,
  }: {
    number: string;
    title: string;
    route: string;
  }) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-gray-800 pb-6"
      >
        <Link
          href={route}
          className="group flex items-center opacity-70 hover:opacity-100 transition-opacity"
        >
          <span className="text-sm mr-4 opacity-60">{number}</span>
          <span className="text-3xl font-medium">{title}</span>
        </Link>
      </motion.div>
    );
  }
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-4 md:px-8 py-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Navigation */}
          <motion.div
            initial={{ x: isMobile ? 0 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <nav className="space-y-6">
              <NavItem number="01" title="Home" route="/" />
              <NavItem number="02" title="Gallery" route="#gallery" />
              <NavItem number="03" title="About" route="#about" />
              <NavItem number="04" title="Packages" route="#packages" />
              <NavItem number="05" title="Contact" route="#contact" />
            </nav>

            <div className="pt-16">
              <Link href="/" className="inline-block ">
                <Image
                  src="/gaf.jpeg"
                  alt="Gafclickz Logo"
                  width={100}
                  height={100}
                  className="opacity-90 rounded-full"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:pl-12 pt-8 lg:pt-0"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-16">
              Get In Touch
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-medium mb-4">Say hello at:</h2>
                  <a
                    href="mailto:gafclickz@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    gafclickz@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-300">
                    Pallavaram, Chennai
                    <br />
                    Tamilnadu
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium mb-4">Follow Us</h2>
                <div className="grid grid-cols-2 gap-y-3">
                  <SocialLink title="Facebook" />
                  <SocialLink title="Instagram" />
                  <SocialLink title="Youtube" />
                  <SocialLink title="Whatsapp" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Gafclickz. All rights reserved | Designed by{" "}
            <Link
              href="https://adszoo.in"
              className="text-white hover:underline"
            >
              Adszoo
            </Link>
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-white text-black rounded-full p-3 hover:bg-gray-200 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </motion.div>
      </footer>
    </motion.div>
  );
}

function SocialLink({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`https://${title.toLowerCase()}.com`}
        className="text-gray-300 hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </Link>
    </motion.div>
  );
}
