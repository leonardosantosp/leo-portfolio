![Status](https://img.shields.io/badge/status-completo-green)
![License](https://img.shields.io/badge/license-MIT-blue)

# 🌐 Portfólio Leonardo dos Santos Paiva

Meu portfólio pessoal desenvolvido com foco em performance, acessibilidade e design responsivo. Ele apresenta meus projetos, tecnologias que domino e skills além de formas de contato.
O projeto também conta com uma api para que eu possa criar, editar, consultar e deletar os itens criados. A api Foi criada com o intuito de tornar mais prático o processo de inserir novos projetos ao portfólio. 

## ✨ Funcionalidades

- Apresentação pessoal e skills
- Listagem de projetos com tecnologias utilizadas
- Visualização interativa de projetos
- Integração com vídeo
- Responsividade
- Interface moderna e animada
- Criação/Edição/Deleção/Visualização e Pesquisa de projects/skills/technologies

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React, TypeScript, Vite, CSS
- **Backend:** Node.js, TypeScript, Fastify, Zod, swagger
- **Banco de dados:**  Mongoose, MongoDB Atlas

## 📂 Organização do Projeto

  /frontend
  <br>&nbsp;⮡ /src
    <br>&nbsp;&nbsp;⮡ /api-client - Parte do frontend que comunica com a api
    <br>&nbsp;&nbsp;⮡ /components - Contém os componentes relacionados ao site em geral (parte do usuário)
      <br>&nbsp;&nbsp;&nbsp;⮡ /admin-page - Componentes do frontend relacionado a interface de gerenciamento dos itens da API
    <br>&nbsp;&nbsp;⮡ /hooks - Contém um hook utilizado na home
    <br>&nbsp;&nbsp;⮡ /pages - Contém as os componentes que são gerados em outra página
    <br>&nbsp;&nbsp;⮡ /sections - Contém os componentes de seção da homepage (Ex: Home, Projects, About)
  <br>
  
  /api
  <br>&nbsp;⮡ /src
    <br>&nbsp;&nbsp;⮡ /config - Conexão com o mongodb
    <br>&nbsp;&nbsp;⮡ /constants - Dedicada a armazenar os enums para os erros padrões (NOT_FOUND, ALREADY_EXISTS, INTERNAL_SERVER_ERROR, etc.)
    <br>&nbsp;&nbsp;⮡ /controllers - Dedicada a armazenar os controladores
    <br>&nbsp;&nbsp;⮡ /dtos - (data transfer object) dedicada a armazenar os dtos para definir um padrão das entradas dos dados para criação e edição
      <br>&nbsp;&nbsp;&nbsp;⮡ /project
      <br>&nbsp;&nbsp;&nbsp;⮡ /skill
      <br>&nbsp;&nbsp;&nbsp;⮡ /technology
    <br>&nbsp;&nbsp;⮡ /models - Dedicada a definir os schemas utilizando mongoose
    <br>&nbsp;&nbsp;⮡ /repository - Dedicada a armazenar as variáveis que se comunicam com o mongodb
    <br>&nbsp;&nbsp;⮡ /routes - Dedicada a armazenar as funções para geração de rota
    <br>&nbsp;&nbsp;⮡ /schemas - Dedicada a armazenar a tipagem dos schemas para utilização do zod
    <br>&nbsp;&nbsp;⮡ /services - Dedicada a armazenar os serviços
    <br>&nbsp;&nbsp;⮡ /utils - contém a função para a geração dos slugs
  <br>&nbsp;⮡ .env - Arquivo contendo as variáveis de ambientes para autenticação da API, conexões com o mongodb e JWT.

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

Para Acessar a interface da API pelo frontend basta acessar a rota /admin-page (Não é necessário estar autenticado para acessar lá, somente para edição, deleção e criação de itens)

### Rotas

#### Autenticação

  - POST /login - realiza a autenticação

#### Projetos

  - GET /projects - lista todos os projetos
  - GET /projects/:id - retorna o projeto pelo id
  - GET /projects/technology/:slug - retorna uma lista de projetos que contenham o slug de uma tecnologia em específica (EX: /projects/technology/react)
  - GET /projects/repository/:repository - retorna um projeto pelo nome do repositório github
  - POST /projects - Cria projeto (PRECISA DE AUTENTICAÇÃO)
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
