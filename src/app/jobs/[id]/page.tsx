"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  DollarSign, 
  Briefcase, 
  Calendar, 
  ArrowLeft, 
  Share2, 
  Bookmark,
  CheckCircle2,
  Building2,
  Users,
  Globe,
  ArrowUpRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MOCK_JOBS, Job } from "@/lib/jobs";
import Link from "next/link";

export default function JobDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch from Supabase. For now, use MOCK_JOBS.
    const foundJob = MOCK_JOBS.find(j => j.id === id);
    setJob(foundJob || null);
    setLoading(false);
  }, [id]);

  if (loading) return <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white font-bold">Matching Opportunities...</div>;
  if (!job) return <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white font-bold text-3xl">Opportunity not found</div>;

  return (
    <main className="min-h-screen bg-[#09090b]">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-8 max-w-6xl">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 font-bold group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Listings
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <div className="flex items-start justify-between mb-10">
                <div className="flex gap-8">
                  <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-white/10">
                    <Building2 className="w-12 h-12 text-indigo-400" />
                  </div>
                  <div>
                    <h1 className="text-5xl font-black text-white mb-4 tracking-tighter leading-tight">{job.title}</h1>
                    <div className="flex items-center gap-4 text-xl font-bold text-slate-300">
                      <a 
                        href={job.company_url || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 group/company"
                      >
                        {job.company}
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover/company:opacity-100 transition-opacity" />
                      </a>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                      <span className="text-indigo-400/60 uppercase tracking-widest text-xs font-black">Verified Partner</span>
                    </div>

                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mb-16">
                <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                  <MapPin className="w-5 h-5 text-slate-500" />
                  <span className="font-bold text-slate-300 uppercase tracking-widest text-xs">{job.location}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                  <Briefcase className="w-5 h-5 text-slate-500" />
                  <span className="font-bold text-slate-300 uppercase tracking-widest text-xs">{job.type}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                  <DollarSign className="w-5 h-5 text-slate-500" />
                  <span className="font-bold text-slate-300 uppercase tracking-widest text-xs">{job.salary_range} / Year</span>
                </div>

              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-black text-white mb-8 tracking-tighter">About the Role</h2>
                <p className="text-xl text-slate-400 leading-relaxed mb-10 font-medium">
                  {job.description}
                </p>
                <p className="text-xl text-slate-400 leading-relaxed mb-10 font-medium">
                  We are looking for a visionary developer who is passionate about building products that users love. You will be working with a high-performance team to architect and implement features that reach millions of users.
                </p>

                <h2 className="text-3xl font-black text-white mb-8 tracking-tighter">Requirements</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 list-none p-0">
                  {[
                    "5+ years of experience with React & Next.js",
                    "Strong background in Distributed Systems",
                    "Experience with Cloud Native architectures",
                    "Passion for high-quality code and design",
                    "Excellent communication skills",
                    "Agile & Growth mindset"
                  ].map((req, i) => (
                    <li key={i} className="flex items-center gap-4 bg-white/2 p-5 rounded-2xl border border-white/5 font-bold text-slate-300">
                      <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-32"
            >
              <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 mb-8 border-indigo-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest">Apply Now</h3>
                <div className="space-y-6">
                  <button className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-[0_15px_40px_rgba(79,70,229,0.4)] hoverScale">
                    Quick Apply
                    <ArrowUpRight className="w-6 h-6" />
                  </button>
                  <button className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                    <Bookmark className="w-5 h-5 mr-1" />
                    Save Internally
                  </button>
                </div>
                <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-center gap-8">
                   <button className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                     <Share2 className="w-4 h-4" />
                     Share
                   </button>
                   <button className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                     <Users className="w-4 h-4" />
                     Refer a Friend
                   </button>
                </div>
              </div>

              <div className="bg-white/2 border border-white/5 rounded-[3rem] p-10">
                <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest">About {job.company}</h3>
                <div className="space-y-6 font-bold">
                  <div className="flex items-center gap-4 text-slate-400">
                    <Users className="w-5 h-5" />
                    <span className="text-sm">1,000 - 5,000 Employees</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors">
                    <Globe className="w-5 h-5 text-indigo-500" />
                    <a 
                      href={job.company_url || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm underline"
                    >
                      {job.company_url ? job.company_url.replace("https://", "") : `www.${job.company.toLowerCase().replace(/\s/g, "")}.com`}
                    </a>
                  </div>

                  <div className="flex items-center gap-4 text-slate-400">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm">Founded in 2012</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
