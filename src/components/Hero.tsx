"use client";

import { motion } from "framer-motion";
import { Sparkles, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-[#09090b]">
      {/* Premium Backdrop Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/30 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[110px] rounded-full delay-1000 animate-pulse" />
      </div>

      <div className="container relative z-10 px-8 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-12 shadow-[0_0_20px_rgba(79,70,229,0.1)]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Redefining Recruitment with AI precision</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-10 leading-[0.95]"
          >
            Find your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500">
              next career move.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-medium"
          >
            HireMind AI is the professional network connecting world-class talent with the most innovative companies on the planet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
          >
            <Link
              href="/signup"
              className="group px-12 py-5 bg-indigo-600 text-white font-black rounded-2xl flex items-center gap-3 hover:bg-indigo-500 transition-all shadow-[0_15px_50px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95"
            >
              Build Your Profile
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link
              href="/jobs"
              className="px-12 py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Explore Jobs
            </Link>
          </motion.div>

          {/* Social Proof / Trusted Companies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="pt-20 border-t border-white/5"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 mb-12">
              POWERING RECRUITMENT FOR INDUSTRY LEADERS
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-10 grayscale opacity-20 hover:opacity-40 transition-opacity duration-700">
              {["GOOGLE", "STRIPE", "AIRBNB", "META", "VERCEL", "REVOLUT"].map((name) => (
                <span key={name} className="text-2xl font-black text-white tracking-tighter">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
