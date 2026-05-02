import React from 'react';
import { MapPin, Phone, Mail, Globe, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-24 pb-16 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info */}
          <div>
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-3">Connect With Us</h2>
            <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase leading-tight">
              Let's build <span className="text-indigo-500 underline decoration-indigo-500/30">Wonderful Relations</span> ahead
            </h1>
            <p className="text-slate-400 mb-12 text-sm leading-relaxed">
              Have questions about our services or need a recruitment consultation? 
              Reach out to our official desk or visit us directly.
            </p>

            <div className="space-y-8">
              <ContactCard 
                icon={<MapPin className="text-indigo-400" />}
                title="Office Address"
                content="Roorkee-Dehradun Highway, near R.T.O Check Post and I.M.S College, Karondi, Bhagwanpur, Roorkee (U.K) 247667"
              />
              <ContactCard 
                icon={<Phone className="text-indigo-400" />}
                title="Contact Numbers"
                content="+91 9627560068 (Deepak Saini) | +91 8868912999 (Shivani Chaudhary)"
              />
              <ContactCard 
                icon={<Mail className="text-indigo-400" />}
                title="Official Support"
                content="shiningplacement@gmail.com"
              />
            </div>
          </div>

          {/* Right: Contact Form (Stylized) */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
             
             <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup label="Your Name" placeholder="John Doe" />
                  <InputGroup label="Email Address" placeholder="john@example.com" />
                </div>
                <InputGroup label="Subject" placeholder="Job Inquiry" />
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Message</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-indigo-500 outline-none h-32 transition-all" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 rounded-2xl uppercase text-xs tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                  Send Message <Send size={16} />
                </button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, content }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-indigo-600/20 transition-all">
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">{title}</h4>
        <p className="text-slate-300 text-sm max-w-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">{label}</label>
      <input 
        type="text" 
        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-indigo-500 outline-none transition-all" 
        placeholder={placeholder}
      />
    </div>
  );
}