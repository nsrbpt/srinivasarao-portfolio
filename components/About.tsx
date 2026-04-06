'use client';

import { motion } from 'framer-motion';

export default function About() {
  const jsonProfile = {
    name: "Srinivasa Rao Neelamraju",
    role: "Full-Stack & AI Developer",
    education: {
      university: "SRM University, Amaravathi",
      degree: "B.Tech CSE",
      batch: "2024-2028",
      cgpa: 9.30
    },
    location: "Vijayawada, AP",
    focus: ["AI", "Quantum Computing", "Full-Stack"]
  };

  return (
    <section className="relative py-32 z-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Bio & Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4 text-gray-300 font-syne text-lg">
            <h2 className="text-4xl font-bold text-white mb-6">About <span className="text-neon-teal">Me</span></h2>
            <p>
              I am a 2nd-year Computer Science engineering student at SRM University with a 9.30 CGPA.
              My journey in tech is driven by an obsession with solving complex real-world problems through innovative systems.
            </p>
            <p>
              Specializing in Artificial Intelligence and Quantum Computing, I focus on building scalable architectures 
              and optimization models that push the boundaries of what is possible on the web and beyond.
            </p>
            <p>
              When I&apos;m not developing deep-tech solutions or full-stack platforms, you can find me tackling Data Structures
              and Algorithms, having solved hundreds of problems to sharpen my analytical thinking.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div>
              <div className="text-4xl justify-center font-bold font-mono text-neon-teal">9.30</div>
              <div className="text-sm text-gray-500 mt-2 uppercase tracking-widest font-mono">CGPA</div>
            </div>
            <div>
              <div className="text-4xl justify-center font-bold font-mono text-neon-blue">150+</div>
              <div className="text-sm text-gray-500 mt-2 uppercase tracking-widest font-mono">DSA Problems</div>
            </div>
            <div>
              <div className="text-4xl justify-center font-bold font-mono text-neon-green">2+</div>
              <div className="text-sm text-gray-500 mt-2 uppercase tracking-widest font-mono">Major Projects</div>
            </div>
          </div>
        </motion.div>

        {/* Right: Glassmorphism Code Block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-teal/10 via-transparent to-neon-blue/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Window controls */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <pre className="font-mono text-sm sm:text-base text-gray-300 overflow-x-auto relative z-10 custom-scrollbar">
              <code dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonProfile, null, 2)
                  .replace(/"([^"]+)":/g, '<span class="text-neon-blue">"$1"</span>:')
                  .replace(/: "([^"]+)"/g, ': <span class="text-neon-green">"$1"</span>')
                  .replace(/: ([0-9.]+)/g, ': <span class="text-neon-teal">$1</span>')
              }} />
            </pre>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
