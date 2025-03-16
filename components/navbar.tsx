"use client";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";

interface RouteProps {
  href: string;
  label: string;
}

// interface FeatureProps {
//   title: string;
//   description: string;
// }

const routeList: RouteProps[] = [
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#packages", label: "Packages" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect Scroll to Change Background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md text-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto flex justify-between items-center py-3 font-chloe">
        <Link href="/" className="font-bold text-xl flex items-center">
          <Image
            src="/gaftext.png"
            alt="GafClickz Logo"
            width={80}
            height={80}
            className="mr-2"
          />
          {/* Gaf Clickz */}
        </Link>

        {/* Mobile Navbar */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer text-white"
              />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-white text-black"
            >
              <div>
                <SheetHeader className="mb-4 ml-4">
                  <SheetTitle>
                    <Link
                      href="/"
                      className="font-bold text-lg flex items-center"
                    >
                      {/* <Image
                        src="/logo2.png"
                        alt="GafClickz Logo"
                        width={30}
                        height={30}
                        className="mr-2"
                      /> */}
                      Gaf Clickz
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2">
                  {routeList.map(({ href, label }) => (
                    <Button
                      key={href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-lg"
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
                </div>
              </div>
              <Button className="w-full font-bold transition-colors duration-300 bg-black text-white">
                <Link href="#contact">Book a Shoot</Link>
                <ArrowRight className="size-5 ml-2 transition-transform group-hover/arrow:translate-x-1" />
              </Button>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navbar */}
        <NavigationMenu className="hidden lg:flex mx-auto">
          <NavigationMenuList>
            {routeList.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link href={href} className="text-lg px-4 font-medium">
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex">
          <Button className="font-bold transition-colors duration-300 bg-white text-black hover:bg-gray-300">
            <Link href="#contact">Book a Shoot</Link>
            <ArrowRight className="size-5 ml-2 transition-transform group-hover/arrow:translate-x-1" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// Old Navbar Code

// "use client";
// import { Menu } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "./ui/sheet";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from "./ui/navigation-menu";
// import { Button } from "./ui/button";

// interface RouteProps {
//   href: string;
//   label: string;
// }

// interface FeatureProps {
//   title: string;
//   description: string;
// }

// const routeList: RouteProps[] = [
//   { href: "#portfolio", label: "Portfolio" },
//   { href: "#services", label: "Services" },
//   { href: "#testimonials", label: "Testimonials" },
//   { href: "#about", label: "About" },
//   { href: "#contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Detect Scroll to Change Background
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto flex justify-between items-center py-3">
//         <Link href="/" className="font-bold text-xl flex items-center">
//           {/* <Image
//             src="/logo.png"
//             alt="GafClickz Logo"
//             width={30}
//             height={30}
//             className="mr-2"
//           /> */}
//           GafClickz
//         </Link>

//         {/* Mobile Navbar */}
//         <div className="lg:hidden">
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Menu
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="cursor-pointer text-black"
//               />
//             </SheetTrigger>

//             <SheetContent
//               side="left"
//               className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-white text-black"
//             >
//               <div>
//                 <SheetHeader className="mb-4 ml-4">
//                   <SheetTitle>
//                     <Link
//                       href="/"
//                       className="font-bold text-lg flex items-center"
//                     >
//                       <Image
//                         src="/logo.png"
//                         alt="GafClickz Logo"
//                         width={30}
//                         height={30}
//                         className="mr-2"
//                       />
//                       GafClickz
//                     </Link>
//                   </SheetTitle>
//                 </SheetHeader>

//                 <div className="flex flex-col gap-2">
//                   {routeList.map(({ href, label }) => (
//                     <Button
//                       key={href}
//                       onClick={() => setIsOpen(false)}
//                       asChild
//                       variant="ghost"
//                       className="justify-start text-lg"
//                     >
//                       <Link href={href}>{label}</Link>
//                     </Button>
//                   ))}
//                 </div>
//               </div>
//               <Button className="w-full font-bold text-black">
//                 <Link href="#contact">Book a Shoot</Link>
//                 <ArrowRight className="size-5 ml-2 transition-transform group-hover/arrow:translate-x-1" />
//               </Button>
//             </SheetContent>
//           </Sheet>
//         </div>

//         {/* Desktop Navbar */}
//         <NavigationMenu className="hidden lg:flex mx-auto">
//           <NavigationMenuList>
//             {routeList.map(({ href, label }) => (
//               <NavigationMenuItem key={href}>
//                 <NavigationMenuLink asChild>
//                   <Link href={href} className="text-lg px-4">
//                     {label}
//                   </Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//             ))}
//           </NavigationMenuList>
//         </NavigationMenu>

//         <div className="hidden lg:flex">
//           <Button className="font-bold bg-black text-white hover:bg-gray-800">
//             <Link href="#contact">Book a Shoot</Link>
//             <ArrowRight className="size-5 ml-2 transition-transform group-hover/arrow:translate-x-1" />
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
