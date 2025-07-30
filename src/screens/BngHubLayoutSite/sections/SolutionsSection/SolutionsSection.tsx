import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Dados dos cards de soluções
const solutionsData = [
  {
    id: "gestao-saude",
    title: "Gestão da saúde",
    iconSrc: "./vector-30.svg",
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
    iconSrc: "./vector-51.svg",
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
    iconSrc: "./vector-48.svg",
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
  }
];

export const SolutionsSection = (): JSX.Element => {
  const [expandedItems, setExpandedItems] = useState<Record<string, string | null>>({
    "gestao-saude": null,
    "fast-ops": null,
    "telemedicina": null
  });

  const toggleItem = (cardId: string, itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [cardId]: prev[cardId] === itemId ? null : itemId
    }));
  };

  const isItemExpanded = (cardId: string, itemId: string) => {
    return expandedItems[cardId] === itemId;
  };

  const getCardHeight = (cardId: string) => {
    const expandedItem = expandedItems[cardId];
    if (!expandedItem) return "auto"; // Altura mínima quando fechado
    
    // Altura adicional quando expandido (aproximadamente)
    return "auto";
  };

  return (
    <div className="flex justify-center gap-[2.22vw] mb-[4.44vw] relative">
      {solutionsData.map((card) => (
        <Card 
          key={card.id}
          className="w-[23.89vw] bg-[#0000bf] rounded-[1.11vw] relative transition-all duration-300 ease-in-out"
          style={{ minHeight: getCardHeight(card.id) }}
        >
          <CardContent className="p-[1.67vw] pt-[4.17vw] text-white">
            {/* Ícone azul no topo */}
            <div className="absolute w-[6.94vw] h-[4.86vw] -top-[2.43vw] left-1/2 -translate-x-1/2 bg-[#003cff] rounded-[1.11vw] flex items-center justify-center">
              <img
                className="w-[3.47vw] h-[3.47vw] filter brightness-0 invert"
                alt={card.title}
                src={card.iconSrc}
              />
            </div>

            <h3 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-white text-[1.94vw] text-center tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-[2.78vw] mt-[1.39vw]">
              {card.title}
            </h3>

            <div className="flex flex-col gap-[0.83vw]">
              {card.items.map((item, index) => (
                <div key={item.id} className="flex flex-col">
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
                      className={`w-[0.83vw] h-[0.83vw] transition-all duration-300 ${
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
                  
                  {/* Separador - não aparece no último item quando expandido */}
                  {!(index === card.items.length - 1 && isItemExpanded(card.id, item.id)) && (
                    <Separator className="h-[0.07vw] bg-white" />
                  )}
                  
                  {/* Conteúdo expandido */}
                  {isItemExpanded(card.id, item.id) && (
                    <div className="mt-[1.11vw] p-[1.11vw] bg-[#003cff] rounded-[0.56vw] transition-all duration-300 ease-in-out">
                      <p className="text-white text-[0.97vw] leading-[1.45vw] text-left">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};