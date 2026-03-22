"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { supabase } from "@/lib/supabase";
import { Job } from "@/lib/jobs";
import { 
  Search, 
  Settings, 
  Sparkles, 
  MapPin, 
  User, 
  ChevronRight,
  TrendingUp,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function JobBoard() {
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        setJobs(data as Job[]);
      }
      setLoading(false);
    };

    fetchJobs();

    // Real-time subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'jobs' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setJobs((prev) => [payload.new as Job, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            setJobs((prev) => prev.map(j => j.id === payload.new.id ? payload.new as Job : j));
          } else if (payload.eventType === 'DELETE') {
            setJobs((prev) => prev.filter(j => j.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#09090b]">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: User Profile Snippet & Fast Filters */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-20" />
              <div className="relative pt-8 text-center">
                <div className="w-20 h-20 bg-indigo-600 rounded-3xl mx-auto mb-6 border-4 border-[#09090b] flex items-center justify-center shadow-xl">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-2 tracking-tighter">
                  {user?.user_metadata?.full_name || "Professional"}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Software Architect</p>
                <div className="space-y-4 pt-8 border-t border-white/5 text-left">
                  <div className="flex justify-between text-xs font-bold text-slate-500 hover:text-white cursor-pointer transition-colors uppercase tracking-widest">
                    <span>Profile Views</span>
                    <span className="text-indigo-400">128</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-slate-500 hover:text-white cursor-pointer transition-colors uppercase tracking-widest">
                    <span>Applications</span>
                    <span className="text-indigo-400">12</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/2 border border-white/5 rounded-[2.5rem] p-8">
              <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-8">Top Locations</h4>
              <div className="space-y-5">
                {["San Francisco", "London", "Bangalore", "New York"].map(loc => (
                  <button key={loc} className="flex items-center justify-between w-full group">
                    <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors">{loc}</span>
                    <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-indigo-400 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Center Column: Job Feed */}
          <div className="lg:col-span-6 space-y-10">
            {/* Professional Search Input */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-3 flex items-center gap-4 focus-within:border-indigo-500 transition-all shadow-2xl">
              <div className="p-3 bg-white/5 rounded-2xl">
                <Search className="w-6 h-6 text-slate-400" />
              </div>
              <input 
                type="text" 
                placeholder="Find your next career move by title or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none text-white font-bold outline-none placeholder:text-slate-600"
              />
              <button className="px-6 py-3 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all text-xs uppercase tracking-widest">
                Search
              </button>
            </div>

            {loading ? (
              <div className="text-center py-20 text-slate-500 font-bold uppercase tracking-widest">Matching your profile...</div>
            ) : (
              <div className="space-y-10">
                <AnimatePresence>
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))
                  ) : (
                    <div className="bg-white/2 border border-dashed border-white/10 rounded-[3rem] p-20 text-center">
                      <Sparkles className="w-12 h-12 text-slate-700 mx-auto mb-6" />
                      <p className="text-xl font-bold text-slate-500">No vacancies matching your criteria yet.</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Right Column: Insights & News */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10">
              <div className="flex items-center gap-3 mb-10">
                <TrendingUp className="w-6 h-6 text-indigo-400" />
                <h4 className="text-sm font-black text-white uppercase tracking-widest">Hiring Trends</h4>
              </div>
              <div className="space-y-8 font-bold">
                 <div>
                   <p className="text-sm text-white mb-1 hover:text-indigo-400 cursor-pointer transition-colors leading-tight">AI & Machine Learning roles up 40% this quarter.</p>
                   <p className="text-[10px] text-slate-600 uppercase tracking-widest">Global Insights • 2d ago</p>
                 </div>
                 <div>
                   <p className="text-sm text-white mb-1 hover:text-indigo-400 cursor-pointer transition-colors leading-tight">Remote-first startups scaling across Europe.</p>
                   <p className="text-[10px] text-slate-600 uppercase tracking-widest">Company News • 5h ago</p>
                 </div>
                 <div>
                   <p className="text-sm text-white mb-1 hover:text-indigo-400 cursor-pointer transition-colors leading-tight">Top 10 skills for Software Architects in 2026.</p>
                   <p className="text-[10px] text-slate-600 uppercase tracking-widest">Career Guide • 1wk ago</p>
                 </div>
              </div>
              <button className="w-full mt-10 text-xs font-black text-indigo-400 uppercase tracking-widest hover:text-indigo-300 transition-colors">View all news</button>
            </div>

            <div className="bg-white/2 border border-white/5 rounded-[2.5rem] p-10">
               <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-5 h-5 text-slate-500" />
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Promoted</h4>
              </div>
              <div className="text-center">
                 <div className="w-16 h-16 bg-white/5 rounded-2xl mx-auto mb-6 border border-white/10 flex items-center justify-center">
                    <Settings className="w-8 h-8 text-slate-700" />
                 </div>
                 <h5 className="text-md font-black text-white mb-1 tracking-tighter">Quantum Cloud</h5>
                 <p className="text-xs text-slate-500 mb-6 font-bold">Legacy Scale with AI</p>
                 <button className="text-xs font-black text-indigo-500 hover:scale-105 transition-transform">Apply Internally</button>
              </div>
            </div>
          </aside>
          
        </div>
      </div>

      <Footer />
    </main>
  );
}

