// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Dialog } from "@headlessui/react";
// import {
//   Camera,
//   Heart,
//   Users,
//   Calendar,
//   Building,
//   ShoppingBag,
//   Star,
//   CheckCircle,
//   ArrowRight,
//   Phone,
//   Clock,
//   Award,
//   Sparkles,
// } from "lucide-react";

// // Enhanced package data with pricing, features, and icons
// const packages = [
//   {
//     id: 1,
//     title: "Wedding Photography",
//     subtitle: "Your Perfect Day, Perfectly Captured",
//     description:
//       "Capture your special day with our professional wedding photography services. Relive every moment with stunning, high-quality images that tell your unique love story.",
//     image:
//       "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Cover/Wedding.jpg",
//     icon: Heart,
//     price: "Starting from ₹25,000",
//     duration: "Full Day Coverage",
//     features: [
//       "Pre-wedding consultation",
//       "Full day coverage (8-10 hours)",
//       "500+ edited photos",
//       "Online gallery",
//       "USB drive with high-res images",
//       "Wedding album design",
//       "Engagement shoot included",
//     ],
//     popular: true,
//     category: "Wedding",
//     delivery: "2-3 weeks",
//     rating: 5.0,
//     reviews: 127,
//   },
//   {
//     id: 2,
//     title: "Maternity Shoot",
//     subtitle: "Celebrating the Miracle of Life",
//     description:
//       "Preserve the beauty of motherhood with a heartwarming maternity photoshoot. Perfect for capturing this precious phase of life with artistic and elegant photography.",
//     image:
//       "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Cover/Maternity.jpg",
//     icon: Heart,
//     price: "Starting from ₹8,000",
//     duration: "2-3 Hours",
//     features: [
//       "Professional styling guidance",
//       "2-3 outfit changes",
//       "50+ edited photos",
//       "Online gallery",
//       "USB drive with images",
//       "Print-ready files",
//       "Family members welcome",
//     ],
//     popular: false,
//     category: "Portrait",
//     delivery: "1 week",
//     rating: 4.9,
//     reviews: 89,
//   },
//   {
//     id: 3,
//     title: "Fashion Photoshoot",
//     subtitle: "Unleash Your Inner Model",
//     description:
//       "Get a high-end fashion photoshoot experience with expert lighting and posing guidance to bring out your best look and create stunning portfolio images.",
//     image:
//       "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Cover/Fashion.jpg",
//     icon: Star,
//     price: "Starting from ₹12,000",
//     duration: "3-4 Hours",
//     features: [
//       "Professional makeup artist",
//       "Wardrobe consultation",
//       "Multiple locations",
//       "100+ edited photos",
//       "Online gallery",
//       "Print-ready files",
//       "Social media optimization",
//     ],
//     popular: false,
//     category: "Fashion",
//     delivery: "1-2 weeks",
//     rating: 4.8,
//     reviews: 156,
//   },
//   {
//     id: 4,
//     title: "Event Photography",
//     subtitle: "Every Moment, Every Memory",
//     description:
//       "From birthdays to corporate events, we cover it all with professional-grade photography to make your event unforgettable and capture every special moment.",
//     image:
//       "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Cover/Event%20coverage.jpg",
//     icon: Users,
//     price: "Starting from ₹15,000",
//     duration: "4-6 Hours",
//     features: [
//       "Event planning consultation",
//       "Full event coverage",
//       "200+ edited photos",
//       "Online gallery",
//       "USB drive with images",
//       "Quick turnaround",
//       "Social media highlights",
//     ],
//     popular: false,
//     category: "Events",
//     delivery: "1 week",
//     rating: 4.7,
//     reviews: 203,
//   },
//   {
//     id: 5,
//     title: "Corporate Photography",
//     subtitle: "Professional Image, Professional Results",
//     description:
//       "Professional headshots, office culture photography, and branding shoots to enhance your company's image and create compelling visual content.",
//     image:
//       "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Cover/Corporate.jpg",
//     icon: Building,
//     price: "Starting from ₹20,000",
//     duration: "Full Day",
//     features: [
//       "Company branding consultation",
//       "Team headshots",
//       "Office culture photos",
//       "Product photography",
//       "300+ edited photos",
//       "Online gallery",
//       "Corporate branding package",
//     ],
//     popular: false,
//     category: "Corporate",
//     delivery: "1-2 weeks",
//     rating: 4.9,
//     reviews: 78,
//   },
//   {
//     id: 6,
//     title: "Commercial Photography",
//     subtitle: "Your Business, Our Vision",
//     description:
//       "Showcase your business, products, and services with high-quality commercial photography for marketing and advertising that drives results.",
//     image:
//       "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Cover/Commercial.jpg",
//     icon: ShoppingBag,
//     price: "Starting from ₹18,000",
//     duration: "Half Day",
//     features: [
//       "Creative consultation",
//       "Product photography",
//       "Lifestyle shots",
//       "Marketing materials",
//       "150+ edited photos",
//       "Online gallery",
//       "Commercial usage rights",
//     ],
//     popular: false,
//     category: "Commercial",
//     delivery: "1-2 weeks",
//     rating: 4.8,
//     reviews: 134,
//   },
// ];

