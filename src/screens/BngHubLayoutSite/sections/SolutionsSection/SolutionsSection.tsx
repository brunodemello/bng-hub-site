import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Dados dos cards de soluções (expandido com cards mock)
const solutionsData = [
  {
    id: "gestao-saude",
    title: "Gestão da saúde",
    iconSrc: "/vector-30.svg",
    items: [
      {
        id: "consultoria",
        title: "Consultoria diagnóstica",
        description: "Análise completa dos processos assistenciais e operacionais, identificando oportunidades de melhoria e otimização para elevar a qualidade do atendimento."
      },
      {
        id: "protocolos",
        title: "Construção de Protocolos",
        description: "Desenvolvimento de protocolos clínicos personalizados baseados em evidências científicas, garantindo padronização e excelência no cuidado ao paciente."
      },
      {
        id: "equipes",
        title: "Gestão de Equipes Médicas",
        description: "Coordenação estratégica de profissionais da saúde, otimizando escalas, produtividade e satisfação das equipes para melhor performance assistencial."
      },
      {
        id: "escala",
        title: "Minha Escala",
        description: "Plataforma inteligente para gestão automatizada de escalas médicas, garantindo cobertura adequada e otimização de recursos humanos."
      }
    ]
  },
  {
    id: "fast-ops",
    title: "Fast OPS",
    iconSrc: "/vector-51.svg",
    items: [
      {
        id: "equipes-medicas",
        title: "Gestão de Equipes Médicas",
        description: "Coordenação ágil e eficiente de equipes médicas especializadas, garantindo resposta rápida e qualidade no atendimento de emergência."
      },
      {
        id: "escalas",
        title: "Gestão de Escalas",
        description: "Sistema otimizado para gestão dinâmica de escalas, permitindo ajustes em tempo real e cobertura contínua dos serviços médicos."
      },
      {
        id: "equipes-rapidas",
        title: "Equipes de Resposta Rápida",
        description: "Formação e coordenação de equipes especializadas em atendimento de urgência, com protocolos ágeis e eficazes para situações críticas."
      },
      {
        id: "estruturas",
        title: "Estruturas Operacionais",
        description: "Implementação de estruturas operacionais robustas e flexíveis, capazes de responder rapidamente às demandas assistenciais variáveis."
      }
    ]
  },
  {
    id: "telemedicina",
    title: "Telemedicina",
    iconSrc: "/vector-48.svg",
    items: [
      {
        id: "sistemas",
        title: "Implantação de Sistemas",
        description: "Implementação completa de plataformas de telemedicina, incluindo configuração, treinamento e suporte técnico para operação eficiente."
      },
      {
        id: "protocolos-tele",
        title: "Construção de Protocolos",
        description: "Desenvolvimento de protocolos específicos para teleconsultas e telemonitoramento, garantindo segurança e eficácia no atendimento remoto."
      },
      {
        id: "equipes-tele",
        title: "Gestão de Equipes Médicas",
        description: "Coordenação especializada de equipes médicas para atendimento remoto, otimizando agenda e garantindo qualidade na teleconsulta."
      },
      {
        id: "atendimento",
        title: "Gestão de Atendimento",
        description: "Estruturação e melhoria dos fluxos de atendimento, garantindo alta performance em produtividade médica, além de agilidade, qualidade e satisfação do paciente."
      }
    ]
  },
  {
    id: "analytics-saude",
    title: "Analytics em Saúde",
    iconSrc: "/vector-30.svg",
    items: [
      {
        id: "business-intelligence",
        title: "Business Intelligence",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "dashboards",
        title: "Dashboards Interativos",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: "relatorios",
        title: "Relatórios Automatizados",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        id: "kpis",
        title: "Monitoramento de KPIs",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  },
  {
    id: "inovacao-digital",
    title: "Inovação Digital",
    iconSrc: "/vector-51.svg",
    items: [
      {
        id: "ia-medicina",
        title: "IA aplicada à Medicina",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      },
      {
        id: "automacao",
        title: "Automação de Processos",
        description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."
      },
      {
        id: "iot-saude",
        title: "IoT em Saúde",
        description: "Explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
      },
      {
        id: "blockchain",
        title: "Blockchain Médico",
        description: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est."
      }
    ]
  }
];

export const SolutionsSection = (): JSX.Element => {
  const [expandedItems, setExpandedItems] = useState<Record<string, string | null>>({
    "gestao-saude": null,
    "fast-ops": null,
    "telemedicina": null,
    "analytics-saude": null,
    "inovacao-digital": null
  });

  // Configuração do keen-slider
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 32,
    },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 16 },
      },
    },
  });

  const toggleItem = (cardId: string, itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [cardId]: prev[cardId] === itemId ? null : itemId
    }));
    
    // Atualizar o slider após a mudança de altura
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        instanceRef.current?.update();
      });
    });
  };

  const isItemExpanded = (cardId: string, itemId: string) => {
    return expandedItems[cardId] === itemId;
  };

  return (
    <div className="relative w-full mb-[4.44vw] mt-[1.4vw]">
      {/* Imagem decorativa */}
      <img
        src="/banner-hero-bg.png"
        alt=""
        className="absolute top-[2vw] left-[-2vw] w-[12vw] h-auto z-[1] opacity-20"
      />

      {/* Container do carrossel */}
      <div className="relative max-w-[80vw] mx-auto">
        {/* Botão de navegação esquerda */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-[-4vw] top-1/2 -translate-y-1/2 w-[2.43vw] h-[2.43vw] rounded-full border-[0.21vw] border-[#003cff] bg-white flex items-center justify-center hover:bg-[#003cff] transition-colors group cursor-pointer z-30"
        >
          <ChevronLeft className="w-[1.2vw] h-[1.2vw] text-[#003cff] group-hover:text-white transition-colors" />
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {solutionsData.map((card) => (
            <div
              key={card.id}
              className="keen-slider__slide pt-[5vw] z-10"
            >
              <Card className="bg-[#0000bf] rounded-[1.11vw] relative transition-all duration-300 ease-in-out z-10 overflow-visible min-h-[23.61vw]">
                <CardContent className="p-[1.67vw] pt-[4.17vw] text-white">
                  {/* Ícone azul no topo */}
                  <div className="absolute w-[9.24vw] h-[6.94vw] top-[-2.5vw] left-1/2 -translate-x-1/2 bg-[#003cff] rounded-[1.11vw] flex items-center justify-center">
                    <img
                      className="w-[4.86vw] h-[4.86vw] filter brightness-0 invert"
                      alt={card.title}
                      src={card.iconSrc}
                    />
                  </div>

                  <h3 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-white text-[1.94vw] text-center tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-[2.78vw] mt-[2.78vw]">
                    {card.title}
                  </h3>

                  <div className="flex flex-col gap-[0.83vw]">
                    {card.items.map((item, index) => (
                      <div key={item.id} className="flex flex-col border-b border-solid border-white">
                        <button
                          onClick={() => toggleItem(card.id, item.id)}
                          className="flex justify-between items-center py-[0.42vw] text-left hover:opacity-80 transition-opacity"
                        >
                          <span 
                            className={`font-sans font-semibold text-[1.11vw] leading-[1.66vw] ${
                              isItemExpanded(card.id, item.id) ? 'text-[#0dffc0]' : 'text-white'
                            }`}
                          >
                            {item.title}
                          </span>
                          <svg 
                            className={`w-[1.83vw] h-[2.83vw] transition-all duration-300 ${
                              isItemExpanded(card.id, item.id) 
                                ? 'text-[#0dffc0] rotate-180' 
                                : 'text-[#fedc0b] rotate-0'
                            }`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        
                        
                        
                        {/* Conteúdo expandido */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isItemExpanded(card.id, item.id) 
                            ? 'max-h-[200px] opacity-100 mt-[1.11vw]' 
                            : 'max-h-0 opacity-0 mt-0'
                        }`}>
                          <div className="p-[1.11vw] bg-[#003cff] rounded-[0.56vw] mb-[1.42vw]">
                            <p className="text-white text-[0.97vw] leading-[1.45vw] text-left">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Botão de navegação direita */}
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-[-4vw] top-1/2 -translate-y-1/2 w-[2.43vw] h-[2.43vw] rounded-full border-[0.21vw] border-[#003cff] bg-white flex items-center justify-center hover:bg-[#003cff] transition-colors group cursor-pointer z-30"
        >
          <ChevronRight className="w-[1.2vw] h-[1.2vw] text-[#003cff] group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
};