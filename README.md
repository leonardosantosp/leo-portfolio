![Status](https://img.shields.io/badge/status-completo-green)
![License](https://img.shields.io/badge/license-MIT-blue)

- 🔗 Frontend: [Acesse aqui](https://leo-portfolio-three.vercel.app/)

# 🌐 Portfólio Leonardo dos Santos Paiva

Meu portfólio pessoal foi desenvolvido com foco em performance, acessibilidade e design responsivo. Ele apresenta meus projetos, as tecnologias que domino, minhas habilidades e formas de contato. O projeto também conta com uma API que permite criar, editar, consultar e deletar os itens cadastrados. A API foi criada com o intuito de tornar mais prático o processo de inserção de novos projetos no portfólio.

## ✨ Funcionalidades

- Apresentação pessoal e habilidades (skills)
- Listagem de projetos com as tecnologias utilizadas
- Visualização interativa de projetos
- Integração com vídeo
- Responsividade
- Interface moderna e animada
- Criação, edição, deleção, visualização e pesquisa de projetos, habilidades e tecnologias

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React, TypeScript, Vite, CSS
- **Backend:** Node.js, TypeScript, Fastify, Zod, swagger
- **Banco de dados:**  Mongoose, MongoDB Atlas

## 📂 Organização do Projeto

  /frontend
  <br>&nbsp;⮡ /src
    <br>&nbsp;&nbsp;⮡ /api-client - Parte do frontend que comunica com a api
    <br>&nbsp;&nbsp;⮡ /components - Componentes gerais do site (parte do usuário)
      <br>&nbsp;&nbsp;&nbsp;⮡ /admin-page - Componentes da interface de gerenciamento dos itens da API (parte admin)
    <br>&nbsp;&nbsp;⮡ /hooks - Contém um hook utilizado na home
    <br>&nbsp;&nbsp;⮡ /pages - Contém os componentes que geram páginas distintas
    <br>&nbsp;&nbsp;⮡ /sections - Componentes de seções da homepage (ex: Home, Projects, About)
  <br>
  
  /api
  <br>&nbsp;⮡ /src
    <br>&nbsp;&nbsp;⮡ /config - Conexão com o mongodb
    <br>&nbsp;&nbsp;⮡ /constants - Armazena enums de erros padrão (NOT_FOUND, ALREADY_EXISTS,
    <br>&nbsp;&nbsp;⮡ /controllers - Controladores das rotas
    <br>&nbsp;&nbsp;⮡ /dtos - Objetos de transferência de dados (Data Transfer Objects), que definem os padrões de entrada para criação e edição
      <br>&nbsp;&nbsp;&nbsp;⮡ /project
      <br>&nbsp;&nbsp;&nbsp;⮡ /skill
      <br>&nbsp;&nbsp;&nbsp;⮡ /technology
    <br>&nbsp;&nbsp;⮡ /models - Schemas definidos com Mongoose
    <br>&nbsp;&nbsp;⮡ /repository - Acesso direto ao MongoDB
    <br>&nbsp;&nbsp;⮡ /routes - Geração de rotas
    <br>&nbsp;&nbsp;⮡ /schemas - Tipagem dos schemas utilizando Zod
    <br>&nbsp;&nbsp;⮡ /services - Regras de negócio da aplicação
    <br>&nbsp;&nbsp;⮡ /utils - Funções auxiliares, como a geração de slugs
  <br>&nbsp;⮡ .env - Arquivo de variáveis de ambiente, contendo chaves de autenticação da API, conexão com MongoDB e JWT

## 🚀 Como Rodar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/leonardosantosp/leo-portfolio
```
```bash
cd leo-portfolio
```
<br>2. Entre na pasta `api` e instale as dependências:
```bash
cd api
```
```bash
npm install
npm run dev
```
<br>3. Entre na pasta `frontend` e instale as dependências:
```bash
cd frontend
```
```bash
npm install
npm run dev
```
<br>

## 🛠️ API

Para acessar a interface de gerenciamento da API pelo frontend, basta visitar a rota `/admin-page`.
(Não é necessário estar autenticado para acessar, apenas para criar, editar ou deletar itens.)

### Rotas

#### Autenticação

  - POST /login - realiza a autenticação

#### Projetos

  - GET /projects - lista todos os projetos
  - GET /projects/:id - retorna o projeto pelo id
  - GET /projects/technology/:slug - Lista projetos por tecnologia (ex: /projects/technology/react)
  - GET /projects/repository/:repository - Busca projeto pelo nome do repositório no GitHub
  - POST /projects - Cria ùm projeto (PRECISA DE AUTENTICAÇÃO)
  - PATCH /projects/:id - Edita um projeto (PRECISA DE AUTENTICAÇÃO)
  - DELETE /projects/:id - Deleta um projeto (PRECISA DE AUTENTICAÇÃO)

#### Skills

  - GET /skills - lista todas as skills
  - GET /skills/:id - retorna uma skill pelo id
  - POST /skills - Cria uma Skill (PRECISA DE AUTENTICAÇÃO)
  - PATCH /skills/:id - Edita uma Skill (PRECISA DE AUTENTICAÇÃO)
  - DELETE /skills/:id - Deleta uma Skill (PRECISA DE AUTENTICAÇÃO)

#### Tecnologias

  - GET /technologies - lista todas as tecnologias
  - GET /technologies/:id - retorna uma tecnologia pelo id
  - GET /technologies/search/:slug - retorna uma tecnologia pelo seu slug (Ex: react_native, cpp, js)
  - POST /technologies - Cria uma Tecnologia (PRECISA DE AUTENTICAÇÃO)
  - PATCH /technologies/:id - Edita uma Tecnologia  (PRECISA DE AUTENTICAÇÃO)
  - DELETE /technologies/:id - Deleta uma Tecnologia  (PRECISA DE AUTENTICAÇÃO)


A documentação da API pode ser acessada em `/docs` (Swagger UI).

## 🧠 Estrutura da Base de Dados

#### Skills

  ```bash
    {
     name: nome da skill (ex: clean code, clean architecture),
     icon: link do icone da skill (hospedado no imgur por exemplo)
    }
  ```

   ex:

```bash
    {
      name: "Microservices",
      icon: "https://imgur.com/IXTZnyy.png"
    }
```

#### Technologies

  ```bash
    {
     name: nome da tecnologia (ex: react, java),
     slug: slug da tecnologia (gerado automaticamente pelo service),
     icon: link da imagem para o icone da tecnologia (hospedado no imgur por exemplo),
     appIcon: link da imagem em formato de app (utilizado no celular que tem na home em que cada "aplicativo" é uma tecnlogia) para o icone da tecnlogia (hospedado no imgur por exemplo),
  }
  ```

ex:

```bash
  {
      name: "NodeJs",
      slug: "nodejs",
      icon: "https://imgur.com/EmtPQW1.png",
      appIcon: "https://imgur.com/ywXMsOQ.png",
    }
```
    

#### Projects

  ```bash
    {
     title: titulo do projeto,
     logo: link para a imagem do projeto (hospedado no imgur por exemplo),
     mockup: link para a imagem do mockup,
     repository: repositorio no github,
     slug: slug do projeto (gerado automaticamente pelo service),
     siteUrl: URL do projeto hospedado,
     videoURL: URL de um vídeo demonstração do projeto no youtube,
     stack: lista de tecnologias (referencia ao schema technologies)
  }
```
ex:

```bash
  {
      title: "Full Stack Spotify",
      logo: "https://imgur.com/me3ih6I.png",
      mockup: "https://imgur.com/HbRgwU8.png",
      repository: "full-stack-spotify",
      slug: "full-stack-spotify",
      siteUrl: "https://github.com/leonardosantosp/full-stack-spotify",
      videoUrl: "https://www.youtube.com/embed/SjV-XXiyiss"
    }
```

    

## 🙋‍♂️ Sobre mim

Desenvolvedor full stack apaixonado por tecnologia, focado em construir soluções eficientes e intuitivas. Busco constantemente aprendizado e aprimoramento, com interesse especial por arquitetura de software e desenvolvimento backend com TypeScript.

[LinkedIn](https://linkedin.com/in/leonardospaiva) | [GitHub](https://github.com/leonardosantosp)
