"use client";

import { motion } from "framer-motion";
import { Sparkles, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Next Generation AI Job Matching</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Find your dream <br /> 
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            role with AI precision.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed"
        >
          Stop searching, start matching. HireMind AI analyzes your skills, experience, and aspirations to find jobs that actually fit you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/jobs"
            className="group px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-indigo-500 transition-all shadow-[0_0_40px_rgba(79,70,229,0.3)] hover:scale-105 active:scale-95"
          >
            Start Searching
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/login"
            className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Create Profile
          </Link>
        </motion.div>

        {/* Featured Logos/Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-50">
            {["Google", "Stripe", "Airbnb", "Meta", "Vercel"].map((name) => (
              <span key={name} className="text-xl font-bold text-white tracking-tighter">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