// // Package categories for filtering
// const categories = [
//   { id: "all", name: "All Packages", icon: Camera },
//   { id: "wedding", name: "Wedding", icon: Heart },
//   { id: "portrait", name: "Portrait", icon: Users },
//   { id: "fashion", name: "Fashion", icon: Star },
//   { id: "events", name: "Events", icon: Calendar },
//   { id: "corporate", name: "Corporate", icon: Building },
//   { id: "commercial", name: "Commercial", icon: ShoppingBag },
// ];

// export function Packages() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedPackage, setSelectedPackage] = useState<
//     (typeof packages)[0] | null
//   >(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     date: "",
//     package: "",
//     message: "",
//   });
//   const [status, setStatus] = useState<"loading" | "success" | "error" | null>(
//     null
//   );

//   const filteredPackages =
//     selectedCategory === "all"
//       ? packages
//       : packages.filter(
//           (pkg) => pkg.category.toLowerCase() === selectedCategory
//         );

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus("loading");

//     try {
//       const response = await fetch("https://formspree.io/f/mjkykylr", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("success");
//         setFormData({
//           name: "",
//           phone: "",
//           email: "",
//           date: "",
//           package: "",
//           message: "",
//         });
//       } else {
//         setStatus("error");
//       }
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setStatus("error");
//     }
//   };

//   const openQuoteModal = (pkg?: (typeof packages)[0]) => {
//     if (pkg) {
//       setSelectedPackage(pkg);
//       setFormData((prev) => ({ ...prev, package: pkg.title }));
//     }
//     setIsOpen(true);
//   };

//   return (
//     <section
//       className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 relative overflow-hidden"
//       id="packages"
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-1">
//         {/* Header Section */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
//             <Sparkles className="w-4 h-4 text-white" />
//             <span className="text-sm font-medium text-white">Our Services</span>
//           </div>

//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-quiche tracking-wider text-white">
//             Photography Packages
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-gotham leading-relaxed">
//             Explore our comprehensive range of photography services designed to
//             capture your special moments with creativity, precision, and
//             artistic excellence.
//           </p>
//         </motion.div>

//         {/* Category Filter */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-4 mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           {categories.map((category) => (
//             <motion.button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                 selectedCategory === category.id
//                   ? "bg-primary text-white shadow-lg shadow-primary/25"
//                   : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
//               }`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <category.icon className="w-4 h-4" />
//               {category.name}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Packages Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
//           {filteredPackages.map((pkg, index) => (
//             <motion.div
//               key={pkg.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="group relative"
//             >
//               {/* Popular Badge */}
//               {pkg.popular && (
//                 <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
//                   Most Popular
//                 </div>
//               )}

//               {/* Rating Badge */}
//               <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                 <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
//                 {pkg.rating} ({pkg.reviews})
//               </div>

