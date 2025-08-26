import React, { useState, useEffect } from "react";

export const HeroBannerSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados dos slides
  const slides = [
    {
      id: 1,
      line1: "Somos a força por trás da",
      line2: "assistência de qualidade",
      image: "/home_banner_full.png"
    },
    {
       id: 2,
      line1: "Somos a força por trás da",
      line2: "assistência de qualidade 2",
      image: "/home_banner_full.png"
    },
    {
       id: 3,
      line1: "Somos a força por trás da",
      line2: "assistência de qualidade 3",
      image: "/home_banner_full.png"
    }
  ];

  // Auto-play do slider (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  // Função para ir para um slide específico
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Função para próximo slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Função para slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[45.07vw] md:h-[45.07vw] h-[21vh] rounded-b-[2vw] md:rounded-b-[2vw] rounded-b-[1rem] overflow-hidden">
        {/* Slides Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="w-full h-full flex-shrink-0 relative rounded-b-[30px] md:rounded-b-[2vw] rounded-b-[1rem] overflow-hidden"
            >
              {/* Background Image */}
              <div 
                className="w-full h-full bg-cover bg-center rounded-b-[30px] md:rounded-b-[2vw] rounded-b-[1rem]"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                {/* Custom Overlay for darkening effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 rounded-b-[2vw] md:rounded-b-[2vw] rounded-b-[1rem]" />
                
                {/* Hero Content */}
                <div className="absolute w-[34.44vw] h-[7.5vw] top-[24.24vw] left-[31.14vw] md:w-[42vw] md:h-[7.5vw] md:top-[24.24vw] md:left-[55.14vw] w-[90%] h-auto top-[40%] left-[5%]">
                  <div className="relative w-full h-auto flex flex-col items-start gap-[0.5vw]">
                    {/* Primeira linha - sem fundo */}
                    <div className="font-BNG-t-tulo-01-h1 font-[number:var(--BNG-t-tulo-01-h1-font-weight)] text-white text-[2.5vw] tracking-[var(--BNG-t-tulo-01-h1-letter-spacing)] leading-[var(--BNG-t-tulo-01-h1-line-height)] [font-style:var(--BNG-t-tulo-01-h1-font-style)] md:text-[2.5vw] text-[4.20vw] ">
                      {slide.line1}
                    </div>
                    
                    {/* Segunda linha - com fundo azul dinâmico */}
                    <div className="font-BNG-t-tulo-01-h1 font-[number:var(--BNG-t-tulo-01-h1-font-weight)] text-white text-[2.5vw] tracking-[var(--BNG-t-tulo-01-h1-letter-spacing)] leading-[var(--BNG-t-tulo-01-h1-line-height)] [font-style:var(--BNG-t-tulo-01-h1-font-style)] md:text-[2.5vw] text-[4.20vw] inline-block bg-[#003cff] rounded-lg px-[0.76vw] py-[0.4vw] md:px-[0.76vw] md:py-[0.4vw] px-3 py-2">
                      {slide.line2}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="md:hidden absolute left-[2vw] top-1/2 -translate-y-1/2 w-[3vw] h-[3vw] bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm md:w-[3vw] md:h-[3vw] w-10 h-10"
          aria-label="Slide anterior"
        >
          <svg className="w-[1.5vw] h-[1.5vw] text-white md:w-[1.5vw] md:h-[1.5vw] w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="md:hidden absolute right-[2vw] top-1/2 -translate-y-1/2 w-[3vw] h-[3vw] bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm md:w-[3vw] md:h-[3vw] w-10 h-10"
          aria-label="Próximo slide"
        >
          <svg className="w-[1.5vw] h-[1.5vw] text-white md:w-[1.5vw] md:h-[1.5vw] w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-[3vw] left-1/2 -translate-x-1/2 flex gap-[0.5vw] md:gap-[0.5vw] gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[0.8vw] h-[0.8vw] rounded-full transition-all duration-300 md:w-[0.8vw] md:h-[0.8vw] w-2 h-2 ${
                currentSlide === index 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};