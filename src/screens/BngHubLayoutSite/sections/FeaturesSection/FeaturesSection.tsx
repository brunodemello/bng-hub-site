import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { div, style } from "framer-motion/client";

export const FeaturesSection = (): JSX.Element => {
  return (

    <div>
      {/* DESKTOP */}
      <section className="md:block hidden w-full py-8 md:pt-[1.42vw] md:pb-[3vw] relative overflow-hidden rounded-tl-xl rounded-tr-xl bg-gradient-to-b from-[#0C46E6] to-[#00000A]
    md:bg-[linear-gradient(to_bottom,#0C46E6_0%,#0C46E6_21%,#00000A_22%,#00000A_100%)]" style={{ background: 'linear-gradient(to bottom, #0C46E6 0%, #0C46E6 21%, #00006A 22%, #00006A 100%)' }}>
        <div className="container mx-auto relative max-w-[100%] md:max-w-[83%]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-[4vw]">
            <div className="flex flex-col gap-6 md:gap-[1.67vw] flex-1 md:max-w-[40%] z-10 px-4 md:px-0">
              <h2 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-white text-[4.8vw] md:text-[1.94vw] md:mt-[7vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)]">
                Conheça as nossas soluções
              </h2>

              <p className="font-['Poppins',Helvetica] font-normal text-white text-sm md:text-[1.11vw] tracking-[0] md:mt-0 mt-[17vw] md:leading-[1.66vw]">
                Descubra como podemos alavancar a performance assistencial da
                sua unidade de saúde com gestão médica eficiente e outras
                soluções que aliam cuidado e tecnologia.
              </p>

              <Button className="w-fit bg-[#fedc0b] hover:bg-[#fedc0b]/90 text-[#00009b] rounded-full md:rounded-[6.94vw] px-6 py-3 md:px-[1.67vw] md:py-[0.35vw] h-auto md:mt-[1vw]">
                <span className="font-['Poppins',Helvetica] font-medium text-sm md:text-[0.97vw] text-center tracking-[0] leading-[1.45vw] ">
                  <a href="/quem-somos">Saiba mais</a>
                </span>
              </Button>
            </div>

            <div className="relative flex-1 md:max-w-[50%] z-10 px-4 md:px-0">
              <img
                className="w-full h-48 md:h-[24.03vw] object-cover rounded-[16px]"
                alt="Healthcare professionals"
                src="/rectangle-187.png"
              />
            </div>
          </div>

          {/* Elemento decorativo verde */}
          <motion.img
            src="/formaVerde.png"
            alt=""
            className="absolute  right-[5vw] w-[20vw] -bottom-[2vw] md:-right-[1vw] md:w-[9.306vw] h-auto z-[99] block"
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Nova imagem decorativa */}
          <motion.img
            src="/banner-hero-bg.png"
            alt=""
            className="absolute top-[2vw] left-[2vw] w-[8vw] h-auto z-[98] opacity-30 hidden md:block"
            initial={{ opacity: 0, scale: 0.8, x: -30 }}
            whileInView={{ opacity: 0.3, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* Mobile */}
      <section className="md:hidden block w-full py-8 md:pt-[1.42vw] md:pb-[3vw] relative overflow-hidden rounded-tl-xl rounded-tr-xl bg-[#0C46E6]
    md:bg-[linear-gradient(to_bottom,#0C46E6_0%,#0C46E6_21%,#00000A_22%,#00000A_100%)] h-[524px]">
        <div className="container mx-auto relative max-w-[100%] md:max-w-[83%] px-[0]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-[4vw]">
            <div className="flex flex-col gap-6 md:gap-[1.67vw] flex-1 md:max-w-[40%] z-10 px-[3rem] md:px-0 bg-[#00009B]">
              <h2 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-white text-[4.8vw] md:text-[1.94vw] md:mt-[7vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mt-[8vw]">
                Conheça as nossas soluções
              </h2>

              <p className="font-['Poppins',Helvetica] font-normal text-white text-sm md:text-[1.11vw] tracking-[0] md:mt-0 mt-[1vw] md:leading-[1.66vw]">
                Descubra como podemos alavancar a performance assistencial da
                sua unidade de saúde com gestão médica eficiente e outras
                soluções que aliam cuidado e tecnologia.
              </p>

              <Button className="w-fit bg-[#fedc0b] hover:bg-[#fedc0b]/90 text-[#00009b] rounded-full md:rounded-[6.94vw] px-6 py-3 md:px-[1.67vw] md:py-[0.35vw] h-auto md:mt-[1vw] mb-[24vw]">
                <span className="font-['Poppins',Helvetica] text-sm md:text-[0.97vw] text-center tracking-[0] leading-[1.46vw] ">
                  Saiba mais
                </span> 
              </Button>
            </div>

            <div className="relative flex-1 md:max-w-[50%] z-10 px-4 md:px-0 relative bottom-[27vw]">
              <img
                className="w-full h-48 md:h-[24.03vw] object-cover rounded-[16px]"
                alt="Healthcare professionals"
                src="/rectangle-187.png"
              />
            </div>
          </div>

          {/* Elemento decorativo verde */}
          <motion.img
            src="/formaVerde.png"
            alt=""
            className="absolute  right-[5vw] w-[20vw] bottom-[19vw] md:-right-[1vw] md:w-[9.306vw] h-auto z-[99] block"
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Nova imagem decorativa */}
          <motion.img
            src="/banner-hero-bg.png"
            alt=""
            className="absolute top-[2vw] left-[2vw] w-[8vw] h-auto z-[98] opacity-30 hidden md:block"
            initial={{ opacity: 0, scale: 0.8, x: -30 }}
            whileInView={{ opacity: 0.3, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </section>





    </div>





  );
};