"use client";

import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  Briefcase, 
  GraduationCap, 
  Settings, 
  Plus, 
  ExternalLink,
  MapPin,
  Pencil
} from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("about");

  return (
    <main className="min-h-screen bg-[#09090b]">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-8 max-w-6xl">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-[3rem] p-12 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[80px] rounded-full -mr-20 -mt-20" />
          
          <div className="flex flex-col md:flex-row items-center md:items-end gap-10 relative z-10 text-center md:text-left">
            <div className="w-40 h-40 bg-indigo-600 rounded-[3rem] flex items-center justify-center border-4 border-[#09090b] shadow-2xl overflow-hidden group relative">
              <User className="w-20 h-20 text-white" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <Pencil className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <h1 className="text-5xl font-black text-white mb-2 tracking-tighter uppercase">
                {user?.user_metadata?.full_name || "Professional Developer"}
              </h1>
              <p className="text-xl font-bold text-indigo-400 mb-6 uppercase tracking-widest">
                Software Engineer • Cloud Architect
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-500 font-bold text-sm uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </span>
                <span className="flex items-center gap-2 underline cursor-pointer hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  {user?.email}
                </span>
                <span className="flex items-center gap-2 underline cursor-pointer hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  portfolio.dev
                </span>
              </div>
            </div>

            <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-white hover:bg-white/10 transition-all flex items-center gap-2 shadow-xl">
              <Settings className="w-5 h-5" />
              EDIT PROFILE
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Profile Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience Section */}
            <section className="bg-white/2 border border-white/5 rounded-[3rem] p-12">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase flex items-center gap-4">
                  <Briefcase className="w-8 h-8 text-indigo-500" />
                  Experience
                </h2>
                <button className="p-3 bg-white/5 rounded-2xl hover:bg-indigo-600 transition-all text-white border border-white/10 group">
                  <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              <div className="space-y-12">
                {[
                  { company: "TechCorp", role: "Senior Developer", period: "2020 - Present" },
                  { company: "InnoSoft", role: "Full Stack Engineer", period: "2018 - 2020" }
                ].map((exp, i) => (
                  <div key={i} className="relative pl-10 border-l-2 border-white/10">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#09090b]" />
                    <h3 className="text-2xl font-black text-white mb-1">{exp.role}</h3>
                    <p className="text-lg font-bold text-indigo-400 mb-3">{exp.company}</p>
                    <p className="text-sm font-bold text-slate-500 mb-5 uppercase tracking-widest">{exp.period}</p>
                    <p className="text-slate-400 font-medium leading-relaxed">
                      Lead the development of multiple high-scale web applications using React, Next.js, and Node.js. 
                      Improved site performance by 40% and mentored junior developers.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="bg-white/2 border border-white/5 rounded-[3rem] p-12">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase flex items-center gap-4">
                  <GraduationCap className="w-8 h-8 text-indigo-500" />
                  Education
                </h2>
                <button className="p-3 bg-white/5 rounded-2xl hover:bg-indigo-600 transition-all text-white border border-white/10">
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                    <GraduationCap className="w-8 h-8 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">Stanford University</h3>
                    <p className="text-lg font-bold text-slate-400 mb-2">B.S. in Computer Science</p>
                    <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">Graduated 2018</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-12">
            {/* Skills & Expertise */}
            <section className="bg-white/5 border border-white/10 rounded-[3rem] p-10">
              <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "AWS", "Next.js", "PostgreSQL", "Tailwind", "Docker"].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button className="w-full mt-10 py-5 bg-white/2 border border-white/5 rounded-2xl text-xs font-black text-slate-500 hover:text-white uppercase tracking-widest transition-all">
                Manage Skills
              </button>
            </section>

            {/* Resume / CV */}
            <section className="bg-white/5 border border-white/10 rounded-[3rem] p-10">
              <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest">Asset Management</h3>
              <div className="p-6 bg-white/2 border border-dashed border-white/10 rounded-[2rem] text-center group cursor-pointer hover:border-indigo-500/50 transition-all">
                <div className="w-16 h-16 bg-indigo-600/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                   <Plus className="w-8 h-8 text-indigo-400" />
                </div>
                <p className="text-sm font-bold text-white mb-2 uppercase tracking-widest">Upload CV</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">PDF, DOCX (Max 5MB)</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
