"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
          hasShadow ? "bg-[#0f1c2b]/60 shadow-2xl" : "bg-transparent"
        }`}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center lg:ml-5"
            >
            <Image
                src="/assets/Logo - single.png"
                alt="Sowepro"
                width={60}   // uprav dle potřeby
                height={80}  // uprav dle potřeby
                className="cursor-pointer w-auto h-auto"
                onClick={handleLogoClick}
                priority // rychlejší načtení logo
            />
        </motion.div>


          {/* Desktop Menu */}
          <ul className="hidden md:flex lg:ml-20 items-center gap-8 text-[#FFE8CC] text-md lg:text-lg font-teko ">
            <li><a href="#about" className="hover:text-[#D1A45F] transition">O nás</a></li>
            <li><a href="#services" className="hover:text-[#D1A45F] transition">Služby</a></li>
            <li><a href="#whyus" className="hover:text-[#D1A45F] transition">Proč my</a></li>
            <li><a href="#portfolio" className="hover:text-[#D1A45F] transition">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-[#D1A45F] transition">Kontakt</a></li>
          </ul>

          {/* CTA button */}
          <div className="relative w-[170px] hidden md:flex justify-end items-center">
            <motion.a
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              initial={{ width: 170 }}
              whileHover={{
                width: 250,
                boxShadow: "0 0 25px rgba(217,174,102,0.6)",
                transition: { duration: 0.4 },
              }}
              className="absolute right-0 flex items-center justify-center bg-[#B8955F]
              text-[#0f1c2b] text-sm font-teko font-semibold py-4 rounded-2xl"
              href="#contact"
            >
              <motion.span
                animate={
                  isHovered
                    ? {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        rotate: 0,
                        transition: {
                          delay: 0.2,
                          type: "spring",
                          stiffness: 400,
                          damping: 12,
                        },
                      }
                    : { x: -35, y: 25, opacity: 0 }
                }
                className="absolute left-6"
              >
                <Rocket size={25} />
              </motion.span>

              <motion.span
                animate={isHovered ? { x: 8 } : { x: 0 }}
                className="tracking-wide"
              >
                VOLÍM SI SOWEPRO
              </motion.span>
            </motion.a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[#FFE8CC] z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-40 bg-[#0f1c2b]/90 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col items-center gap-10 mt-10 text-[#FFE8CC] text-3xl font-medium">
              <li><a href="#about" onClick={() => setIsOpen(false)}>O nás</a></li>
              <li><a href="#services" onClick={() => setIsOpen(false)}>Služby</a></li>
              <li><a href="#whyus" onClick={() => setIsOpen(false)}>Proč my</a></li>
              <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)}>Kontakt</a></li>
            </ul>

            <a
              className="flex items-center justify-center mt-16 bg-[#B8955F]
              text-[#0f1c2b] text-xl font-semibold py-5 px-8 rounded-2xl"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Volím si Sowepro
            </a>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-[#D1A45F]"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
