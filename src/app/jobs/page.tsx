"use client";

export const dynamic = "force-dynamic";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { MOCK_JOBS } from "@/lib/jobs";
import { Search, Filter, SlidersHorizontal, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function JobBoard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [showAIOnly, setShowAIOnly] = useState(false);

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           job.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesType = selectedType === "All" || job.type === selectedType;
      
      // Simulate AI Score filtering (mocking jobs > 85% as "AI Best Matches")
      const matchesAI = !showAIOnly || (Math.random() > 0.5); // Randomly simulate for now
      
      return matchesSearch && matchesType && matchesAI;
    });
  }, [searchQuery, selectedType, showAIOnly]);

  return (
    <main className="min-h-screen bg-[#0a0a0c]">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Explore Opportunities</h1>
            <p className="text-slate-400">Find the perfect role matched by our AI engine.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowAIOnly(!showAIOnly)}
              className={`px-4 py-2 rounded-xl border text-sm font-semibold flex items-center gap-2 transition-all ${
                showAIOnly 
                ? "bg-indigo-600/20 border-indigo-500 text-indigo-400" 
                : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              AI Recommendations
            </button>
            <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-colors">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="text"
                    placeholder="Search jobs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#0a0a0c] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Job Type</h3>
                <div className="space-y-2">
                  {["All", "Full-time", "Hybrid", "Remote", "Contract"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                        selectedType === type 
                        ? "bg-indigo-600/10 text-indigo-400 font-bold" 
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Salary Range</h3>
                <div className="space-y-4">
                  <input type="range" className="w-full accent-indigo-600" />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>$0</span>
                    <span>$200k+</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Job List */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence>
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </AnimatePresence>
            </div>
            {filteredJobs.length === 0 && (
              <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                <p className="text-slate-500">No jobs found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
