"use client"

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24 md:pt-32 overflow-hidden bg-[#142538]"
    >
      {/* Jemný světelný přechod v pozadí */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#142538]/60 to-[#0f1a28] pointer-events-none" />

      {/* Dekorativní světelný kruh */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D1A45F]/10 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-[#FFE8CC]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1 className="text-5xl md:text-6xl font-teko font-semibold tracking-wide mb-12 leading-tight">
          ZVOL SI <span className="text-[#D1A45F]">SOWEPRO</span> A VYSTUP Z DAVU
        </h1>
        <p className="text-sm md:text-md text-[#FFE8CC]/80 max-w-2xl mx-auto mb-16">
          Vaše značka je hlavní hvězda a my ji dodáme příběh. <br/>
          Tvoříme videa, weby a fotky, které pomůžou Vaší firmě vystoupit z davu konkurence.
        </p>

        <motion.a
          href="#services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-gradient-to-r from-[#D1A45F] to-[#A28556] text-[#142538] font-semibold tracking-wide px-8 py-3 rounded-md shadow-lg hover:opacity-90 transition-all duration-300"
        >
          Naše služby
        </motion.a>
      </motion.div>

      {/* Jemná pohyblivá animace v pozadí */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#D1A45F]/60 text-sm select-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ↓ Posuňte se níže
      </motion.div>
    </section>
  );
};

export default Hero;
