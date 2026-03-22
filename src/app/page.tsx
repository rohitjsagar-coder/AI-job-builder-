"use client";

export const dynamic = "force-dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c]">
      <Navbar />
      <Hero />
      {/* 
        We're keeping it minimal to match the reference exactly. 
        Features can be added back if needed.
      */}
      <Footer />
    </main>
  );
}


