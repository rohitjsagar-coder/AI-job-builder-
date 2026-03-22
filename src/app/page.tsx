"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c]">
      <Navbar />
      <Hero />
      <Features />
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto p-12 rounded-[2rem] bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight relative z-10">
            Ready to find your next challenge?
          </h2>
          <p className="text-indigo-100 text-lg mb-10 relative z-10 max-w-2xl mx-auto">
            Join thousands of professionals who have found their dream roles using our AI matching technology.
          </p>
          <div className="flex justify-center relative z-10">
            <Link 
              href="/signup" 
              className="px-10 py-5 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl inline-block"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
