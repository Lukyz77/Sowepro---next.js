"use client"

import { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { teko } from "../app/fonts";

type HeroData = {
  titleBefore: string;
  titleMiddle: string;
  titleAfter: string;
  subtitle: string;
  buttonText: string;
};


const Hero = ({data}: {data: HeroData}) => {


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
        <h1 className={`text-5xl md:text-6xl font-teko font-semibold tracking-wide mb-12 leading-tight ${teko.className}`}>
          {data.titleBefore} <span className="text-[#D1A45F]">{data.titleMiddle}</span> {data.titleAfter}
        </h1>
        <p className="text-sm md:text-md text-[#FFE8CC]/80 max-w-2xl mx-auto mb-16">
          {data.subtitle}
        </p>

        <motion.a
          href="#services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-gradient-to-r from-[#D1A45F] to-[#A28556] text-[#142538] font-semibold tracking-wide px-8 py-3 rounded-md shadow-lg hover:opacity-90 transition-all duration-300"
        >
          {data.buttonText}
        </motion.a>
      </motion.div>

      {/* Jemná pohyblivá animace v pozadí */}
      <motion.div
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-[#D1A45F]/60 text-sm select-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ↓ Posuňte se níže
      </motion.div>
    </section>
  );
};

export default Hero;
