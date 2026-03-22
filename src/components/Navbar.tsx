"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Briefcase, User, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-6 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight text-white">
        <div className="w-10 h-10 bg-[#4f46e5]/20 rounded-xl flex items-center justify-center border border-[#4f46e5]/30">
          <Briefcase className="w-6 h-6 text-[#4f46e5]" />
        </div>
        FindYourJob
      </Link>

      {/* Centered Navigation */}
      <div className="hidden lg:flex items-center gap-10">
        <Link href="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
          Home
        </Link>
        <Link href="/ai-match" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
          AI Match
        </Link>
        <Link href="/jobs" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
          Jobs
        </Link>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-8">
        <button className="text-white/60 hover:text-white transition-colors">
          <Search className="w-5 h-5" />
        </button>
        
        {user ? (
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Sign Out
            </Link>
            <Link 
              href="/dashboard"
              className="px-6 py-2.5 bg-[#4f46e5] text-white text-sm font-bold rounded-xl hover:bg-[#4338ca] transition-all"
            >
              My Jobs
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-8">
            <Link href="/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-8 py-3 bg-[#4f46e5] text-white text-sm font-bold rounded-xl hover:bg-[#4338ca] transition-all shadow-[0_10px_30px_rgba(79,70,229,0.3)]"
            >
              Find Match
            </Link>
          </div>
        )}
      </div>
    </nav>


  );
}
