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
      <div className="flex w-full items-center justify-center gap-[3.47vw] py-[1.39vw] bg-[#00009b]">
        <div className="container mx-auto max-w-[83%] flex items-center justify-between gap-[3.47vw]">
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-white text-[1.08vw] tracking-[0] leading-[1.66vw] whitespace-pre-line">
          Cadastre-se para receber{"\n"}notícias e novidades!
        </div>

        <div className="flex items-center gap-[0.69vw]">
          <div className="flex w-[24vw] items-center gap-[0.69vw] pl-[1.81vw] pr-[0.69vw] py-[0.69vw] bg-white rounded-[4.17vw]">
            <Input
              className="border-none shadow-none font-BNG-TIPOGRAFIA-BNG-corpo-02 font-[number:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-weight)] text-[#666666] text-[1.11vw] tracking-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-letter-spacing)] leading-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-line-height)] [font-style:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-style)] font-light"
              type="text"
              placeholder="seu nome:"
            />
          </div>

          <div className="flex w-[24vw] items-center gap-[0.69vw] pl-[1.81vw] pr-[0.69vw] py-[0.69vw] bg-white rounded-[4.17vw]">
            <Input
              className="border-none shadow-none font-BNG-TIPOGRAFIA-BNG-corpo-02 font-[number:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-weight)] text-[#666666] text-[1.11vw] tracking-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-letter-spacing)] leading-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-line-height)] [font-style:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-style)] font-light"
              type="email"
              placeholder="Seu e-mail:"
            />
          </div>

          <Button className="w-[8.54vw] h-[2.85vw] bg-[#003cff] rounded-[6.94vw] font-BNG-bot-o-02 font-[number:var(--BNG-bot-o-02-font-weight)] text-white text-[0.83vw] text-center tracking-[var(--BNG-bot-o-02-letter-spacing)] leading-[var(--BNG-bot-o-02-line-height)] [font-style:var(--BNG-bot-o-02-font-style)] hover:bg-[#00009b] hover:border-white hover:border-2">
            CADASTRAR
          </Button>
        </div>
        </div>
      </div>

      {/* Main footer area */}
      <div className="w-full bg-[#0c46e6] relative">
        <div className="container mx-auto max-w-[83%] py-[4.31vw]">
          {/* Main footer content */}
          <div className="flex justify-between gap-[4vw]">
            {/* Coluna 1 - Company info card */}
            <Card className="w-[18.542vw] h-[16.667vw] bg-[#00009b] rounded-[1.11vw] relative p-[2.08vw] border-none">
              <CardContent className="p-0 text-center">
                <img
                  className="w-[11.35vw] h-[4.24vw] mx-auto mb-[2.43vw]"
                  alt="BNG Hub Logo"
                  src="/group.png"
                />

                <div className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] text-left">
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
                className="absolute bottom-[-1vw] right-[-0.7vw] w-[2.43vw] h-[2.701vw] animate-spin"
                style={{
                  animation: 'spin 8s linear infinite'
                }}
              />
            </Card>

            {/* Coluna 2 - Links principais + Contato */}
          <div className="flex flex-col w-[38.42vw]">
            {/* Linha 1: Links organizados */}
            <div className="flex gap-[2vw] mb-[0]">
              {/* Coluna 1: Institucional */}
              <div className="flex flex-col gap-[0.6vw] w-[9vw]" style={{ width: 'fit-content' }}>
                <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] mb-[0.5vw]">
                  Institucional
                </h3>
                <nav className="flex flex-col gap-[0]">
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    Quem Somos
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    Missão, Visão e Valores
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    Nossa História
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    Nossas Marcas
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    Onde Estamos
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    Nossos Números
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                    ESG
                  </a>
                </nav>
              </div>

              {/* Coluna 2: Carreiras, Imprensa e Políticas */}
              <div className="flex flex-col gap-[1vw] flex-1">
                {/* Linha 1: Carreiras e Imprensa lado a lado */}
                <div className="flex gap-0">
                  {/* Carreiras */}
                  <div className="flex flex-col gap-[0.6vw] w-[9vw]">
                    <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] mb-[0.5vw]">
                      Carreiras
                    </h3>
                    <nav className="flex flex-col gap-[0.3vw]">
                      <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                        Pessoas & Cultura
                      </a>
                      <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                        Pilares
                      </a>
                      <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                        Trabalhe Conosco
                      </a>
                    </nav>
                  </div>

                  {/* Imprensa */}
                  <div className="flex flex-col gap-[0.6vw] w-[9vw] ml-[2vw]" style={{ marginLeft: '2vw' }}>
                    <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] mb-[0.5vw]">
                      Imprensa
                    </h3>
                    <nav className="flex flex-col gap-[0.3vw]">
                      <Link to="/hub-news" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                        Hub News
                      </Link>
                      <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors">
                        Fale Conosco
                      </a>
                    </nav>
                  </div>
                </div>

                {/* Linha 2: Políticas de Privacidade */}
                <div className="pt-[1vw] border-t border-white/30">
                  <Link to="/politicas-de-privacidade" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] underline hover:text-[#0dffc0] transition-colors">
                    Políticas de Privacidade
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Linha 2: Informações de contato */}
            <div className="flex items-start gap-[4vw] mt-[2vw]">
              {/* Address */}
              <div className="flex items-center gap-[0.69vw]">
                <img
                  className="w-[1.04vw] h-[1.32vw]"
                  alt="Location icon"
                  src="/vector-17.svg"
                />
                <address className="not-italic font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)]">
                  Av. Eng. Luis Carlos Berrini, 1748 - Cj. 1710 Cidade Monções, São Paulo – SP
                </address>
              </div>

              {/* Email */}
              <div className="flex items-center gap-[0.69vw]">
                <img className="w-[1.39vw] h-[1.11vw]" alt="Email icon" src="/vector-21.svg" />
                <a
                  href="mailto:marketing@bnghub.com"
                  className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] whitespace-nowrap [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#0dffc0] transition-colors"
                >
                  marketing@bnghub.com
                </a>
              </div>
            </div>
          </div>

            {/* Coluna 3 - Social media e WhatsApp */}
            <div className="flex flex-col items-end gap-[2vw]">
              {/* Social media section */}
              <div className="flex-shrink-0">
                <div className="relative w-[11.39vw] h-[5.42vw]">
                  <div className="absolute w-[11.39vw] h-[2.78vw] top-[1.25vw] left-0 rounded-lg border border-solid border-white" />
                  <img
                    className="absolute w-[9.93vw] h-[2.85vw] top-[2.57vw] left-[0.69vw]"
                    alt="Social media icons"
                    src="/frame-170.svg"
                  />
                  <div className="inline-flex items-center justify-center gap-[0.69vw] p-[0.35vw] absolute top-0 left-[2.5vw] bg-[#0c46e6] rounded-lg">
                    <div className="[font-family:'Poppins',Helvetica] font-bold text-white text-[1.11vw] tracking-[0] leading-[normal]">
                      Siga-nos!
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp button */}
              <a
                href="#"
                className="fixed bottom-[8vw] right-[2vw] hover:scale-110 transition-transform flex-shrink-0 z-50"
                aria-label="Contact us on WhatsApp"
              >
                <img
                  src="/floatWhatsIcon.png"
                  alt="WhatsApp"
                  className="w-[3.82vw] h-[3.82vw]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright footer */}
        <div className="w-full h-[3.5vw] bg-[#00009b] rounded-[1.11vw_1.11vw_0px_0px] flex items-center justify-center">
          <div className="font-BNG-overline font-[number:var(--BNG-overline-font-weight)] text-white text-[0.69vw] tracking-[var(--BNG-overline-letter-spacing)] leading-[var(--BNG-overline-line-height)] [font-style:var(--BNG-overline-font-style)]">
            © 2025 - BNG HUB - Todos os direitos reservados.
          </div>
        </div>
      </div>
    </section>
  );
};