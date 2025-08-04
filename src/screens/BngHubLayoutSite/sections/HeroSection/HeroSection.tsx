import React from "react";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Hook personalizado para animação de contador
const useCounterAnimation = (endValue: number, duration: number = 2500, shouldStart: boolean = false) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!shouldStart || isAnimating || hasAnimated) return;

    setIsAnimating(true);
    setHasAnimated(true);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Função de easing para suavizar a animação
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCurrentValue(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(endValue);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue, duration, shouldStart, isAnimating, hasAnimated]);

  return currentValue;
};

// Componente para renderizar valor animado
const AnimatedValue = ({ value, shouldAnimate }: { value: string; shouldAnimate: boolean }) => {
  // Extrair número e texto do valor
  const parseValue = (val: string) => {
    if (val === "10 anos") {
      return { number: 10, prefix: "", suffix: " anos" };
    } else if (val === "+300") {
      return { number: 300, prefix: "+", suffix: "" };
    } else if (val === "+10 mil") {
      return { number: 10, prefix: "+", suffix: " mil" };
    } else if (val === "+300 mil") {
      return { number: 300, prefix: "+", suffix: " mil" };
    }
    return { number: 0, prefix: "", suffix: val };
  };

  const { number, prefix, suffix } = parseValue(value);
  const animatedNumber = useCounterAnimation(number, 2500, shouldAnimate);

  return (
    <>
      {prefix}{animatedNumber}{suffix}
    </>
  );
};

// Define the stats data for mapping
const statsData = [
  {
    value: "10 anos",
    description: "de inovação em\ngestão assistencial",
  },
  {
    value: "+300",
    description: "unidades de saúde\ncom gestão otimizada",
  },
  {
    value: "+10 mil",
    description: "profissionais da saúde\nconectados ao propósito",
  },
  {
    value: "+300 mil",
    description: "vidas impactadas\ntodos os meses",
  },
];

export const HeroSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Inicia a animação quando 30% da seção estiver visível
        rootMargin: '0px 0px -100px 0px' // Margem para iniciar um pouco antes
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="flex flex-col w-full items-center gap-[3.33vw] py-[5.56vw]">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-marca-o font-[number:var(--marca-o-font-weight)] text-white text-[0.97vw] text-center tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)]">
          NOSSOS NÚMEROS
        </h3>
        <Separator className="w-[6.94vw] h-[0.14vw] bg-[#fedc0b] rounded-sm mt-[0.28vw]" />
      </div>

      <div className="flex flex-col items-center justify-center gap-[4.17vw] w-full">
        <div className="flex flex-col items-center gap-[0.07vw]">
          <h2 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-white text-[1.94vw] text-center tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)]">
            Construindo conexões para gerar crescimento
          </h2>
        </div>

        {/* Cards em linha única */}
        <div className="flex items-center justify-center gap-[1.39vw] w-full max-w-[90vw]">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="flex flex-col w-[20.69vw] h-[22.92vw] items-center justify-center bg-no-repeat bg-contain bg-center border-none shadow-none relative"
              style={{
                backgroundImage: "url('/frame-15.png')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
              <CardContent className="flex flex-col items-center justify-center gap-[0.39vw] px-[0.47vw] border-none h-full relative z-10">
                <h2 className="w-[19.65vw] font-BNG-display-02 font-[number:var(--BNG-display-02-font-weight)] text-white text-[3.33vw] text-center tracking-[var(--BNG-display-02-letter-spacing)] leading-[var(--BNG-display-02-line-height)] [font-style:var(--BNG-display-02-font-style)]">
                  <AnimatedValue value={stat.value} shouldAnimate={isVisible} />
                </h2>
                <p className="w-[15.63vw] font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-[1.05vw] text-center tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] whitespace-pre-line">
                  {stat.description}
                </p>
              </CardContent>
              
              {/* Fallback caso a imagem não carregue */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg opacity-90 -z-10" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};