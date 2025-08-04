// Mock data que simula exatamente o formato da API do WordPress
export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  featured_image_url?: string;
  category_names?: string[];
  tag_names?: string[];
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

export interface WordPressTag {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

// Mock Categories
export const mockCategories: WordPressCategory[] = [
  { id: 1, count: 12, description: "", link: "", name: "Inovação em Saúde", slug: "inovacao-em-saude", taxonomy: "category", parent: 0 },
  { id: 2, count: 8, description: "", link: "", name: "Gestão Assistencial", slug: "gestao-assistencial", taxonomy: "category", parent: 0 },
  { id: 3, count: 15, description: "", link: "", name: "Tecnologia e Healthtech", slug: "tecnologia-healthtech", taxonomy: "category", parent: 0 },
  { id: 4, count: 6, description: "", link: "", name: "Experiência do Paciente", slug: "experiencia-paciente", taxonomy: "category", parent: 0 },
  { id: 5, count: 9, description: "", link: "", name: "Carreiras Médicas", slug: "carreiras-medicas", taxonomy: "category", parent: 0 },
  { id: 6, count: 11, description: "", link: "", name: "Liderança e Desenvolvimento", slug: "lideranca-desenvolvimento", taxonomy: "category", parent: 0 },
  { id: 7, count: 7, description: "", link: "", name: "Saúde Pública e Política", slug: "saude-publica-politica", taxonomy: "category", parent: 0 },
  { id: 8, count: 5, description: "", link: "", name: "Cultura e Humanização", slug: "cultura-humanizacao", taxonomy: "category", parent: 0 },
  { id: 9, count: 13, description: "", link: "", name: "Boas Práticas na Saúde", slug: "boas-praticas-saude", taxonomy: "category", parent: 0 },
  { id: 10, count: 4, description: "", link: "", name: "BNG Hub em Foco", slug: "bng-hub-foco", taxonomy: "category", parent: 0 }
];

// Mock Tags
export const mockTags: WordPressTag[] = [
  { id: 1, count: 25, description: "", link: "", name: "saúde", slug: "saude", taxonomy: "post_tag" },
  { id: 2, count: 18, description: "", link: "", name: "campanha", slug: "campanha", taxonomy: "post_tag" },
  { id: 3, count: 22, description: "", link: "", name: "plantão", slug: "plantao", taxonomy: "post_tag" },
  { id: 4, count: 15, description: "", link: "", name: "telemedicina", slug: "telemedicina", taxonomy: "post_tag" },
  { id: 5, count: 12, description: "", link: "", name: "vozesdosaude", slug: "vozesdosaude", taxonomy: "post_tag" },
  { id: 6, count: 8, description: "", link: "", name: "coesistBNG", slug: "coesistbng", taxonomy: "post_tag" },
  { id: 7, count: 14, description: "", link: "", name: "escolainteligente", slug: "escolainteligente", taxonomy: "post_tag" },
  { id: 8, count: 10, description: "", link: "", name: "eficienciaoperacional", slug: "eficienciaoperacional", taxonomy: "post_tag" },
  { id: 9, count: 16, description: "", link: "", name: "protocoloassistencial", slug: "protocoloassistencial", taxonomy: "post_tag" },
  { id: 10, count: 9, description: "", link: "", name: "diretormedico", slug: "diretormedico", taxonomy: "post_tag" },
  { id: 11, count: 11, description: "", link: "", name: "eventoBNG", slug: "eventobng", taxonomy: "post_tag" },
  { id: 12, count: 7, description: "", link: "", name: "atendimentohumanizado", slug: "atendimentohumanizado", taxonomy: "post_tag" }
];

// Mock Posts
export const mockPosts: WordPressPost[] = [
  {
    id: 1,
    date: "2025-06-15T10:00:00",
    date_gmt: "2025-06-15T13:00:00",
    guid: { rendered: "https://admin.bnghub.com/?p=1" },
    modified: "2025-06-15T10:00:00",
    modified_gmt: "2025-06-15T13:00:00",
    slug: "influenza-sintomas-tratamento-prevencao",
    status: "publish",
    type: "post",
    link: "https://admin.bnghub.com/influenza-sintomas-tratamento-prevencao",
    title: { rendered: "Influenza: sintomas, tratamento e prevenção" },
    content: {
      rendered: `
        <p>A BNG Hub é o ponto de conexão entre excelência operacional, inteligência em saúde e valorização dos profissionais que fazem a diferença no cuidado com as pessoas.</p>
        
        <h2>Sintomas da Influenza</h2>
        <p>Os sintomas da influenza podem variar, mas geralmente incluem:</p>
        <ul>
          <li>Febre alta (acima de 38°C)</li>
          <li>Dores musculares e articulares</li>
          <li>Dor de cabeça intensa</li>
          <li>Tosse seca</li>
          <li>Fadiga e mal-estar</li>
        </ul>
        
        <h2>Tratamento</h2>
        <p>O tratamento da influenza deve ser iniciado precocemente e pode incluir:</p>
        <p>Medicamentos antivirais específicos, repouso adequado e hidratação constante são fundamentais para a recuperação.</p>
        
        <h2>Prevenção</h2>
        <p>A prevenção é sempre o melhor caminho:</p>
        <ul>
          <li>Vacinação anual contra influenza</li>
          <li>Higienização frequente das mãos</li>
          <li>Evitar aglomerações durante surtos</li>
          <li>Manter ambientes ventilados</li>
        </ul>
      `,
      protected: false
    },
    excerpt: {
      rendered: "A BNG Hub é o ponto de conexão entre excelência operacional, inteligência em saúde e valorização dos profissionais que fazem a diferença no cuidado com as pessoas",
      protected: false
    },
    author: 1,
    featured_media: 1,
    comment_status: "open",
    ping_status: "open",
    sticky: false,
    template: "",
    format: "standard",
    meta: [],
    categories: [1, 9],
    tags: [1, 3],
    featured_image_url: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_names: ["Inovação em Saúde", "Boas Práticas na Saúde"],
    tag_names: ["saúde", "prevenção"]
  },
  {
    id: 2,
    date: "2025-06-10T14:30:00",
    date_gmt: "2025-06-10T17:30:00",
    guid: { rendered: "https://admin.bnghub.com/?p=2" },
    modified: "2025-06-10T14:30:00",
    modified_gmt: "2025-06-10T17:30:00",
    slug: "junho-vermelho-doe-sangue-compartilhe-vida",
    status: "publish",
    type: "post",
    link: "https://admin.bnghub.com/junho-vermelho-doe-sangue-compartilhe-vida",
    title: { rendered: "Junho Vermelho: Doe sangue, compartilhe vida" },
    content: {
      rendered: `
        <p>Junho é o mês que veste vermelho para lembrar a importância de um gesto simples, mas que pode salvar muitas vidas: a doação de sangue. A campanha nacional de conscientização, conhecida como Junho Vermelho, é um convite à solidariedade — especialmente em um período do ano em que os estoques dos hemocentros costumam diminuir devido às temperaturas mais baixas e às doenças respiratórias que afastam os doadores.</p>
        
        <h2>A importância da doação</h2>
        <p>O sangue é insubstituível. Ele não pode ser fabricado e só pode ser obtido por meio da doação voluntária. Uma única bolsa pode salvar até quatro vidas, sendo essencial para diversos tratamentos de câncer, doenças hematológicas e cirurgias de emergência.</p>
        
        <img src="https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Doação de sangue" style="width: 100%; margin: 20px 0; border-radius: 8px;" />
        
        <h2>A responsabilidade é coletiva</h2>
        <p>Em todo o mundo, a doação de sangue depende da atitude de pessoas como você. No Brasil, temos mais de 10 mil médicos atuando em campanhas de conscientização em todo o país, sabemos, na prática, o impacto de um gesto como a doação de sangue nos corredores dos <strong>hospitais</strong> e nas salas de emergência.</p>
        
        <p>Por isso, durante o mês de junho, incentivamos nossos profissionais, parceiros e colaboradores a participarem da campanha — seja doando sangue, compartilhando informações ou mobilizando suas redes. Cada conversa importa. Cada gota conta.</p>
        
        <h2>Quem pode doar?</h2>
        <p>Para ser um doador, é preciso:</p>
        <ul>
          <li>Ter entre 16 e 69 anos (menores de 18 com autorização dos responsáveis)</li>
          <li>Estar em boas condições de saúde</li>
          <li>Pesar mais de 50 kg</li>
          <li>Estar descansado e alimentado</li>
          <li>Apresentar documento oficial com foto</li>
        </ul>
        <p>O processo é rápido, seguro e feito com todo o cuidado necessário.</p>
        
        <h2>Doe esperança. Doe com o coração.</h2>
        <p>Transformar a saúde é também transformar atitudes. Aproveite o Junho Vermelho para fazer parte dessa corrente do bem e procure o hemocentro mais próximo da sua cidade. Você pode não conhecer quem vai receber, mas certamente será lembrado por toda uma vida.</p>
      `,
      protected: false
    },
    excerpt: {
      rendered: "A BNG Hub é o ponto de conexão entre excelência operacional, inteligência em saúde e valorização dos profissionais que fazem a diferença no cuidado com as pessoas",
      protected: false
    },
    author: 1,
    featured_media: 2,
    comment_status: "open",
    ping_status: "open",
    sticky: false,
    template: "",
    format: "standard",
    meta: [],
    categories: [2, 7],
    tags: [1, 2],
    featured_image_url: "https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_names: ["Gestão Assistencial", "Saúde Pública e Política"],
    tag_names: ["saúde", "campanha"]
  },
  {
    id: 3,
    date: "2025-06-05T09:15:00",
    date_gmt: "2025-06-05T12:15:00",
    guid: { rendered: "https://admin.bnghub.com/?p=3" },
    modified: "2025-06-05T09:15:00",
    modified_gmt: "2025-06-05T12:15:00",
    slug: "telemedicina-futuro-atendimento-medico",
    status: "publish",
    type: "post",
    link: "https://admin.bnghub.com/telemedicina-futuro-atendimento-medico",
    title: { rendered: "Telemedicina: o futuro do atendimento médico" },
    content: {
      rendered: `
        <p>A telemedicina revolucionou a forma como prestamos cuidados de saúde, especialmente após a pandemia de COVID-19. Esta modalidade de atendimento permite consultas remotas, monitoramento de pacientes e até mesmo cirurgias assistidas por tecnologia.</p>
        
        <h2>Benefícios da Telemedicina</h2>
        <ul>
          <li>Acesso facilitado aos cuidados de saúde</li>
          <li>Redução de custos operacionais</li>
          <li>Maior cobertura geográfica</li>
          <li>Agilidade no atendimento</li>
        </ul>
        
        <p>A BNG Hub tem investido fortemente em soluções de telemedicina, proporcionando aos nossos parceiros as melhores ferramentas para atendimento remoto de qualidade.</p>
      `,
      protected: false
    },
    excerpt: {
      rendered: "A telemedicina revolucionou a forma como prestamos cuidados de saúde, especialmente após a pandemia de COVID-19",
      protected: false
    },
    author: 1,
    featured_media: 3,
    comment_status: "open",
    ping_status: "open",
    sticky: false,
    template: "",
    format: "standard",
    meta: [],
    categories: [3],
    tags: [4, 7],
    featured_image_url: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_names: ["Tecnologia e Healthtech"],
    tag_names: ["telemedicina", "escolainteligente"]
  },
  {
    id: 4,
    date: "2025-05-28T16:45:00",
    date_gmt: "2025-05-28T19:45:00",
    guid: { rendered: "https://admin.bnghub.com/?p=4" },
    modified: "2025-05-28T16:45:00",
    modified_gmt: "2025-05-28T19:45:00",
    slug: "gestao-equipes-medicas-alta-performance",
    status: "publish",
    type: "post",
    link: "https://admin.bnghub.com/gestao-equipes-medicas-alta-performance",
    title: { rendered: "Gestão de equipes médicas para alta performance" },
    content: {
      rendered: `
        <p>A gestão eficiente de equipes médicas é fundamental para garantir a qualidade do atendimento e a satisfação tanto dos profissionais quanto dos pacientes.</p>
        
        <h2>Pilares da Gestão Eficiente</h2>
        <p>Uma gestão de equipes médicas de sucesso se baseia em alguns pilares fundamentais:</p>
        <ul>
          <li>Comunicação clara e efetiva</li>
          <li>Definição de protocolos assistenciais</li>
          <li>Capacitação contínua dos profissionais</li>
          <li>Monitoramento de indicadores de qualidade</li>
        </ul>
        
        <p>Na BNG Hub, desenvolvemos metodologias próprias para otimizar a gestão de equipes médicas em mais de 300 unidades de saúde pelo Brasil.</p>
      `,
      protected: false
    },
    excerpt: {
      rendered: "A gestão eficiente de equipes médicas é fundamental para garantir a qualidade do atendimento e a satisfação tanto dos profissionais quanto dos pacientes",
      protected: false
    },
    author: 1,
    featured_media: 4,
    comment_status: "open",
    ping_status: "open",
    sticky: false,
    template: "",
    format: "standard",
    meta: [],
    categories: [2, 6],
    tags: [8, 9],
    featured_image_url: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_names: ["Gestão Assistencial", "Liderança e Desenvolvimento"],
    tag_names: ["eficienciaoperacional", "protocoloassistencial"]
  },
  {
    id: 5,
    date: "2025-05-20T11:20:00",
    date_gmt: "2025-05-20T14:20:00",
    guid: { rendered: "https://admin.bnghub.com/?p=5" },
    modified: "2025-05-20T11:20:00",
    modified_gmt: "2025-05-20T14:20:00",
    slug: "humanizacao-atendimento-hospitalar",
    status: "publish",
    type: "post",
    link: "https://admin.bnghub.com/humanizacao-atendimento-hospitalar",
    title: { rendered: "Humanização no atendimento hospitalar" },
    content: {
      rendered: `
        <p>A humanização no atendimento hospitalar vai além de protocolos médicos - é sobre tratar cada paciente como um ser humano único, com suas necessidades, medos e expectativas.</p>
        
        <h2>O que é Humanização?</h2>
        <p>Humanizar o atendimento significa:</p>
        <ul>
          <li>Escutar ativamente o paciente</li>
          <li>Demonstrar empatia e compaixão</li>
          <li>Respeitar a dignidade humana</li>
          <li>Promover o acolhimento</li>
        </ul>
        
        <p>Estudos mostram que pacientes que recebem atendimento humanizado têm melhor adesão ao tratamento e recuperação mais rápida.</p>
      `,
      protected: false
    },
    excerpt: {
      rendered: "A humanização no atendimento hospitalar vai além de protocolos médicos - é sobre tratar cada paciente como um ser humano único",
      protected: false
    },
    author: 1,
    featured_media: 5,
    comment_status: "open",
    ping_status: "open",
    sticky: false,
    template: "",
    format: "standard",
    meta: [],
    categories: [8, 4],
    tags: [12, 1],
    featured_image_url: "https://images.pexels.com/photos/3279203/pexels-photo-3279203.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_names: ["Cultura e Humanização", "Experiência do Paciente"],
    tag_names: ["atendimentohumanizado", "saúde"]
  },
  {
    id: 6,
    date: "2025-05-15T13:10:00",
    date_gmt: "2025-05-15T16:10:00",
    guid: { rendered: "https://admin.bnghub.com/?p=6" },
    modified: "2025-05-15T13:10:00",
    modified_gmt: "2025-05-15T16:10:00",
    slug: "inovacao-tecnologica-saude-digital",
    status: "publish",
    type: "post",
    link: "https://admin.bnghub.com/inovacao-tecnologica-saude-digital",
    title: { rendered: "Inovação tecnológica na saúde digital" },
    content: {
      rendered: `
        <p>A transformação digital na saúde está revolucionando a forma como diagnosticamos, tratamos e prevenimos doenças. Desde inteligência artificial até dispositivos wearables, a tecnologia está no centro da medicina moderna.</p>
        
        <h2>Principais Inovações</h2>
        <ul>
          <li>Inteligência Artificial para diagnósticos</li>
          <li>Internet das Coisas (IoT) em dispositivos médicos</li>
          <li>Blockchain para segurança de dados</li>
          <li>Realidade Virtual para treinamento médico</li>
        </ul>
        
        <p>A BNG Hub está na vanguarda dessas inovações, implementando soluções tecnológicas que melhoram a eficiência operacional e a qualidade do cuidado.</p>
      `,
      protected: false
    },
    excerpt: {
      rendered: "A transformação digital na saúde está revolucionando a forma como diagnosticamos, tratamos e prevenimos doenças",
      protected: false
    },
    author: 1,
    featured_media: 6,
    comment_status: "open",
    ping_status: "open",
    sticky: false,
    template: "",
    format: "standard",
    meta: [],
    categories: [1, 3],
    tags: [7, 4],
    featured_image_url: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800",
    category_names: ["Inovação em Saúde", "Tecnologia e Healthtech"],
    tag_names: ["escolainteligente", "telemedicina"]
  }
];

// Função para simular busca por categoria
export const getPostsByCategory = (categoryId: number, page: number = 1, perPage: number = 6) => {
  const filteredPosts = mockPosts.filter(post => post.categories.includes(categoryId));
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  
  return {
    posts: filteredPosts.slice(startIndex, endIndex),
    totalPosts: filteredPosts.length,
    totalPages: Math.ceil(filteredPosts.length / perPage),
    currentPage: page
  };
};

// Função para simular busca por slug
export const getPostBySlug = (slug: string) => {
  return mockPosts.find(post => post.slug === slug) || null;
};

// Função para simular posts relacionados
export const getRelatedPosts = (postId: number, categoryIds: number[], limit: number = 3) => {
  return mockPosts
    .filter(post => 
      post.id !== postId && 
      post.categories.some(catId => categoryIds.includes(catId))
    )
    .slice(0, limit);
};

// Função para simular busca
export const searchPosts = (query: string, page: number = 1, perPage: number = 6) => {
  const filteredPosts = mockPosts.filter(post => 
    post.title.rendered.toLowerCase().includes(query.toLowerCase()) ||
    post.content.rendered.toLowerCase().includes(query.toLowerCase())
  );
  
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  
  return {
    posts: filteredPosts.slice(startIndex, endIndex),
    totalPosts: filteredPosts.length,
    totalPages: Math.ceil(filteredPosts.length / perPage),
    currentPage: page
  };
};

// Função para obter categoria por slug
export const getCategoryBySlug = (slug: string) => {
  return mockCategories.find(cat => cat.slug === slug) || null;
};

// Função para formatar data
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};