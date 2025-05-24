# 🌐 Portfólio Leonardo dos Santos Paiva

Meu portfólio pessoal desenvolvido com foco em performance, acessibilidade e design responsivo. Ele apresenta meus projetos, tecnologias que domino e skills além de formas de contato.
O projeto também conta com uma api para que posso criar,editar, consultar e deletar os itens criados. A api foi  criada com o intuito de tornar prático o sistema de inserir um novo projeto ao portfólio. 

## ✨ Funcionalidades

- Apresentação pessoal e skills
- Listagem de projetos com tecnologias utilizadas
- Visualização interativa de projetos
- Integração com vídeo
- Responsividade
- Interface moderna e animada
- Criação/Edição/Deleção/Visualização e Pesquisa de projects/skills/technologys

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React, TypeScript, Vite, CSS
- **Backend:** Node.js, TypeScript, Fastify, Zod, swagger
- **Banco de dados:**  Mongoose, MongoDB Atlas

  ## 📂 Organização do Projeto

  /frontend
  ⮡ /src
  ⮡ /api-client - Parte do frontend que comunica com a api
    ⮡ /components - Contém os componentes relacionados ao site em geral (parte do usuário)
      ⮡ /admin-page - Componentes do frontend relacionado a interface de gerenciamento dos itens da API
    ⮡ /hooks - Contém um hook utilizado na home
    ⮡ /pages - Contém as os componentes que são gerados em outra página
    ⮡ /sections - Contém os componentes de seção da homepage (Ex: Home, Projects, About)
  
  /api
  ⮡ /src
    ⮡ /config - Conexão com o mongodb
    ⮡ /constants - Dedicada a armazenar os enums para os erros padrões (NOT_FOUND, ALREADY_EXISTS, INTERNAL_SERVER_ERROR, etc.)
    ⮡ /controllers - Dedicada a armazenar os controladores
    ⮡ /dtos - (data transfer object) dedicada a armazenar os dtos para definir um padrão das entradas dos dados para criação e edição
      ⮡ /project
      ⮡ /skill
      ⮡ /technology
    ⮡ /models - Dedicada a definir os schemas utilizando mongoose
    ⮡ /repository - Dedicada a armazenar as variáveis que se comunicam com o mongodb
    ⮡ /routes - Dedicada a armazenar as funções para geração de rota
    ⮡ /schemas - Dedicada a armazenar a tipagem dos schemas para utilização do zod
    ⮡ /services - Dedicada a armazenar os serviços
    ⮡ /utils - contém a função para a geração dos slugs
  ⮡ .env - Arquivo contendo as variáveis de ambientes para autenticação da API, conexões com o mongodb e JWT.

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

### Rotas

### Autenticação

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
  - PATCH /technologies/:id - Edita uma Tecnologia Skill (PRECISA DE AUTENTICAÇÃO)
  - DELETE /technologies/:id - Deleta uma Tecnologia Skill (PRECISA DE AUTENTICAÇÃO)

Para mais detalhes acesse a documentação da api na rota `/docs`

## 🛠️ Estrutura da base de dados

#### Skills

  ```bash
    {
     name: nome da skill (ex: clean code, clean architecture),
     icon: link do icone da skill (hospedado no imgur por exemplo)
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





  
