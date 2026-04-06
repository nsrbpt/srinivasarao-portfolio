'use client';

import { motion } from 'framer-motion';
import { Mail, GitBranch, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-32 z-10 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold font-syne text-white mb-6">
            Ready to <span className="text-neon-teal">innovate?</span>
          </h2>
          <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto">
            Whether it&apos;s a deep-tech AI solution or a scalable frontend architecture, let&apos;s build something exceptional together.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="mailto:nsrbpt@gmail.com" className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-syne font-bold hover:scale-105 transition-transform">
            <Mail className="w-5 h-5" />
            nsrbpt@gmail.com
          </a>
          
          <a href="https://github.com/nsrbpt" target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-syne hover:bg-white/10 transition-colors">
            <GitBranch className="w-5 h-5" />
            GitHub
          </a>
          
          <a href="tel:+919492827903" className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-syne hover:bg-white/10 transition-colors">
            <Phone className="w-5 h-5" />
            +91-9492827903
          </a>
        </motion.div>
      </div>
    </section>
  );
}
