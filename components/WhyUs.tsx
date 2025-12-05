"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { teko } from "../app/fonts";
import { Goal, Zap, Sparkles} from "lucide-react"

type Reason = {
  title: string;
  text: string;
};

type WhyUsData = {
  titleBefore: string;
  titleMiddle: string;
  titleAfter: string;
  subtitle: string;
  reasons: Reason[];
};

const WhyUs = ({data}: {data: WhyUsData}) => {

  const getIcon = (index: number) => {
  if (index === 0) return <Goal size={36} />;
  if (index === 1) return <Zap size={36} />;
  return <Sparkles size={36} />;
};

  return (
    <section
      id="whyus"
      className="relative bg-[#0f1a28] text-[#FFE8CC] py-20 md:py-28 px-6 overflow-hidden"
    >
      {/* Nadpis */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          className={`text-4xl md:text-5xl font-semibold mb-4 uppercase ${teko.className}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {data.titleBefore}{" "}
          <span className="text-[#D1A45F]">{data.titleMiddle}</span>{" "}
          {data.titleAfter}
        </motion.h2>

        <motion.p
          className="text-[#FFE8CC]/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {data.subtitle}
        </motion.p>
      </div>

      {/* Boxy */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-20 ">
        {data.reasons?.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-[#142538] border border-[#D1A45F]/20 rounded-2xl p-8 text-left hover:shadow-[#D1A45F]/10 hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="text-[#D1A45F] mb-5">{getIcon(index)}</div>
            <h3 className={`text-3xl font-semibold mb-3  ${teko.className}`}>
              {reason.title}
            </h3>

            <p className="text-[#FFE8CC]/70 leading-relaxed ">
              {reason.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
