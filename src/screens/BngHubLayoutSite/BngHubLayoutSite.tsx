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
import { ChevronLeft, ChevronRight } from "lucide-react";

export const BngHubLayoutSite = (): JSX.Element => {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Dados completos das marcas
  //   const brandsData = [
  //   {
  //     id: "arnica",
  //     name: "Arnica",
  //     bgColor: "",
  //     logoSrc: "./Arnica.png",
  //     logoSrcNegativo: "./Arnica_negativo.png",
  //     logoWidth: "",
  //     logoHeight: "",
  //     title: "Gestão de Equipes Médicas",
  //     description: "Arnica se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
  //   },
  //   {
  //     id: "boas_novas",
  //     name: "Boas Novas",
  //     bgColor: "",
  //     logoSrc: "./boas_novas.png",
  //     logoSrcNegativo: "./boas_novas_negativo.png",
  //     logoWidth: "",
  //     logoHeight: "",
  //     title: "Gestão de Equipes Médicas",
  //     description: "Boas Novas se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
  //   },
  //   {
  //     id: "bracos_saude",
  //     name: "Braços Saúde",
  //     bgColor: "",
  //     logoSrc: "./Braços_saúde.png",
  //     logoSrcNegativo: "./Braços_saúde_negativo.png",
  //     logoWidth: "",
  //     logoHeight: "",
  //     title: "Gestão de Equipes Médicas",
  //     description: "Braços Saúde se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
  //   },
  //   {
  //     id: "envolva",
  //     name: "Envolva",
  //     bgColor: "",
  //     logoSrc: "./Envolva.png",
  //     logoSrcNegativo: "./Envolva_negativo.png",
  //     logoWidth: "",
  //     logoHeight: "",
  //     title: "Gestão de Equipes Médicas",
  //     description: "Envolva se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
  //   },
  //   {
  //     id: "mensura",
  //     name: "Mensura",
  //     bgColor: "",
  //     logoSrc: "./Mensura.png",
  //     logoSrcNegativo: "./Mensura_negativo.png",
  //     logoWidth: "",
  //     logoHeight: "",
  //     title: "Gestão de Equipes Médicas",
  //     description: "Mensura se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
  //   },
  //   {
  //     id: "solida",
  //     name: "Sólida",
  //     bgColor: "",
  //     logoSrc: "./Solida.png",
  //     logoSrcNegativo: "./Solida_negativo.png",
  //     logoWidth: "",
  //     logoHeight: "",
  //     title: "Gestão de Equipes Médicas",
  //     description: "Sólida se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
  //   },

  //   {
  //     id: "integralidade",
  //     name: "Integralidade Médica",
  //     bgColor: "",
  //     logoSrc: "./Integralidade.png",
  //     logoSrcNegativo: "./Integralidade_negativo.png",
  //     logoWidth: "",
  //     logoHeight: "",
  //     title: "Gestão de Equipes Médicas",
  //     description: "Integralidade Médica se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
  //   }
  // ];

  const brandsData = [
    {
      id: "solida",
      name: "Sólida",
      bgColor: "",
      logoSrc: "./Solida.png",
      logoSrcNegativo: "./Solida_negativo.png",
      logoWidth: "",
      logoHeight: "",
      title: "Gestão de Equipes Médicas",
      description: "Sólida se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
    },
    {
      id: "arnica",
      name: "Arnica",
      bgColor: "",
      logoSrc: "./Arnica.png",
      logoSrcNegativo: "./Arnica_negativo.png",
      logoWidth: "",
      logoHeight: "",
      title: "Gestão de Equipes Médicas",
      description: "Arnica se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
    },
    {
      id: "boas_novas",
      name: "Boas Novas",
      bgColor: "",
      logoSrc: "./boas_novas.png",
      logoSrcNegativo: "./boas_novas_negativo.png",
      logoWidth: "",
      logoHeight: "",
      title: "Gestão de Equipes Médicas",
      description: "Boas Novas se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
    },
    {
      id: "bracos_saude",
      name: "Braços Saúde",
      bgColor: "",
      logoSrc: "./Braços_saúde.png",
      logoSrcNegativo: "./Braços_saúde_negativo.png",
      logoWidth: "",
      logoHeight: "",
      title: "Gestão de Equipes Médicas",
      description: "Braços Saúde se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
    },
    {
      id: "envolva",
      name: "Envolva",
      bgColor: "",
      logoSrc: "./Envolva.png",
      logoSrcNegativo: "./Envolva_negativo.png",
      logoWidth: "",
      logoHeight: "",
      title: "Gestão de Equipes Médicas",
      description: "Envolva se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
    },
    {
      id: "gestaoCuidado",
      name: "Gestão do cuidado",
      bgColor: "",
      logoSrc: "./gestaoCuidado.png",
      logoSrcNegativo: "./gestaoCuidado_negativo.png",
      logoWidth: "",
      logoHeight: "",
      title: "Gestão de Equipes Médicas",
      description: "Gestão do cuidado se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
    },
    {
      id: "integralidade",
      name: "Integralidade Médica",
      bgColor: "",
      logoSrc: "./Integralidade.png",
      logoSrcNegativo: "./Integralidade_negativo.png",
      logoWidth: "",
      logoHeight: "",
      title: "Gestão de Equipes Médicas",
      description: "Integralidade Médica se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
    },
    {
      id: "mensura",
      name: "Mensura",
      bgColor: "",
      logoSrc: "./Mensura.png",
      logoSrcNegativo: "./Mensura_negativo.png",
      logoWidth: "",
      logoHeight: "",
      title: "Gestão de Equipes Médicas",
      description: "Mensura se dedica a fazer a gestão de equipes médicas em centenas de unidades de saúde em todo o Brasil. "
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
          className="relative w-full py-8 md:py-16 h-auto md:h-[42vw] md:mb-[2vw]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto">
            <div className="relative w-full md:w-[79.17vw] mx-auto">
              <AboutUsSection />

              <motion.img
                className="absolute w-[2.78vw] h-[2.78vw] top-[2vw] left-[0.42vw] opacity-90 md:block hidden"
                alt="Cruz decorativa"
                src="/novaCruz.svg"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.img
                className="absolute md:w-[1.94vw] w-[8.94vw] h-[8.94vw] md:h-[1.94vw] top-[159vw] right-[66vw] md:top-[4.2vw] md:right-[3vw] opacity-100"
                alt="Cruz decorativa"
                src="/novaCruz.svg"
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

              <div className="static w-full mt-[5vw] px-4 text-[3.733vw] md:text-left text-center md:absolute md:w-[27.01vw] md:top-[19.1vw] md:left-0 md:text-[1.11vw] md:px-0 md:mt-0 font-sans font-normal text-[#666666] tracking-[0] leading-[150%] md:leading-[1.66vw]">
                Conectamos instituições de saúde, equipes médicas e inovação
                para entregar performance assistencial que faz a diferença.
                Somos a ponte entre excelência clínica
                <br className="hidden md:block" />e gestão estratégica, promovendo saúde com qualidade e
                altos níveis de satisfação.

                <button className="bg-[#00009b] hover:bg-[#003CFF] text-white font-medium rounded-full mt-[6vw] text-[3.74vw] px-[1vw] py-[1vw] md:w-auto w-full  md:mt-[2vw] md:px-[1.67vw] md:py-[0.24vw] md:mt-[2vw] block md:text-[0.97vw] font-['Poppins']">
                 <a href="/quem-somos">
                  Saiba mais
                  </a>  
                </button>
              </div>




              <img
                className="static w-full h-auto mt-6 px-4 md:absolute md:w-[30.97vw] md:h-[34.24vw] md:top-[1.32vw] md:left-[42.43vw] md:px-0 md:mt-0"
                alt="Group"
                src="/group-86.png"
              />

              <motion.img
                className="absolute md:w-[1.5vw] md:h-[1.5vw] w-[5.5vw] h-[5.5vw] top-[103vw] left-0 md:h-[1.5vw] md:top-[29vw] md:left-[25vw] opacity-100 md:block"
                alt="Cruz decorativa"
                src="/novaCruz.svg"
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
                className="absolute md:w-[3.5vw] w-[9.5vw] h-[9.5vw] top-[92vw] md:h-[3.5vw] md:top-[29vw] right-[1vw] opacity-100 block"
                alt="Cruz decorativa"
                src="/novaCruz.svg"
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
          className="w-full bg-[#00009B] shadow-[inset_0.28vw_0.28vw_0.28vw_#00000040] py-6 md:py-[3.33vw]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto text-center">
            <motion.p
              className="font-sans text-[4.20vw] leading-relaxed px-4 md:text-[1.67vw] md:leading-[2.57vw]"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-white">Nós transformamos a </span>
              <span className="font-bold text-[#0dffc0]">SAÚDE</span>
              <span className="font-bold text-white">&nbsp;</span>
              <span className="text-white">através de </span>
              <span className="font-bold text-[#0dffc0] leading-[0.1px]">
                CONEXÕES DE VALOR
              </span>
            </motion.p>
          </div>
        </motion.section>

        {/* Our Brands Section */}
        <motion.section
          className="w-full  pt-[9vw] pb-0 md:pt-[4.44vw] md:pb-[4.44vw]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="w-[95%] md:w-[90%] mx-auto text-center">
            <div className="flex flex-col items-center justify-center mb-[0.56vw]">
              <div className="font-marca-o font-bold font-[number:var(--marca-o-font-weight)] text-[#0000bf] text-[3.733vw] md:text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] border-b-2 border-solid border-[#FEDC0B]">
                NOSSAS MARCAS
              </div>
            </div>

            <h2 className="hidden md:block w-full px-4 text-xl leading-tight mb-[3.733vw] md:w-[42.43vw] md:px-0 md:text-[1.94vw] md:mt-[1vw] mt-[3.84vw] md:leading-[2.92vw] md:mb-0 mx-auto font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-[#212121] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] [font-style:var(--BNG-t-tulo-02-h2-font-style)]">
              Um ecossistema conectado pelo propósito
            </h2>

            <h2 className="block md:hidden w-full px-4 text-xl leading-tight mb-[3.733vw] md:w-[42.43vw] md:px-0 md:text-[1.94vw] md:mt-[1vw] mt-[3.84vw] md:leading-[2.92vw] md:mb-0 mx-auto font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-[#212121] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] [font-style:var(--BNG-t-tulo-02-h2-font-style)]">
              Um ecossistema conectado  <br />
              pelo propósito
            </h2>

            <p className="w-full h-auto text-[3.733vw]  leading-relaxed px-4 mb-0 md:w-[55.28vw] md:h-[1.67vw] md:text-[1.11vw] md:leading-[1.66vw] md:mb-[4.17vw] md:px-0 mx-auto font-['Poppins',Helvetica] font-normal text-[#666666] tracking-[0]">
              Reunimos marcas estratégicas e comprometidas com a transformação
              da saúde no Brasil.
            </p>

            <div className="flex gap-6 flex-row justify-center items-center md:gap-[0.9vw] relative overflow-visible relative md:bottom-0 md:my-0 my-[8vw]">
              {/* Navigation Arrow Left (SVG inline) */}
              <button
                onClick={nextBrand}
                className="flex w-[10vw] h-[10vw] md:w-[2.43vw] md:h-[2.43vw] rounded-full border-[3px] relative top-0 md:top-0 md:border-[0.21vw] border-[#003cff] bg-white items-center justify-center hover:bg-[#003cff] transition-colors group cursor-pointer"
              >
                <ChevronLeft
                  style={{ width: "9vw", height: "9vw" }}
                  className="transition-colors duration-200 stroke-[3] text-[#003CFF] hover:text-white"
                />
              </button>

              {/* Card Esquerda - Fechado (apenas logo) */}
              <motion.div
                // whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="hidden md:block"
              >
                <Card className={`w-[17.83vw] h-[20.28vw] rounded-[16px] flex items-center justify-center transition-all duration-500 ease-in-out bg-[#00009B]`}>
                  <CardContent className="p-0 relative w-full h-full flex items-center justify-center">
                    <img
                      className={`${brandsData[getBrandIndex('left')].logoWidth} ${brandsData[getBrandIndex('left')].logoHeight} object-contain transition-all w-[80%] md:w-[11.083vw] h-auto duration-500 ease-in-out `}
                      alt={brandsData[getBrandIndex('left')].name}
                      src={brandsData[getBrandIndex('left')].logoSrcNegativo}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card Central - Aberto (logo + título + texto) */}
              <motion.div
                className="flex justify-center items-center md:w-auto w-[70%]"
              // whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className={`w-full pb-[8vw] md:pb-0 h-auto flex-col md:w-[38.75vw] md:h-[23.61vw] md:flex-row bg-white rounded-[16px] flex shadow-[0px_2px_6px_-1px_rgba(0,0,0,0.1)] md:shadow-[0px_6px_6px_2px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out`}>
                  <CardContent className="flex flex-col p-0 md:p-4 md:flex-row md:p-0">
                    {/* Logo Section */}
                    <div className={`w-full h-32 rounded-t-[1.11vw] h-full md:w-[15.21vw] md:rounded-l-[16px] px-[5vw] md:px-0 md:py-[0] py-[3vw] flex items-center justify-center transition-all duration-500 ease-in-out bg-[#F2F2F2]`}>
                      <img
                        className={`${brandsData[getBrandIndex('center')].logoWidth} ${brandsData[getBrandIndex('center')].logoHeight} object-contain transition-all duration-500 ease-in-out w-auto h-[24vw] md:h-auto md:w-[11.083vw]`}
                        alt={brandsData[getBrandIndex('center')].name}
                        src={brandsData[getBrandIndex('center')].logoSrc}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="w-full p-4 rounded-b-[1.11vw] md:w-[23.54vw] md:rounded-r-[1.11vw] md:rounded-b-none md:p-[3.33vw] bg-white flex flex-col justify-center">
                      <h3 className={`text-[3.733vw] leading-tight mb-2 md:text-[1.39vw] md:leading-[1.67vw] md:mb-[1.11vw] font-bold text-[#666666] text-left transition-all duration-500 ease-in-out`}>
                        {brandsData[getBrandIndex('center')].title}
                      </h3>

                      <p className={`text-[3.733vw] md:mt-0 mt-[1vw] leading-relaxed max-w-none md:text-[1.11vw] md:leading-[1.67vw] md:max-w-[16.5vw] font-normal text-[#666666] text-left transition-all duration-500 ease-in-out`}>
                        {brandsData[getBrandIndex('center')].description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card Direita - Fechado (apenas logo) */}
              <motion.div
                // whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="hidden md:block"
              >
                <Card className={`w-[17.83vw] h-[20.28vw] rounded-[16px] flex items-center justify-center transition-all duration-500  bg-[#003cff]`}>
                  <CardContent className="p-0 relative w-full h-full flex items-center justify-center">
                    <img
                      className={`object-contain transition-all duration-500 w-[80%] md:w-[11.083vw]`}
                      alt={brandsData[getBrandIndex('right')].name}
                      src={brandsData[getBrandIndex('right')].logoSrcNegativo}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Navigation Arrow Right (SVG inline) */}
              <button
                onClick={prevBrand}
                className="flex w-[10vw] h-[10vw] md:w-[2.43vw] md:h-[2.43vw] rounded-full border-[3px] md:border-[0.21vw] relative md:bottom-0 bottom-0 md:left-0 left-0  border-[#003cff] bg-white items-center justify-center hover:bg-[#003cff] transition-colors group cursor-pointer disabled:opacity-50"
              >
               <ChevronRight
                  style={{ width: "9vw", height: "9vw" }}
                  className="transition-colors duration-200 stroke-[3] text-[#003CFF] hover:text-white"
                />
              </button>

              {/* Mobile Navigation Dots */}
              <div className="hidden gap-2 mt-4 md:hidden justify-center align-items-center relative bottom-[10vw]">
                {brandsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBrandIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentBrandIndex === index
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
        <section className="w-full bg-gradient-to-b from-[#003CFF] to-[#0000BF] rounded-[16px]">
          <div className="px-[1vw] md:container mx-auto relative ">
            <HeroSection />
          </div>
        </section>

        {/* Solutions Section */}
        <motion.section
          className="w-full py-8 md:py-[4.44vw] relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="container mx-auto text-center px-4 md:px-0">
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="font-marca-o font-[number:var(--marca-o-font-weight)] font-bold text-[#0000bf] text-[3.74vw] md:text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] border-b-2 border-solid border-[#FEDC0B]">
                NOSSAS SOLUÇÕES
              </div>
            </div>

            <h2 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-[#212121] text-[4.8vw] md:px-0 px-[2vw] md:text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-4 md:mb-[1.39vw]">
              Soluções sob medida para impactar a&nbsp;&nbsp;assistência
            </h2>

            <p className="max-w-full md:max-w-[55.28vw] mx-auto font-sans font-normal text-[#666666] text-[3.733vw] md:text-[1.11vw] tracking-[0] md:px-0 px-[11vw] md:leading-[1.66vw] mb-4 md:mb-[1vw]">
              Tecnologia, expertise técnica e inovação à serviço da saúde
            </p>

            <SolutionsAccordion />

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="bg-[#00009b] hover:bg-[#003CFF] text-white rounded-full mt-[6vw] text-[3.74vw] px-[1vw] py-[1vw] md:w-auto w-[84%] md:px-[1.67vw] md:py-[0.52vw] md:mt-[2vw] block md:text-[0.97vw] font-['Poppins'] mx-auto h-auto">
                <a href="/contato">Falar com um especialista</a>
              </Button>
            </motion.div>
          </div>

          {/* Imagem decorativa elipse */}
          <motion.img
            src="/home_forma_elipse.png"
            alt=""
            className="absolute top-[40vw] left-0 w-[15vw] h-auto z-[1]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 0 }
            }}
            viewport={{ once: true, margin: "-100px" }}
            animate={{
              y: [0, -10, 0],
              x: 0
            }}
          />
        </motion.section>

        {/* Where We Are Section */}
        <motion.section
          className="w-full py-8 md:py-[4.44vw]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:pl-[8.42vw] md:pr-[5.42vw] gap-8 md:gap-0">
              {/* Conteúdo de texto à esquerda */}
              <motion.div
                className="flex flex-col w-full md:w-[28.01vw]"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-[1.39vw]">
                  <div className="font-marca-o font-[number:var(--marca-o-font-weight)] font-bold text-[#0000bf] text-[3.74vw] md:text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] border-b-2 border-solid border-[#FEDC0B]">
                    ONDE ESTAMOS
                  </div>

                </div>

                <h2 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-center md:text-left text-black text-[4.8vw] md:text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-4 md:mb-[1.67vw]">
                  SEM FRONTEIRAS para a alta performance assistencial
                </h2>

                <p className="font-sans font-normal text-[#666666] text-center md:text-left text-sm md:text-[1.11vw] tracking-[0] md:leading-[1.66vw] mb-6 md:mb-[2.22vw]">
                  A BNG Hub rompe barreiras geográficas e operacionais para entregar
                  soluções de saúde que geram impacto nas instituições. Atuamos em
                  todo o território nacional com estratégias personalizadas que
                  aliam eficiência, tecnologia e humanização.
                </p>

                <Button className="bg-[#00009b] hover:bg-[#003CFF] mt-[3vw] text-[3.74vw] px-[1vw] py-[1vw] text-white rounded-full md:px-[1.67vw] md:py-[0.52vw] md:mt-[2vw] block md:text-[0.97vw] font-['Poppins'] h-auto md:w-fit">
                 <a href="/contato">Saiba mais</a>
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
                  src="/mapaBrasil.gif"
                />

                <div className="block absolute w-[25.76vw] h-[25.76vw] top-[72.84vw] left-[53.6vw] md:top-[35.83vw] md:left-[26.6vw]">
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