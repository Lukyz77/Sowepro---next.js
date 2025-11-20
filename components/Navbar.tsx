"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
};

type NavData = {
  items: NavItem[];
  ctaText: string;
  ctaHref: string;
};

const Navbar = ({data}: {data: NavData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  // Disable scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  if (!data) return null; 

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
          hasShadow ? "bg-[#0f1c2b]/60 shadow-xl" : "bg-transparent"
        }`}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center lg:ml-5"
          >
            <Image
              src="/assets/Logo - single.png"
              alt="Sowepro"
              width={60}
              height={80}
              className="cursor-pointer"
              onClick={handleLogoClick}
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex lg:ml-20 items-center gap-8 text-[#FFE8CC] text-md lg:text-lg font-teko">
            {data.items?.map((item, i) => (
              <li key={i}>
                <a href={item.href} className="hover:text-[#D1A45F] transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="relative w-[170px] hidden md:flex justify-end items-center">
            <motion.a
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              initial={{ width: 170 }}
              whileHover={{
                width: 250,
                boxShadow: "0 0 25px rgba(217,174,102,0.6)",
              }}
              className="absolute right-0 flex items-center justify-center bg-[#B8955F]
              text-[#0f1c2b] text-md font-teko font-semibold py-4 rounded-2xl"
              href={data.ctaHref}
            >
              <motion.span
                animate={
                  isHovered
                    ? {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        rotate: 0,
                        transition: { delay: 0.2 },
                      }
                    : { x: -35, y: 25, opacity: 0 }
                }
                className="absolute left-6"
              >
                <Rocket size={25} />
              </motion.span>

              <motion.span animate={isHovered ? { x: 8 } : { x: 0 }}>
                {data.ctaText}
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
            className="fixed inset-0 z-40 bg-[#0f1c2b]/90 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col items-center gap-10 mt-10 text-[#FFE8CC] text-3xl font-medium">
              {data.items?.map((item, i) => (
                <li key={i}>
                  <a href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              className="flex items-center justify-center mt-16 bg-[#B8955F]
              text-[#0f1c2b] text-xl font-semibold py-5 px-8 rounded-2xl"
              href={data.ctaHref}
              onClick={() => setIsOpen(false)}
            >
              {data.ctaText}
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
