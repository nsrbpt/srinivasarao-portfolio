import SmoothScroll from '@/components/SmoothScroll';
import Cursor from '@/components/Cursor';
import Grain from '@/components/Grain';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-black text-white selection:bg-neon-teal selection:text-black">
        <Cursor />
        <Grain />
        
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
