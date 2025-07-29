import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const ContactUsSection = (): JSX.Element => {
  // Newsletter subscription form data
  const newsletterText = {
    title: "Cadastre-se para receber\nnotícias e novidades!",
    namePlaceholder: "seu nome:",
    emailPlaceholder: "Seu e-mail:",
    buttonText: "CADASTRAR",
  };

  // Footer links data
  const institutionalLinks = [
    "Quem Somos",
    "Missão, Visão e Valores",
    "Nossa História",
    "Nossas Marcas",
    "Onde Estamos",
    "Nossos Números",
    "ESG",
  ];

  const careerLinks = ["Pessoas & Cultura", "Pilares", "Trabalhe Conosco"];

  const pressLinks = ["Hub News"];

  // Contact information
  const contactInfo = {
    address:
      "Av. Eng. Luis Carlos Berrini, 1748 - Cj. 1710\nCidade Monções, São Paulo – SP",
    email: "marketing@bnghub.com",
  };

  return (
    <section className="w-full relative">
      {/* Newsletter subscription bar */}
      <div className="flex w-full items-center justify-center gap-[3.47vw] px-[7.5vw] py-[1.39vw] bg-[#00009b]">
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-white text-[1.11vw] tracking-[0] leading-[1.66vw] whitespace-pre-line">
          {newsletterText.title}
        </div>

        <div className="flex items-center gap-[0.69vw]">
          <div className="flex w-[27.29vw] items-center gap-[0.69vw] pl-[1.81vw] pr-[0.69vw] py-[0.69vw] bg-white rounded-[4.17vw]">
            <Input
              className="border-none shadow-none font-BNG-TIPOGRAFIA-BNG-corpo-02 font-[number:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-weight)] text-[#666666] text-[1.11vw] tracking-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-letter-spacing)] leading-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-line-height)] [font-style:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-style)]"
              type="text"
              placeholder={newsletterText.namePlaceholder}
            />
          </div>

          <div className="flex w-[23.4vw] items-center gap-[0.69vw] pl-[1.81vw] pr-[0.69vw] py-[0.69vw] bg-white rounded-[4.17vw]">
            <Input
              className="border-none shadow-none font-BNG-TIPOGRAFIA-BNG-corpo-02 font-[number:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-weight)] text-[#666666] text-[1.11vw] tracking-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-letter-spacing)] leading-[var(--BNG-TIPOGRAFIA-BNG-corpo-02-line-height)] [font-style:var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-style)]"
              type="email"
              placeholder={newsletterText.emailPlaceholder}
            />
          </div>

          <Button className="w-[8.54vw] h-[2.85vw] bg-[#003cff] rounded-[6.94vw] font-BNG-bot-o-02 font-[number:var(--BNG-bot-o-02-font-weight)] text-white text-[0.83vw] text-center tracking-[var(--BNG-bot-o-02-letter-spacing)] leading-[var(--BNG-bot-o-02-line-height)] [font-style:var(--BNG-bot-o-02-font-style)]">
            {newsletterText.buttonText}
          </Button>
        </div>
      </div>

      {/* Main footer area */}
      <div className="w-full bg-[#0c46e6]">
        <div className="flex w-full justify-center py-[4.31vw]">
          <div className="w-[78.82vw] flex items-start gap-[7.64vw]">
            {/* Company info and logo */}
            <div className="flex items-start justify-center gap-[5.49vw]">
              <div className="relative w-[19.1vw]">
                <Card className="flex flex-col w-[18.54vw] items-center justify-center gap-[2.43vw] p-[2.08vw] bg-[#00009b] rounded-[1.11vw]">
                  <CardContent className="p-0">
                    <img
                      className="w-[11.35vw] h-[4.24vw]"
                      alt="BNG Hub Logo"
                      src="./group.png"
                    />

                    <div className="mt-[2.43vw] font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)]">
                      Somos{" "}
                      <span className="font-[number:var(--BNG-corpo-02-font-weight)]">
                        Builders
                      </span>
                      ,{" "}
                      <span className="font-[number:var(--BNG-corpo-02-font-weight)]">
                        Networkers
                      </span>{" "}
                      e{" "}
                      <span className="font-[number:var(--BNG-corpo-02-font-weight)]">
                        Growthers
                      </span>
                      . Somos gente que constrói, se relaciona e que faz
                      crescer.
                    </div>
                  </CardContent>
                </Card>

                <div className="absolute w-[2.43vw] h-[2.71vw] top-[15vw] left-[16.67vw]">
                  <img
                    className="absolute w-[2.43vw] h-[1.25vw] top-0 left-0"
                    alt="Vector"
                    src="./vector-37.svg"
                  />
                  <img
                    className="absolute w-[2.43vw] h-[1.25vw] top-[1.46vw] left-0"
                    alt="Vector"
                    src="./vector-23.svg"
                  />
                </div>
              </div>

              {/* Footer links */}
              <div className="w-[35.35vw]">
                <div className="flex items-start gap-[0.69vw]">
                  {/* Institutional links */}
                  <div className="flex flex-col w-[12.92vw] items-start gap-[0.69vw] p-[0.69vw]">
                    <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)]">
                      Institucional
                    </h3>
                    <nav className="w-[12.22vw] font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)]">
                      {institutionalLinks.map((link, index) => (
                        <a
                          key={`institutional-${index}`}
                          href="#"
                          className="block"
                        >
                          {link}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Career links */}
                  <div className="flex flex-col w-[10.97vw] items-start gap-[0.69vw] p-[0.69vw]">
                    <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)]">
                      Carreiras
                    </h3>
                    <nav className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)]">
                      {careerLinks.map((link, index) => (
                        <a key={`career-${index}`} href="#" className="block">
                          {link}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Press links */}
                  <div className="flex flex-col w-[10.07vw] items-start gap-[0.69vw] p-[0.69vw]">
                    <h3 className="font-BNG-subt-tulo font-[number:var(--BNG-subt-tulo-font-weight)] text-white text-[1.25vw] tracking-[var(--BNG-subt-tulo-letter-spacing)] leading-[var(--BNG-subt-tulo-line-height)] [font-style:var(--BNG-subt-tulo-font-style)]">
                      Imprensa
                    </h3>
                    <nav className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)]">
                      {pressLinks.map((link, index) => (
                        <a key={`press-${index}`} href="#" className="block">
                          {link}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Privacy policy */}
                <div className="flex flex-col w-[19.86vw] items-start gap-[0.76vw] mt-[8.96vw] ml-[14.51vw]">
                  <Separator className="w-full h-[0.07vw] bg-white" />
                  <a
                    href="#"
                    className="[font-family:'Poppins',Helvetica] font-normal text-white text-[0.97vw] tracking-[0] leading-[0.97vw]"
                  >
                    <span className="leading-[var(--BNG-corpo-02-line-height)] underline font-BNG-corpo-02 [font-style:var(--BNG-corpo-02-font-style)] font-[number:var(--BNG-corpo-02-font-weight)] tracking-[var(--BNG-corpo-02-letter-spacing)] text-[0.97vw]">
                      Políticas de Privacidade
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social media section */}
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

        {/* Contact information */}
        <div className="flex justify-center">
          <div className="flex w-[39.58vw] items-start gap-[1.6vw] mb-[6.94vw]">
            {/* Address */}
            <div className="flex items-start gap-[0.69vw]">
              <img
                className="w-[1.04vw] h-[1.32vw]"
                alt="Location icon"
                src="./vector-17.svg"
              />
              <address className="not-italic font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)]">
                {contactInfo.address}
              </address>
            </div>

            {/* Email */}
            <div className="flex items-center gap-[0.69vw]">
              <img className="w-[1.39vw] h-[1.11vw]" alt="Email icon" src="./vector-21.svg" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] whitespace-nowrap [font-style:var(--BNG-corpo-02-font-style)]"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Fale Conosco text */}
        <div className="absolute w-[8.68vw] top-[14.93vw] left-[61.04vw] font-BNG-corpo-02 font-[number:var(--BNG-corpo-02-font-weight)] text-white text-[0.97vw] tracking-[var(--BNG-corpo-02-letter-spacing)] leading-[var(--BNG-corpo-02-line-height)] [font-style:var(--BNG-corpo-02-font-style)]">
          Fale Conosco
        </div>

        {/* WhatsApp button */}
        <a
          href="#"
          className="absolute w-[3.82vw] h-[3.82vw] bottom-[6.18vw] right-[11.6vw] bg-[url(./logos-whatsapp-icon.svg)] bg-[100%_100%]"
          aria-label="Contact us on WhatsApp"
        />

        {/* Copyright footer */}
        <div className="w-full h-[2.36vw] bg-[#00009b] rounded-[1.11vw_1.11vw_0px_0px] flex items-center">
          <div className="ml-[10.76vw] font-BNG-overline font-[number:var(--BNG-overline-font-weight)] text-white text-[0.69vw] tracking-[var(--BNG-overline-letter-spacing)] leading-[var(--BNG-overline-line-height)] [font-style:var(--BNG-overline-font-style)]">
            © 2025 - BNG HUB - Todos os direitos reservados.
          </div>
        </div>
      </div>
    </section>
  );
};
