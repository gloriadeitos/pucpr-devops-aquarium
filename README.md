#### Trabalho Acadêmico - Abril 2026

# pucpr-devops-aquarium

<p align="center">
  <img src="https://github.com/gloriadeitos/gloriadeitos/blob/main/img/pucpr.png" alt="pucpr" height="100">
  <img src="./src/assets/hero.png" alt="aquarium" height="100">
</p>

**Disciplina:** DevOps  
**Curso:** Analise e Desenvolvimento de Sistemas  
**Instituicao:** Pontificia Universidade Catolica do Parana (PUCPR) - Brasil

## Sobre o Projeto

Este repositorio apresenta um projeto web tematico sobre aquarismo, desenvolvido com foco em boas praticas de organizacao de codigo, componentizacao em React e publicacao em ambiente web.

A aplicacao foi estruturada em secoes de conteudo para orientar iniciantes e entusiastas sobre montagem e cuidados com aquarios, incluindo:

- introducao ao tema
- plantas aquaticas
- peixes
- substratos
- decoracoes
- referencias

## Objetivo do Trabalho

- aplicar conceitos de desenvolvimento frontend moderno
- estruturar uma aplicacao React com TypeScript
- organizar o projeto para publicacao em GitHub Pages
- exercitar padroes de navegacao e layout responsivo

## Tecnologias Utilizadas

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- ESLint
- Docker e Docker Compose (ambiente de apoio)

## Estrutura do Projeto

```text
.
|-- docker-compose.yml
|-- dockerfile
|-- eslint.config.js
|-- index.html
|-- package.json
|-- README.md
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- public/
|   |-- favicon.svg
|   `-- icons.svg
`-- src/
    |-- App.css
    |-- App.tsx
    |-- index.css
    |-- main.tsx
    |-- assets/
    |-- components/
    |   |-- Footer.tsx
    |   |-- Header.tsx
    |   |-- Sidebar.tsx
    |   `-- sections/
    |       |-- HeroSection.tsx
    |       |-- DescriptionSection.tsx
    |       |-- PlantsSection.tsx
    |       |-- FishSection.tsx
    |       |-- SubstratesSection.tsx
    |       |-- DecorationsSection.tsx
    |       `-- ReferencesSection.tsx
    `-- pages/
        |-- Home.tsx
        `-- Pagina.tsx
```

## Como Executar

### Pre-requisitos

- Node.js 20+ (recomendado)
- npm

### Execucao local

1. Clone o repositorio:

   ```bash
   git clone https://github.com/seu-usuario/pucpr-devops-aquarium.git
   cd pucpr-devops-aquarium
   ```

2. Instale as dependencias:

   ```bash
   npm install
   ```

3. Inicie o ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse no navegador:

   ```
   http://localhost:5173/pucpr-devops-aquarium/
   ```

### Build de producao

```bash
npm run build
```

### Preview local da build

```bash
npm run preview
```

## Roteamento e Publicacao

O projeto utiliza `basename` no React Router e `base` no Vite para funcionar corretamente quando publicado em subpasta (exemplo: GitHub Pages).

## Resultados de Aprendizagem

- consolidacao de conceitos de SPA com React
- uso de componentes reutilizaveis
- aplicacao de estilizacao utilitaria com Tailwind CSS
- organizacao de projeto para deploy web

---

<p align="center">
  Projeto desenvolvido para fins academicos na PUCPR
</p>
