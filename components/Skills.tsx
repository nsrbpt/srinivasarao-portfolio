'use client';

import { motion } from 'framer-motion';
import { Database, Terminal, Cpu, Layout } from 'lucide-react';

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skillCards = [
    {
      title: "Languages",
      icon: <Terminal className="w-6 h-6 text-neon-teal" />,
      skills: ["Python", "Java", "C++", "JavaScript", "SQL"],
      borderColor: "hover:border-t-neon-teal"
    },
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-neon-blue" />,
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS"],
      borderColor: "hover:border-t-neon-blue"
    },
    {
      title: "Emerging Tech",
      icon: <Cpu className="w-6 h-6 text-neon-green" />,
      skills: ["Quantum Computing", "QAOA", "PennyLane", "FastAPI"],
      borderColor: "hover:border-t-neon-green"
    },
    {
      title: "Tools & DB",
      icon: <Database className="w-6 h-6 text-white" />,
      skills: ["MongoDB", "VS Code", "Git"],
      borderColor: "hover:border-t-white"
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
          <h2 className="text-4xl font-bold font-syne text-white text-center">Technical <span className="text-neon-blue">Arsenal</span></h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCards.map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className={`group border border-white/5 bg-black/60 backdrop-blur-md rounded-xl p-6 transition-all duration-300 border-t-2 border-t-transparent ${card.borderColor} hover:bg-white/[0.02] hover:-translate-y-2`}
            >
              <div className="bg-white/5 rounded-lg p-3 w-max mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-syne">{card.title}</h3>
              <ul className="space-y-2 font-mono text-sm text-gray-400">
                {card.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-current transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
