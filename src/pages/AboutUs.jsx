import React from 'react';
import { Target, Users, Globe, Zap, CheckCircle2 } from 'lucide-react';

export default function About() {
  const services = ["Executive Recruitment", "Bulk Recruitment", "Offshore Recruitment", "RPO"];
  const industries = ["Automobile", "Engineering", "Manufacturing", "Telecom", "FMCG", "Pharmaceutical"];
  
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-24 pb-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Section */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-3">Who We Are</h2>
          <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase italic italic-shining">
            Shining <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400 font-black">Placement</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            We focus on adding value to your business. Ventured into Management Consultancy with a vision 
            of a small team of professionals as its principal asset, we have graduated into adulthood with 
            diversified activities embracing Human Resources Consultancy services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-600/10 transition-all flex items-center gap-4">
              <CheckCircle2 className="text-indigo-500" size={20} />
              <span className="font-bold text-sm uppercase">{service}</span>
            </div>
          ))}
        </div>

        {/* Industries & USPs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Industries */}
          <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5">
            <h3 className="text-2xl font-black mb-6 uppercase flex items-center gap-3">
              <Target className="text-cyan-400" /> Industries We Cater
            </h3>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold border border-white/10 text-slate-300">
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* USPs */}
          <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5">
            <h3 className="text-2xl font-black mb-6 uppercase flex items-center gap-3">
              <Zap className="text-yellow-400" /> Our USPs
            </h3>
            <ul className="space-y-4">
              <li className="text-sm text-slate-400 flex gap-3 italic font-medium tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                Pan India Network for Sourcing Talents.
              </li>
              <li className="text-sm text-slate-400 flex gap-3 italic font-medium tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                Diversified and extensive sources of Resourcing.
              </li>
              <li className="text-sm text-slate-400 flex gap-3 italic font-medium tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                Strong Database which is systematically updated.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}