import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Button } from "@/components/ui/button";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function Package() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white"
      id="package"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Package Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl leading-tight`}
              >
                Wedding Photography Packages
              </h1>
              <p className="text-gray-300 max-w-lg">
                We&apos;ve made our packages simple so you can choose which one
                would suit your needs.
              </p>
            </div>

            {/* Half Day Package */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <h2 className={`${playfair.className} text-2xl`}>
                  Half Day Package
                </h2>
                <span className="text-xl font-light">£950*</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Photography of up to 5 hours</li>
                <li>• Two photographers</li>
                <li>• Minimum 200 high resolution photos</li>
                <li>• Watermark-free with licence to print</li>
                <li>• Delivered via online private gallery</li>
                <li>• All photos delivered within 6 weeks</li>
              </ul>
              <Button
                variant="outline"
                className="bg-transparent border-gray-500 hover:bg-white/10 text-white"
              >
                Book Half Day
              </Button>
            </div>

            {/* Full Day Package */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <h2 className={`${playfair.className} text-2xl`}>
                  Full Day Package
                </h2>
                <span className="text-xl font-light">£1500*</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Photography of up to 10 hours</li>
                <li>• Two Photographers</li>
                <li>• Minimum 500 high resolution photos</li>
                <li>• Watermark-free with licence to print</li>
                <li>• Delivered via online private gallery</li>
                <li>• 20 sneak peek photos delivered within 7 days</li>
                <li>• All photos delivered within 4 weeks</li>
              </ul>
              <Button
                variant="outline"
                className="bg-transparent border-gray-500 hover:bg-white/10 text-white"
              >
                Book Full Day
              </Button>
            </div>

            {/* Footer Note */}
            <div className="text-sm text-gray-400 space-y-1">
              <p>* Travel fees excluded for weddings outside of London.</p>
              <p>
                For more information, please{" "}
                <a href="#contact" className="underline hover:text-white">
                  contact us
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] md:h-[1000px] w-full rounded-2xl overflow-hidden lg:mt-0 mt-8">
            <Image
              src="/images/portfolio/24.jpg"
              alt="Wedding couple close-up"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
