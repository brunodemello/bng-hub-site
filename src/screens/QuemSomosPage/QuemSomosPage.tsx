import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { HeaderSection } from "../BngHubLayoutSite/sections/HeaderSection";
import { ContactUsSection } from "../BngHubLayoutSite/sections/ContactUsSection";
import { TimelineCircular } from "../../components/TimelineCircular";

export const QuemSomosPage = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white w-full relative overflow-x-hidden">
        {/* Header Section - Com fundo branco fixo */}
        <div className="relative">
          <HeaderSection isQuemSomosPage={true} />
        </div>

        {/* Hero Section - We are #SAÚDE */}
        <motion.section 
          className="relative w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/quemSomos_banner.png"
            alt="Banner Quem Somos"
            className="w-full h-auto object-cover"
          />
        </motion.section>

        {/* Quem Somos Section */}
        <motion.section 
          className="w-full py-[5vw] bg-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto max-w-[83%]">
            <div className="flex items-start gap-[8vw]">
              {/* Texto principal - esquerda */}
              <motion.div 
                className="flex-1 max-w-[45vw] pt-[4.20vw]"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-[2vw]">
                  <motion.div 
                    className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#0000bf] text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] mb-[0.24vw] border-b-2 border-solid border-[#FEDC0B] w-fit"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    QUEM SOMOS
                  </motion.div>
                  
                </div>

                <motion.h2 
                  className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-[#212121] text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-[1vw]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Saúde com propósito, <br />
                  resultado e transformação
                </motion.h2>

                <motion.div 
                  className="space-y-[1.5vw] text-[#666666] text-[1.1vw] leading-[1.6] font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    A BNG Hub é a ponte de conexão entre excelência operacional,
                    estratégica em saúde e valorização das profissionais que
                    fazem a diferença todos os dias.
                  </motion.p>

                  <motion.p 
                    className="mt-[1vw]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    Integramos soluções em gestão médica e performance
                    assistencial com uma abordagem baseada em visão sistêmica,
                    inovação contínua e foco nos resultados que realmente
                    importam: a qualidade e prestação de cuidado, a sustentabilidade dos
                    negócios e a satisfação de quem pratica e de quem recebe.
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Cards MVV - direita */}
              <motion.div 
                className="flex flex-col gap-[1.5vw] flex-1 items-end"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Missão */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-[#0000bf] hover:bg-[#003CFF] rounded-[1vw] p-[2vw] text-white w-[26.944vw] h-[9.583vw]">
                  <CardContent className="p-0 flex items-start gap-[1vw]">
                    <div className="rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/quemSomos_icon3.png" alt="Missão" className="w-[5.833vw] h-[5.833vw] mr-[2.014vw]" />
                    </div>
                    <div className="w-[13.472vw]">
                      <h3 className="font-bold text-[1.2vw] mb-[0.5vw]">Missão</h3>
                      <p className="text-[0.9vw] leading-[1.4] font-thin">
                        Ser o catalisador de valor para transformar a saúde através da excelência.
                      </p>
                    </div>
                  </CardContent>
                  </Card>
                </motion.div>

                {/* Valores */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ transitionDelay: '0.1s' }}
                >
                  <Card className="bg-[#0000bf] hover:bg-[#003CFF] rounded-[1vw] p-[2vw] text-white w-[26.944vw] h-[9.583vw]">
                  <CardContent className="p-0 flex items-start gap-[1vw]">
                    <div className="rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/quemSomos_icon2.png" alt="Valores" className="w-[5.833vw] h-[5.833vw] mr-[2.014vw]" />
                    </div>
                    <div className="w-[13.472vw]">
                      <h3 className="font-bold text-[1.2vw] mb-[0.5vw]">Valores</h3>
                      <p className="text-[0.9vw] leading-[1.4] font-thin">
                        Respeito e reconhecimento, transparência, inovação e excelência.
                      </p>
                    </div>
                  </CardContent>
                  </Card>
                </motion.div>

                {/* Visão */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ transitionDelay: '0.2s' }}
                >
                  <Card className="bg-[#0000bf] hover:bg-[#003CFF] rounded-[1vw] p-[2vw] text-white w-[26.944vw] h-[9.583vw]">
                  <CardContent className="p-0 flex items-start gap-[1vw]">
                    <div className="rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/quemSomos_icon1.png" alt="Visão" className="w-[5.833vw] h-[5.833vw] mr-[2.014vw]" />
                    </div>
                    <div className="w-[13.472vw]">
                      <h3 className="font-bold text-[1.2vw] mb-[0.5vw]">Visão</h3>
                      <p className="text-[0.9vw] leading-[1.4] font-thin">
                        Ser reconhecida como a maior e melhor empresa de soluções para a saúde do país.
                      </p>
                    </div>
                  </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <TimelineCircular />
        </motion.div>

        {/* We Are Comunidade Section */}
        <motion.section 
          className="w-full pt-[5vw] pb-[11vw] bg-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Imagens decorativas conforme Figma */}
          <motion.img
            src="/Group 78.png"
            alt=""
            className="absolute top-[8vw] right-[7vw] w-auto h-auto"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.img
            src="/10414.png"
            alt=""
            className="absolute bottom-[11vw] left-[49vw] w-auto h-auto"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="container mx-auto max-w-[83%] relative z-10">
            <div className="flex items-center gap-[8vw]">
              {/* Texto - esquerda */}
              <motion.div 
                className="flex-1 max-w-[45vw]"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-[2vw]">
                  <motion.div 
                    className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#0000bf] text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] mb-[0.5vw] border-b-2 border-solid border-[#FEDC0B] w-fit"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    NOSSO TIME
                  </motion.div>
                 
                </div>

                <motion.h2 
                  className="text-[#003CFF] text-[3vw] font-black mb-[0.5vw]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  #WEARE
                </motion.h2>
                <motion.h3 
                  className="font-['Poppins',Helvetica] text-[#00009b] text-[4.44vw] font-bold leading-none tracking-normal mb-[2vw]" 
                  style={{
                  marginLeft: '1.5vw'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  COMUNIDADE
                </motion.h3>

                <motion.p 
                  className="text-[#666666] text-[1.1vw] leading-[1.6] mb-[3vw]" 
                  style={{
                  width: '32vw',
                  fontFamily: 'Poppins'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  Para que a verdadeira transformação aconteça, 
                  precisamos estar juntos. Por isso, cultivamos conexões 
                  reais entre profissionais da saúde, instituições, nossos 
                  times e a comunidade. Nossos talentos, programas e 
                  iniciativas são pensados para gerar valor compartilhado, 
                  impacto e desenvolver soluções que fazem sentido para 
                  quem cuida e para quem precisa de cuidado. Somos 
                  movidos pelo nosso propósito, que é a força que nos 
                  inspira todos os dias.
                </motion.p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ transitionDelay: '1.1s' }}
                >
                  <Button className="bg-[#00009B] hover:bg-[#003CFF] text-white rounded-[4vw] px-[2vw] py-[0.8vw] font-semibold text-[0.9vw]">
                  Faça parte do nosso time!
                  </Button>
                </motion.div>
              </motion.div>

              {/* Imagem - direita */}
              <motion.div 
                className="flex-1"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img
                  src="/quemSomos_weAreImg01.png"
                  alt="Equipe BNG Hub"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ESG Section */}
        <motion.section 
          className="w-full bg-white relative overflow-visible"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div 
            className="w-full h-[44.11vw] bg-cover bg-center relative"
            style={{ 
              backgroundImage: `url('/bgFixed.png')` 
            }}
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} 
              style={{ transitionDelay: '0.3s' }}
            >
              <Card className="border-none flex justify-center shadow absolute bg-[#00009B] rounded-[1.39vw] text-white z-10 w-[38.75vw] h-[34.722vw] -top-[3.44vw] left-[10vw]">
              <CardContent className="p-[2.78vw] w-fit flex flex-col justify-center h-full">
                <div className="mb-[1.39vw] w-fit">
                  <motion.div 
                    className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#0dffc0] text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] mb-[0.28vw] w-fit text-white border-b-2 border-solid border-[#FEDC0B] w-fit"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    ESG
                  </motion.div>
                  
                </div>

                <motion.h2 
                  className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-[0DFFC0] text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-[1.39vw] text-[#0DFFC0] font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Ações que conectam <br />
                  
                 <span className="ml-[0.42vw]">SAÚDE com responsabilidade</span>
                </motion.h2>

                <motion.div 
                  className="space-y-[1.11vw] font-['Poppins',Helvetica] font-light text-white text-[1.11vw] tracking-[0] leading-[1.66vw] w-[30vw]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    Na BNG Hub, acreditamos que transformar a saúde vai muito além de oferecer soluções eficientes. Nosso compromisso com práticas ESG está presente em cada decisão, inovação e parceria.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    Atuamos com responsabilidade ambiental, consciência social e uma governança ética que fortalece nossa missão de cuidar de vidas.
                  </motion.p>
                </motion.div>
              </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Us Section - Reaproveitado */}
        <ContactUsSection />
      </div>
    </div>
  );
};