"use client";

import { motion } from "framer-motion";
import { MapPin, DollarSign, Briefcase, Sparkles, ArrowUpRight } from "lucide-react";
import { Job } from "@/lib/jobs";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const matchScore = job.matchScore || Math.floor(Math.random() * 40) + 60; // Mock AI score if not provided

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all group relative overflow-hidden"
    >
      {/* AI Match Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
        <Sparkles className="w-3 h-3" />
        {matchScore}% Match
      </div>

      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
            {job.title}
          </h3>
          <p className="text-slate-400 font-medium">{job.company}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <MapPin className="w-3.5 h-3.5" />
            {job.location}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <DollarSign className="w-3.5 h-3.5" />
            {job.salary}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Briefcase className="w-3.5 h-3.5" />
            {job.type}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {job.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/5 rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
            View Details
            <ArrowUpRight className="w-3 h-3" />
          </button>
          <button className="px-5 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-xl hover:bg-indigo-500 transition-all">
            Apply Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
