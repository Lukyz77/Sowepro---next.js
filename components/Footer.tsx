"use client"

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b131d] text-[#FFE8CC]/70 py-10 px-6 border-t border-[#D1A45F]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Logo / Název */}
        <motion.div
          className="font-teko text-3xl text-[#D1A45F] tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Sowepro
        </motion.div>

        {/* Navigační odkazy */}
        <motion.ul
          className="flex flex-wrap justify-center gap-6 text-sm font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <li><a href="#about" className="hover:text-[#D1A45F] transition">O nás</a></li>
          <li><a href="#services" className="hover:text-[#D1A45F] transition">Služby</a></li>
          <li><a href="#whyus" className="hover:text-[#D1A45F] transition">Proč my</a></li>
          <li><a href="#portfolio" className="hover:text-[#D1A45F] transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-[#D1A45F] transition">Kontakt</a></li>
        </motion.ul>

        {/* Sociální sítě */}
        <motion.div
          className="flex justify-center gap-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="#" className="hover:text-[#D1A45F] transition"><Facebook size={20} /></a>
          <a href="#" className="hover:text-[#D1A45F] transition"><Instagram size={20} /></a>
          <a href="#" className="hover:text-[#D1A45F] transition"><Linkedin size={20} /></a>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="text-center text-xs mt-8 border-t border-[#D1A45F]/10 pt-6 text-[#FFE8CC]/50"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Sowepro — Všechna práva vyhrazena. <br />IČO 23583681
      </motion.div>
    </footer>
  );
};

export default Footer;
