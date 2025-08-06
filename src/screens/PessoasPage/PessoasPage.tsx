import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HeaderSection } from "../BngHubLayoutSite/sections/HeaderSection";
import { ContactUsSection } from "../BngHubLayoutSite/sections/ContactUsSection";
import "./PessoasPage.css";

export const PessoasPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    areaInteresse: '',
    arquivo: null as File | null,
    mensagem: '',
    termos: false
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      setFormData(prev => ({ ...prev, [name]: files ? files[0] : null }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      areaInteresse: '',
      arquivo: null,
      mensagem: '',
      termos: false
    });
  };

  return (
    <div className="pessoas-page bg-white w-full min-h-screen">
      {/* Header */}
      <HeaderSection isQuemSomosPage={true} />

      {/* Main Content - Usando HTML original */}
      <div className="pessoas-content" style={{ paddingTop: '120px' }}>
        <section className="carreira" data-aos="fade-up" data-aos-duration="3000">
        <div className="carreira__imgWrapper">
          <img src="/pessoas/assets/secao-carreira.png" alt="Imagem da seção carreira" className="w-full h-full object-cover object-center rounded-lg" />
          <svg width="78" height="86" viewBox="0 0 78 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M66.2466 11.4082C58.886 4.05099 49.0946 0 38.685 0C28.2754 0 18.484 4.05099 11.1233 11.4082C4.97799 17.5507 1.13649 25.3833 0.0374053 33.8549C-0.306058 36.4905 1.76 38.8196 4.41788 38.8196H11.4193C13.5646 38.8196 15.4193 37.2827 15.768 35.1701C17.5805 24.1632 27.171 15.7444 38.685 15.7444C50.1989 15.7444 59.7842 24.1632 61.6019 35.1701C61.9507 37.2827 63.8054 38.8196 65.9507 38.8196H72.9521C75.61 38.8196 77.676 36.4905 77.3326 33.8549C76.2335 25.3833 72.392 17.5507 66.2466 11.4082Z"
              fill="#0DFFC0" />
            <path
              d="M11.1233 74.5918C18.484 81.9491 28.2754 86 38.685 86C49.0946 86 58.886 81.9491 66.2466 74.5918C72.392 68.4494 76.2335 60.6168 77.3326 52.1451C77.676 49.5096 75.61 47.1804 72.9521 47.1804H65.9507C63.8054 47.1804 61.9507 48.7173 61.6019 50.83C59.7895 61.8368 50.1989 70.2556 38.685 70.2556C27.171 70.2556 17.5858 61.8368 15.768 50.83C15.4193 48.7173 13.5646 47.1804 11.4193 47.1804H4.41788C1.76 47.1804 -0.306058 49.5096 0.0374053 52.1451C1.13649 60.6168 4.97799 68.4494 11.1233 74.5918Z"
              fill="#0DFFC0" />
          </svg>
        </div>
        <div className="carreira__content">
          <span className="secao-titulo">Carreiras</span>
          <h2 className="titulo-grande">Faça parte de um Time<br />movido pela conexão.</h2>
          <p>Somos apaixonados por construir, conectar,<br />
            crescer, criar e desenvolver soluções que estão<br />
            transformando a saúde no Brasil.
          </p>
        </div>
        <div className="cruz-small">
          <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.1518 40H21.8708C24.0839 40 25.882 38.2028 25.882 35.9907V28.2176C25.882 27.3073 25.1428 26.5665 24.23 26.5665H15.7925C14.8819 26.5665 14.1406 27.3052 14.1406 28.2176V35.9907C14.1406 38.2028 15.9387 40 18.1518 40Z"
              fill="#E6E6E6" />
            <path
              d="M21.8677 0L18.1488 0C15.9356 0 14.1376 1.79721 14.1376 4.00932L14.1376 11.7824C14.1376 12.6926 14.8767 13.4335 15.7895 13.4335L24.227 13.4335C25.1377 13.4335 25.8789 12.6948 25.8789 11.7824V4.00932C25.8789 1.79721 24.0809 0 21.8677 0Z"
              fill="#E6E6E6" />
            <path
              d="M0 18.1393L0 21.8565C0 24.0686 1.79805 25.8658 4.0112 25.8658H11.7879C12.6986 25.8658 13.4398 25.1271 13.4398 24.2147V15.7812C13.4398 14.8709 12.7007 14.13 11.7879 14.13H4.0112C1.79805 14.13 0 15.9272 0 18.1393Z"
              fill="#E6E6E6" />
            <path
              d="M40.0195 21.8586V18.1414C40.0195 15.9293 38.2215 14.1321 36.0083 14.1321H28.2316C27.3209 14.1321 26.5797 14.8709 26.5797 15.7832V24.2168C26.5797 25.127 27.3188 25.8679 28.2316 25.8679H36.0083C38.2215 25.8679 40.0195 24.0707 40.0195 21.8586Z"
              fill="#E6E6E6" />
          </svg>
        </div>
        <div className="cruz-large">
          <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M33.1096 73H39.8931C43.93 73 47.2097 69.7218 47.2097 65.6868V51.5083C47.2097 49.848 45.8615 48.4966 44.1965 48.4966H28.8061C27.145 48.4966 25.793 49.8442 25.793 51.5083V65.6868C25.793 69.7218 29.0727 73 33.1096 73Z"
              fill="#E6E6E6" />
            <path
              d="M39.8904 0.0380859L33.1069 0.0380859C29.07 0.0380859 25.7903 3.31628 25.7903 7.35127L25.7903 21.5297C25.7903 23.19 27.1385 24.5415 28.8035 24.5415L44.1939 24.5415C45.855 24.5415 47.207 23.1939 47.207 21.5297V7.35127C47.207 3.31628 43.9273 0.0380859 39.8904 0.0380859Z"
              fill="#E6E6E6" />
            <path
              d="M0 33.1251L0 39.9054C0 43.9404 3.27973 47.2186 7.31661 47.2186H21.5017C23.1628 47.2186 24.5149 45.871 24.5149 44.2068V28.8237C24.5149 27.1633 23.1667 25.8119 21.5017 25.8119H7.31661C3.27973 25.8119 0 29.0901 0 33.1251Z"
              fill="#E6E6E6" />
            <path
              d="M73 39.9092V33.1289C73 29.0939 69.7203 25.8157 65.6834 25.8157H51.4983C49.8372 25.8157 48.4851 27.1633 48.4851 28.8275V44.2107C48.4851 45.871 49.8333 47.2224 51.4983 47.2224H65.6834C69.7203 47.2224 73 43.9442 73 39.9092Z"
              fill="#E6E6E6" />
          </svg>
        </div>
      </section>

      {/* Nossa Cultura Section */}
      <section className="nossa-cultura" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <span className="secao-titulo">Nossa Cultura</span>
        <h2 className="titulo-grande">Conectados pelo nosso propósito</h2>
        <p>Construímos todos os dias uma cultura sólida, baseada em valores que são inegociáveis.</p>
        <div className="nossa-cultura__vantagens">
          <div className="vantagem__card" data-aos="fade-up">
            <div className="card__imgWrapper">
              <img src="/icon-cultura-01.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="card__titulo">RESPEITO</div>
            <div className="card__text">Para nós, vem a<br />frente de <strong>TUDO</strong>.</div>
          </div>
          <div className="vantagem__card" data-aos="fade-down">
            <div className="card__imgWrapper">
              <img src="/icon-cultura-02.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="card__titulo">RELACIONAMENTO</div>
            <div className="card__text">É a nossa<br />razão de ser.</div>
          </div>
          <div className="vantagem__card" data-aos="fade-up">
            <div className="card__imgWrapper">
              <img src="/icon-cultura-03.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="card__titulo">HUMANIZAÇÃO</div>
            <div className="card__text">Reflete a nossa<br />essência.</div>
          </div>
          <div className="vantagem__card" data-aos="fade-down">
            <div className="card__imgWrapper">
              <img src="/icon-cultura-04.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="card__titulo">PRECISÃO</div>
            <div className="card__text">Nosso modo<br />de agir.</div>
          </div>
          <div className="vantagem__card" data-aos="fade-up">
            <div className="card__imgWrapper">
              <img src="/icon-cultura-05.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="card__titulo">INOVAÇÃO</div>
            <div className="card__text">Representa a nossa<br />visão de futuro.</div>
          </div>
          <div className="vantagem__card" data-aos="fade-down">
            <div className="card__imgWrapper">
              <img src="/icon-cultura-06.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="card__titulo">PERFORMANCE</div>
            <div className="card__text">É a direção que nos<br />guia para resultados.</div>
          </div>
        </div>
        <div className="cruz-small">
          <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.1518 40H21.8708C24.0839 40 25.882 38.2028 25.882 35.9907V28.2176C25.882 27.3073 25.1428 26.5665 24.23 26.5665H15.7925C14.8819 26.5665 14.1406 27.3052 14.1406 28.2176V35.9907C14.1406 38.2028 15.9387 40 18.1518 40Z"
              fill="#E6E6E6" />
            <path
              d="M21.8677 0L18.1488 0C15.9356 0 14.1376 1.79721 14.1376 4.00932L14.1376 11.7824C14.1376 12.6926 14.8767 13.4335 15.7895 13.4335L24.227 13.4335C25.1377 13.4335 25.8789 12.6948 25.8789 11.7824V4.00932C25.8789 1.79721 24.0809 0 21.8677 0Z"
              fill="#E6E6E6" />
            <path
              d="M0 18.1393L0 21.8565C0 24.0686 1.79805 25.8658 4.0112 25.8658H11.7879C12.6986 25.8658 13.4398 25.1271 13.4398 24.2147V15.7812C13.4398 14.8709 12.7007 14.13 11.7879 14.13H4.0112C1.79805 14.13 0 15.9272 0 18.1393Z"
              fill="#E6E6E6" />
            <path
              d="M40.0195 21.8586V18.1414C40.0195 15.9293 38.2215 14.1321 36.0083 14.1321H28.2316C27.3209 14.1321 26.5797 14.8709 26.5797 15.7832V24.2168C26.5797 25.127 27.3188 25.8679 28.2316 25.8679H36.0083C38.2215 25.8679 40.0195 24.0707 40.0195 21.8586Z"
              fill="#E6E6E6" />
          </svg>
        </div>
        <div className="cruz-large">
          <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M33.1096 73H39.8931C43.93 73 47.2097 69.7218 47.2097 65.6868V51.5083C47.2097 49.848 45.8615 48.4966 44.1965 48.4966H28.8061C27.145 48.4966 25.793 49.8442 25.793 51.5083V65.6868C25.793 69.7218 29.0727 73 33.1096 73Z"
              fill="#E6E6E6" />
            <path
              d="M39.8904 0.0380859L33.1069 0.0380859C29.07 0.0380859 25.7903 3.31628 25.7903 7.35127L25.7903 21.5297C25.7903 23.19 27.1385 24.5415 28.8035 24.5415L44.1939 24.5415C45.855 24.5415 47.207 23.1939 47.207 21.5297V7.35127C47.207 3.31628 43.9273 0.0380859 39.8904 0.0380859Z"
              fill="#E6E6E6" />
            <path
              d="M0 33.1251L0 39.9054C0 43.9404 3.27973 47.2186 7.31661 47.2186H21.5017C23.1628 47.2186 24.5149 45.871 24.5149 44.2068V28.8237C24.5149 27.1633 23.1667 25.8119 21.5017 25.8119H7.31661C3.27973 25.8119 0 29.0901 0 33.1251Z"
              fill="#E6E6E6" />
            <path
              d="M73 39.9092V33.1289C73 29.0939 69.7203 25.8157 65.6834 25.8157H51.4983C49.8372 25.8157 48.4851 27.1633 48.4851 28.8275V44.2107C48.4851 45.871 49.8333 47.2224 51.4983 47.2224H65.6834C69.7203 47.2224 73 43.9442 73 39.9092Z"
              fill="#E6E6E6" />
          </svg>
        </div>
      </section>

      {/* Time Section */}
      <section className="time" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        {/* Imagem decorativa de fundo */}
        <img 
          src="/bg-secao-qtd.png" 
          alt="" 
          className="absolute bottom-0 left-0 z-0 w-auto h-auto pointer-events-none"
        />
        
        <div className="time__content">
          <h2>Um Time que não para de crescer</h2>
          <p>
            Somos feitos de gente que acredita no cuidado, na<br />excelência e no impacto positivo que podemos gerar
            juntos.<br />Por isso,
            queremos na BNG Hub gente tão apaixonada<br />quanto nós. Até porque, o nosso é sonho é GRANDE.
          </p>
          <div className="content__qntd">
            <div className="qtd__profissionais" data-aos="fade-in">
              <span className="qtd__numbers">+10.000</span>
              <span className="qtd__desc">Profissionais da saúde<br />conectados com<br />nosso propósito.</span>
            </div>
            <div className="qtd__pessoas" data-aos="fade-in">
              <span className="qtd__numbers">+180</span>
              <span className="qtd__desc">pessoas em nosso<br />Time fazendo a<br />diferença.</span>
            </div>
          </div>
          <a href="#trabalhe-conosco">Faça parte do nosso time!</a>
        </div>
        <div className="time__imgWrapper">
          <img src="/pessoas/assets/secao-time.png" alt="Imagem do time reunido" className="w-full h-full object-cover object-center rounded-lg" />
        </div>
      </section>

      {/* Cultura Cards Section */}
      <section className="cultura-cards" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <span className="secao-titulo">Nossa Cultura</span>
        <h2 className="titulo-grande">Somos gente que constrói, se relaciona e faz crescer</h2>
        <p>Conectamos diferentes perfis para construir um ambiente colaborativo, que<br />valoriza a diversidade e cresce
          JUNTO.</p>
        <div className="cultura__cards-container">
          <div className="card-main" data-aos="flip-right">
            <span className="card-titulo">BUILDERS</span>
            <span className="desc">
              São as pessoas que gostam de<br />
              colocar a mão na <strong>massa e<br />
                agir</strong>. Os builders estão<br />
              sempre ligados e dedicados<br />
              em <strong>fazer acontecer</strong>. São pró-<br />
              ativos, dinâmicos e<br />
              <strong>resolutivos</strong>. Não descansam<br />
              enquanto não colocam um<br />
              projeto de pé, um teste para<br />
              rodar ou uma solução para<br />
              otimizar a operação.
            </span>
            <div className="card__imgWrapper">
              <img src="/cultura-card-01.png" alt="" className="w-full h-full object-cover object-center" />
            </div>
          </div>
          <div className="card-main" data-aos="flip-right">
            <span className="card-titulo">NETWORKERS</span>
            <span className="desc">
              É o nosso lado mais humano,<br />
              o que se conecta, <strong>"olha no<br />
                olho"</strong>, tem empatia e se<br />
              coloca no lugar do outro. São<br />
              pessoas que <strong>sabem ouvir</strong> e<br />
              <strong>entendem o valor do contato</strong>,<br />
              da proximidade e dos<br />
              laços. Estão sempre abertas<br />
              ao outro, criando um<br />
              ambiente leve, próximo e<br />
              cheio de significado.
            </span>
            <div className="card__imgWrapper">
              <img src="/cultura-card-02.png" alt="" className="w-full h-full object-cover object-center" />
            </div>
          </div>
          <div className="card-main" data-aos="flip-right">
            <span className="card-titulo">GROWTHERS</span>
            <span className="desc">
              São as nossas pessoas que<br />
              <strong>agem com estratégia</strong> e<br />
              sabem que cada passo pode<br />
              <strong>impactar o resultado</strong>. Os<br />
              growthers são focados em<br />
              melhoria contínua e alta<br />
              performance. Cultivam,<br />
              multiplicam e fazem o<br />
              negócio crescer. <strong>Olham para<br />
                o futuro</strong> com sede de<br />
              evolução e sabem que o<br />
              saber compartilhado leva a<br />
              gente mais longe.
            </span>
            <div className="card__imgWrapper">
              <img src="/cultura-card-03.png" alt="" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
        <div className="trabalhe-conosco-btn">
          <a href="#trabalhe-conosco">Trabalhe conosco!</a>
        </div>
        <div className="cruz-super-small">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.6603 24.9868H11.3372C9.95471 24.9868 8.83152 23.8641 8.83152 22.4823V17.6267C8.83152 17.0581 9.29323 16.5952 9.86343 16.5952H15.1341C15.703 16.5952 16.166 17.0567 16.166 17.6267V22.4823C16.166 23.8641 15.0428 24.9868 13.6603 24.9868Z"
              fill="#E6E6E6" />
            <path
              d="M11.3397 -0.00012207L13.6628 -0.00012207C15.0453 -0.00012207 16.1685 1.12255 16.1685 2.50439V7.36003C16.1685 7.92863 15.7068 8.39146 15.1366 8.39146H9.86589C9.29702 8.39146 8.83398 7.92996 8.83398 7.36003L8.83398 2.50439C8.83398 1.12255 9.95718 -0.00012207 11.3397 -0.00012207Z"
              fill="#E6E6E6" />
            <path
              d="M25 11.3311V13.6531C25 15.0349 23.8768 16.1576 22.4943 16.1576H17.6364C17.0675 16.1576 16.6045 15.6961 16.6045 15.1262V9.85797C16.6045 9.28936 17.0662 8.82654 17.6364 8.82654H22.4943C23.8768 8.82654 25 9.94921 25 11.3311Z"
              fill="#E6E6E6" />
            <path
              d="M0 13.6543L0 11.3323C0 9.95042 1.12319 8.82775 2.50569 8.82775H7.36361C7.93248 8.82775 8.39552 9.28925 8.39552 9.85918V15.1274C8.39552 15.696 7.9338 16.1588 7.36361 16.1588H2.50569C1.12319 16.1588 0 15.0361 0 13.6543Z"
              fill="#E6E6E6" />
          </svg>
        </div>
        <div className="cruz-small">
          <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.1518 40H21.8708C24.0839 40 25.882 38.2028 25.882 35.9907V28.2176C25.882 27.3073 25.1428 26.5665 24.23 26.5665H15.7925C14.8819 26.5665 14.1406 27.3052 14.1406 28.2176V35.9907C14.1406 38.2028 15.9387 40 18.1518 40Z"
              fill="#E6E6E6" />
            <path
              d="M21.8677 0L18.1488 0C15.9356 0 14.1376 1.79721 14.1376 4.00932L14.1376 11.7824C14.1376 12.6926 14.8767 13.4335 15.7895 13.4335L24.227 13.4335C25.1377 13.4335 25.8789 12.6948 25.8789 11.7824V4.00932C25.8789 1.79721 24.0809 0 21.8677 0Z"
              fill="#E6E6E6" />
            <path
              d="M0 18.1393L0 21.8565C0 24.0686 1.79805 25.8658 4.0112 25.8658H11.7879C12.6986 25.8658 13.4398 25.1271 13.4398 24.2147V15.7812C13.4398 14.8709 12.7007 14.13 11.7879 14.13H4.0112C1.79805 14.13 0 15.9272 0 18.1393Z"
              fill="#E6E6E6" />
            <path
              d="M40.0195 21.8586V18.1414C40.0195 15.9293 38.2215 14.1321 36.0083 14.1321H28.2316C27.3209 14.1321 26.5797 14.8709 26.5797 15.7832V24.2168C26.5797 25.127 27.3188 25.8679 28.2316 25.8679H36.0083C38.2215 25.8679 40.0195 24.0707 40.0195 21.8586Z"
              fill="#E6E6E6" />
          </svg>
        </div>
        <div className="cruz-large">
          <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M33.1096 73H39.8931C43.93 73 47.2097 69.7218 47.2097 65.6868V51.5083C47.2097 49.848 45.8615 48.4966 44.1965 48.4966H28.8061C27.145 48.4966 25.793 49.8442 25.793 51.5083V65.6868C25.793 69.7218 29.0727 73 33.1096 73Z"
              fill="#E6E6E6" />
            <path
              d="M39.8904 0.0380859L33.1069 0.0380859C29.07 0.0380859 25.7903 3.31628 25.7903 7.35127L25.7903 21.5297C25.7903 23.19 27.1385 24.5415 28.8035 24.5415L44.1939 24.5415C45.855 24.5415 47.207 23.1939 47.207 21.5297V7.35127C47.207 3.31628 43.9273 0.0380859 39.8904 0.0380859Z"
              fill="#E6E6E6" />
            <path
              d="M0 33.1251L0 39.9054C0 43.9404 3.27973 47.2186 7.31661 47.2186H21.5017C23.1628 47.2186 24.5149 45.871 24.5149 44.2068V28.8237C24.5149 27.1633 23.1667 25.8119 21.5017 25.8119H7.31661C3.27973 25.8119 0 29.0901 0 33.1251Z"
              fill="#E6E6E6" />
            <path
              d="M73 39.9092V33.1289C73 29.0939 69.7203 25.8157 65.6834 25.8157H51.4983C49.8372 25.8157 48.4851 27.1633 48.4851 28.8275V44.2107C48.4851 45.871 49.8333 47.2224 51.4983 47.2224H65.6834C69.7203 47.2224 73 43.9442 73 39.9092Z"
              fill="#E6E6E6" />
          </svg>
        </div>
      </section>

      {/* Nossas Vagas Section */}
      <section className="nossas-vagas" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <span className="secao-titulo">NOSSAS VAGAS</span>
        <h2 className="titulo-grande">E aí, quer se conectar também?</h2>
        <p>Confira as oportunidades disponíveis para decolar a sua carreira com a gente.</p>
        <div className="vagas__card-container">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="card__vaga" data-aos="flip-right">
              <span className="vaga__titulo">Analista Financeiro</span>
              <span className="vaga__horario">Híbrido - Seg a sex.</span>
              <span className="vaga__local">Campinas - SP</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trabalhe Conosco Section */}
      <section className="trabalhe-conosco" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div className="carreira__content">
          <span className="secao-titulo">TRABALHE CONOSCO</span>
          <h2 className="titulo-grande">Junte-se a quem transforma<br />a saúde!</h2>
          <p>Na BNG, acreditamos que conexões humanas são a<br />
            base de uma assistência em saúde mais eficiente,<br />
            inovadora e acolhedora.Por isso, buscamos<br />
            profissionais que compartilhem nosso propósito de<br />
            transformar a saúde por meio da excelência, da<br />
            tecnologia e do cuidado com as pessoas.<br /><br />

            Se você quer fazer parte de um ecossistema que<br />
            valoriza o desenvolvimento contínuo, o trabalho em<br />
            equipe e o impacto positivo na vida de milhares de<br />
            brasileiros todos os dias, preencha o formulário<br />
            abaixo e envie seu currículo.
          </p>
        </div>
        <form className="trabalhe-conosco__form" onSubmit={handleSubmit} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div className="form__group two-input">
            <label htmlFor="nome">Nome</label>
            <input 
              type="text" 
              name="nome" 
              id="nome" 
              placeholder="Nome*"
              value={formData.nome}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="E-mail*"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="telefone">Telefone</label>
            <input 
              type="tel" 
              name="telefone" 
              id="telefone" 
              placeholder="Telefone*"
              value={formData.telefone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="areaInteresse">Área de interesse</label>
            <select 
              name="areaInteresse" 
              id="areaInteresse" 
              value={formData.areaInteresse}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Selecionar</option>
              <option value="gestao-medica">Gestão Médica</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="file">Anexar currículo</label>
            <div className="file-input-wrapper">
              <span className="custom-label">Selecionar arquivo*</span>
              <div className="file-wrapper">
                <span className="file-name">
                  {formData.arquivo ? formData.arquivo.name : 'Selecionar'}
                </span>
                <input 
                  type="file" 
                  id="file" 
                  name="arquivo" 
                  onChange={handleInputChange}
                  required
                />
                <svg className="icon" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M4.44128 1.96489C3.91097 1.96919 3.40407 2.18393 3.03207 2.5619C2.66006 2.93986 2.4534 3.45011 2.45753 3.98042L2.51373 11.0513C2.51122 11.3168 2.56163 11.5802 2.66201 11.8261C2.76239 12.072 2.91073 12.2954 3.09837 12.4833C3.28602 12.6712 3.50921 12.8199 3.75493 12.9206C4.00065 13.0214 4.26397 13.0722 4.52953 13.0701C4.79509 13.068 5.05757 13.013 5.30166 12.9083C5.54574 12.8037 5.76655 12.6515 5.95118 12.4606C6.13582 12.2697 6.28059 12.044 6.37705 11.7966C6.47351 11.5491 6.51972 11.285 6.513 11.0195L6.50746 10.2339C6.51277 10.0396 6.59328 9.85503 6.73202 9.71896C6.87076 9.58288 7.0569 9.50597 7.25122 9.50443C7.44555 9.50288 7.63289 9.57683 7.77377 9.71068C7.91465 9.84453 7.99808 10.0278 8.00648 10.222L8.01343 11.0076C8.02081 11.9358 7.65913 12.829 7.00795 13.4906C6.35678 14.1522 5.46945 14.5281 4.54118 14.5354C3.6129 14.5428 2.71971 14.1811 2.05811 13.53C1.3965 12.8788 1.02067 11.9915 1.01329 11.0632L0.957101 3.99234C0.949724 3.06407 1.31141 2.17088 1.96258 1.50927C2.61375 0.847668 3.50108 0.471837 4.42935 0.464459C5.35763 0.457082 6.25082 0.818764 6.91242 1.46994C7.57403 2.12111 7.94986 3.00844 7.95724 3.93671L7.9794 6.72545C7.98397 7.28908 7.76446 7.83143 7.36915 8.2332C6.97385 8.63498 6.43513 8.86326 5.8715 8.86783C5.30788 8.87241 4.76553 8.6529 4.36375 8.25759C3.96198 7.86228 3.73369 7.32356 3.72912 6.75994L3.70766 3.97048C3.70331 3.86986 3.71927 3.76939 3.75459 3.67507C3.7899 3.58074 3.84386 3.4945 3.91323 3.42148C3.98261 3.34847 4.06598 3.29017 4.15837 3.25007C4.25076 3.20997 4.35028 3.1889 4.451 3.18809C4.55171 3.18729 4.65156 3.20679 4.74458 3.24541C4.8376 3.28404 4.92188 3.341 4.99241 3.41291C5.06293 3.48481 5.11825 3.57019 5.15506 3.66394C5.19188 3.75769 5.20943 3.85789 5.20668 3.95857L5.22955 6.74801C5.23572 6.91047 5.30495 7.06413 5.42255 7.17638C5.54015 7.28864 5.69686 7.35065 5.85942 7.34927C6.02199 7.34788 6.17762 7.28321 6.29329 7.16897C6.40896 7.05473 6.47556 6.89991 6.47897 6.73738L6.4568 3.94864C6.45251 3.41833 6.23777 2.91143 5.8598 2.53942C5.48183 2.16742 4.97159 1.96076 4.44128 1.96489Z"
                    fill="#003CFF" />
                </svg>
              </div>
            </div>
          </div>
          <div className="form__group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea 
              name="mensagem" 
              id="mensagem" 
              placeholder="Mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form__group termos-form-group">
            <input 
              type="checkbox" 
              name="termos" 
              id="termos"
              checked={formData.termos}
              onChange={handleInputChange}
              required
            />
            <p>Li e concordo com a Política de Privacidade da BNG e autorizo o uso dos meus dados para fins relacionados a
              este contato.</p>
          </div>
          <button type="submit">Enviar mensagem</button>
        </form>
        <div className="cruz-super-small">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.6603 24.9868H11.3372C9.95471 24.9868 8.83152 23.8641 8.83152 22.4823V17.6267C8.83152 17.0581 9.29323 16.5952 9.86343 16.5952H15.1341C15.703 16.5952 16.166 17.0567 16.166 17.6267V22.4823C16.166 23.8641 15.0428 24.9868 13.6603 24.9868Z"
              fill="#E6E6E6" />
            <path
              d="M11.3397 -0.00012207L13.6628 -0.00012207C15.0453 -0.00012207 16.1685 1.12255 16.1685 2.50439V7.36003C16.1685 7.92863 15.7068 8.39146 15.1366 8.39146H9.86589C9.29702 8.39146 8.83398 7.92996 8.83398 7.36003L8.83398 2.50439C8.83398 1.12255 9.95718 -0.00012207 11.3397 -0.00012207Z"
              fill="#E6E6E6" />
            <path
              d="M25 11.3311V13.6531C25 15.0349 23.8768 16.1576 22.4943 16.1576H17.6364C17.0675 16.1576 16.6045 15.6961 16.6045 15.1262V9.85797C16.6045 9.28936 17.0662 8.82654 17.6364 8.82654H22.4943C23.8768 8.82654 25 9.94921 25 11.3311Z"
              fill="#E6E6E6" />
            <path
              d="M0 13.6543L0 11.3323C0 9.95042 1.12319 8.82775 2.50569 8.82775H7.36361C7.93248 8.82775 8.39552 9.28925 8.39552 9.85918V15.1274C8.39552 15.696 7.9338 16.1588 7.36361 16.1588H2.50569C1.12319 16.1588 0 15.0361 0 13.6543Z"
              fill="#E6E6E6" />
          </svg>
        </div>
        <div className="cruz-small">
          <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.1518 40H21.8708C24.0839 40 25.882 38.2028 25.882 35.9907V28.2176C25.882 27.3073 25.1428 26.5665 24.23 26.5665H15.7925C14.8819 26.5665 14.1406 27.3052 14.1406 28.2176V35.9907C14.1406 38.2028 15.9387 40 18.1518 40Z"
              fill="#E6E6E6" />
            <path
              d="M21.8677 0L18.1488 0C15.9356 0 14.1376 1.79721 14.1376 4.00932L14.1376 11.7824C14.1376 12.6926 14.8767 13.4335 15.7895 13.4335L24.227 13.4335C25.1377 13.4335 25.8789 12.6948 25.8789 11.7824V4.00932C25.8789 1.79721 24.0809 0 21.8677 0Z"
              fill="#E6E6E6" />
            <path
              d="M0 18.1393L0 21.8565C0 24.0686 1.79805 25.8658 4.0112 25.8658H11.7879C12.6986 25.8658 13.4398 25.1271 13.4398 24.2147V15.7812C13.4398 14.8709 12.7007 14.13 11.7879 14.13H4.0112C1.79805 14.13 0 15.9272 0 18.1393Z"
              fill="#E6E6E6" />
            <path
              d="M40.0195 21.8586V18.1414C40.0195 15.9293 38.2215 14.1321 36.0083 14.1321H28.2316C27.3209 14.1321 26.5797 14.8709 26.5797 15.7832V24.2168C26.5797 25.127 27.3188 25.8679 28.2316 25.8679H36.0083C38.2215 25.8679 40.0195 24.0707 40.0195 21.8586Z"
              fill="#E6E6E6" />
          </svg>
        </div>
        <div className="cruz-large">
          <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M33.1096 73H39.8931C43.93 73 47.2097 69.7218 47.2097 65.6868V51.5083C47.2097 49.848 45.8615 48.4966 44.1965 48.4966H28.8061C27.145 48.4966 25.793 49.8442 25.793 51.5083V65.6868C25.793 69.7218 29.0727 73 33.1096 73Z"
              fill="#E6E6E6" />
            <path
              d="M39.8904 0.0380859L33.1069 0.0380859C29.07 0.0380859 25.7903 3.31628 25.7903 7.35127L25.7903 21.5297C25.7903 23.19 27.1385 24.5415 28.8035 24.5415L44.1939 24.5415C45.855 24.5415 47.207 23.1939 47.207 21.5297V7.35127C47.207 3.31628 43.9273 0.0380859 39.8904 0.0380859Z"
              fill="#E6E6E6" />
            <path
              d="M0 33.1251L0 39.9054C0 43.9404 3.27973 47.2186 7.31661 47.2186H21.5017C23.1628 47.2186 24.5149 45.871 24.5149 44.2068V28.8237C24.5149 27.1633 23.1667 25.8119 21.5017 25.8119H7.31661C3.27973 25.8119 0 29.0901 0 33.1251Z"
              fill="#E6E6E6" />
            <path
              d="M73 39.9092V33.1289C73 29.0939 69.7203 25.8157 65.6834 25.8157H51.4983C49.8372 25.8157 48.4851 27.1633 48.4851 28.8275V44.2107C48.4851 45.871 49.8333 47.2224 51.4983 47.2224H65.6834C69.7203 47.2224 73 43.9442 73 39.9092Z"
              fill="#E6E6E6" />
          </svg>
        </div>
        <svg className="bola-cinza" width="371" height="371" viewBox="0 0 371 371" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M371 185.5C371 287.949 287.949 371 185.5 371C83.0512 371 0 287.949 0 185.5C0 83.0512 83.0512 0 185.5 0C287.949 0 371 83.0512 371 185.5ZM73.2118 185.5C73.2118 247.515 123.485 297.788 185.5 297.788C247.515 297.788 297.788 247.515 297.788 185.5C297.788 123.485 247.515 73.2118 185.5 73.2118C123.485 73.2118 73.2118 123.485 73.2118 185.5Z"
            fill="#D9D9D9\" fillOpacity="0.3" />
        </svg>
      </section>
      </div>

      {/* Footer */}
      <ContactUsSection />
    </div>
  );
};