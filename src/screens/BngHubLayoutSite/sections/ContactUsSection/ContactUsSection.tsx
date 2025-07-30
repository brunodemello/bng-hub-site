import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const ContactUsSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      {/* Newsletter subscription bar */}
      <div className="flex w-full items-center justify-center gap-[3.47vw] px-[7.5vw] py-[1.39vw] bg-[#00009b]">
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-white text-[1.11vw] tracking-[0] leading-[1.66vw] whitespace-pre-line">
          Cadastre-se para receber{"\n"}notícias e novidades!
        </div>

        <div className="flex items-center gap-[0.69vw]">
          <div className="flex w-[27.29vw] items-center gap-[0.69vw] pl-[1.81vw] pr-[0.69vw] py-[0.69vw] bg-white rounded-[4.17vw]">
            <Input
              className="border-none shadow-none font-BNG-TIPOGRAFIA-BNG-corpo-02 font-[number:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-weight)] text-[#666666] text-[1.11vw] tracking-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-letter-spacing)] leading-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-line-height)] [font-style:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-style)]"
              type="text"
              placeholder="seu nome:"
            />
          </div>

          <div className="flex w-[23.4vw] items-center gap-[0.69vw] pl-[1.81vw] pr-[0.69vw] py-[0.69vw] bg-white rounded-[4.17vw]">
            <Input
              className="border-none shadow-none font-BNG-TIPOGRAFIA-BNG-corpo-02 font-[number:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-weight)] text-[#666666] text-[1.11vw] tracking-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-letter-spacing)] leading-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-line-height)] [font-style:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-style)]"
              type="email"
              placeholder="Seu e-mail:"
            />
          </div>

          <Button className="w-[8.54vw] h-[2.85vw] bg-[#003cff] rounded-[6.94vw] font-BNG-bot-o-02 font-[number:var(--BNG-bot-o-02-font-weight)] text-white text-[0.83vw] text-center tracking-[var(--BNG-bot-o-02-letter-spacing)] leading-[var(--BNG-bot-o-02-line-height)] [font-style:var(--BNG-bot-o-02-font-style)]">
            CADASTRAR
          </Button>
        </div>
      </div>

      {/* Main footer area */}
      <div className="w-full bg-[#0c46e6] relative">
        <div className="container mx-auto py-[4.31vw]">
          {/* Main footer content */}
          <div className="flex items-start justify-between mb-[4vw]">
            {/* Company info card - Left side */}
            <Card className="w-[27vw] bg-[#00009b] rounded-[1.11vw] relative p-[2.08vw]">
              <CardContent className="p-0 text-center">
                <img
                  className="w-[11.35vw] h-[4.24vw] mx-auto mb-[2.43vw]"
                  alt="BNG Hub Logo"
                  src="./group.png"
                />

                <div className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)]">
                  Somos{" "}
                  <span className="font-bold">Builders</span>,{" "}
                  <span className="font-bold">Networkers</span> e{" "}
                  <span className="font-bold">Growthers</span>. Somos gente que constrói, se relaciona e que faz crescer.
                </div>
              </CardContent>

              {/* Green circular element */}
              <div className="absolute bottom-[-1vw] right-[-1vw] w-[4vw] h-[4vw] bg-gradient-to-br from-[#0dffc0] to-[#00b894] rounded-full opacity-90" />
            </Card>

            {/* Right side - Links and Social */}
            <div className="flex items-start gap-[6vw]">
              {/* Institutional links */}
              <div className="flex flex-col gap-[0.6vw]">
                <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] mb-[0.5vw]">
                  Institucional
                </h3>
                <nav className="flex flex-col gap-[0.3vw]">
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors">
                    Quem Somos
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors">
                    Missão, Visão e Valores
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors">
                    Nossa História
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors">
                    Nossas Marcas
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors">
                    Onde Estamos
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors">
                    Nossos Números
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors">
                    ESG
                  </a>
                </nav>
              </div>

              {/* Career links */}
              <div className="flex flex-col gap-[0.6vw]">
                <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] mb-[0.5vw]">
                  Carreiras
                </h3>
                <nav className="flex flex-col gap-[0.3vw]">
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors">
                    Pessoas & Cultura
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors">
                    Pilares
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors">
                    Trabalhe Conosco
                  </a>
                </nav>

                {/* Políticas de Privacidade */}
                <div className="mt-[1.5vw] pt-[1vw] border-t border-white/30">
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] underline hover:text-[#fedc0b] transition-colors">
                    Políticas de Privacidade
                  </a>
                </div>
              </div>

              {/* Press links */}
              <div className="flex flex-col gap-[0.6vw]">
                <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)] mb-[0.5vw]">
                  Imprensa
                </h3>
                <nav className="flex flex-col gap-[0.3vw]">
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors">
                    Hub News
                  </a>
                  <a href="#" className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors">
                    Fale Conosco
                  </a>
                </nav>
              </div>

              {/* Social media section */}
              <div className="flex-shrink-0">
                <div className="relative w-[11.39vw] h-[5.42vw]">
                  <div className="absolute w-[11.39vw] h-[2.78vw] top-[1.25vw] left-0 rounded-lg border border-solid border-white" />
                  <img
                    className="absolute w-[9.93vw] h-[2.85vw] top-[2.57vw] left-[0.69vw]"
                    alt="Social media icons"
                    src="./frame-170.svg"
                  />
                  <div className="inline-flex items-center justify-center gap-[0.69vw] p-[0.35vw] absolute top-0 left-[2.5vw] bg-[#0c46e6] rounded-lg">
                    <div className="[font-family:'Poppins',Helvetica] font-bold text-white text-[1.11vw] tracking-[0] leading-[normal]">
                      Siga-nos!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact information */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[4vw]">
              {/* Address */}
              <div className="flex items-center gap-[0.69vw]">
                <img
                  className="w-[1.04vw] h-[1.32vw]"
                  alt="Location icon"
                  src="./vector-17.svg"
                />
                <address className="not-italic font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)]">
                  Av. Eng. Luis Carlos Berrini, 1748 - Cj. 1710 Cidade Monções, São Paulo – SP
                </address>
              </div>

              {/* Email */}
              <div className="flex items-center gap-[0.69vw]">
                <img className="w-[1.39vw] h-[1.11vw]" alt="Email icon" src="./vector-21.svg" />
                <a
                  href="mailto:marketing@bnghub.com"
                  className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] whitespace-nowrap [font-style:var(--BNG-corpo-02-font-style)] hover:text-[#fedc0b] transition-colors"
                >
                  marketing@bnghub.com
                </a>
              </div>
            </div>

            {/* WhatsApp button */}
            <a
              href="#"
              className="w-[3.82vw] h-[3.82vw] bg-[url(./logos-whatsapp-icon.svg)] bg-[100%_100%] hover:scale-110 transition-transform flex-shrink-0"
              aria-label="Contact us on WhatsApp"
            />
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