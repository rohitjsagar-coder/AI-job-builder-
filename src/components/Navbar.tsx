"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Brain, User, LogOut } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white">
        <div className="p-1.5 bg-indigo-600 rounded-lg">
          <Brain className="w-6 h-6" />
        </div>
        HireMind<span className="text-indigo-500">AI</span>
      </Link>

      <div className="flex items-center gap-8">
        <Link href="/jobs" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
          Browse Jobs
        </Link>
        <Link href="/pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
          Pricing
        </Link>
        {user ? (
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              <User className="w-4 h-4" />
              Dashboard
            </Link>
            <button
              onClick={() => logout()}
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-white transition-colors">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)]"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
