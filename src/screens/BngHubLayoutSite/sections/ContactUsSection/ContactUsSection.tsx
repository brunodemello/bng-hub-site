import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const ContactUsSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      {/* Newsletter subscription bar */}
      <div className="flex w-full items-center justify-center gap-4 md:gap-[3.47vw] py-4 md:py-[1.39vw] bg-[#00009b]">
        <div className="container mx-auto max-w-[83%] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-[3.47vw] px-4 md:px-[1.4vw]">
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-white text-sm md:text-[1.08vw] tracking-[0] leading-[1.66vw] whitespace-pre-line text-center md:text-left">
          Cadastre-se para receber{"\n"}notícias e novidades!
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-[0.69vw] w-full md:w-auto">
          <div className="flex w-full md:w-[24vw] items-center gap-[0.69vw] pl-4 md:pl-[1.81vw] pr-3 md:pr-[0.69vw] py-3 md:py-[0.69vw] bg-white rounded-full md:rounded-[4.17vw]">
            <Input
              className="border-none shadow-none font-BNG-TIPOGRAFIA-BNG-corpo-02 font-[number:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-weight)] text-[#666666] text-sm md:text-[1.11vw] tracking-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-letter-spacing)] leading-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-line-height)] [font-style:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-style)] font-light"
              type="text"
              placeholder="seu nome:"
            />
          </div>

          <div className="flex w-full md:w-[24vw] items-center gap-[0.69vw] pl-4 md:pl-[1.81vw] pr-3 md:pr-[0.69vw] py-3 md:py-[0.69vw] bg-white rounded-full md:rounded-[4.17vw]">
            <Input
              className="border-none shadow-none font-BNG-TIPOGRAFIA-BNG-corpo-02 font-[number:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-weight)] text-[#666666] text-sm md:text-[1.11vw] tracking-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-letter-spacing)] leading-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-line-height)] [font-style:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-style)] font-light"
              type="email"
              placeholder="Seu e-mail:"
            />
          </div>

          <Button className="w-full md:w-[8.54vw] h-12 md:h-[2.85vw] bg-[#003cff] rounded-full md:rounded-[6.94vw] font-BNG-bot-o-02 font-[number:var(--BNG-bot-o-02-font-weight)] text-white text-sm md:text-[0.83vw] text-center tracking-[var(--BNG-bot-o-02-letter-spacing)] leading-[var(--BNG-bot-o-02-line-height)] [font-style:var(--BNG-bot-o-02-font-style)] hover:bg-[#00009b] hover:border-white hover:border-2">
            CADASTRAR
          </Button>
        </div>
        </div>
      </div>

      {/* Main footer area */}
      <div className="w-full bg-[#0c46e6] relative">
        <div className="container mx-auto max-w-[83%] py-8 md:py-[4.31vw] px-4 md:px-0">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-[4vw]">
            {/* Coluna 1 - Company info card */}
            <Card className="w-full md:w-[18.542vw] h-auto md:h-[16.667vw] bg-[#00009b] rounded-[1.11vw] relative p-6 md:p-[2.08vw] border-none">
              <CardContent className="p-0 text-center">
                <img
                  className="w-32 h-12 md:w-[11.35vw] md:h-[4.24vw] mx-auto mb-6 md:mb-[2.43vw]"
                  alt="BNG Hub Logo"
                  src="/group.png"
                />

                <div className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] text-left">
                  Somos{" "}
                  <span className="font-bold">Builders</span>,{" "}
                  <span className="font-bold">Networkers</span> e{" "}
                  <span className="font-bold">Growthers</span>. Somos gente que constrói, se relaciona e que faz crescer.
                </div>
              </CardContent>

              {/* Footer spin image */}
              <img
                src="/footer_spin.png"
                alt=""
                className="absolute bottom-[-1vw] right-[-0.7vw] w-8 h-8 md:w-[2.43vw] md:h-[2.701vw] animate-spin"
                style={{
                  animation: 'spin 8s linear infinite'
                }}
              />
            </Card>

            {/* Coluna 2 - Links principais + Contato */}
          <div className="flex flex-col w-full md:w-[38.42vw]">
            {/* Linha 1: Links organizados */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-[2vw] mb-0">
              {/* Coluna 1: Institucional */}
              <div className="flex flex-col gap-2 md:gap-[0.6vw] w-full md:w-fit">
                <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-lg md:text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] mb-2 md:mb-[0.5vw]">
                  Institucional
                </h3>
                <nav className="flex flex-col gap-1 md:gap-0">
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    Quem Somos
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    Missão, Visão e Valores
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    Nossa História
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    Nossas Marcas
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    Onde Estamos
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    Nossos Números
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    ESG
                  </a>
                </nav>
              </div>

              {/* Coluna 2: Carreiras, Imprensa e Políticas */}
              <div className="flex flex-col gap-4 md:gap-[1vw] flex-1">
                {/* Linha 1: Carreiras e Imprensa lado a lado */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-0">
                  {/* Carreiras */}
                  <div className="flex flex-col gap-2 md:gap-[0.6vw] w-full md:w-fit">
                    <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-lg md:text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] mb-2 md:mb-[0.5vw]">
                      Carreiras
                    </h3>
                    <nav className="flex flex-col gap-1 md:gap-[0.3vw]">
                      <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                        Pessoas & Cultura
                      </a>
                      <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                        Pilares
                      </a>
                      <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                        Trabalhe Conosco
                      </a>
                    </nav>
                  </div>

                  {/* Imprensa */}
                  <div className="flex flex-col gap-2 md:gap-[0.6vw] w-full md:w-fit md:ml-[2vw]">
                    <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-lg md:text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] mb-2 md:mb-[0.5vw]">
                      Imprensa
                    </h3>
                    <nav className="flex flex-col gap-1 md:gap-[0.3vw]">
                      <Link to="/hub-news" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                        Hub News
                      </Link>
                      <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                        Fale Conosco
                      </a>
                    </nav>
                  </div>
                </div>

                {/* Linha 2: Políticas de Privacidade */}
                <div className="pt-4 md:pt-[1vw] border-t border-white/30">
                  <Link to="/politicas-de-privacidade" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] underline hover:text-[#0dffc0] transition-colors">
                    Políticas de Privacidade
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Linha 2: Informações de contato */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-[4vw] mt-6 md:mt-[2vw]">
              {/* Address */}
              <div className="flex items-start gap-3 md:gap-[0.69vw]">
                <img
                  className="w-4 h-5 md:w-[1.04vw] md:h-[1.32vw] mt-1"
                  alt="Location icon"
                  src="/vector-17.svg"
                />
                <address className="not-italic font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)]">
                  Av. Eng. Luis Carlos Berrini, 1748 - Cj. 1710 Cidade Monções, São Paulo – SP
                </address>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 md:gap-[0.69vw]">
                <img className="w-5 h-4 md:w-[1.39vw] md:h-[1.11vw]" alt="Email icon" src="/vector-21.svg" />
                <a
                  href="mailto:marketing@bnghub.com"
                  className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-sm md:text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] whitespace-nowrap [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors"
                >
                  marketing@bnghub.com
                </a>
              </div>
            </div>
          </div>

            {/* Coluna 3 - Social media e WhatsApp */}
            <div className="flex flex-col items-center md:items-end gap-6 md:gap-[2vw]">
              {/* Social media section */}
              <div className="flex-shrink-0">
                <div className="relative w-40 h-20 md:w-[11.39vw] md:h-[5.42vw]">
                  <div className="absolute w-40 h-10 md:w-[11.39vw] md:h-[2.78vw] top-4 md:top-[1.25vw] left-0 rounded-lg border border-solid border-white" />
                  <img
                    className="absolute w-36 h-10 md:w-[9.93vw] md:h-[2.85vw] top-8 md:top-[2.57vw] left-2 md:left-[0.69vw]"
                    alt="Social media icons"
                    src="/frame-170.svg"
                  />
                  <div className="inline-flex items-center justify-center gap-2 md:gap-[0.69vw] p-2 md:p-[0.35vw] absolute top-0 left-8 md:left-[2.5vw] bg-[#0c46e6] rounded-lg">
                    <div className="[font-family:'Poppins',Helvetica] font-bold text-white text-sm md:text-[1.11vw] tracking-[0] leading-[normal]">
                      Siga-nos!
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp button */}
              <a
                href="#"
                className="fixed bottom-6 right-4 md:bottom-[8vw] md:right-[2vw] hover:scale-110 transition-transform flex-shrink-0 z-50"
                aria-label="Contact us on WhatsApp"
              >
                <img
                  src="/floatWhatsIcon.png"
                  alt="WhatsApp"
                  className="w-12 h-12 md:w-[3.82vw] md:h-[3.82vw]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright footer */}
        <div className="w-full h-12 md:h-[3.5vw] bg-[#00009b] rounded-[1.11vw_1.11vw_0px_0px] flex items-center justify-center px-4">
          <div className="font-BNG-overline font-[number:var(--BNG-overline-font-weight)] text-white text-xs md:text-[0.69vw] tracking-[var(--BNG-overline-letter-spacing)] leading-[var(--BNG-overline-line-height)] [font-style:var(--BNG-overline-font-style)] text-center">
            © 2025 - BNG HUB - Todos os direitos reservados.
          </div>
        </div>
      </div>
    </section>
  );
};