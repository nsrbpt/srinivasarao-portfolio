'use client';

import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Quantum Cyclone Evacuation System",
      date: "Mar 2026",
      accent: "from-neon-teal/20 to-transparent",
      borderAccent: "group-hover:border-neon-teal",
      tagAccent: "text-neon-teal bg-neon-teal/10",
      tags: ["QAOA", "Python", "PennyLane", "FastAPI", "OSRM"],
      bullets: [
        "Architected a quantum-hybrid optimization system for dynamic mass evacuation routes",
        "Utilized PennyLane QAOA for reducing computational complexity of large road networks",
        "Integrated OSRM API for real-time live traffic congestion inputs",
        "Built scalable FastAPI backend to serve multi-agent simulation environments"
      ]
    },
    {
      title: "MACDERT TRAYS DSA Platform",
      date: "Feb 2025",
      accent: "from-neon-blue/20 to-transparent",
      borderAccent: "group-hover:border-neon-blue",
      tagAccent: "text-neon-blue bg-neon-blue/10",
      tags: ["JavaScript", "HTML5", "CSS3", "localStorage"],
      bullets: [
        "Developed a comprehensive platform to track and analyze DSA solving patterns",
        "Implemented seamless local data persistence via secure localStorage API",
        "Achieved 100 on Lighthouse performance score using vanilla tech stack",
        "Designed clean, responsive interfaces inspired by modern IDE environments"
      ]
    }
  ];

  return (
    <section className="relative py-24 z-10 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-syne text-white mb-2">Top <span className="text-neon-teal">Projects</span></h2>
          <p className="font-mono text-gray-500">Case studies of precision engineering</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`group relative overflow-hidden rounded-2xl bg-black/40 border border-white/5 ${proj.borderAccent} transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm`}
            >
              <div className="p-8 relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-syne text-white mb-2">{proj.title}</h3>
                    <p className="font-mono text-sm text-gray-400">{proj.date}</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white"><GitBranch className="w-5 h-5" /></a>
                    <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map(tag => (
                    <span key={tag} className={`px-3 py-1 rounded-full font-mono text-xs ${proj.tagAccent}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 font-syne text-gray-300 flex-grow">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3 items-start">
                      <span className="text-current mt-1.5 opacity-50">▹</span>
                      <span className="text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <a 
            href="https://github.com/nsrbpt?tab=repositories" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-syne hover:bg-white/10 transition-colors group"
          >
            <GitBranch className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            Remaining Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
