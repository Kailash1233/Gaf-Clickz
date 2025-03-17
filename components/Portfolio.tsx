import Image from "next/image";

interface WeddingCouple {
  title: string;
  location: string;
  image: string;
}

const featuredWeddings: WeddingCouple[] = [
  {
    title: "Pradeep Kumar",
    location: "Celebrity Shoot",
    image:
      "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Gallery/Celebrity2.jpg",
  },
  {
    title: "Event Celebration",
    location: "Students Enjoying the Moment",
    image:
      "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Gallery/Events.jpg",
  },
  {
    title: "Fashion Model",
    location: "Elegant & Timeless Fashion",
    image:
      "https://xlrcascpjompagzkvzoa.supabase.co/storage/v1/object/public/gafgallery/Gallery/Fashion.jpg",
  },
];

const galleryImages = Array.from(
  { length: 24 },
  (_, i) => `/images/portfolio/${i + 1}.jpg`
);

export default function PortfolioPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pb-20"
      id="gallery"
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl text-center mb-8 md:mb-12 font-chloe tracking-widest">
          Gallery
        </h1>

        <p className="text-base md:text-lg text-gray-300 font-gotham text-center mb-6 md:mb-10 px-2 md:px-0">
          Discover a collection of moments captured by Gaf Clickz, where every
          image tells a unique story. From weddings to portraits, our gallery
          reflects the beauty and emotion we bring to each session. Explore our
          work and experience the creativity and quality that define us.
        </p>

        {/* Featured Weddings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {featuredWeddings.map((wedding, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-square relative">
                <Image
                  src={wedding.image || "/placeholder.svg"}
                  alt={wedding.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 md:p-6">
                <h2 className="text-lg md:text-2xl font-serif mb-1">
                  {wedding.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-200">
                  {wedding.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${
                index % 3 === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div
                className={`${
                  index % 3 === 0 ? "aspect-square" : "aspect-[3/4]"
                } relative`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Wedding gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
