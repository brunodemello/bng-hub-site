import React from "react";
import { motion } from "framer-motion";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[34.93vw] py-[2.22vw] font-['Poppins',Helvetica]">
      <motion.h2 
        className="text-[3.33vw] leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.span 
          className="font-bold text-[#003cff] leading-[4.99vw]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Há 10 anos
        </motion.span>{" "}
        <motion.span 
          className="font-semibold text-[#212121] text-[1.94vw] leading-[2.9vw] block mt-[0.56vw]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          transformando a saúde com tecnologia, gestão e humanização
        </motion.span>
      </motion.h2>
    </section>
  );
};
