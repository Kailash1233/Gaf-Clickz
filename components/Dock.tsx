import React from "react";  
import {
  IconExchange,
  IconHome,
  IconPhoto,
  IconInfoCircle,
  IconMail,
  IconPackage,
  IconStar,
} from "@tabler/icons-react";
import Image from "next/image";
import { FloatingDock } from "./ui/floating-dock";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Gallery",
      icon: (
        <IconPhoto className="h-full w-full text-neutral-300" />
      ),
      href: "#gallery",
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "Testimonials",
      icon: (
        <IconStar className="h-full w-full text-neutral-300" />
      ),
      href: "#testimonials",
    },
    {
      title: "Packages",
      icon: (
        <IconPackage className="h-full w-full text-neutral-300" />
      ),
      href: "#packages",
    },


  ];
  return (
    <div className="fixed bottom-2 left-0 right-0 flex justify-center">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

export default Dock;