//               <motion.div
//                 className="bg-white/95 backdrop-blur-sm text-black rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 group-hover:shadow-primary/25"
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 style={{
//                   transformStyle: "preserve-3d",
//                 }}
//               >
//                 {/* Image Container */}
//                 <div className="relative w-full h-72 overflow-hidden">
//                   <Image
//                     src={pkg.image}
//                     alt={pkg.title}
//                     width={400}
//                     height={288}
//                     className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                     priority={index < 3}
//                     unoptimized
//                   />

//                   {/* Overlay on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   {/* Package Icon */}
//                   <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
//                     <pkg.icon className="w-6 h-6 text-primary" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-8">
//                   {/* Header */}
//                   <div className="mb-4">
//                     <h3 className="text-2xl font-bold font-quiche tracking-wider mb-2">
//                       {pkg.title}
//                     </h3>
//                     <p className="text-primary font-medium text-sm mb-3">
//                       {pkg.subtitle}
//                     </p>
//                     <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
//                       <div className="flex items-center gap-1">
//                         <Clock className="w-4 h-4" />
//                         {pkg.duration}
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Award className="w-4 h-4" />
//                         {pkg.delivery}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <p className="text-gray-700 text-sm leading-relaxed mb-6 font-gotham">
//                     {pkg.description}
//                   </p>

//                   {/* Features */}
//                   <div className="mb-6">
//                     <h4 className="font-semibold text-gray-900 mb-3">
//                       What&apos;s Included:
//                     </h4>
//                     <ul className="space-y-2">
//                       {pkg.features.slice(0, 4).map((feature, idx) => (
//                         <li
//                           key={idx}
//                           className="flex items-center gap-2 text-sm text-gray-600"
//                         >
//                           <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Price and CTA */}
//                   <div className="border-t border-gray-200 pt-4">
//                     <div className="flex items-center justify-between mb-4">
//                       <div>
//                         <p className="text-2xl font-bold text-primary font-quiche">
//                           {pkg.price}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           Professional Package
//                         </p>
//                       </div>
//                       <motion.button
//                         onClick={() => openQuoteModal(pkg)}
//                         className="bg-primary text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         Get Quote
//                         <ArrowRight className="w-4 h-4" />
//                       </motion.button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl p-12 backdrop-blur-sm border border-primary/20">
//             <h3 className="text-3xl md:text-4xl font-bold mb-4 font-quiche">
//               Ready to Create Something Amazing?
//             </h3>
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-gotham">
//               Let&apos;s discuss your vision and create a custom photography
//               package that perfectly fits your needs and budget.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 onClick={() => openQuoteModal()}
//                 className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-primary/80 hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2 justify-center"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Get Custom Quote
//                 <ArrowRight className="w-5 h-5" />
//               </motion.button>
//               <motion.button
//                 className="bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/20 border border-white/20 flex items-center gap-2 justify-center"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Phone className="w-5 h-5" />
//                 Call Now
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Enhanced Modal */}
//       <Dialog
//         open={isOpen}
//         onClose={() => setIsOpen(false)}
//         className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//       >
//         <Dialog.Panel className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//           <div className="p-8">
//             {/* Header */}
//             <div className="text-center mb-8">
//               <Dialog.Title className="text-3xl font-bold mb-2 text-black font-quiche">
//                 Get Your Custom Quote
//               </Dialog.Title>
//               {selectedPackage && (
//                 <div className="bg-primary/10 rounded-2xl p-4 mb-4">
//                   <h4 className="font-semibold text-primary mb-2">
//                     Selected Package:
//                   </h4>
//                   <p className="text-gray-700">{selectedPackage.title}</p>
//                   <p className="text-sm text-gray-500">
//                     {selectedPackage.price}
//                   </p>
//                 </div>
//               )}
//               <p className="text-gray-600 font-gotham">
//                 Fill in your details and we&apos;ll get back to you within 24
//                 hours with a personalized quote.
//               </p>
//             </div>

//             {/* Status Messages */}
//             {status === "success" && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center mb-6"
//               >
//                 <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//                 <h3 className="text-xl font-bold text-green-800 mb-2">
//                   Request Submitted!
//                 </h3>
//                 <p className="text-green-700">
//                   We&apos;ll get back to you within 24 hours with your custom
//                   quote.
//                 </p>
//               </motion.div>
//             )}

//             {status === "error" && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center mb-6"
//               >
//                 <h3 className="text-xl font-bold text-red-800 mb-2">
//                   Something went wrong
//                 </h3>
//                 <p className="text-red-700">
//                   Please try again or contact us directly.
//                 </p>
//               </motion.div>
//             )}

//             {/* Form */}
//             {status !== "success" ? (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Enter your full name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number *
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Enter your phone number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Event Date *
//                     </label>
//                     <input
//                       type="date"
//                       name="date"
//                       value={formData.date}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     placeholder="Tell us about your photography needs, location, special requirements, or any questions you have..."
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={4}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={status === "loading"}
//                   className="w-full bg-primary text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 >
//                   {status === "loading" ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                       Submitting...
//                     </>
//                   ) : (
//                     <>
//                       Send Request
//                       <ArrowRight className="w-5 h-5" />
//                     </>
//                   )}
//                 </button>
//               </form>
//             ) : null}

//             {/* Close Button */}
//             <div className="text-center mt-6">
//               <button
//                 onClick={() => {
//                   setIsOpen(false);
//                   setStatus(null);
//                   setSelectedPackage(null);
//                 }}
//                 className="text-gray-500 hover:text-gray-700 font-medium transition-colors duration-300"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </Dialog>
//     </section>
//   );
// }

// export default Packages;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import {
  Camera,
  Heart,
  Users,
  Calendar,
  Building,
  ShoppingBag,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Award,
  Sparkles,
} from "lucide-react";

