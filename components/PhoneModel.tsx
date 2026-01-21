'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

export default function PhoneModel() {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized mouse position (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (!isClient) {
    return (
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="w-64 h-96 bg-gradient-to-br from-sky-200 to-blue-300 rounded-3xl animate-pulse" />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-sky-200/50 to-blue-300/50 rounded-3xl blur-3xl -z-10"
      />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-[220px] h-[450px] sm:w-[280px] sm:h-[580px] bg-[#2d2d2d] rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border-[6px] sm:border-[8px] border-[#1a1a1a]"
      >
        {/* Screen Bezel */}
        <div className="absolute inset-[2px] bg-black rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden border-[3px] sm:border-[4px] border-black">
          {/* Screen Content */}
          <div className="w-full h-full bg-white flex items-center justify-center relative">
            {/* Status Bar Placeholder */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-transparent z-10 flex justify-between px-6 items-center">
               <div className="text-[10px] font-bold text-black">9:41</div>
               <div className="flex gap-1">
                 <div className="w-3 h-3 rounded-full border border-black"></div>
                 <div className="w-3 h-3 rounded-full bg-black"></div>
               </div>
            </div>

            {/* Logo */}
            <img 
              src="/gameicon.png"
              alt="App Logo" 
              className="w-3/4 h-3/4 object-contain"
            />
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Camera Hole Punch */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full z-20"></div>

        {/* Side Buttons */}
        <div className="absolute top-24 sm:top-32 -right-[8px] sm:-right-[10px] w-[8px] sm:w-[10px] h-10 sm:h-12 bg-[#1a1a1a] rounded-r-md shadow-sm"></div> {/* Power */}
        <div className="absolute top-36 sm:top-48 -right-[8px] sm:-right-[10px] w-[8px] sm:w-[10px] h-16 sm:h-20 bg-[#1a1a1a] rounded-r-md shadow-sm"></div> {/* Volume */}

        {/* Reflections/Gloss */}
        <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-50 z-30"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-sm text-gray-500 font-medium"></p>
      </motion.div>
    </div>
  );
}
