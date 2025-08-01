import React, { useState, useEffect } from "react";

export const HeroBannerSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados dos slides
  const slides = [
    {
      id: 1,
      title: "Somos a força por trás da assistência de qualidade",
      image: "./rectangle-178.png"
    },
    {
      id: 2,
      title: "Transformamos a saúde através de conexões de valor",
      image: "./rectangle-178.png"
    },
    {
      id: 3,
      title: "Inovação e tecnologia a serviço da vida",
      image: "./rectangle-178.png"
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
      <div className="relative w-full h-[45.07vw] rounded-b-[2vw] overflow-hidden">
        {/* Slides Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="w-full h-full flex-shrink-0 relative rounded-b-[2vw] overflow-hidden"
            >
              {/* Background Image */}
              <div 
                className="w-full h-full bg-cover bg-center rounded-b-[2vw]"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                {/* Custom Overlay for darkening effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 rounded-b-[2vw]" />
                
                {/* Hero Content */}
                <div className="absolute w-[34.44vw] h-[7.5vw] top-[24.24vw] left-[55.14vw]">
                  <div className="relative w-[34.31vw] h-[7.5vw]">
                    <div className="absolute w-[34.31vw] h-[3.54vw] top-[3.96vw] left-0 bg-[#003cff] rounded-lg" />
                    <div className="absolute w-[32.85vw] top-0 left-[0.76vw] font-BNG-t-tulo-01-h1 font-[number:var(--BNG-t-tulo-01-h1-font-weight)] text-white text-[2.5vw] tracking-[var(--BNG-t-tulo-01-h1-letter-spacing)] leading-[var(--BNG-t-tulo-01-h1-line-height)] [font-style:var(--BNG-t-tulo-01-h1-font-style)] z-10">
                      {slide.title}
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
          className="absolute left-[2vw] top-1/2 -translate-y-1/2 w-[3vw] h-[3vw] bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          aria-label="Slide anterior"
        >
          <svg className="w-[1.5vw] h-[1.5vw] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[2vw] top-1/2 -translate-y-1/2 w-[3vw] h-[3vw] bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          aria-label="Próximo slide"
        >
          <svg className="w-[1.5vw] h-[1.5vw] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-[3vw] left-1/2 -translate-x-1/2 flex gap-[0.5vw]">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[0.8vw] h-[0.8vw] rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator - só aparece no último slide */}
        {currentSlide === slides.length - 1 && (
          <img
            className="absolute w-[4.17vw] h-[2.08vw] top-[41.32vw] left-[47.92vw] animate-bounce"
            alt="Scroll down indicator"
            src="./frame-158.svg"
          />
        )}
      </div>
    </section>
  );
};