// Enhanced package data (price kept out of UI; features retained in data but not rendered)
const packages = [
  {
    id: 1,
    title: "Wedding Photography",
    subtitle: "Your Perfect Day, Perfectly Captured",
    description:
      "Capture your special day with our professional wedding photography services. Relive every moment with stunning, high-quality images that tell your unique love story.",
    image:
      "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Cover/Wedding.jpg",
    icon: Heart,
    price: "Starting from ₹25,000",
    duration: "Full Day Coverage",
    features: [
      "Pre-wedding consultation",
      "Full day coverage (8-10 hours)",
      "500+ edited photos",
      "Online gallery",
      "USB drive with high-res images",
      "Wedding album design",
      "Engagement shoot included",
    ],
    popular: true,
    category: "Wedding",
    delivery: "2-3 weeks",
    rating: 5.0,
    reviews: 127,
  },
  {
    id: 2,
    title: "Maternity Shoot",
    subtitle: "Celebrating the Miracle of Life",
    description:
      "Preserve the beauty of motherhood with a heartwarming maternity photoshoot. Perfect for capturing this precious phase of life with artistic and elegant photography.",
    image:
      "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Cover/Maternity.jpg",
    icon: Heart,
    price: "Starting from ₹8,000",
    duration: "2-3 Hours",
    features: [
      "Professional styling guidance",
      "2-3 outfit changes",
      "50+ edited photos",
      "Online gallery",
      "USB drive with images",
      "Print-ready files",
      "Family members welcome",
    ],
    popular: false,
    category: "Portrait",
    delivery: "1 week",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    title: "Fashion Photoshoot",
    subtitle: "Unleash Your Inner Model",
    description:
      "Get a high-end fashion photoshoot experience with expert lighting and posing guidance to bring out your best look and create stunning portfolio images.",
    image:
      "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Cover/Fashion.jpg",
    icon: Star,
    price: "Starting from ₹12,000",
    duration: "3-4 Hours",
    features: [
      "Professional makeup artist",
      "Wardrobe consultation",
      "Multiple locations",
      "100+ edited photos",
      "Online gallery",
      "Print-ready files",
      "Social media optimization",
    ],
    popular: false,
    category: "Fashion",
    delivery: "1-2 weeks",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 4,
    title: "Event Photography",
    subtitle: "Every Moment, Every Memory",
    description:
      "From birthdays to corporate events, we cover it all with professional-grade photography to make your event unforgettable and capture every special moment.",
    image:
      "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Cover/Event%20coverage.jpg",
    icon: Users,
    price: "Starting from ₹15,000",
    duration: "4-6 Hours",
    features: [
      "Event planning consultation",
      "Full event coverage",
      "200+ edited photos",
      "Online gallery",
      "USB drive with images",
      "Quick turnaround",
      "Social media highlights",
    ],
    popular: false,
    category: "Events",
    delivery: "1 week",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 5,
    title: "Corporate Photography",
    subtitle: "Professional Image, Professional Results",
    description:
      "Professional headshots, office culture photography, and branding shoots to enhance your company's image and create compelling visual content.",
    image:
      "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Cover/Corporate.jpg",
    icon: Building,
    price: "Starting from ₹20,000",
    duration: "Full Day",
    features: [
      "Company branding consultation",
      "Team headshots",
      "Office culture photos",
      "Product photography",
      "300+ edited photos",
      "Online gallery",
      "Corporate branding package",
    ],
    popular: false,
    category: "Corporate",
    delivery: "1-2 weeks",
    rating: 4.9,
    reviews: 78,
  },
  {
    id: 6,
    title: "Commercial Photography",
    subtitle: "Your Business, Our Vision",
    description:
      "Showcase your business, products, and services with high-quality commercial photography for marketing and advertising that drives results.",
    image:
      "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Cover/Commercial.jpg",
    icon: ShoppingBag,
    price: "Starting from ₹18,000",
    duration: "Half Day",
    features: [
      "Creative consultation",
      "Product photography",
      "Lifestyle shots",
      "Marketing materials",
      "150+ edited photos",
      "Online gallery",
      "Commercial usage rights",
    ],
    popular: false,
    category: "Commercial",
    delivery: "1-2 weeks",
    rating: 4.8,
    reviews: 134,
  },
];

