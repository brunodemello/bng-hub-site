import React from "react";
import { useState } from "react";
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
import { SolutionsSection } from "./sections/SolutionsSection";

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
        </div>

        {/* About Us Section */}
        <section className="relative w-full py-16">
          <div className="container mx-auto">
            <div className="relative w-[79.17vw] mx-auto">
              <AboutUsSection />

              <img
                className="w-[79.17vw] h-[31.81vw]"
                alt="Group"
                src="./group-84.png"
              />

              <div className="absolute w-[2.78vw] h-[2.78vw] top-[6vw] left-[8vw]">
                <img
                  className="absolute w-[0.83vw] h-[0.9vw] top-0 left-[0.97vw]"
                  alt="Vector"
                  src="./vector.svg"
                />
                <img
                  className="absolute w-[0.83vw] h-[0.9vw] top-[1.88vw] left-[0.97vw]"
                  alt="Vector"
                  src="./vector-49.svg"
                />
                <img
                  className="absolute w-[0.9vw] h-[0.83vw] top-[0.97vw] left-0"
                  alt="Vector"
                  src="./vector-1.svg"
                />
                <img
                  className="absolute w-[0.9vw] h-[0.83vw] top-[0.97vw] left-[1.88vw]"
                  alt="Vector"
                  src="./vector-27.svg"
                />
              </div>

              <div className="absolute w-[1.94vw] h-[1.94vw] top-[8vw] right-[8vw]">
                <img
                  className="absolute w-[0.56vw] h-[0.63vw] top-0 left-[0.69vw]"
                  alt="Vector"
                  src="./vector.svg"
                />
                <img
                  className="absolute w-[0.56vw] h-[0.63vw] top-[1.32vw] left-[0.69vw]"
                  alt="Vector"
                  src="./vector-2.svg"
                />
                <img
                  className="absolute w-[0.63vw] h-[0.56vw] top-[0.69vw] left-0"
                  alt="Vector"
                  src="./vector-1.svg"
                />
                <img
                  className="absolute w-[0.63vw] h-[0.56vw] top-[0.69vw] left-[1.32vw]"
                  alt="Vector"
                  src="./vector-27.svg"
                />
              </div>

              <div className="absolute w-[32.01vw] top-[19.1vw] left-0 font-sans font-normal text-[#666666] text-[1.11vw] tracking-[0] leading-[1.66vw]">
                Conectamos instituições de saúde, equipes médicas e inovação
                para entregar performance assistencial que faz a diferença.
                Somos a ponte entre excelência clínica
                <br />e gestão estratégica, promovendo saúde com qualidade e
                altos níveis de satisfação.
              </div>

              <img
                className="absolute w-[30.97vw] h-[34.24vw] top-[1.32vw] left-[42.43vw]"
                alt="Group"
                src="./group-86.png"
              />

              <Button className="absolute top-[29.24vw] left-0 bg-[#00009b] rounded-[4.17vw] text-white font-BNG-bot-o text-[0.97vw] tracking-[var(--BNG-bot-o-letter-spacing)] leading-[var(--BNG-bot-o-line-height)] [font-style:var(--BNG-bot-o-font-style)] px-[1.67vw] py-[0.83vw]">
                Saiba mais
              </Button>

              {/* Cruz pequena inferior esquerda */}
              <div className="absolute w-[1.5vw] h-[1.5vw] top-[32vw] left-[25vw] opacity-60">
                <img
                  className="absolute w-[0.45vw] h-[0.5vw] top-0 left-[0.52vw]"
                  alt="Vector"
                  src="./vector.svg"
                />
                <img
                  className="absolute w-[0.45vw] h-[0.5vw] top-[1vw] left-[0.52vw]"
                  alt="Vector"
                  src="./vector-49.svg"
                />
                <img
                  className="absolute w-[0.5vw] h-[0.45vw] top-[0.52vw] left-0"
                  alt="Vector"
                  src="./vector-1.svg"
                />
                <img
                  className="absolute w-[0.5vw] h-[0.45vw] top-[0.52vw] left-[1vw]"
                  alt="Vector"
                  src="./vector-27.svg"
                />
              </div>

              {/* Cruz grande inferior direita */}
              <div className="absolute w-[3.5vw] h-[3.5vw] bottom-[4vw] right-[4vw] opacity-40">
                <img
                  className="absolute w-[1.05vw] h-[1.17vw] top-0 left-[1.22vw]"
                  alt="Vector"
                  src="./vector.svg"
                />
                <img
                  className="absolute w-[1.05vw] h-[1.17vw] top-[2.33vw] left-[1.22vw]"
                  alt="Vector"
                  src="./vector-2.svg"
                />
                <img
                  className="absolute w-[1.17vw] h-[1.05vw] top-[1.22vw] left-0"
                  alt="Vector"
                  src="./vector-1.svg"
                />
                <img
                  className="absolute w-[1.17vw] h-[1.05vw] top-[1.22vw] right-0"
                  alt="Vector"
                  src="./vector-27.svg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blue Banner Section */}
        <section className="w-full bg-[#0000bf] shadow-[inset_0.28vw_0.28vw_0.28vw_#00000040] py-[3.33vw]">
          <div className="container mx-auto text-center">
            <p className="font-sans text-[1.67vw] leading-[2.57vw]">
              <span className="text-white">Nós transformamos a </span>
              <span className="font-bold text-[#0dffc0]">SAÚDE</span>
              <span className="font-bold text-white">&nbsp;</span>
              <span className="text-white">através </span>
              <span className="font-bold text-[#0dffc0] leading-[0.1px]">
                CONEXÕES DE VALOR
              </span>
            </p>
          </div>
        </section>

        {/* Our Brands Section */}
        <section className="w-full py-[4.44vw]">
          <div className="w-[90%] mx-auto text-center">
            <div className="flex flex-col items-center justify-center mb-[0.56vw]">
              <div className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#0000bf] text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)]">
                NOSSAS MARCAS
              </div>
              <Separator className="w-[6.94vw] h-[0.14vw] bg-[#fedc0b] rounded-sm mt-[0.28vw]" />
            </div>

            <h2 className="w-[42.43vw] mx-auto font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-[#212121] text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[2.92vw] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-[1.39vw]">
              Um ecossistema conectado pelo propósito
            </h2>

            <p className="w-[55.28vw] h-[1.67vw] mx-auto font-['Poppins',Helvetica] font-normal text-[#666666] text-[1.11vw] tracking-[0] leading-[1.66vw] mb-[4.17vw]">
              Reunimos marcas estratégicas e comprometidas com a transformação
              da saúde no Brasil.
            </p>

            <div className="flex justify-center items-center gap-[1.67vw] relative overflow-hidden">
              {/* Navigation Arrow Left */}
              <button 
                onClick={prevBrand}
                className="w-[2.43vw] h-[2.43vw] rounded-full border-[0.21vw] border-[#003cff] bg-white flex items-center justify-center hover:bg-[#003cff] transition-colors group cursor-pointer"
              >
                <img
                  className="w-[0.69vw] h-[1.18vw] rotate-180 filter group-hover:brightness-0 group-hover:invert transition-all ml-[-0.05vw]"
                  alt="Previous"
                  src="./vector-14.svg"
                />
              </button>

              {/* Card Esquerda - Fechado (apenas logo) */}
              <Card className={`w-[20.83vw] h-[20.28vw] rounded-[1.11vw] flex items-center justify-center transition-all duration-500 ease-in-out ${brandsData[getBrandIndex('left')].bgColor} ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}>
                <CardContent className="p-0 relative w-full h-full flex items-center justify-center">
                  <img
                    className={`${brandsData[getBrandIndex('left')].logoWidth} ${brandsData[getBrandIndex('left')].logoHeight} object-contain transition-all duration-500 ease-in-out ${
                      brandsData[getBrandIndex('left')].bgColor !== 'bg-[#F2F2F2]' ? 'filter brightness-0 invert' : ''
                    }`}
                    alt={brandsData[getBrandIndex('left')].name}
                    src={brandsData[getBrandIndex('left')].logoSrc}
                  />
                </CardContent>
              </Card>

              {/* Card Central - Aberto (logo + título + texto) */}
              <Card className={`w-[38.75vw] h-[23.61vw] bg-white rounded-[1.11vw] flex shadow-[0_0.56vw_2.22vw_rgba(0,0,0,0.15)] transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-30 scale-98' : 'opacity-100 scale-100'}`}>
                <CardContent className="flex p-0">
                  {/* Logo Section */}
                  <div className={`w-[15.21vw] rounded-l-[1.11vw] flex items-center justify-center transition-all duration-500 ease-in-out ${brandsData[getBrandIndex('center')].bgColor}`}>
                    <img
                      className={`${brandsData[getBrandIndex('center')].logoWidth} ${brandsData[getBrandIndex('center')].logoHeight} object-contain transition-all duration-500 ease-in-out ${
                        brandsData[getBrandIndex('center')].bgColor !== 'bg-[#F2F2F2]' ? 'filter brightness-0 invert' : ''
                      }`}
                      alt={brandsData[getBrandIndex('center')].name}
                      src={brandsData[getBrandIndex('center')].logoSrc}
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="w-[23.54vw] bg-white rounded-r-[1.11vw] p-[3.33vw] flex flex-col justify-center">
                    <h3 className={`font-bold text-[#666666] text-[1.39vw] leading-[1.67vw] mb-[1.11vw] text-left transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}>
                      {brandsData[getBrandIndex('center')].title}
                    </h3>
                    
                    <p className={`font-normal text-[#666666] text-[1.11vw] leading-[1.67vw] text-left max-w-[16.5vw] transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}>
                      {brandsData[getBrandIndex('center')].description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Card Direita - Fechado (apenas logo) */}
              <Card className={`w-[20.83vw] h-[20.28vw] rounded-[1.11vw] flex items-center justify-center transition-all duration-500 ease-in-out ${brandsData[getBrandIndex('right')].bgColor} ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}>
                <CardContent className="p-0 relative w-full h-full flex items-center justify-center">
                  <img
                    className={`${brandsData[getBrandIndex('right')].logoWidth} ${brandsData[getBrandIndex('right')].logoHeight} object-contain transition-all duration-500 ease-in-out ${
                      brandsData[getBrandIndex('right')].bgColor !== 'bg-[#F2F2F2]' ? 'filter brightness-0 invert' : ''
                    }`}
                    alt={brandsData[getBrandIndex('right')].name}
                    src={brandsData[getBrandIndex('right')].logoSrc}
                  />
                </CardContent>
              </Card>

              {/* Navigation Arrow Right */}
              <button 
                onClick={nextBrand}
                className="w-[2.43vw] h-[2.43vw] rounded-full border-[0.21vw] border-[#003cff] bg-white flex items-center justify-center hover:bg-[#003cff] transition-all duration-300 ease-in-out group cursor-pointer disabled:opacity-50"
              >
                <img
                  className="w-[0.69vw] h-[1.18vw] filter group-hover:brightness-0 group-hover:invert transition-all ml-[0.05vw]"
                  alt="Next"
                  src="./vector-14.svg"
                />
              </button>
            </div>
          </div>
        </section>

        {/* Hero Numbers Section - NOSSOS NÚMEROS */}
        <section className="w-full bg-gradient-to-b from-[#003CFF] to-[#0000BF] py-[5.56vw]">
          <div className="container mx-auto relative">
            <div className="absolute w-[3.89vw] h-[3.96vw] top-[5vw] left-0 opacity-30">
              <img
                className="absolute w-[1.18vw] h-[1.32vw] top-0 left-[1.39vw]"
                alt="Vector"
                src="./vector.svg"
              />
              <img
                className="absolute w-[1.18vw] h-[1.32vw] top-[2.64vw] left-[1.39vw]"
                alt="Vector"
                src="./vector-2.svg"
              />
              <img
                className="absolute w-[1.32vw] h-[1.18vw] top-[1.39vw] left-0"
                alt="Vector"
                src="./vector-1.svg"
              />
              <img
                className="absolute w-[1.32vw] h-[1.18vw] top-[1.39vw] left-[2.57vw]"
                alt="Vector"
                src="./vector-27.svg"
              />
            </div>

            <div className="absolute w-[9.03vw] h-[9.03vw] top-0 right-0 opacity-30">
              <img
                className="absolute w-[2.64vw] h-[3.06vw] top-0 left-[3.19vw]"
                alt="Vector"
                src="./vector.svg"
              />
              <img
                className="absolute w-[2.64vw] h-[3.06vw] top-[5.97vw] left-[3.19vw]"
                alt="Vector"
                src="./vector-2.svg"
              />
              <img
                className="absolute w-[3.06vw] h-[2.64vw] top-[3.19vw] left-0"
                alt="Vector"
                src="./vector-1.svg"
              />
              <img
                className="absolute w-[3.06vw] h-[2.64vw] top-[3.19vw] left-[5.97vw]"
                alt="Vector"
                src="./vector-27.svg"
              />
            </div>

            <div className="absolute w-[6.81vw] h-[6.46vw] bottom-0 left-[6.94vw] opacity-30">
              <img
                className="absolute w-[2.01vw] h-[2.15vw] top-0 left-[2.43vw]"
                alt="Vector"
                src="./vector.svg"
              />
              <img
                className="absolute w-[2.01vw] h-[2.15vw] top-[4.31vw] left-[2.43vw]"
                alt="Vector"
                src="./vector-49.svg"
              />
              <img
                className="absolute w-[2.29vw] h-[1.88vw] top-[2.29vw] left-0"
                alt="Vector"
                src="./vector-1.svg"
              />
              <img
                className="absolute w-[2.29vw] h-[1.88vw] top-[2.29vw] left-[4.51vw]"
                alt="Vector"
                src="./vector-27.svg"
              />
            </div>

            <div className="absolute w-[2.57vw] h-[2.57vw] bottom-[6.94vw] left-[38.01vw] opacity-30">
              <img
                className="absolute w-[0.76vw] h-[0.83vw] top-0 left-[0.9vw]"
                alt="Vector"
                src="./vector.svg"
              />
              <img
                className="absolute w-[0.76vw] h-[0.83vw] top-[1.67vw] left-[0.9vw]"
                alt="Vector"
                src="./vector-2.svg"
              />
              <img
                className="absolute w-[0.83vw] h-[0.76vw] top-[0.9vw] left-0"
                alt="Vector"
                src="./vector-1.svg"
              />
              <img
                className="absolute w-[0.83vw] h-[0.76vw] top-[0.9vw] left-[1.67vw]"
                alt="Vector"
                src="./vector-27.svg"
              />
            </div>

            <div className="absolute w-[3.61vw] h-[3.61vw] top-[12.5vw] right-[13.89vw] opacity-30">
              <img
                className="absolute w-[1.04vw] h-[1.25vw] top-0 left-[1.25vw]"
                alt="Vector"
                src="./vector.svg"
              />
              <img
                className="absolute w-[1.04vw] h-[1.25vw] top-[2.43vw] left-[1.25vw]"
                alt="Vector"
                src="./vector-9.svg"
              />
              <img
                className="absolute w-[1.25vw] h-[1.04vw] top-[1.25vw] left-0"
                alt="Vector"
                src="./vector-4.svg"
              />
              <img
                className="absolute w-[1.25vw] h-[1.04vw] top-[1.25vw] left-[2.43vw]"
                alt="Vector"
                src="./vector-8.svg"
              />
            </div>

            <div className="absolute w-[3.33vw] h-[3.33vw] bottom-[3.47vw] right-[3.47vw] opacity-30">
              <img
                className="absolute w-[0.97vw] h-[1.11vw] top-0 left-[1.18vw]"
                alt="Vector"
                src="./vector.svg"
              />
              <img
                className="absolute w-[0.97vw] h-[1.11vw] top-[2.22vw] left-[1.18vw]"
                alt="Vector"
                src="./vector-9.svg"
              />
              <img
                className="absolute w-[1.11vw] h-[0.97vw] top-[1.18vw] left-0"
                alt="Vector"
                src="./vector-4.svg"
              />
              <img
                className="absolute w-[1.11vw] h-[0.97vw] top-[1.18vw] left-[2.22vw]"
                alt="Vector"
                src="./vector-8.svg"
              />
            </div>

            <HeroSection />
          </div>
        </section>

        {/* Solutions Section */}
        <section className="w-full py-[4.44vw]">
          <div className="container mx-auto text-center">
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#0000bf] text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)]">
                NOSSAS SOLUÇÕES
              </div>
              <Separator className="w-[6.94vw] h-[0.14vw] bg-[#fedc0b] rounded-sm" />
            </div>

            <h2 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-[#212121] text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-[1.39vw]">
              Soluções sob medida para impactar a&nbsp;&nbsp;assistência
            </h2>

            <p className="max-w-[55.28vw] mx-auto font-sans font-normal text-[#666666] text-[1.11vw] tracking-[0] leading-[1.66vw] mb-[4.17vw]">
              Tecnologia, expertise técnica e inovação à serviço da saúde
            </p>

            <div className="flex justify-center gap-[2.22vw] mb-[4.44vw]">
              {serviceCards.map((card, index) => (
                <Card
                  key={index}
                  className={`w-[23.89vw] ${index === 2 ? "h-[33.89vw]" : "h-[24.72vw]"} bg-[#0000bf] rounded-[1.11vw] relative`}
                >
                  <CardContent className="p-[1.67vw] pt-[8.61vw] text-white">
                    <div className="absolute w-[9.24vw] h-[6.94vw] top-0 left-1/2 -translate-x-1/2 bg-[#003cff] rounded-[1.11vw]">
                      <div className="absolute w-[4.86vw] h-[4.86vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                        <img
                          className={`${card.iconWidth} ${card.iconHeight}`}
                          alt="Icon"
                          src={`.${card.iconSrc}`}
                        />
                      </div>
                    </div>

                    <h3 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-white text-[1.94vw] text-center tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-[3.33vw]">
                      {card.title}
                    </h3>

                    <div className="flex flex-col gap-[1.11vw]">
                      {card.items.map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex flex-col ${idx === 3 && index === 2 ? "text-[#0dffc0]" : ""}`}
                        >
                          <div className="flex justify-between items-center">
                            <div className="font-sans font-semibold text-[1.11vw] leading-[1.66vw]">
                              {item}
                            </div>
                            <img
                              className="w-[1.18vw] h-[0.69vw]"
                              alt="Vector"
                              src={
                                idx === 3 && index === 2
                                  ? "./vector-28.svg"
                                  : "./vector-5.svg"
                              }
                            />
                          </div>
                          {(idx < 3 || index !== 2) && (
                            <Separator className="h-[0.07vw] bg-white mt-[0.28vw]" />
                          )}
                        </div>
                      ))}
                    </div>

                    {card.description && (
                      <p className="text-white text-[0.97vw] leading-[1.45vw] mt-[1.67vw] text-left">
                        {card.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="bg-[#00009b] rounded-[4.17vw] text-white font-BNG-bot-o text-[0.97vw] tracking-[var(--BNG-bot-o-letter-spacing)] leading-[var(--BNG-bot-o-line-height)] [font-style:var(--BNG-bot-o-font-style)] px-[1.67vw] py-[0.83vw]">
              Falar com um especialista
            </Button>
          </div>
        </section>

        {/* Where We Are Section */}
        <section className="w-full py-[4.44vw]">
          <div className="container mx-auto">
            <div className="flex flex-col items-start ml-[10.42vw] mb-[1.39vw]">
              <div className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#00009b] text-[0.97vw] text-center tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)]">
                ONDE ESTAMOS
              </div>
              <Separator className="w-[6.94vw] h-[0.14vw] bg-[#fedc0b] rounded-sm" />
            </div>

            <h2 className="max-w-[32.01vw] ml-[10.42vw] font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-black text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-[1.67vw]">
              SEM FRONTEIRAS para a alta peformance assistencial
            </h2>

            <p className="max-w-[32.01vw] ml-[10.42vw] font-sans font-normal text-[#666666] text-[1.11vw] tracking-[0] leading-[1.66vw] mb-[2.22vw]">
              A BNG Hub rompe barreiras geográficas e operacionais para entregar
              soluções de saúde que geram impacto nas instituições. Atuamos em
              todo o território nacional com estratégias personalizadas que
              aliam eficiência, tecnologia e humanização.
            </p>

            <Button className="ml-[10.42vw] bg-[#00009b] rounded-[4.17vw] text-white font-BNG-bot-o text-[0.97vw] tracking-[var(--BNG-bot-o-letter-spacing)] leading-[var(--BNG-bot-o-line-height)] [font-style:var(--BNG-bot-o-font-style)] px-[1.67vw] py-[0.83vw]">
              Saiba mais
            </Button>

            <div className="relative">
              <img
                className="w-[40.42vw] h-[40.49vw] ml-auto"
                alt="Group"
                src="./group-60.png"
              />

              <div className="absolute w-[25.76vw] h-[25.76vw] top-[35.83vw] left-[26.6vw]">
                <img
                  className="w-[25.76vw] h-[25.76vw]"
                  alt="Ellipse"
                  src="./ellipse-16.svg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Service Overview Section */}
        <div className="py-[4.44vw]"><ServiceOverviewSection /></div>

        {/* Contact Us Section */}
        <ContactUsSection />
      </div>
    </div>
  );
};