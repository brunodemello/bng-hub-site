# BNG Hub - Website Institucional

Site institucional da BNG Hub desenvolvido com React + TypeScript + Tailwind CSS.

## 🚀 Deploy

Este projeto está configurado para deploy automático no Netlify:
- **URL de produção**: [Será gerada após conectar ao GitHub]
- **Deploy automático**: Toda vez que houver push na branch `main`

## 🛠️ Desenvolvimento Local

### Pré-requisitos
- Node.js 18+
- npm

### Instalação
```bash
# Clonar repositório
git clone https://github.com/seu-usuario/bng-hub.git
cd bng-hub

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build para produção
```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/ui/          # Componentes base (shadcn/ui)
├── screens/               # Páginas principais
│   └── BngHubLayoutSite/  # Layout principal do site
│       └── sections/      # Seções da página
├── lib/                   # Utilitários
└── index.tsx             # Ponto de entrada

public/                    # Assets estáticos (imagens, ícones)
```

## 🎨 Tecnologias

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Vite** - Build tool
- **shadcn/ui** - Componentes base

## 📝 Workflow de Atualizações

1. Fazer mudanças no código
2. Commit e push para GitHub
3. Netlify faz deploy automático
4. Site atualizado em ~2 minutos

## 🔧 Configuração Netlify

O arquivo `netlify.toml` contém as configurações de build e deploy.

## 📞 Contato

Para dúvidas sobre o desenvolvimento, entre em contato.