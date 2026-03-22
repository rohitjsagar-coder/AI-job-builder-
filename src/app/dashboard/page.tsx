"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { useAuth } from "@/context/AuthContext";
import { MOCK_JOBS } from "@/lib/jobs";
import { 
  User, 
  Settings, 
  Bookmark, 
  Zap, 
  ChevronRight,
  TrendingUp,
  Mail,
  Bell
} from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const { user } = useAuth();
  
  // Mocking some matched jobs for the user
  const matchedJobs = MOCK_JOBS.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0a0a0c]">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Profile Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-indigo-600/20" />
              <div className="relative mt-8">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#0a0a0c]">
                  <User className="w-12 h-12 text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">{user?.displayName || "Developer"}</h2>
                <p className="text-slate-400 text-sm mb-6">{user?.email}</p>
                <div className="flex justify-center gap-3">
                  <button className="p-2 bg-white/5 rounded-lg border border-white/10 text-slate-400 hover:text-white transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-white/5 rounded-lg border border-white/10 text-slate-400 hover:text-white transition-colors">
                    <Bell className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 px-1">Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm text-slate-300">Job Matches</span>
                  </div>
                  <span className="font-bold text-white">42</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm text-slate-300">Profile Strength</span>
                  </div>
                  <span className="font-bold text-white">85%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <Bookmark className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-slate-300">Saved Jobs</span>
                  </div>
                  <span className="font-bold text-white">12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Top Matches Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white tracking-tight">Top AI Matches</h2>
                <button 
                  onClick={() => window.location.href = '/jobs'}
                  className="text-indigo-400 font-bold text-sm flex items-center gap-1 hover:text-indigo-300"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {matchedJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </section>

            {/* Quick Actions / Activity */}
            <section>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-8">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-5 h-5 text-indigo-400" />, title: "Application Viewed", desc: "DesignScale viewed your application for Product Designer.", time: "2 hours ago" },
                  { icon: <Zap className="w-5 h-5 text-purple-400" />, title: "New Match Found", desc: "A new role from TechFlow AI matches your React skills.", time: "5 hours ago" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-colors">
                    <div className="p-3 bg-white/5 rounded-2xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-white group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                        <span className="text-xs text-slate-500">{item.time}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