// Package categories for filtering
const categories = [
  { id: "all", name: "All Packages", icon: Camera },
  { id: "wedding", name: "Wedding", icon: Heart },
  { id: "portrait", name: "Portrait", icon: Users },
  { id: "fashion", name: "Fashion", icon: Star },
  { id: "events", name: "Events", icon: Calendar },
  { id: "corporate", name: "Corporate", icon: Building },
  { id: "commercial", name: "Commercial", icon: ShoppingBag },
];

export function Packages() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPackage, setSelectedPackage] = useState<
    (typeof packages)[0] | null
  >(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    package: "",
    message: "",
  });
  const [status, setStatus] = useState<"loading" | "success" | "error" | null>(
    null
  );

  const filteredPackages =
    selectedCategory === "all"
      ? packages
      : packages.filter(
          (pkg) => pkg.category.toLowerCase() === selectedCategory
        );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mjkykylr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          package: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const openQuoteModal = (pkg?: (typeof packages)[0]) => {
    if (pkg) {
      setSelectedPackage(pkg);
      setFormData((prev) => ({ ...prev, package: pkg.title }));
    }
    setIsOpen(true);
  };

  return (
    <section
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 relative overflow-hidden"
      id="packages"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-1">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Our Services</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-quiche tracking-wider text-white">
            Photography Packages
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-gotham leading-relaxed">
            Explore our comprehensive range of photography services designed to
            capture your special moments with creativity, precision, and
            artistic excellence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Rating Badge */}
              <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {pkg.rating} ({pkg.reviews})
              </div>

              <motion.div
                className="bg-white/95 backdrop-blur-sm text-black rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 group-hover:shadow-primary/25"
                whileHover={{ y: -10, scale: 1.02 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Image Container */}
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={400}
                    height={288}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    priority={index < 3}
                    unoptimized
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Package Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <pkg.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold font-quiche tracking-wider mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {pkg.subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {pkg.delivery}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 font-gotham">
                    {pkg.description}
                  </p>

                  {/* Removed: What's Included (features) */}

                  {/* CTA (price removed) */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div />
                      <motion.button
                        onClick={() => openQuoteModal(pkg)}
                        className="bg-primary text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl p-12 backdrop-blur-sm border border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-quiche">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-gotham">
              Let&apos;s discuss your vision and create a custom photography
              package that perfectly fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => openQuoteModal()}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-primary/80 hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="tel:+919962178694" // Replace with your phone number
                className="bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/20 border border-white/20 flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <Dialog.Panel className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <Dialog.Title className="text-3xl font-bold mb-2 text-black font-quiche">
                Get Your Custom Quote
              </Dialog.Title>
              {selectedPackage && (
                <div className="bg-primary/10 rounded-2xl p-4 mb-4">
                  <h4 className="font-semibold text-primary mb-2">
                    Selected Package:
                  </h4>
                  <p className="text-gray-700">{selectedPackage.title}</p>
                  {/* Removed: price line */}
                </div>
              )}
              <p className="text-gray-600 font-gotham">
                Fill in your details and we&apos;ll get back to you within 24
                hours with a personalized quote.
              </p>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center mb-6"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Request Submitted!
                </h3>
                <p className="text-green-700">
                  We&apos;ll get back to you within 24 hours with your custom
                  quote.
                </p>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center mb-6"
              >
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  Something went wrong
                </h3>
                <p className="text-red-700">
                  Please try again or contact us directly.
                </p>
              </motion.div>
            )}

            {/* Form */}
            {status !== "success" ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your photography needs, location, special requirements, or any questions you have..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Send Request
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            ) : null}

            {/* Close Button */}
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setStatus(null);
                  setSelectedPackage(null);
                }}
                className="text-gray-500 hover:text-gray-700 font-medium transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}

export default Packages;
