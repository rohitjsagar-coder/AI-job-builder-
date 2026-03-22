"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-80 pb-60 overflow-hidden bg-[#0a0a0c] flex items-center justify-center">
      {/* Background Glows (Purple/Blue) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1200px] opacity-20 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#4f46e5]/40 blur-[180px] rounded-full" />
      </div>

      <div className="container relative z-10 px-12 mx-auto text-center">
        {/* AI Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium mb-16 backdrop-blur-sm"
        >
          <Sparkles className="w-5 h-5 text-[#4f46e5]" />
          <span>AI-Powered Job Matching</span>
        </motion.div>

        {/* DNA Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-8xl md:text-[10rem] font-bold tracking-tight text-white mb-14 leading-[1.0]"
        >
          Find the job that <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#4f46e5] to-[#10b981] drop-shadow-[0_0_60px_rgba(79,70,229,0.3)]">
            matches your DNA.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-white/50 mb-20 leading-relaxed font-medium"
        >
          Stop endlessly scrolling. Tell our AI about your skills, experience, and what you love doing. We'll instantly match you with the perfect role.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <Link
            href="/signup"
            className="px-14 py-6 bg-[#4f46e5] text-white font-bold rounded-2xl flex items-center gap-4 hover:bg-[#4338ca] transition-all shadow-[0_20px_60px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95 text-lg"
          >
            Find My Match
            <ArrowRight className="w-7 h-7" />
          </Link>
          <Link
            href="/jobs"
            className="px-14 py-6 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md text-lg"
          >
            Browse All Jobs
          </Link>
        </motion.div>
      </div>
    </section>

  );
}
