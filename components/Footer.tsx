
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column - Moved more left */}
          <div className="flex flex-col items-start pl-4 md:pl-0"> 
            <h3 className="font-bold text-xl mb-4">Gaf Clickz</h3>
            <p className="mb-3">123 Photography Street</p>
            <p className="mb-3">Chennai, Tamil Nadu</p>
            <p>India</p>
          </div>

          {/* Center spacing */}
          <div className="hidden md:block"></div>

          {/* Right Column - Moved more right */}
          <div className="pr-4 md:pr-0 md:ml-auto">
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#gallery">Gallery</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            
            <div className="mt-8">
              <h3 className="font-bold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/wedding">Wedding</Link></li>
                <li><Link href="/animals">Animals</Link></li>
                <li><Link href="/fashion">Fashion</Link></li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-xl mb-4">Privacy Policy</h3>
              <ul className="space-y-2">
                <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          
      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-8 pt-8 flex justify-center">
        <div className="text-center">
         <p>© {new Date().getFullYear()} Gaf Clickz. All rights reserved.</p>
        </div>
        </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
