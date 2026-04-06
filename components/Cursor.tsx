'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest('button') || target.closest('a') || target.closest('.group');
      if (hoverable) {
        setHoveredRect(hoverable.getBoundingClientRect());
      } else {
        setHoveredRect(null);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-3 w-3 rounded-full bg-neon-teal mix-blend-screen"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: hoveredRect ? 0 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] border border-neon-blue mix-blend-screen"
        animate={
          hoveredRect 
          ? {
              x: hoveredRect.left,
              y: hoveredRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              borderRadius: "12px",
              opacity: 0.8
            }
          : {
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
              width: 40,
              height: 40,
              borderRadius: "50%",
              opacity: 0.4
            }
        }
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      />
    </>
  );
}
