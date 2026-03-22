"use client";

import { motion } from "framer-motion";
import { Zap, Target, BarChart3, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-indigo-400" />,
    title: "Instant Matching",
    description: "Our AI engine analyzes thousands of jobs in seconds to find your perfect match."
  },
  {
    icon: <Target className="w-6 h-6 text-purple-400" />,
    title: "Skill Filtering",
    description: "Go beyond keywords. We match your deep skills and experience level accurately."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
    title: "Market Insights",
    description: "Get real-time data on salary trends and demand for your specific skill set."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Verified Roles",
    description: "Every job listing is verified to ensure you only apply to legitimate opportunities."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-[#0a0a0c]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Why choose HireMind AI?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Traditional job boards are broken. We use artificial intelligence to make the search process human again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all hover:bg-white/10 group"
            >
              <div className="p-3 bg-white/5 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
