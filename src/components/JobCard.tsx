"use client";

import { motion } from "framer-motion";
import { MapPin, DollarSign, Briefcase, Sparkles, ArrowUpRight, ExternalLink } from "lucide-react";
import { Job } from "@/lib/jobs";
import Link from "next/link";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const matchScore = job.matchScore || Math.floor(Math.random() * 40) + 60;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#09090b] border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/[0.03] hover:border-indigo-500/30 transition-all duration-500 mb-10 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
        <div className="flex gap-8">
          <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center overflow-hidden border border-white/10 group-hover:scale-110 transition-transform duration-500">
            <Briefcase className="w-10 h-10 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-3xl font-black text-white group-hover:text-indigo-400 transition-colors mb-3 tracking-tighter">
              {job.title}
            </h3>
            <a 
              href={job.company_url || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-2 group/link"
            >
              {job.company}
              <ExternalLink className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                <DollarSign className="w-4 h-4" />
                {job.salary_range}
              </span>

              <span className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                {matchScore}% AI Match
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3 shrink-0">
           <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-[#09090b] bg-slate-800 flex items-center justify-center overflow-hidden">
                 <img src={`https://i.pravatar.cc/150?u=${i + job.id}`} alt="applicant" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-[#09090b] bg-indigo-900 flex items-center justify-center text-[10px] font-black text-indigo-100">
              +158
            </div>
          </div>
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-[.3em]">RECUTING NOW</p>
        </div>
      </div>

      <p className="text-slate-400 text-xl leading-relaxed mb-10 line-clamp-2 font-medium max-w-4xl">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-4 mb-12">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="px-5 py-2 text-xs font-black text-slate-400 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-default tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-10 border-t border-white/5">
        <div className="flex items-center gap-4 text-slate-500 text-sm font-bold">
          <span>Posted 2 hours ago</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
          <span>430 applicants</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href={`/jobs/${job.id}`} className="px-8 py-4 text-white font-black hover:text-indigo-400 transition-colors tracking-tight">
            View Details
          </Link>
          <Link href={`/jobs/${job.id}`} className="flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white font-black rounded-[2rem] hover:bg-indigo-500 transition-all shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:scale-105 active:scale-95">
            Apply Now
            <ArrowUpRight className="w-6 h-6" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}

