"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { teko } from "../app/fonts";
import { toast } from "react-toastify"

type ContactText = {
  titleBefore: string;
  titleMiddle: string;
  titleAfter: string;
  subtitle: string;
  contactTitle: string;
  email: string;
  phone: string;
};

const Contact = ({data}: {data: ContactText}) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (!form.current) return;

    const payload = {
      user_name: (form.current as any).user_name.value,
      user_email: (form.current as any).user_email.value,
      message: (form.current as any).message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      toast.success("Zpráva byl úspešně odeslána!");
      form.current.reset();
    } catch {
      toast.error("Došlo k chybě při odesílání.");
    } finally {
      setIsSending(false);
    }
  };


  return (
    <section
      id="contact"
      className="relative bg-[#0f1a28] text-[#FFE8CC] py-20 md:py-28 px-6 overflow-hidden"
    >
      {/* Nadpis */}
      <div className="max-w-6xl mx-auto text-center mb-14">
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

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#142538] border border-[#D1A45F]/20 rounded-2xl p-8 flex flex-col gap-6 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-sm text-[#FFE8CC]/70 mb-2">Jméno</label>
            <input
              type="text"
              name="user_name"
              placeholder="Vaše jméno"
              className="w-full bg-[#0f1a28] text-[#FFE8CC] rounded-lg px-4 py-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#FFE8CC]/70 mb-2">E-mail</label>
            <input
              type="email"
              name="user_email"
              placeholder="Váš e-mail"
              className="w-full bg-[#0f1a28] text-[#FFE8CC] rounded-lg px-4 py-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#FFE8CC]/70 mb-2">Zpráva</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Vaše zpráva..."
              className="w-full bg-[#0f1a28] text-[#FFE8CC] rounded-lg px-4 py-3 resize-none"
              required
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSending}
            className={`bg-[#D1A45F] text-[#142538] font-medium rounded-full py-3 mt-2 ${
              isSending ? "opacity-70 cursor-not-allowed" : "hover:bg-[#b98a50]"
            }`}
            whileTap={{ scale: 0.97 }}
          >
            {isSending ? "Odesílám..." : "Odeslat zprávu"}
          </motion.button>
        </motion.form>

        {/* KONTAKTNÍ ÚDAJE */}
        <motion.div
          className="flex flex-col justify-center bg-[#142538] border border-[#D1A45F]/20 rounded-2xl p-8 shadow-lg space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-teko font-semibold mb-4 text-[#D1A45F]">
            {data.contactTitle}
          </h3>

          <div className="flex items-center gap-4">
            <Mail className="text-[#D1A45F]" />
            <div>
              <p className="text-[#FFE8CC]/60 text-sm">E-mail</p>
              <p className="text-[#FFE8CC] font-medium">{data.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-[#D1A45F]" />
            <div>
              <p className="text-[#FFE8CC]/60 text-sm">Telefon</p>
              <p className="text-[#FFE8CC] font-medium">{data.phone}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
