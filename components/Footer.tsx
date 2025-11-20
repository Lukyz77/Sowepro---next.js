"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

type MenuItem = {
  label: string;
  href: string;
};

type FooterData = {
  brand: string;
  menuItems: MenuItem[];
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  copyright: string;
  ico: string;
};

const Footer = ({data}: {data: FooterData}) => {

  return (
    <footer className="bg-[#0b131d] text-[#FFE8CC]/70 py-10 px-6 border-t border-[#D1A45F]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

        {/* BRAND */}
        <motion.div
          className="font-teko text-3xl text-[#D1A45F] tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {data.brand}
        </motion.div>

        {/* MENU */}
        <motion.ul
          className="flex flex-wrap justify-center gap-6 text-sm font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {data.menuItems?.map((item, i) => (
            <li key={i}>
              <a href={item.href} className="hover:text-[#D1A45F] transition">
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* SOCIALS */}
        <motion.div
          className="flex justify-center gap-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {data.socials.facebook && (
            <a href={data.socials.facebook} target="_blank" className="hover:text-[#D1A45F] transition">
              <Facebook size={20} />
            </a>
          )}
          {data.socials.instagram && (
            <a href={data.socials.instagram} target="_blank" className="hover:text-[#D1A45F] transition">
              <Instagram size={20} />
            </a>
          )}
          {data.socials.linkedin && (
            <a href={data.socials.linkedin} target="_blank" className="hover:text-[#D1A45F] transition">
              <Linkedin size={20} />
            </a>
          )}
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <motion.div
        className="text-center text-xs mt-8 border-t border-[#D1A45F]/10 pt-6 text-[#FFE8CC]/50"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} {data.copyright}. <br />
        IČO {data.ico}
      </motion.div>
    </footer>
  );
};

export default Footer;
