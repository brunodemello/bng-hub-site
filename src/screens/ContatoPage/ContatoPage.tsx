import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { HeaderSection } from "../BngHubLayoutSite/sections/HeaderSection";
import { ContactUsSection } from "../BngHubLayoutSite/sections/ContactUsSection";

export const ContatoPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
    privacidade: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');

    // Reset do formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: '',
      privacidade: false
    });
  };

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <HeaderSection isQuemSomosPage={true} />

      {/* Main Content */}
      <motion.section
        className="w-full pt-[8.33vw] pb-[5.56vw] bg-[#f8f9fa]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-[90%] md:max-w-[79.33vw] mt-[5vw]">
          <div className="flex gap-[0] items-start md:flex-row flex-col">
            {/* Texto - Lado Esquerdo */}
            <motion.div
              className="flex-1 w-full md:w-auto md:max-w-[36.11vw] mt-[3vw]"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="mb-[1.39vw] flex justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div
                  className="font-bold text-[#0000BF] text-[3.2vw] md:text-[0.97vw] md:mt-0 mt-[10vw] mb-[4.20vw] md:mb-[0.28vw] tracking-[0.1em] uppercase border-b-2 border-solid border-[#FEDC0B] w-fit"
                  initial={{ width: 0 }}
                  animate={{ width: "fit-content" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  FALE CONOSCO
                </motion.div>
              </motion.div>

              <motion.h1
                className="font-semibold text-[#212121] text-[4.8vw] md:text-[2.22vw] md:leading-[2.78vw] mb-[4.20vw] md:mb-[1vw] md:mt-[1.5vw]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Está pronto para se conectar<br />
                e transformar a saúde?
              </motion.h1>

              <motion.div
                className="w-full md:w-[24.792vw] pl-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="space-y-[1.39vw] text-[#666666] text-[3.733vw] md:text-[1.1vw] font-normal tracking-[0] md:leading-[1.73]">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    Se você busca soluções inovadoras para sua unidade de saúde, deseja integrar sua equipe ao nosso ecossistema ou quer saber mais sobre como a BNG Hub pode transformar a assistência com excelência e inteligência, fale com a gente.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    Estamos aqui para ouvir, entender e criar conexões que geram valor.
                  </motion.p>

                  <motion.p
                    className="font-semibold text-[#333]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    Preencha o formulário ao lado e vamos iniciar essa conversa.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* Formulário Azul - Lado Direito */}
            <motion.div
              className="flex-1 mt-[10vw] md:mt-0 max-w-full w-full h-fit md:max-w-[33.33vw] md:w-[32.375vw] md:h-[36.806vw]"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
              >
                <Card className="bg-[#003CFF] rounded-[8px] p-[2.22vw] text-white h-fit md:h-[36.806vw] flex justify-center items-center">
                  <CardContent className="p-0 w-[82%]">
                    <motion.form
                      onSubmit={handleSubmit}
                      className="space-y-[0.55vw] text-['Poppins', 'Helvetica'] placeholder-[#C3C4C5]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {/* Nome */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="md:mb-0 mb-[2.4vw]"
                      >
                        <label className="block text-white md:text-[0.83vw] font-medium text-[3.733vw] mt-[6vw] md:mt-0 mb-[2vw] md:mb-[0.42vw]">
                          Nome
                        </label>
                        <Input
                          type="text"
                          name="nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          placeholder="Nome*"
                          required
                          className="w-full px-[2vw] md:px-[1.11vw] py-[0.69vw] border-none rounded-[8px] md:rounded-[0.42vw] text-[3.2vw] md:text-[0.83vw] bg-white !text-[#C3C4C5] h-[8.267vw] md:h-[2.153vw] font-light"
                        />
                      </motion.div>

                      {/* E-mail */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        className="md:mb-0 mb-[2.4vw]"
                      >
                        <label className="block text-white md:text-[0.83vw] font-medium text-[3.733vw] mt-[3vw] md:mt-0 mb-[2vw] md:mb-[0.42vw]">
                          E-mail
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="E-mail*"
                          required
                          className="w-full px-[2vw] md:px-[1.11vw] py-[0.69vw] border-none rounded-[8px] md:rounded-[0.42vw] text-[3.2vw] md:text-[0.83vw] bg-white !text-[#C3C4C5] h-[8.267vw] md:h-[2.153vw] font-light"
                        />
                      </motion.div>

                      {/* Telefone */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        className="md:mb-0 mb-[2.4vw]"
                      >
                        <label className="block text-white md:text-[0.83vw] font-medium text-[3.733vw] mt-[3vw] md:mt-0 mb-[2vw] md:mb-[0.42vw]">
                          Telefone
                        </label>
                        <Input
                          type="tel"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="Telefone*"
                          required
                          className="w-full px-[2vw] md:px-[1.11vw] py-[0.69vw] border-none rounded-[8px] md:rounded-[0.42vw] text-[3.2vw] md:text-[0.83vw] bg-white !text-[#C3C4C5] h-[8.267vw] md:h-[2.153vw] font-light"
                        />
                      </motion.div>

                      {/* Assunto */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        className="md:mb-0 mb-[2.4vw]"
                      >
                        <label className="block text-white md:text-[0.83vw] font-medium text-[3.733vw] mt-[3vw] md:mt-0 mb-[2vw] md:mb-[0.42vw]">
                          Assunto
                        </label>
                        <select
                          name="assunto"
                          value={formData.assunto}
                          onChange={handleInputChange}
                          required
                          className="w-full md:w-[50%] px-[1vw] font-light py-[0.6vw] border-none rounded-[8px] md:rounded-[0.42vw] text-[3.2vw] md:text-[0.83vw] bg-white !text-[#C3C4C5] h-[8.267vw] md:h-[2.15vw] outline-none focus:ring-0 focus:ring-offset-0"
                        >
                          <option className="!text-[#C3C4C5]" value="">Selecionar</option>
                          <option value="gestao-medica">Gestão de Equipes Médicas</option>
                          <option value="telemedicina">Telemedicina</option>
                          <option value="fast-ops">Fast OPS</option>
                          <option value="consultoria">Consultoria Diagnóstica</option>
                          <option value="protocolos">Construção de Protocolos</option>
                          <option value="parceria">Parceria Comercial</option>
                          <option value="outros">Outros</option>
                        </select>
                      </motion.div>

                      {/* Mensagem */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.0 }}
                      >
                         <label className="block text-white md:text-[0.83vw] font-medium text-[3.733vw] mt-[3vw] md:mt-0 mb-[2vw] md:mb-[0.42vw]">
                          Mensagem
                        </label>
                        <textarea
                          name="mensagem"
                          value={formData.mensagem}
                          onChange={handleInputChange}
                          placeholder="Mensagem*"
                          required
                          rows={4}
                          className="w-full px-[2vw] md:px-[1.11vw] py-[0.69vw] border-none rounded-[8px] md:rounded-[0.42vw] text-[3.2vw] md:text-[0.83vw] bg-white !text-[#C3C4C5] resize-vertical min-h-[6.94vw] resize-none overflow-auto font-light outline-none focus:ring-0 focus:ring-offset-0"
                        />
                      </motion.div>

                      {/* Checkbox Privacidade */}
                      <motion.div
                        className="flex items-start gap-[0.69vw] pt-[0.69vw] mt-[3vw] md:mt-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 }}
                      >
                        <input
                          type="checkbox"
                          name="privacidade"
                          checked={formData.privacidade}
                          onChange={handleInputChange}
                          required
                          className="mt-[0.14vw] relative left-[3vw] md:left-0 w-[5vw] h-[5vw] md:w-[1.11vw] md:h-[1.11vw] accent-[#fedc0b]"
                        />
                        <label className="text-white text-[2.8vw] md:text-left text-center md:text-[0.69vw] leading-[1.63]">
                          Li e concordo com a Política de Privacidade da BNG e autorizo o uso dos meus dados para fins relacionados a este contato.
                        </label>
                      </motion.div>

                      {/* Botão Enviar */}
                      <motion.div
                        className="pt-[0.69vw]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.2 }}
                      >
                        <motion.div
                          className="flex justify-center md:justify-start"
                        >
                          <Button
                            type="submit"
                            className="bg-[#fedc0b] hover:bg-[#fedc0b]/90 text-[#003cff] rounded-[2.78vw] px-[2.22vw] mt-[3vw] md:mt-0 mb-[6vw] md:mb-0 py-[0.69vw] font-bold md:text-[0.83vw] w-[90%] md:w-fit md:h-[1.94vw]"
                          >
                            Enviar mensagem
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Seção Inferior - Card de Informações + Mapa */}
          <motion.div
            className="flex gap-[0] items-start mt-[5.56vw] flex-col md:flex-row"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Card de Informações - Esquerda */}
            <motion.div
              className="flex-1 md:max-w-[36.11vw] md:w-auto max-w-full w-full "
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-[#00009B] rounded-[1.39vw] p-[8vw] md:p-[2.22vw] text-white w-full md:w-[34.37vw] mb-[5vw] md:mb-0">
                  <CardContent className="p-0 space-y-[1.67vw]">
                    {/* Endereço */}
                    <motion.div
                      className="flex items-center gap-[0.42vw] mb-[4vw] md:mb-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    >
                      <div className="w-[3vw] h-[3vw] md:w-[2.22vw] md:h-[2.22vw] rounded-full flex items-center justify-center flex-shrink-0 mt-[0.14vw]">
                        <img className="w-full mr-[1.24vw] md:mr-0 md:w-[1.45vw] h-auto" src="/contatoIcon_1.png" alt="" />
                      </div>
                      <div>
                        <address className="not-italic text-white text-[2.24vw] md:text-[1.11vw] leading-[1.4] font-medium">
                          Av. Eng. Luis Carlos Berrini, 1748 - Cj. 1710<br />
                          Cidade Monções, São Paulo - SP
                        </address>
                      </div>
                    </motion.div>

                    {/* Horário */}
                    <motion.div
                      className="flex items-center gap-[0.42vw]  mb-[4vw] md:mb-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    >
                      <div className="w-[3vw] h-[3vw] md:w-[2.22vw] md:h-[2.22vw] rounded-full flex items-center justify-center flex-shrink-0 mt-[0.14vw]">
                        <img className="w-full mr-[1.24vw] md:mr-0 md:w-[1.45vw] h-auto" src="/contatoIcon_2.png" alt="" />
                      </div>
                      <div>
                        <p className="not-italic text-white text-[2.24vw] md:text-[1.11vw] leading-[1.4] font-medium">
                          Horário de funcionamento
                        </p>
                        <p className="not-italic text-white text-[2.24vw] md:text-[1.11vw] leading-[1.4] font-medium">
                          de Segunda a Sexta, das 7h às 17h.
                        </p>
                      </div>
                    </motion.div>

                    {/* E-mail */}
                    <motion.div
                      className="flex items-center gap-[0.42vw]  mb-[4vw] md:mb-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <div className="w-[3vw] h-[3vw] md:w-[2.22vw] md:h-[2.22vw] rounded-full flex items-center justify-center flex-shrink-0 mt-[0.14vw]">
                        <img className="w-full mr-[1.24vw] md:mr-0 md:w-[1.45vw] h-auto" src="/contatoIcon_3.png" alt="" />
                      </div>
                      <div>
                        <a
                          href="mailto:marketing@boasnovasgestao.com"
                          className="not-italic text-white text-[2.24vw] mt-[2vw] md:mt-0 md:text-[1.11vw] leading-[1.4] font-medium"
                        >
                          marketing@boasnovasgestao.com
                        </a>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Mapa - Direita */}
            <motion.div
              className="flex-1 w-full md:w-[41.67vw]"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div
                className="w-[97%] mx-auto h-[38vw] md:w-[34.37vw] md:h-[15.9vw] bg-gray-100 rounded-[1.39vw] overflow-hidden relative ml-[1vw]]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Mapa do Google Maps real */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.398573729!2d-46.69447!3d-23.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a9f0ba14c7b%3A0x4ca8f2c1e7c8a8a8!2sAv.%20Eng.%20Lu%C3%ADs%20Carlos%20Berrini%2C%201748%20-%20Cidade%20Mon%C3%A7%C3%B5es%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1.39vw' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-[1.39vw]"
                />

                {/* Overlay com informações da empresa */}
                <motion.div
                  className="hidden md:block absolute bottom-[1.39vw] right-[1.39vw] bg-white rounded-[0.69vw] p-[1.11vw] shadow-lg max-w-[13.89vw]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  <div className="flex items-center gap-[0.42vw] mb-[0.42vw]">
                    <div className="w-[1.39vw] h-[1.39vw] bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-[0.83vw] h-[0.83vw] text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-bold md:text-[0.83vw] text-gray-800">BNG Hub</span>
                  </div>
                  <p className="text-[0.69vw] text-gray-600 mb-[0.69vw] leading-[1.2]">
                    Av. Eng. Luis Carlos Berrini, 1748<br />
                    Cidade Monções, São Paulo - SP
                  </p>
                  <a
                    href="https://maps.google.com/?q=Av.+Eng.+Luis+Carlos+Berrini,+1748+-+Cidade+Monções,+São+Paulo+-+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#003cff] hover:bg-[#0052ff] text-white px-[0.83vw] py-[0.42vw] rounded-[0.28vw] text-[0.69vw] font-medium transition-all inline-block"
                  >
                    Ver no Google Maps
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <ContactUsSection />
    </div>
  );
};