"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0f1a28] text-[#FFE8CC] py-20 md:py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Obrázek */}
        <motion.div
          className="relative flex-1 w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D1A45F]/20 to-transparent rounded-2xl blur-xl" />

          <Image
            src="/assets/together.jpg"
            alt="O nás - Sowepro"
            width={600}
            height={400}
            className="relative rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </motion.div>

        {/* Textová část */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-teko font-semibold mb-6 uppercase">
            O <span className="text-[#D1A45F]">Nás</span>
          </h2>

          <p className="text-[#FFE8CC]/80 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
            Jsme mladý tým, který spojuje kreativitu s nejmodernější technologií.
          </p>

          <p className="text-[#FFE8CC]/70 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Nejedeme podle prázdných trendů – každé naše video, fotka i web mají jasný cíl.
          </p>

          <p className="text-[#FFE8CC]/70 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Z tvých sítí a webu uděláme profesionální vizitku, která zaujme a prodá.
          </p>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-gradient-to-r from-[#D1A45F] to-[#A28556] text-[#142538] font-semibold tracking-wide px-8 py-3 rounded-md shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Zjistit více
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
