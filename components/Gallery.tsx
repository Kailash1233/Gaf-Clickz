// "use client";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// type Card = {
//   id: number;
//   title: string;
//   url: string;
//   thumbnail: string;
// };

// const cards: Card[] = [
//   {
//     id: 1,
//     title: "Wedding",
//     url: "/wedding",
//     thumbnail: "/images/Wedding1.jpg",
//   },
//   {
//     id: 2,
//     title: "Fashion",
//     url: "/fashion",
//     thumbnail: "/images/Fashion.jpg",
//   },
//   { id: 3, title: "Events", url: "/events", thumbnail: "/images/Events.jpg" },
//   {
//     id: 4,
//     title: "Celebrity",
//     url: "/celebrity",
//     thumbnail: "/images/Celebrity.jpg",
//   },
//   { id: 5, title: "Travel", url: "/travel", thumbnail: "/images/Travel.jpg" },
//   { id: 6, title: "Nature", url: "/nature", thumbnail: "/images/Nature.jpg" },
//   {
//     id: 7,
//     title: "Wildlife",
//     url: "/animals",
//     thumbnail: "/images/Animals.jpg" },
// ];

// export default function Gallery() {
//   const router = useRouter();

//   return (
//     <section id="gallery">
//       <div className="bg-gradient-to-b from-black via-gray-800 to-black min-h-screen py-12">
//         <div className="text-white p-8 max-w-7xl mx-auto">
//           <h1 className="text-5xl font-extrabold text-center mb-8">Gallery</h1>
//           <p className="text-lg text-center max-w-2xl mx-auto mb-12">
//             Explore our stunning collection of photographs, capturing the
//             essence of weddings, fashion, events, and celebrity moments. Click
//             on any category to view more!
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {cards.map((card) => (
//               <div
//                 key={card.id}
//                 onClick={() => router.push(card.url)}
//                 className="cursor-pointer relative group overflow-hidden rounded-xl"
//               >
//                 {/* Image with fixed size */}
//                 <div className="w-[350px] h-[250px] mx-auto">
//                   <Image
//                     src={card.thumbnail}
//                     alt={card.title}
//                     width={350}
//                     height={250}
//                     className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
//                   />
//                 </div>

//                 {/* Overlay effect */}
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <p className="text-white text-xl font-semibold">
//                     {card.title}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { FocusCards } from "@/components/ui/focus-cards";

export function Gallery() {
  const cards = [
    {
      title: "Celebrity",
      src: "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Gallery/Celebrity1.jpg",
    },
    {
      title: "Events",
      src: "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Gallery/Events.jpg",
    },
    {
      title: "Fashion",
      src: "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Gallery/Fashion.jpg",
    },
    {
      title: "Travel",
      src: "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Gallery/Travel.jpg",
    },
    {
      title: "Wedding",
      src: "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Gallery/Wedding1.jpg",
    },
    {
      title: "Nature",
      src: "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Gallery/Nature.jpg",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen py-16"
    >
      <div className="text-white text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-6 font-chloe">Gallery</h1>
        <p className="text-lg text-gray-300 font-gotham">
          Discover a collection of moments captured by Gaf Clickz, where every
          image tells a unique story. From weddings to portraits, our gallery
          reflects the beauty and emotion we bring to each session. Explore our
          work and experience the creativity and quality that define us.
        </p>
      </div>
      <div className="mt-12">
        <FocusCards cards={cards} />
      </div>
    </section>
  );
}
