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
    <main className="min-h-screen bg-[#09090b]">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Premium CTA Section */}
      <div className="container mx-auto px-12 py-40 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-20 rounded-[4rem] bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 relative overflow-hidden shadow-[0_40px_100px_rgba(79,70,229,0.3)] group"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-[80px] -ml-20 -mb-20" />
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter relative z-10 leading-tight">
            Ready to find your <br /> next challenge?
          </h2>
          <p className="text-white/70 text-xl md:text-2xl mb-14 relative z-10 max-w-3xl mx-auto font-medium">
            Join the world's most innovative professionals and find your dream role using our precision AI matching engine.
          </p>
          <div className="flex justify-center relative z-10">
            <Link 
              href="/signup" 
              className="px-14 py-6 bg-white text-indigo-800 font-black rounded-3xl hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-2xl inline-block text-lg uppercase tracking-widest"
            >
              Get Started for Free
            </Link>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </main>
  );
}

