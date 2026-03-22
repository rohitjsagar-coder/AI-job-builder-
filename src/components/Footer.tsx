"use client";

import Link from "next/link";
import { Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0c] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">
            <div className="p-1 bg-indigo-600 rounded-lg">
              <Brain className="w-5 h-5" />
            </div>
            HireMind<span className="text-indigo-500">AI</span>
          </div>

          <div className="flex gap-8">
            <Link href="/about" className="text-sm text-slate-500 hover:text-white transition-colors">About</Link>
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="text-sm text-slate-500 hover:text-white transition-colors">Contact</Link>
          </div>

          <p className="text-sm text-slate-600">
            © 2026 HireMind AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
