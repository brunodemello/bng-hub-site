import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { HeaderSection } from "../BngHubLayoutSite/sections/HeaderSection";
import { ContactUsSection } from "../BngHubLayoutSite/sections/ContactUsSection";
import TimelineSlider  from "../../components/TimelineSlider";


export const QuemSomosPage = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white w-full relative overflow-x-hidden">
        {/* Header Section - Com fundo branco fixo */}
        <div className="relative">
          <HeaderSection isQuemSomosPage={true} />
        </div>

        {/* Hero Section - We are #SAÚDE */}
        <section className="relative w-full">
          <img
            src="./quemSomos_banner.png"
            alt="Banner Quem Somos"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Quem Somos Section */}
        <section className="w-full py-[5vw] bg-white">
          <div className="container mx-auto max-w-[90%]">
            <div className="flex items-start gap-[8vw]">
              {/* Texto principal - esquerda */}
              <div className="flex-1 max-w-[45vw] pt-[4.20vw]">
                <div className="mb-[2vw]">
                  <div className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#0000bf] text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] mb-[0.24vw]">
                    QUEM SOMOS
                  </div>
                  <Separator className="w-[6.94vw] h-[0.14vw] bg-[#fedc0b] rounded-sm" />
                </div>

                <h2 className="font-BNG-t-tulo-02-h2 font-[number:var(--BNG-t-tulo-02-h2-font-weight)] text-[#212121] text-[1.94vw] tracking-[var(--BNG-t-tulo-02-h2-letter-spacing)] leading-[var(--BNG-t-tulo-02-h2-line-height)] [font-style:var(--BNG-t-tulo-02-h2-font-style)] mb-[2vw]">
                  Saúde com propósito, <br />
                  resultado e transformação
                </h2>

                <div className="space-y-[1.5vw] text-[#666666] text-[1.1vw] leading-[1.6] font-normal">
                  <p>
                    A BNG Hub é a ponte de conexão entre excelência operacional,
                    estratégica em saúde e valorização das profissionais que
                    fazem a diferença todos os dias.
                  </p>

                  <p>
                    Integramos soluções em gestão médica e performance
                    assistencial com uma abordagem baseada em visão sistêmica,
                    inovação contínua e foco nos resultados que realmente
                    importam: a qualidade e prestação de cuidado, a sustentabilidade dos
                    negócios e a satisfação de quem pratica e de quem recebe.
                  </p>
                </div>
              </div>

              {/* Cards MVV - direita */}
              <div className="flex flex-col gap-[1.5vw] flex-1">
                {/* Missão */}
                <Card className="bg-[#0000bf] rounded-[1vw] p-[2vw] text-white w-[26.944vw] h-[9.583vw]">
                  <CardContent className="p-0 flex items-start gap-[1vw]">
                    <div className="rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="./quemSomos_icon3.png" alt="Missão" className="w-[5.833vw] h-[5.833vw] mr-[2.014vw]" />
                    </div>
                    <div className="w-[13.472vw]">
                      <h3 className="font-bold text-[1.2vw] mb-[0.5vw]">Missão</h3>
                      <p className="text-[0.9vw] leading-[1.4] font-thin">
                        Ser o catalisador de valor para transformar a saúde através da excelência.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Valores */}
                <Card className="bg-[#0000bf] rounded-[1vw] p-[2vw] text-white w-[26.944vw] h-[9.583vw]">
                  <CardContent className="p-0 flex items-start gap-[1vw]">
                    <div className="rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="./quemSomos_icon2.png" alt="Valores" className="w-[5.833vw] h-[5.833vw] mr-[2.014vw]" />
                    </div>
                    <div className="w-[13.472vw]">
                      <h3 className="font-bold text-[1.2vw] mb-[0.5vw]">Valores</h3>
                      <p className="text-[0.9vw] leading-[1.4] font-thin">
                        Respeito e reconhecimento, transparência, inovação e excelência.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Visão */}
                <Card className="bg-[#0000bf] rounded-[1vw] p-[2vw] text-white w-[26.944vw] h-[9.583vw]">
                  <CardContent className="p-0 flex items-start gap-[1vw]">
                    <div className="rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="./quemSomos_icon1.png" alt="Visão" className="w-[5.833vw] h-[5.833vw] mr-[2.014vw]" />
                    </div>
                    <div className="w-[13.472vw]">
                      <h3 className="font-bold text-[1.2vw] mb-[0.5vw]">Visão</h3>
                      <p className="text-[0.9vw] leading-[1.4] font-thin">
                        Ser reconhecida como a maior e melhor empresa de soluções para a saúde do país.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <TimelineSlider />

        {/* We Are Comunidade Section */}
        <section className="w-full py-[5vw] bg-white relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute right-[5vw] top-[10vw] w-[20vw] h-[20vw] bg-gradient-to-br from-[#fedc0b] to-[#f1c40f] rounded-full opacity-90" />
          <div className="absolute right-[15vw] top-[15vw] w-[8vw] h-[8vw] bg-white rounded-full" />

          <div className="container mx-auto relative z-10">
            <div className="flex items-center gap-[8vw]">
              {/* Texto - esquerda */}
              <div className="flex-1 max-w-[45vw]">
                <div className="mb-[2vw]">
                  <div className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#0000bf] text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] mb-[0.5vw]">
                    NOSSO TIME
                  </div>
                  <Separator className="w-[6.94vw] h-[0.14vw] bg-[#fedc0b] rounded-sm" />
                </div>

                <h2 className="text-[#0000bf] text-[3vw] font-black mb-[0.5vw]">
                  #WEARE
                </h2>
                <h3 className="text-[#212121] text-[2.5vw] font-semibold mb-[2vw]">
                  COMUNIDADE
                </h3>

                <p className="text-[#666666] text-[1.1vw] leading-[1.6] mb-[3vw]">
                  Para que a verdadeira transformação aconteça,
                  precisamos estar juntos. Por isso, cultivamos conexões
                  reais entre profissionais da saúde, instituições, nossos
                  times e a comunidade. Nossos talentos, programas e
                  iniciativas são pensados para gerar valor compartilhado,
                  impacto e desenvolver soluções que fazem sentido para
                  quem cuida e para quem precisa de cuidado. Nossos
                  resultados são fruto de uma construção coletiva que
                  melhora vidas em escala.
                </p>

                <Button className="bg-[#0000bf] hover:bg-[#0000bf]/90 text-white rounded-[4vw] px-[2vw] py-[0.8vw] font-semibold text-[1vw]">
                  Trabalhe na nossa time!
                </Button>
              </div>

              {/* Imagem - direita */}
              <div className="flex-1 relative">
                <div className="w-[25vw] h-[25vw] rounded-full overflow-hidden">
                  <img
                    src="./rectangle-187.png"
                    alt="Equipe BNG Hub"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ESG Section */}
        <section className="w-full py-[5vw] bg-white relative overflow-hidden">
          <div className="container mx-auto">
            <div className="flex items-center gap-[8vw]">
              {/* Imagem - esquerda */}
              <div className="flex-1 relative">
                <img
                  src="./rectangle-187.png"
                  alt="ESG BNG Hub"
                  className="w-full h-[30vw] object-cover rounded-[1vw]"
                />
              </div>

              {/* Card ESG - direita */}
              <div className="flex-1">
                <Card className="bg-[#0000bf] rounded-[1vw] p-[3vw] text-white">
                  <CardContent className="p-0">
                    <div className="mb-[2vw]">
                      <div className="font-marca-o font-[number:var(--marca-o-font-weight)] text-[#0dffc0] text-[0.97vw] tracking-[var(--marca-o-letter-spacing)] leading-[var(--marca-o-line-height)] [font-style:var(--marca-o-font-style)] mb-[0.5vw]">
                        ESG
                      </div>
                      <Separator className="w-[6.94vw] h-[0.14vw] bg-[#fedc0b] rounded-sm" />
                    </div>

                    <h2 className="text-[2.5vw] font-semibold mb-[2vw] leading-tight">
                      Ações que conectam SAÚDE com responsabilidade
                    </h2>

                    <div className="space-y-[1.5vw] text-[1vw] leading-[1.6]">
                      <p>
                        Na BNG Hub, acreditamos que transformar a saúde
                        vai muito além de oferecer soluções eficientes.
                        Nosso compromisso com práticas ESG está presente em
                        cada decisão, inovação e parceria.
                      </p>

                      <p>
                        Atuamos com responsabilidade ambiental,
                        consideramos social e uma governança ética que
                        garante transparência e sustentabilidade em
                        todas as nossas operações.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section - Reaproveitado */}
        <ContactUsSection />
      </div>
    </div>
  );
};