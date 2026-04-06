'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="relative py-24 z-10 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-syne text-white mb-2">Professional <span className="text-neon-blue">Experience</span></h2>
        </motion.div>

        <div className="relative pl-8 border-l border-white/20 border-dashed space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-black border-2 border-neon-blue ring-4 ring-neon-blue/20"></div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-neon-blue/50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white font-syne">Frontend Intern</h3>
                  <h4 className="text-neon-blue font-mono text-sm">Scaler School of Technology</h4>
                </div>
                <div className="font-mono text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                  June 2024
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-400 font-syne text-sm">
                <li className="flex gap-3">
                  <span className="text-neon-blue">▹</span>
                  Implemented highly responsive and accessible UI components driving user engagement.
                </li>
                <li className="flex gap-3">
                  <span className="text-neon-blue">▹</span>
                  Collaborated with senior engineers to optimize frontend performance metrics.
                </li>
                <li className="flex gap-3">
                  <span className="text-neon-blue">▹</span>
                  Maintained strict code quality and adapted rapidly to modern React workflows.
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
