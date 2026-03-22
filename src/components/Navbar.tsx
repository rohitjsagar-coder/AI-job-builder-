"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Brain, User, LogOut, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-[#09090b]/90 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white">
          <div className="p-1.5 bg-indigo-600 rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            <Brain className="w-6 h-6" />
          </div>
          HireMind<span className="text-indigo-500">AI</span>
        </Link>

        {/* Professional Global Search */}
        <div className="hidden lg:flex items-center relative w-[400px]">
          <Search className="absolute left-4 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search job titles, companies, or keywords..."
            className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div className="hidden md:flex items-center gap-8">
          <Link href="/jobs" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            Jobs
          </Link>
          <Link href="/companies" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            Companies
          </Link>
        </div>

        {user ? (
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
              <User className="w-4 h-4" />
              My Profile
            </Link>
            <button
              onClick={() => logout()}
              className="p-2 text-slate-500 hover:text-white transition-all hover:rotate-12"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
              Login
            </Link>
            <Link
              href="/signup"
              className="px-6 py-3 text-sm font-bold text-white bg-indigo-600 rounded-2xl hover:bg-indigo-500 transition-all shadow-[0_4px_20px_rgba(79,70,229,0.4)] hover:scale-105"
            >
              Post a Job
            </Link>
          </div>
        )}
      </div>
    </nav>

  );
}
