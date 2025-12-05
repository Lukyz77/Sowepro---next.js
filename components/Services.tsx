"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Video, Camera } from "lucide-react";
import { teko } from "../app/fonts";

type ServiceItem = {
  title: string;
  text: string;
  buttonText: string;
  buttonHref: string;
};

type ServicesData = {
  titleBefore: string;
  titleMiddle: string;
  titleAfter: string;
  subtitle: string;
  services: ServiceItem[];
};

const getIcon = (index: number) => {
  if (index === 0) return <Code size={36} />;
  if (index === 1) return <Video size={36} />;
  return <Camera size={36} />;
};

const Services = ({data}: {data: ServicesData}) => {

  return (
    <section
      id="services"
      className="relative bg-[#142538] text-[#FFE8CC] py-20 md:py-28 px-6 overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
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

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {data.services?.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-[#0f1a28] border border-[#D1A45F]/20 rounded-2xl p-8 text-left shadow-lg hover:shadow-[#D1A45F]/10 hover:-translate-y-1 transition-all duration-300 
                      flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="text-[#D1A45F] mb-5">{getIcon(index)}</div>

            <h3
              className={`text-3xl font-semibold mb-3 ${teko.className}`}
            >
              {service.title}
            </h3>

            <p className="text-[#FFE8CC]/70 leading-relaxed flex-grow lowercase">
              {service.text}
            </p>

            <div className="mt-auto pt-5">
              <a
                href={service.buttonHref || "#contact"}
                className="bg-[#D1A45F] text-[#142538] text-md font-bold px-6 py-2 rounded-2xl transition hover:bg-[#E3C8A8] hover:text-[#142538] duration-300"
              >
                {service.buttonText}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
