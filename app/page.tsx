"use client";
import { FloatingDockDemo } from "@/components/Dock";
import { HeroParallaxDemo } from "@/components/Parallax";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gafclickz</title>
        <meta
          name="description"
          content="I transform ordinary scenes into extraordinary works of art, drawing viewers into my world and encouraging them to discover new perspectives through my lens."
        />
      </Head>

      <main>
        <HeroParallaxDemo />
        <FloatingDockDemo />
      </main>
    </>
  );
}
