# Escola Cursos Backend

Este projeto é um backend desenvolvido com **Node.js**, **Express** e **PostgreSQL**. Ele fornece funcionalidades para gerenciar alunos, cursos, aulas, rastrear progresso e gerar certificados em formato PDF.

## Funcionalidades

- Cadastro e login de usuários com autenticação JWT
- Operações CRUD para cursos e aulas
- Rastreamento do progresso de aulas concluídas pelos alunos
- Geração de certificados em PDF para conclusão de cursos

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **PostgreSQL**
- **Sequelize** para ORM
- **JWT** para autenticação
- **PDFKit** para geração de PDFs

## Estrutura do Projeto

```
escola-cursos-backend
├── src
│   ├── config               # Configuração do banco de dados (não versionado)
│   ├── controllers          # Controladores para lidar com as requisições
│   ├── middlewares          # Middlewares, como autenticação
│   ├── models               # Modelos do Sequelize
│   ├── routes               # Rotas da aplicação
│   ├── app.js               # Configuração do Express
│   └── server.js            # Inicialização do servidor
├── .env                     # Variáveis de ambiente (não versionado)
├── .gitignore               # Arquivo de exclusão do Git
├── package.json             # Metadados e dependências do projeto
└── README.md                # Documentação do projeto
```

## Configuração do Projeto

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

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```properties
   DB_USER=postgres
   DB_PASSWORD=developer
   DB_NAME=escola_cursos
   DB_HOST=localhost
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. **Configure o banco de dados:**

   Certifique-se de que o PostgreSQL está rodando e crie o banco de dados:

   ```bash
   sudo -u postgres psql
   CREATE DATABASE escola_cursos;
   ```

5. **Execute as migrações:**

   Use o Sequelize CLI para criar as tabelas no banco de dados:

   ```bash
   npx sequelize-cli db:migrate
   ```

6. **Inicie o servidor:**

   ```bash
   npm run dev
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