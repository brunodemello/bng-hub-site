import React from "react";
import { motion } from "framer-motion";
import { HeaderSection } from "../BngHubLayoutSite/sections/HeaderSection";
import { ContactUsSection } from "../BngHubLayoutSite/sections/ContactUsSection";

export const PrivacyPolicyPage = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <HeaderSection isQuemSomosPage={true} />

      {/* Main Content */}
      <motion.section 
        className="w-full pt-[20vw] md:pt-[8.33vw] pb-[5.56vw] bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-[84vw] md:max-w-[55.56vw]">
          {/* Page Title */}
          <motion.h1 
            className="text-[#003cff] text-[5.2vw] md:text-[2.22vw] font-semibold mb-[3.33vw] text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Política de Privacidade e Cookies | BNG
          </motion.h1>

          {/* Content Sections */}
          <motion.div 
            className="space-y-[4vw] md:space-y-[2.22vw] text-[#666666] text-[3.8vw] md:text-[1.11vw] leading-[1.6] font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* O que são Cookies? */}
            <div>
              <h2 className="text-[#333333] text-[4.2vw] md:text-[1.39vw] font-semibold mb-[1.11vw]">
                O que são Cookies?
              </h2>
              <p className="mb-[1.11vw]">
                Cookies são pequenos arquivos de texto armazenados no seu dispositivo — seja computador, smartphone ou tablet — 
                sempre que você acessa nossas plataformas digitais.
              </p>
              <p className="mb-[1.11vw]">
                Esses arquivos reúnem informações sobre a sua navegação e comportamento nas nossas páginas, permitindo que 
                nossas soluções se adaptem às suas preferências para tornar sua experiência mais fluida e personalizada. 
                Vale destacar que os cookies não contêm dados sensíveis, bancários ou informações que permitam sua identificação 
                direta. Eles atuam exclusivamente para melhorar a sua jornada digital, com total respeito à sua privacidade.
              </p>
            </div>

            {/* Por que usamos Cookies na BNG? */}
            <div>
              <h2 className="text-[#333333] text-[4.2vw] md:text-[1.39vw] font-semibold mb-[1.11vw]">
                Por que usamos Cookies na BNG?
              </h2>
              <p className="mb-[1.11vw]">
                Na BNG, usamos cookies para entregar experiências digitais cada vez mais eficientes, humanizadas e relevantes. 
                A partir da leitura desses arquivos, conseguimos:
              </p>
              <ul className="list-disc pl-[1.67vw] space-y-[0.56vw] mb-[1.11vw]">
                <li>Compreender melhor como você interage com nossos ambientes online;</li>
                <li>Aperfeiçoar funcionalidades e conteúdos conforme seu perfil de navegação;</li>
                <li>Lembrar suas preferências para visitas futuras;</li>
                <li>Garantir segurança, desempenho e personalização em todos os acessos.</li>
              </ul>
              <p>
                Esse processo é essencial para que possamos cumprir nosso propósito: transformar a saúde por meio de conexões de 
                valor — inclusive no ambiente digital.
              </p>
            </div>

            {/* Como você pode gerenciar os Cookies? */}
            <div>
              <h2 className="text-[#333333] text-[4.2vw] md:text-[1.39vw] font-semibold mb-[1.11vw]">
                Como você pode gerenciar os Cookies?
              </h2>
              <p className="mb-[1.11vw]">
                O uso de cookies em nossos canais depende da sua autorização. Ao acessar nossas soluções pela primeira vez, você 
                será informado sobre isso por meio de um aviso claro na tela. Só após sua concordância os cookies serão ativados.
              </p>
              <p className="mb-[1.11vw]">
                Mas fique tranquilo: a qualquer momento, você pode revisar, desativar ou ajustar o uso de cookies diretamente nas 
                configurações do seu navegador. Isso pode incluir o bloqueio total, a aceitação seletiva ou a ativação de alertas 
                quando um cookie estiver prestes a ser utilizado.
              </p>
              <p className="mb-[1.11vw]">
                <strong>Importante:</strong> a recusa ou limitação de determinados cookies pode impactar o funcionamento pleno de algumas 
                funcionalidades em nossos sites e sistemas.
              </p>
            </div>

            {/* Compromisso com a transparência */}
            <div>
              <h2 className="text-[#333333] text-[4.2vw] md:text-[1.39vw] font-semibold mb-[1.11vw]">
                Compromisso com a transparência
              </h2>
              <p className="mb-[1.11vw]">
                Privacidade e confiança são essenciais na nossa relação com você. Por isso, estamos em constante evolução para 
                garantir os mais altos padrões de segurança da informação e conformidade com a legislação vigente, como a LGPD.
              </p>
              <p className="mb-[1.11vw]">
                A BNG se reserva o direito de atualizar esta Política de Cookies a qualquer momento, sempre com base em boas 
                práticas e mudanças regulatórias. Sempre que isso ocorrer, as alterações serão publicadas e comunicadas de 
                forma clara.
              </p>
              <p>
                Ao continuar navegando em nossos canais após essas mudanças, consideraremos que você está de acordo com 
                os novos termos.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <ContactUsSection />
    </div>
  );
};