# 🚀 Guia de Configuração - GitHub + Netlify

## 📋 Pré-requisitos
- Conta no GitHub
- Conta no Netlify (gratuita)
- Git instalado no seu PC
- Node.js 18+ instalado

## 🔧 Passo a Passo

### 1️⃣ Download do Projeto
1. No Bolt, clique em **"Files"** → **"Download Project"**
2. Extraia o ZIP em uma pasta no seu PC

### 2️⃣ Criar Repositório GitHub
1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"**
3. Nome: `bng-hub-site` (ou outro nome)
4. Deixe **público** ou **privado** (sua escolha)
5. **NÃO** marque "Initialize with README"
6. Clique **"Create repository"**

### 3️⃣ Configurar Git Local
```bash
# Navegar para a pasta do projeto
cd caminho/para/bng-hub

# Inicializar Git
git init

# Adicionar arquivos
git add .

# Primeiro commit
git commit -m "Initial commit: BNG Hub website"

# Conectar ao GitHub (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/bng-hub-site.git

# Enviar para GitHub
git push -u origin main
```

### 4️⃣ Configurar Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Faça login com GitHub
3. Clique **"New site from Git"**
4. Escolha **"GitHub"**
5. Selecione seu repositório `bng-hub-site`
6. Configurações:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Clique **"Deploy site"**

### 5️⃣ Aguardar Deploy
- Netlify vai fazer o primeiro build (~3-5 minutos)
- Você receberá uma URL como: `https://amazing-name-123456.netlify.app`

## ✅ Workflow Configurado!

### 🔄 Para futuras atualizações:
1. **Bolt**: Fazer mudanças no projeto
2. **Download**: Baixar projeto atualizado
3. **Substituir**: Arquivos na pasta local
4. **Git**: 
   ```bash
   git add .
   git commit -m "Update: descrição da mudança"
   git push
   ```
5. **Netlify**: Deploy automático em ~2 minutos

## 🛠️ Desenvolvimento Local
```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Abrir http://localhost:5173
```

## 🎯 URLs Importantes
- **Repositório**: `https://github.com/SEU-USUARIO/bng-hub-site`
- **Site Netlify**: `https://seu-site.netlify.app`
- **Painel Netlify**: `https://app.netlify.com`

## 🆘 Problemas Comuns

### Git não reconhecido
```bash
# Instalar Git: https://git-scm.com/download
```

### Erro de permissão GitHub
```bash
# Configurar credenciais
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Build falha no Netlify
- Verificar se `package.json` está correto
- Verificar se todas as dependências estão listadas
- Logs disponíveis no painel do Netlify

## 🎉 Pronto!
Agora você tem um workflow profissional de desenvolvimento!