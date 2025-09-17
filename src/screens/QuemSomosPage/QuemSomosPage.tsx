import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { HeaderSection } from "../BngHubLayoutSite/sections/HeaderSection";
import { ContactUsSection } from "../BngHubLayoutSite/sections/ContactUsSection";
import { TimelineCircular } from "../../components/TimelineCircular";
import TimelineIframe from "../../components/TimelineIframe";

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
          <div className="container mx-auto max-w-[93%] md:max-w-[83%]">
            <div className="flex items-start gap-[8vw] flex-col md:flex-row justify-center align-center">
              {/* Texto principal - esquerda */}
              <motion.div
                className="flex-1 max-w-full md:max-w-[45vw] pt-[4.20vw]"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-[2vw] flex md:block justify-center items-center">
                  <motion.div
                    className="font-marca-o font-bold font-[number:var(--marca-o-font-weight)] text-[#0000bf] text-[3.2vw] md:text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] mb-[0.24vw] border-b-2 border-solid border-[#FEDC0B] w-fit"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    QUEM SOMOS
                  </motion.div>

                </div>

                <motion.h2
                  className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-center md:text-left text-[#212121] text-[4.8vw] md:text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mt-[3vw] md:mt-0 mb-[4vw] md:mb-[1vw]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Saúde com propósito, <br />
                  resultado e transformação
                </motion.h2>

                <motion.div
                  className="space-y-[1.5vw] text-[#666666] text-[3.74vw] md:text-[1.1vw] leading-[1.6] font-normal"
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
                    A BNG Hub é o ponto de conexão entre excelência <br className="md:block hidden" />
                    operacional, inteligência em saúde e valorização dos <br className="md:block hidden" />
                    profissionais que cuidam de milhões de vidas todos <br className="md:block hidden" />
                    os dias.
                  </motion.p>

                  <motion.p
                    className="!mt-[4vw] md:!mt-[1vw]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    Integramos soluções em gestão médica <br className="md:block hidden" />
                    e performance assistencial com uma atuação baseada <br className="md:block hidden" />
                    em visão sistêmica, inovação contínua e foco nos <br className="md:block hidden" />
                    resultados que realmente importam: a qualidade do <br className="md:block hidden" />
                    cuidado, a sustentabilidade das instituições e a <br className="md:block hidden" />
                    evolução dos serviços de saúde no país.
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Cards MVV - direita */}
              <motion.div
                className="flex flex-col gap-[4.20vw] md:gap-[1.5vw] flex-1 items-end"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Missão */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-[#00009B] hover:bg-[#003CFF] rounded-[8px] md:rounded-[1vw] p-[2vw] text-white w-[75vw] h-fit md:w-[26.944vw] md:h-[9.583vw]">
                    <CardContent className="p-0 flex items-center md:items-start gap-[1vw]">
                      <div className="rounded-lg flex items-center justify-center flex-shrink-0">
                        <img src="/quemSomos_icon3.png" alt="Missão" className="md:w-[5.833vw] p-[3vw] md:p-0 w-[16.533vw] h-[16.533vw] md:h-[5.833vw] mr-[2.014vw]" />
                      </div>
                      <div className="w-full md:w-[13.472vw]">
                        <h3 className="font-bold md:text-[1.2vw] text-[3.733vw] mb-[0.5vw] font-['Poppins']">MISSÃO</h3>
                        <p className="text-[3.733vw] md:text-[0.9vw] leading-[1.4] font-thin font-['Poppins']">
                          Criar conexões de valor <br className="block md:hidden" />
                          para transformar a saúde <br className="block md:hidden" />
                          através de soluções <br className="block md:hidden" />
                          inovadoras.
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
                  <Card className="bg-[#00009B] hover:bg-[#003CFF] rounded-[8px] md:rounded-[1vw] p-[2vw] text-white w-[75vw] h-fit md:w-[26.944vw] md:h-[9.583vw]">
                    <CardContent className="p-0 flex items-center md:items-start gap-[1vw]">
                      <div className="rounded-lg flex items-center justify-center flex-shrink-0">
                        <img src="/quemSomos_icon2.png" alt="Valores" className="md:w-[5.833vw] p-[3vw] md:p-0 w-[16.533vw] h-[16.533vw] md:h-[5.833vw] mr-[2.014vw]" />
                      </div>
                      <div className="w-full md:w-[13.472vw]">
                        <h3 className="font-bold md:text-[1.2vw] text-[3.733vw] mb-[0.5vw] font-['Poppins']">VALORES</h3>
                        <p className="text-[3.733vw] md:text-[0.9vw] leading-[1.4] font-thin font-['Poppins']">
                          Respeito | <br className="block md:hidden" />
                          Relacionamento | <br className="block md:hidden" />
                          Humanização | Precisão <br className="block md:hidden" />
                          Inovação | Perfomance
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
                  <Card className="bg-[#00009B] hover:bg-[#003CFF] rounded-[8px] md:rounded-[1vw] p-[2vw] text-white w-[75vw] h-fit md:w-[26.944vw] md:h-[10.583vw]">
                    <CardContent className="p-0 flex items-center md:items-start gap-[1vw]">
                      <div className="rounded-lg flex items-center justify-center flex-shrink-0">
                        <img src="/quemSomos_icon1.png" alt="Visão" className="md:w-[5.833vw] p-[3vw] md:p-0 w-[16.533vw] h-[16.533vw] md:h-[5.833vw] mr-[2.014vw]" />
                      </div>
                      <div className="w-full md:w-[13.472vw]">
                        <h3 className="font-bold md:text-[1.2vw] text-[3.733vw] mb-[0.5vw] font-['Poppins']">VISÃO</h3>
                        <p className="text-[3.733vw] md:text-[0.9vw] leading-[1.4] font-thin font-['Poppins']">
                          Sermos reconhecidos <br className="block md:hidden" />
                          como o maior e mais <br className="block md:hidden" />
                          inovador ecossistema de <br className="block md:hidden" />
                          soluções para a saúde <br className="block md:hidden" />
                          do país.
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
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}

        >
          <TimelineCircular />
        </motion.div> */}



        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <TimelineIframe  />
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
            className="absolute md:top-[8vw] top-[137vw] w-[10vw] right-[7vw] md:w-auto h-auto"
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
            className="absolute md:bottom-[11vw] bottom-[12vw] w-[8vw] left-[5vw] md:left-[49vw] md:w-auto h-auto"
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

          <div className="container mx-auto max-w-[93%] md:max-w-[83%] relative z-10">
            <div className="flex items-center flex-col md:flex-row gap-[8vw]">
              {/* Texto - esquerda */}
              <motion.div
                className="flex-1 max-w-full md:max-w-[45vw]"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-[2vw] md:mb-[0.42vw] mb:block flex justify-center md:justify-start items-center">
                  <motion.div
                    className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#0000bf] text-[3.2vw] md:text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] mb-[4vw] md:mt-0 mt-[4vw] md:mb-[0.5vw] border-b-2 border-solid border-[#FEDC0B] w-fit font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    NOSSO TIME
                  </motion.div>

                </div>

                <motion.h2
                  className="text-[#003CFF] text-[6.499vw] md:text-[3vw] w-fit font-black mb-[0.5vw]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  #WEARE
                </motion.h2>
                <motion.h3
                  className="font-['Poppins',Helvetica] text-[#00009b] w-fit text-[8.667vw] md:text-[4.44vw] font-bold leading-none tracking-normal mb-[2vw]"
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
                  className="text-[#666666] text-[3.2vw] md:text-[1.1vw] leading-[1.6] w-fit md:w-[32vw] mt-[4.20vw] md:mt-0 mb-[4.20vw] md:mb-[3vw] text-center md:text-left"
                  style={{
                    fontFamily: 'Poppins'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  Para que a verdadeira transformação <br className="block md:hidden" />
                  aconteça, precisamos estar juntos. Por <br className="block md:hidden" />
                  isso, cultivamos conexões reais entre <br className="block md:hidden" />
                  profissionais da saúde, instituições, <br className="block md:hidden" />
                  nossos times e a comunidade. Unimos <br className="block md:hidden" />
                  talentos, propósitos e experiências para <br className="block md:hidden" />
                  fortalecer cada ação, ampliar nosso <br className="block md:hidden" />
                  impacto e desenvolver soluções que <br className="block md:hidden" />
                  façam sentido para quem cuida e para <br className="block md:hidden" />
                  quem precisa de cuidado. Somos <br className="block md:hidden" />
                  movidos pelo nosso propósito, que é a <br className="block md:hidden" />
                  força que nos inspira todos os dias.
                </motion.p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Button className="bg-[#00009B] hover:bg-[#003CFF] text-white rounded-[100px] px-[2vw] py-[0.8vw] font-medium w-full md:w-auto text-[3.733vw] md:text-[0.97vw] font-medium">
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
          className="w-full bg-white relative overflow-visible h-fit md:h-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="w-full h-[72.533vw] md:h-[44.11vw] bg-cover bg-right md:bg-center relative"
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
            >
              <Card className="border-none flex justify-center shadow absolute bg-[#00009B] rounded-[1.39vw] text-white z-10 w-[81%] h-fit md:w-[38.75vw] md:h-[34.722vw] relative md:absolute bottom-[87vw] md:bottom-auto mt-[97vw] md:mt-auto md:-top-[3.44vw] left-[10vw] text-center md:text-left">
                <CardContent className="p-[5.78vw] md:p-[2.78vw] w-fit flex flex-col justify-center h-full">
                  <div className="mb-[1.39vw] w-fit mx-auto md:mx-0">
                    <motion.div
                      className="font-marca-o font-[number:var(--marca-o-font-weight)] font-bold text-[#0dffc0] text-[3.2vw] md:text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] mb-[0.28vw] w-fit text-white border-b-2 border-solid border-[#FEDC0B] w-fit"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      ESG
                    </motion.div>

                  </div>

                  <motion.h2
                    className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-[0DFFC0] text-[4.2vw] md:text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-[4.20vw] mt-[4.20vw] md:mt-0 md:mb-[1.39vw] text-[#0DFFC0] font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    Ações que conectam <br />

                    <span >SAÚDE com responsabilidade</span>
                  </motion.h2>

                  <motion.div
                    className="md:space-y-[1.11vw] font-['Poppins',Helvetica] font-light text-white text-[3.5vw] md:text-[1.11vw] tracking-[0] md:leading-[1.66vw] w-full md:w-[30vw]"
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
                      className="mt-[4vw] md:mt-0"
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