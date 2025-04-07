# Node.js Backend for Course Management System

Este projeto é um backend desenvolvido com Node.js, Express e PostgreSQL. Ele fornece funcionalidades para gerenciar alunos, cursos, aulas, rastrear progresso e gerar certificados em formato PDF.

## Funcionalidades

- Cadastro e login de usuários com autenticação JWT
- Operações CRUD para cursos e aulas
- Rastreamento do progresso de aulas concluídas pelos alunos
- Geração de certificados em PDF para conclusão de cursos

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **PostgreSQL**
- **JWT** para autenticação
- **PDFKit** para geração de PDFs
- **Knex.js** para migrações e consultas ao banco de dados

## Estrutura do Projeto

```
escola-cursos-backend
├── src
│   ├── controllers          # Contém a lógica dos controladores para lidar com requisições
│   ├── middlewares          # Contém middlewares, como autenticação
│   ├── models               # Contém os modelos para interação com o banco de dados
│   ├── routes               # Contém as definições de rotas
│   ├── services             # Contém serviços para lógica de negócios
│   ├── db                   # Configuração do banco de dados e migrações
│   ├── utils                # Funções utilitárias
│   ├── app.js               # Inicializa a aplicação Express
│   └── server.js            # Inicia o servidor
├── .env                     # Variáveis de ambiente
├── .gitignore               # Arquivo de exclusão do Git
├── package.json             # Metadados e dependências do projeto
└── README.md                # Documentação do projeto
```

## Instruções de Configuração

1. **Clone o repositório:**

   ```bash
   git clone <repository-url>
   cd escola-cursos-backend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```properties
   DATABASE_URL=postgres://seu_usuario:sua_senha@localhost:5432/nome_do_banco
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. **Configure o banco de dados:**

   Certifique-se de que o PostgreSQL está rodando e crie o banco de dados:

   ```bash
   sudo -u postgres psql
   CREATE DATABASE nome_do_banco;
   ```

5. **Execute as migrações:**

   Use o Knex para criar as tabelas no banco de dados:

   ```bash
   npx knex migrate:latest
   ```

6. **Inicie o servidor:**

   ```bash
   npm start
   ```

   O servidor estará rodando em `http://localhost:3000`.

## Endpoints da API

- **Autenticação**
  - `POST /api/auth/register` - Cadastro de um novo usuário
  - `POST /api/auth/login` - Login de um usuário existente

- **Cursos**
  - `GET /api/courses` - Obter todos os cursos
  - `POST /api/courses` - Criar um novo curso
  - `PUT /api/courses/:id` - Atualizar um curso
  - `DELETE /api/courses/:id` - Deletar um curso

- **Aulas**
  - `GET /api/lessons` - Obter todas as aulas
  - `POST /api/lessons` - Criar uma nova aula
  - `PUT /api/lessons/:id` - Atualizar uma aula
  - `DELETE /api/lessons/:id` - Deletar uma aula

- **Progresso**
  - `GET /api/progress` - Obter o progresso das aulas
  - `POST /api/progress` - Atualizar o progresso de uma aula

- **Certificados**
  - `GET /api/certificates/:userId` - Gerar um certificado para um usuário

## Exemplos de Uso

### Cadastro de Usuário

**Requisição:**

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Resposta:**

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "token": "jwt_token"
}
```

### Login de Usuário

**Requisição:**

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Resposta:**

```json
{
  "token": "jwt_token"
}
```

### Geração de Certificado

**Requisição:**

```http
GET /api/certificates/1
Authorization: Bearer jwt_token
```

**Resposta:** Um arquivo PDF será gerado e enviado como resposta.

## Licença

Este projeto está licenciado sob a licença MIT.