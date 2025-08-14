import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { HeroSection } from "./sections/HeroSection";
import { ServiceOverviewSection } from "./sections/ServiceOverviewSection";
import { SolutionsSection as SolutionsAccordion } from "./sections/SolutionsSection";

export const BngHubLayoutSite = (): JSX.Element => {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Dados completos das marcas
  const brandsData = [
    {
      id: "envolva",
      name: "Envolva",
      bgColor: "bg-[#0000BF]",
      logoSrc: "./envolva-pb-sem-fundo-1.png",
      logoWidth: "w-[12.08vw]",
      logoHeight: "h-[4.24vw]",
      title: "Engajamento e Relacionamento",
      description: "A Envolva conecta pessoas e organizações através de estratégias de engajamento que fortalecem relacionamentos e geram resultados sustentáveis no setor da saúde."
    },
    {
      id: "solida",
      name: "Sólida Saúde",
      bgColor: "bg-[#F2F2F2]",
      logoSrc: "./solida-saude-1.png",
      logoWidth: "w-[8.75vw]",
      logoHeight: "h-[5.76vw]",
      title: "Gestão de Equipes Médicas",
      description: "A Sólida Saúde se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil."
    },
    {
      id: "mensura",
      name: "Mensura Saúde",
      bgColor: "bg-[#003CFF]",
      logoSrc: "./mensura-pb-1.png",
      logoWidth: "w-[11.88vw]",
      logoHeight: "h-[8.4vw]",
      title: "Análise e Performance",
      description: "A Mensura Saúde oferece soluções avançadas de análise de dados e métricas de performance para otimizar a gestão assistencial e operacional."
    }
  ];

  // Função para navegar para a próxima marca
  const prevBrand = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Fade-out de todos os cards simultaneamente (400ms)
    setTimeout(() => {
      // Atualiza TODOS os índices ao mesmo tempo
      setCurrentBrandIndex((prev) => (prev + 1) % brandsData.length);
      
      // Fade-in de todos os cards simultaneamente (400ms)
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 400);
  };

  // Função para navegar para a marca anterior
  const nextBrand = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Fade-out de todos os cards simultaneamente (400ms)
    setTimeout(() => {
      // Atualiza TODOS os índices ao mesmo tempo
      setCurrentBrandIndex((prev) => (prev - 1 + brandsData.length) % brandsData.length);
      
      // Fade-in de todos os cards simultaneamente (400ms)
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 400);
  };

  // Função para obter o índice da marca baseado na posição (esquerda, centro, direita)
  const getBrandIndex = (position: 'left' | 'center' | 'right') => {
    const totalBrands = brandsData.length;
    switch (position) {
      case 'left':
        return (currentBrandIndex - 1 + totalBrands) % totalBrands;
      case 'center':
        return currentBrandIndex;
      case 'right':
        return (currentBrandIndex + 1) % totalBrands;
    }
  };

  // Service cards data
  const serviceCards = [
    {
      title: "Gestão da saúde",
      iconBg: "bg-[#003cff]",
      iconSrc: "/vector-30.svg",
      iconWidth: "w-[55px]",
      iconHeight: "h-[70px]",
      items: [
        "Consultoria diagnóstica",
        "Construção de Protocolos",
        "Gestão de Equipes Médicas",
        "Minha Escala",
      ],
    },
    {
      title: "Fast OPS",
      iconBg: "bg-[#003cff]",
      iconSrc: "/vector-51.svg",
      iconWidth: "w-[50px]",
      iconHeight: "h-[43px]",
      items: [
        "Gestão de Equipes Médicas",
        "Gestão de Escalas",
        "Gestão de Equipes Médicas",
        "Estruturas Operacionais",
      ],
    },
    {
      title: "Telemedicina",
      iconBg: "bg-[#003cff]",
      iconSrc: "/vector-48.svg",
      iconWidth: "w-full",
      iconHeight: "h-[65px]",
      items: [
        "Implantação de Sistemas",
        "Construção de Protocolos",
        "Gestão de Equipes Médicas",
        "Gestão de Atendimento",
      ],
      description:
        "Estruturação e melhoria dos fluxos de atendimento, garantindo alta performance em produtividade médica, além de agilidade, qualidade e satisfação do paciente.",
    },
  ];

  // Brand cards data
  const brandCards = [
    {
      bgColor: "bg-[#0000bf]",
      imgSrc: "/envolva-pb-sem-fundo-1.png",
      imgWidth: "w-[174px]",
      imgHeight: "h-[61px]",
    },
    {
      bgColor: "bg-[#003cff]",
      imgSrc: "/mensura-pb-1.png",
      imgWidth: "w-[171px]",
      imgHeight: "h-[121px]",
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white w-full relative overflow-x-hidden">
        {/* Hero Banner Section */}
        <div className="relative">
          {/* Header Section - Sobreposto ao banner */}
          <HeaderSection />
          
          {/* Hero Banner Section */}
          <HeroBannerSection />
          
          {/* Imagem decorativa elipse */}
        </div>

        {/* About Us Section */}
        <motion.section 
          className="relative w-full py-8 md:py-16 h-auto md:h-[42vw]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto">
            <div className="relative w-[90%] md:w-[79.17vw] mx-auto">
              <AboutUsSection />

              <motion.img
                className="absolute w-[2.78vw] h-[2.78vw] top-[2vw] left-[0.42vw] opacity-90 md:block hidden"
                alt="Cruz decorativa"
                src="/10414.png"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.6, 1, 0.6]
                }} 
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.img
                className="absolute w-[1.94vw] h-[1.94vw] top-[4.2vw] right-[3vw] opacity-100 md:block hidden"
                alt="Cruz decorativa"
                src="/10414.png"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />

              <div className="static w-full mt-4 px-4 text-sm md:absolute md:w-[27.01vw] md:top-[19.1vw] md:left-0 md:text-[1.11vw] md:px-0 md:mt-0 font-sans font-normal text-[#666666] tracking-[0] leading-[1.66vw]">
                Conectamos instituições de saúde, equipes médicas e inovação
                para entregar performance assistencial que faz a diferença.
                Somos a ponte entre excelência clínica
                <br className="hidden md:block" />e gestão estratégica, promovendo saúde com qualidade e
                altos níveis de satisfação.
              </div>

              <div className="static w-full mt-6 px-4 md:hidden">
                <button className="bg-[#00009b] hover:bg-[#003CFF] text-white rounded-full px-6 py-3 text-sm font-semibold">
                  Saiba mais
                </button>
              </div>

              <img
                className="static w-full h-auto mt-6 px-4 md:absolute md:w-[30.97vw] md:h-[34.24vw] md:top-[1.32vw] md:left-[42.43vw] md:px-0 md:mt-0"
                alt="Group"
                src="/group-86.png"
              />
              
              <motion.img
                className="absolute w-[1.5vw] h-[1.5vw] top-[29vw] left-[25vw] opacity-100 md:block hidden"
                alt="Cruz decorativa"
                src="/10414.png"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              /> 

              <motion.img
                className="absolute w-[3.5vw] h-[3.5vw] top-[29vw] right-[1vw] opacity-100 md:block hidden"
                alt="Cruz decorativa"
                src="/10414.png"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </div>
          </div>
        </motion.section>

        {/* Blue Banner Section */}
        <motion.section 
          className="w-full bg-[#0000bf] shadow-[inset_0.28vw_0.28vw_0.28vw_#00000040] py-6 md:py-[3.33vw]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto text-center">
            <motion.p 
              className="font-sans text-lg leading-relaxed px-4 md:text-[1.67vw] md:leading-[2.57vw]"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-white">Nós transformamos a </span>
              <span className="font-bold text-[#0dffc0]">SAÚDE</span>
              <span className="font-bold text-white">&nbsp;</span>
              <span className="text-white">através </span>
              <span className="font-bold text-[#0dffc0] leading-[0.1px]">
                CONEXÕES DE VALOR
              </span>
            </motion.p>
          </div>
        </motion.section>

        {/* Our Brands Section */}
        <motion.section 
          className="w-full py-8 md:py-[4.44vw]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="w-[95%] md:w-[90%] mx-auto text-center">
            <div className="flex flex-col items-center justify-center mb-[0.56vw]">
              <div className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#0000bf] text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] border-b-2 border-solid border-[#FEDC0B]">
                NOSSAS MARCAS
              </div>
            </div>

            <h2 className="w-full px-4 text-xl leading-tight mb-4 md:w-[42.43vw] md:px-0 md:text-[1.94vw] md:leading-[2.92vw] md:mb-[1.39vw] mx-auto font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-[#212121] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] [font-style:var(--BNG-t-tulo-02-h2-font-style)]">
              Um ecossistema conectado pelo propósito
            </h2>

            <p className="w-full h-auto text-sm leading-relaxed px-4 mb-8 md:w-[55.28vw] md:h-[1.67vw] md:text-[1.11vw] md:leading-[1.66vw] md:mb-[4.17vw] md:px-0 mx-auto font-['Poppins',Helvetica] font-normal text-[#666666] tracking-[0]">
              Reunimos marcas estratégicas e comprometidas com a transformação
              da saúde no Brasil.
            </p>

            <div className="flex flex-col gap-6 md:flex-row md:justify-center md:items-center md:gap-[0.9vw] relative overflow-visible">
              {/* Navigation Arrow Left */}
              <button 
                onClick={prevBrand}
                className="hidden md:flex w-[2.43vw] h-[2.43vw] rounded-full border-[0.21vw] border-[#003cff] bg-white items-center justify-center hover:bg-[#003cff] transition-colors group cursor-pointer"
              >
                <img
                  className="w-[0.69vw] h-[1.18vw] rotate-180 filter group-hover:brightness-0 group-hover:invert transition-all ml-[-0.05vw]"
                  alt="Previous"
                  src="/vector-14.svg"
                />
              </button>

              {/* Card Esquerda - Fechado (apenas logo) */}
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="hidden md:block"
              >
                <Card className={`w-[17.83vw] h-[20.28vw] rounded-[1.11vw] flex items-center justify-center transition-all duration-500 ease-in-out bg-[#0000bf] ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}>
                <CardContent className="p-0 relative w-full h-full flex items-center justify-center">
                  <img
                    className={`${brandsData[getBrandIndex('left')].logoWidth} ${brandsData[getBrandIndex('left')].logoHeight} object-contain transition-all duration-500 ease-in-out ${
                      'filter brightness-0 invert'
                    }`}
                    alt={brandsData[getBrandIndex('left')].name}
                    src={brandsData[getBrandIndex('left')].logoSrc}
                  />
                </CardContent>
                </Card>
              </motion.div>

              {/* Card Central - Aberto (logo + título + texto) */}
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }} 
              >
                <Card className={`w-80 h-auto flex-col md:w-[38.75vw] md:h-[23.61vw] md:flex-row bg-white rounded-[1.11vw] flex shadow-[0px_6px_6px_2px_rgba(0,0,0,0.59)] transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-30 scale-98' : 'opacity-100 scale-100'}`}>
                <CardContent className="flex flex-col p-4 md:flex-row md:p-0">
                  {/* Logo Section */}
                  <div className={`w-full h-32 rounded-t-[1.11vw] md:w-[15.21vw] md:rounded-l-[1.11vw] md:rounded-t-none flex items-center justify-center transition-all duration-500 ease-in-out bg-[#F2F2F2]`}>
                    <img
                      className={`${brandsData[getBrandIndex('center')].logoWidth} ${brandsData[getBrandIndex('center')].logoHeight} object-contain transition-all duration-500 ease-in-out ${
                        ''
                      }`}
                      alt={brandsData[getBrandIndex('center')].name}
                      src={brandsData[getBrandIndex('center')].logoSrc}
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="w-full p-4 rounded-b-[1.11vw] md:w-[23.54vw] md:rounded-r-[1.11vw] md:rounded-b-none md:p-[3.33vw] bg-white flex flex-col justify-center">
                    <h3 className={`text-lg leading-tight mb-2 md:text-[1.39vw] md:leading-[1.67vw] md:mb-[1.11vw] font-bold text-[#666666] text-left transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}>
                      {brandsData[getBrandIndex('center')].title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed max-w-none md:text-[1.11vw] md:leading-[1.67vw] md:max-w-[16.5vw] font-normal text-[#666666] text-left transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}>
                      {brandsData[getBrandIndex('center')].description}
                    </p>
                  </div>
                </CardContent>
                </Card>
              </motion.div>

              {/* Card Direita - Fechado (apenas logo) */}
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="hidden md:block"
              >
                <Card className={`w-[17.83vw] h-[20.28vw] rounded-[1.11vw] flex items-center justify-center transition-all duration-500 ease-in-out bg-[#003cff] ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}>
                <CardContent className="p-0 relative w-full h-full flex items-center justify-center">
                  <img
                    className={`${brandsData[getBrandIndex('right')].logoWidth} ${brandsData[getBrandIndex('right')].logoHeight} object-contain transition-all duration-500 ease-in-out ${
                      'filter brightness-0 invert'
                    }`}
                    alt={brandsData[getBrandIndex('right')].name}
                    src={brandsData[getBrandIndex('right')].logoSrc}
                  />
                </CardContent>
                </Card>
              </motion.div>

              {/* Navigation Arrow Right */}
              <button 
                onClick={nextBrand}
                className="hidden md:flex w-[2.43vw] h-[2.43vw] rounded-full border-[0.21vw] border-[#003cff] bg-white items-center justify-center hover:bg-[#003cff] transition-all duration-300 ease-in-out group cursor-pointer disabled:opacity-50"
              >
                <img
                  className="w-[0.69vw] h-[1.18vw] filter group-hover:brightness-0 group-hover:invert transition-all ml-[0.05vw]"
                  alt="Next"
                  src="/vector-14.svg"
                />
              </button>

              {/* Mobile Navigation Dots */}
              <div className="flex gap-2 mt-4 md:hidden">
                {brandsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBrandIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentBrandIndex === index 
                        ? 'bg-[#003cff]' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir para marca ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Hero Numbers Section - NOSSOS NÚMEROS */}
        <section className="w-full bg-gradient-to-b from-[#003CFF] to-[#0000BF]">
          <div className="container mx-auto relative">
            <HeroSection />
          </div>
        </section>

        {/* Solutions Section */}
        <motion.section 
          className="w-full py-8 md:py-[4.44vw]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="container mx-auto text-center px-4 md:px-0">
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#0000bf] text-sm md:text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] border-b-2 border-solid border-[#FEDC0B]">
                NOSSAS SOLUÇÕES
              </div>
            </div>

            <h2 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-[#212121] text-xl md:text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-4 md:mb-[1.39vw]">
              Soluções sob medida para impactar a&nbsp;&nbsp;assistência
            </h2>

            <p className="max-w-full md:max-w-[55.28vw] mx-auto font-sans font-normal text-[#666666] text-sm md:text-[1.11vw] tracking-[0] leading-[1.66vw] mb-4 md:mb-[1vw]">
              Tecnologia, expertise técnica e inovação à serviço da saúde
            </p>

            <SolutionsAccordion />

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="bg-[#00009b] hover:bg-[#003CFF] rounded-full md:rounded-[4.17vw] text-white font-BNG-bot-o text-sm md:text-[0.97vw] tracking-[var(--BNG-bot-o-letter-spacing)] leading-[var(--BNG-bot-o-line-height)] [font-style:var(--BNG-bot-o-font-style)] px-6 py-3 md:px-[1.67vw] md:py-[0.83vw]">
              Falar com um especialista
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Imagem decorativa elipse no final da seção de soluções */}
        <div className="relative">
          <motion.img
            src="/home_forma_elipse.png"
            alt=""
            className="absolute left-0 bottom-[-8vw] w-[15vw] h-auto z-[1]"
            initial={{ opacity: 0, x: -100, rotate: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-100px" }}
            animate={{
              y: [0, -10, 0],
              x: 0
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 0 }
            }}
          />
        </div>

        {/* Where We Are Section */}
        <motion.section 
          className="w-full py-8 md:py-[4.44vw]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-[10.42vw] gap-8 md:gap-0">
              {/* Conteúdo de texto à esquerda */}
              <motion.div 
                className="flex flex-col w-full md:w-[32.01vw]"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-start mb-4 md:mb-[1.39vw]">
                  <div className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#00009b] text-sm md:text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)]">
                    ONDE ESTAMOS
                  </div>
                  <Separator className="w-16 h-0.5 md:w-[6.94vw] md:h-[0.14vw] bg-[#fedc0b] rounded-sm" />
                </div>

                <h2 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-black text-xl md:text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-4 md:mb-[1.67vw]">
                  SEM FRONTEIRAS para a alta peformance assistencial
                </h2>

                <p className="font-sans font-normal text-[#666666] text-sm md:text-[1.11vw] tracking-[0] leading-[1.66vw] mb-6 md:mb-[2.22vw]">
                  A BNG Hub rompe barreiras geográficas e operacionais para entregar
                  soluções de saúde que geram impacto nas instituições. Atuamos em
                  todo o território nacional com estratégias personalizadas que
                  aliam eficiência, tecnologia e humanização.
                </p>

                <Button className="w-fit bg-[#00009b] rounded-full md:rounded-[4.17vw] text-white font-BNG-bot-o text-sm md:text-[0.97vw] tracking-[var(--BNG-bot-o-letter-spacing)] leading-[var(--BNG-bot-o-line-height)] [font-style:var(--BNG-bot-o-font-style)] px-6 py-3 md:px-[1.67vw] md:py-[0.83vw] hover:bg-[#003CFF]">
                  Saiba mais
                </Button>
              </motion.div>

              {/* Mapa do Brasil à direita */}
              <motion.div 
                className="relative w-full md:w-[40.42vw] h-auto md:h-[40.49vw]"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full h-full object-contain"
                  alt="Mapa do Brasil"
                  src="/group-60.png"
                />

                <div className="hidden md:block absolute w-[25.76vw] h-[25.76vw] top-[35.83vw] left-[26.6vw]">
                  <img
                    className="w-[25.76vw] h-[25.76vw]"
                    alt="Ellipse"
                    src="/ellipse-16.svg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Contact Us Section */}
        <ContactUsSection />
      </div>
    </div>
  );
};