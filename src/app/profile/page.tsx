"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { User, Briefcase, Code, GraduationCap, CheckCircle } from "lucide-react";

export default function ProfilePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    experience: "",
    skills: "",
    role: "",
    location: "Remote",
    salary: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <main className="min-h-screen bg-[#0a0a0c]">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6 max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Complete your Profile</h1>
          <p className="text-slate-400">Our AI uses these details to find the best jobs for you.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          {[1, 2, 3].map((s) => (
            <div 
              key={s}
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                s <= step ? "bg-indigo-600 text-white" : "bg-white/10 text-slate-500"
              }`}
            >
              {s < step ? <CheckCircle className="w-6 h-6" /> : s}
            </div>
          ))}
        </div>

        <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 min-h-[400px]">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Experience</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Years of Experience</label>
                  <select 
                    className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 rounded-xl text-white focus:border-indigo-500 outline-none"
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  >
                    <option>Select experience</option>
                    <option>Fresher (0-1 yrs)</option>
                    <option>Junior (1-3 yrs)</option>
                    <option>Mid-level (3-5 yrs)</option>
                    <option>Senior (5+ yrs)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Preferred Role</label>
                  <input 
                    type="text"
                    placeholder="e.g. Frontend Developer"
                    className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 rounded-xl text-white focus:border-indigo-500 outline-none"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-purple-600/20 text-purple-400 rounded-lg">
                  <Code className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Skills</h2>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Skills (Comma separated)</label>
                <textarea 
                  rows={4}
                  placeholder="e.g. React, TypeScript, Node.js, UI/UX"
                  className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 rounded-xl text-white focus:border-indigo-500 outline-none resize-none"
                  value={formData.skills}
                  onChange={(e) => setFormData({...formData, skills: e.target.value})}
                />
                <p className="mt-2 text-xs text-slate-500">The more skills you add, the better our AI matches you.</p>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-pink-600/20 text-pink-400 rounded-lg">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Almost Done!</h2>
              </div>
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-indigo-600/20 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-10 h-10" />
                </div>
                <p className="text-slate-400 mb-8">Confirm your details and our AI will start searching for jobs immediately.</p>
                <div className="p-4 bg-white/5 rounded-2xl text-left space-y-2 border border-white/5">
                  <p className="text-sm text-slate-300"><strong>Role:</strong> {formData.role || "Not specified"}</p>
                  <p className="text-sm text-slate-300"><strong>Experience:</strong> {formData.experience || "Not specified"}</p>
                  <p className="text-sm text-slate-300"><strong>Skills:</strong> {formData.skills || "Not specified"}</p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="mt-12 flex justify-between">
            {step > 1 ? (
              <button 
                onClick={prevStep}
                className="px-6 py-3 text-slate-400 font-bold hover:text-white transition-colors"
              >
                Back
              </button>
            ) : <div />}
            <button 
              onClick={step === 3 ? () => window.location.href = '/dashboard' : nextStep}
              className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all"
            >
              {step === 3 ? "View Matches" : "Continue"}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
