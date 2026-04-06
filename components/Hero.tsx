'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { NeuralMesh } from './NeuralMesh';

export default function Hero() {
  const [isMeshVisible, setIsMeshVisible] = useState(false);
  const meshContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMeshVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (meshContainerRef.current) {
      observer.observe(meshContainerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-white z-10 px-6">
      <div ref={meshContainerRef} className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        {isMeshVisible && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute inset-0"
          >
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <NeuralMesh />
            </Canvas>
          </motion.div>
        )}
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-gray-300 font-mono text-xs tracking-[0.2em] uppercase">Intelligence · Quantum · Scale</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-syne leading-[1.1] tracking-tight">
            Srinivasa Rao <br className="hidden md:block" /> Neelamraju
          </h1>

          <h2 className="text-2xl md:text-3xl font-syne text-neon-teal">
            Building AI systems that solve real-world problems
          </h2>

          <p className="text-lg md:text-xl text-gray-400 font-mono max-w-2xl mt-4">
            Specializing in quantum optimization, scalable architectures, and precision engineering.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="px-8 py-3 rounded-md bg-white text-black font-syne font-bold hover:scale-105 transition-transform">
              View Projects
            </button>
            <button className="px-8 py-3 rounded-md bg-transparent border border-white/20 text-white font-syne hover:bg-white/10 transition-colors">
              Get In Touch
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
