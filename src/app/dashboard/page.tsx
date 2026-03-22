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
    <main className="min-h-screen bg-[#09090b] flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-48 pb-40 container mx-auto px-12 max-w-7xl">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 border border-white/10 rounded-[4rem] p-16 mb-20 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -mr-40 -mt-40" />
          
          <div className="flex flex-col xl:flex-row items-center xl:items-end gap-14 relative z-10 text-center xl:text-left">
            <div className="w-52 h-52 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3.5rem] flex items-center justify-center border-8 border-[#09090b] shadow-[0_20px_50px_rgba(79,70,229,0.3)] overflow-hidden group relative shrink-0">
              <User className="w-24 h-24 text-white" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-sm">
                <Pencil className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                {user?.user_metadata?.full_name || "Professional Developer"}
              </h1>
              <p className="text-2xl font-bold text-indigo-400 uppercase tracking-[0.2em]">
                Software Engineer • Cloud Architect
              </p>
              <div className="flex flex-wrap justify-center xl:justify-start gap-8 text-slate-500 font-bold text-sm uppercase tracking-widest pt-4">
                <span className="flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/5">
                  <MapPin className="w-5 h-5 text-indigo-500" />
                  San Francisco, CA
                </span>
                <span className="flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/5 underline cursor-pointer hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-indigo-500" />
                  {user?.email}
                </span>
                <span className="flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/5 underline cursor-pointer hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5 text-indigo-500" />
                  portfolio.dev
                </span>
              </div>
            </div>

            <button className="px-12 py-6 bg-white/5 border border-white/10 rounded-3xl font-black text-white hover:bg-white/10 transition-all flex items-center gap-3 shadow-2xl uppercase tracking-widest text-xs">
              <Settings className="w-6 h-6" />
              Settings
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Profile Content */}
          <div className="lg:col-span-8 space-y-20">
            {/* Experience Section */}
            <section className="bg-white/2 border border-white/5 rounded-[4rem] p-16 shadow-xl">
              <div className="flex items-center justify-between mb-16">
                <h2 className="text-4xl font-black text-white tracking-tighter uppercase flex items-center gap-5">
                  <Briefcase className="w-10 h-10 text-indigo-500" />
                  Experience
                </h2>
                <button className="w-14 h-14 bg-indigo-600/10 rounded-2xl hover:bg-indigo-600 transition-all text-white border border-indigo-500/20 group flex items-center justify-center">
                  <Plus className="w-8 h-8 group-hover:rotate-90 transition-transform" />
                </button>
              </div>
 
              <div className="space-y-20">
                {[
                  { company: "TechCorp", role: "Senior Developer", period: "2020 - Present" },
                  { company: "InnoSoft", role: "Full Stack Engineer", period: "2018 - 2020" }
                ].map((exp, i) => (
                  <div key={i} className="relative pl-14 border-l-4 border-indigo-600/20 group hover:border-indigo-500 transition-colors">
                    <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-indigo-600 border-4 border-[#09090b] shadow-[0_0_15px_rgba(79,70,229,0.5)]" />
                    <h3 className="text-3xl font-black text-white mb-2 group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                    <p className="text-xl font-bold text-indigo-500/80 mb-4">{exp.company}</p>
                    <p className="text-xs font-black text-slate-600 mb-8 uppercase tracking-[0.3em]">{exp.period}</p>
                    <p className="text-slate-400 text-lg font-medium leading-[1.8] max-w-3xl">
                      Lead the development of multiple high-scale web applications using React, Next.js, and Node.js. 
                      Improved site performance by 40% and mentored junior developers.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="bg-white/2 border border-white/5 rounded-[4rem] p-16 shadow-xl">
              <div className="flex items-center justify-between mb-16">
                <h2 className="text-4xl font-black text-white tracking-tighter uppercase flex items-center gap-5">
                  <GraduationCap className="w-10 h-10 text-indigo-500" />
                  Education
                </h2>
                <button className="w-14 h-14 bg-white/5 rounded-2xl hover:bg-indigo-600 transition-all text-white border border-white/10 flex items-center justify-center">
                  <Plus className="w-8 h-8" />
                </button>
              </div>
              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <div className="w-20 h-20 bg-indigo-600/10 rounded-[2rem] flex items-center justify-center border border-indigo-500/20 shrink-0 shadow-lg">
                    <GraduationCap className="w-10 h-10 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-2">Stanford University</h3>
                    <p className="text-xl font-bold text-slate-400 mb-4">B.S. in Computer Science</p>
                    <p className="text-xs font-black text-slate-600 uppercase tracking-[0.3em]">Graduated 2018</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-20">
            {/* Skills & Expertise */}
            <section className="bg-white/5 border border-white/10 rounded-[4rem] p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 blur-[50px] rounded-full" />
              <h3 className="text-xl font-black text-white mb-10 uppercase tracking-[0.2em] flex items-center gap-4">
                <Plus className="w-5 h-5 text-indigo-500" />
                Expertise
              </h3>
              <div className="flex flex-wrap gap-4">
                {["React", "TypeScript", "Node.js", "AWS", "Next.js", "PostgreSQL", "Tailwind", "Docker"].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-black text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/10 transition-all cursor-default uppercase tracking-widest"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button className="w-full mt-12 py-6 bg-white/2 border border-white/5 rounded-2xl text-xs font-black text-slate-600 hover:text-white hover:bg-white/5 uppercase tracking-[0.3em] transition-all">
                Update Skills
              </button>
            </section>

            {/* Resume / CV */}
            <section className="bg-white/5 border border-white/10 rounded-[4rem] p-14 shadow-2xl">
              <h3 className="text-xl font-black text-white mb-10 uppercase tracking-[0.2em] flex items-center gap-4">
                 <Settings className="w-5 h-5 text-indigo-500" />
                 Documents
              </h3>
              <div className="p-10 bg-white/2 border-2 border-dashed border-white/10 rounded-[3rem] text-center group cursor-pointer hover:border-indigo-500/50 hover:bg-indigo-600/5 transition-all duration-500">
                <div className="w-20 h-20 bg-indigo-600/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                   <Plus className="w-10 h-10 text-indigo-400 group-hover:text-white transition-colors" />
                </div>
                <p className="text-md font-black text-white mb-3 uppercase tracking-widest">Upload CV</p>
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">PDF, DOCX • 5MB MAX</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>

  );
}
