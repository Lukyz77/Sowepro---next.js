"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teko } from "../app/fonts";

type PortfolioText = {
  titleBefore: string;
  titleMiddle: string;
  titleAfter: string;
  subtitle: string;
};

const Portfolio = ({data}: {data: PortfolioText}) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleOpenVideo = (videoSrc?: string) => {
    setActiveVideo(videoSrc ?? null);
  };

  const handleCloseVideo = () => setActiveVideo(null);

  // Static projects — zůstávají v kódu
  const projects = [
    { title: "Video 1", type: "video", image: "/assets/thumbnail1.jpg", src: "/assets/Video_1.mp4" },
    { title: "Video 2", type: "video", image: "/assets/thumbnail2.jpg", src: "https://ooiolz7ssixtdhjo.public.blob.vercel-storage.com/Video_2.mp4" },
    { title: "Video 3", type: "video", image: "/assets/thumbnail3.jpg", src: "/assets/Video_3.mov" },

    { title: "NextVision", type: "web", image: "/assets/NextVision.jpg", href: "https://nextvision.vercel.app/" },
    { title: "JanNovak", type: "web", image: "/assets/JanNovak.jpg", href: "https://jannovak.vercel.app/" },
    { title: "Clarity Consult", type: "web", image: "/assets/Clarity.jpg", href: "https://clarity-consult.vercel.app/" },
  ];

  return (
    <section
      id="portfolio"
      className="relative bg-[#142538] text-[#FFE8CC] py-20 md:py-28 px-6 overflow-hidden"
    >
      {/* Nadpis */}
      <div className="max-w-7xl mx-auto text-center mb-16">
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
          className="text-[#FFE8CC]/70 max-w-2xl mx-auto lowercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {data.subtitle}
        </motion.p>
      </div>

      {/* Grid projektů – zůstává přesně tak, jak jsi měl */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg border border-[#D1A45F]/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-[#D1A45F]/0 via-[#D1A45F]/25 to-[#D1A45F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
              {project.type === "web" ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-teko px-10 py-3 bg-gradient-to-r from-[#D1A45F] to-[#b98a50] rounded-3xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 text-[#142538]"
                >
                  Celý web
                </a>
              ) : (
                <button
                  onClick={() => handleOpenVideo(project.src)}
                  className="text-xl font-teko px-10 py-3 bg-gradient-to-r from-[#D1A45F] to-[#b98a50] rounded-3xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 text-[#142538]"
                >
                  Přehrát video
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={handleCloseVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
