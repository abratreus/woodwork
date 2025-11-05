# 🌲 WoodWork

## 🪚 Sobre o Projeto
O **WoodWork** é um projeto desenvolvido em **React** com **Vite**, configurado para **deploy automático no GitHub Pages**.  
O site apresenta uma aplicação web moderna e responsiva, utilizando **Bootstrap** para estilização e **React Router** para navegação entre páginas.

---

## 🧰 Tecnologias Utilizadas
- **React 19** – Biblioteca para construção de interfaces dinâmicas  
- **Vite** – Ferramenta de build rápida e moderna  
- **Bootstrap 5** – Framework CSS para estilização responsiva  
- **React Router DOM** – Roteamento para aplicações React  
- **ESLint** – Linting para manter a qualidade do código  
- **GitHub Pages** – Hospedagem gratuita para sites estáticos  

---

## ⚙️ Instalação e Execução

### 🧾 Pré-requisitos
- Node.js (versão 20.19+ ou 22.12+)
- npm ou yarn instalado

### 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/abratreus/WoodWork.git
   cd WoodWork
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### 🚀 Execução em Desenvolvimento
```bash
npm run dev
```
A aplicação será executada em [http://localhost:5173](http://localhost:5173).

### 🏗️ Build para Produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta **dist/**.

### 🌐 Deploy para GitHub Pages
O projeto está configurado para deploy manual no GitHub Pages usando `gh-pages`.

#### Pré-requisitos para Deploy
- O projeto deve estar em um repositório GitHub (ex.: `https://github.com/abratreus/woodwork`).
- Certifique-se de que `npm run build` gera a pasta `dist/` com arquivos estáticos.
- Instale `gh-pages` se não estiver instalado: `npm install gh-pages --save-dev`.

#### Configuração
1. **Atualize `package.json`** (já configurado):
   - Campo `homepage`: `"https://abratreus.github.io/woodwork"`
   - Scripts: `predeploy` e `deploy` já presentes.

2. **Atualize `vite.config.js`** (já configurado):
   - Campo `base`: `'/woodwork/'` (ajustado para produção).

3. **Atualize `src/main.jsx`** (já configurado):
   - Campo `basename` no `BrowserRouter`: `'/woodwork/'` (ajustado para produção).

#### Build e Deploy
Execute estes comandos na raiz do projeto:
- `npm run build` (gera a pasta `dist/`).
- `npm run deploy` (envia o build para a branch `gh-pages` no GitHub).

#### Habilitar GitHub Pages
- Acesse o repositório no GitHub.
- Vá para Settings > Pages.
- Defina Source como "Deploy from a branch", Branch como `gh-pages`, Folder como `/ (root)`.
- Salve. O site ficará disponível em `https://abratreus.github.io/woodwork` após alguns minutos.

#### Problemas Comuns
- **Página em branco no deploy**: Verifique se `base` em `vite.config.js` e `basename` em `main.jsx` correspondem exatamente ao nome do repositório. Para React Router, defina `basename="/woodwork"` no `BrowserRouter`.
- **Erros no build**: Verifique o console; certifique-se de que todos os assets estão em `dist/`.
- **Alternativas**: Para deploys mais fáceis, considere Netlify ou Vercel (conecte o repositório GitHub para builds automáticos).

---

## 🧩 Scripts Disponíveis

| Comando | Função |
|----------|--------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Visualiza o build localmente |
| `npm run lint` | Executa verificação de qualidade de código |
| `npm run deploy` | Publica automaticamente no GitHub Pages |

---

## 🗂️ Estrutura do Projeto

```
WoodWork/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── Navbar/
│   ├── Pages/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── dist/               # Gerado após o build
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧱 Desenvolvimento

### ➕ Adicionando Novas Páginas
1. Crie um novo componente dentro de `src/Pages/`.
2. Adicione a rota correspondente em `App.jsx` usando o React Router.
3. Utilize classes do **Bootstrap** para estilização rápida e responsiva.

### 🧹 Linting
Execute:
```bash
npm run lint
```

---

## 🤖 Deploy Automático
O projeto está configurado com **GitHub Actions**.  
Sempre que houver **push** na branch `main`, o site será **automaticamente construído e publicado** no GitHub Pages.

---

## 🤝 Contribuição

1. Faça um **fork** do projeto  
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-feature
   ```
3. Faça commit das mudanças:
   ```bash
   git commit -m "Adiciona nova feature"
   ```
4. Envie a branch:
   ```bash
   git push origin feature/nova-feature
   ```
5. Abra um **Pull Request**

---

## 📜 Licença
Este projeto está sob a licença **MIT**.  
Consulte o arquivo `LICENSE` para mais detalhes.
