# 🛒 Orders API

API REST desenvolvida com **Node.js**, **Express**, **Sequelize** e **MySQL** para gerenciamento de usuários, produtos e pedidos. O projeto utiliza autenticação com JWT, criptografia de senhas com Bcrypt e controle de estoque durante a criação de pedidos.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- JWT (JSON Web Token)
- Bcrypt
- Express Rate Limit
- Dotenv

---

## 📂 Estrutura do Projeto

```
src/
│
├── config/
│   └── database.js
│
├── controllers/
│
├── middlewares/
│
├── models/
│
├── routes/
│
└── app.js
```

---

## ✨ Funcionalidades

### 👤 Usuários

- Cadastro de usuários
- Login com autenticação JWT
- Senhas criptografadas com Bcrypt

### 📦 Produtos

- Cadastro de produtos
- Listagem de produtos
- Atualização de produtos
- Exclusão de produtos
- Controle de estoque

### 🛒 Pedidos

- Criação de pedidos
- Associação entre usuário e produto
- Cálculo automático do valor total
- Atualização automática do estoque
- Status inicial do pedido como **PENDENTE**

---

## 🔐 Segurança

- Autenticação com JWT
- Criptografia de senhas utilizando Bcrypt
- Middleware de autenticação
- Rate Limit para proteção contra excesso de requisições
- Tratamento de erros

---

## 📚 Regras de Negócio

- Apenas usuários autenticados podem criar pedidos.
- O produto deve existir para que o pedido seja realizado.
- Não é permitido comprar produtos sem estoque suficiente.
- O valor total do pedido é calculado automaticamente pela API.
- Após a confirmação do pedido, o estoque do produto é atualizado.
- Todo pedido é criado com o status **PENDENTE**.

---

## 🗄️ Banco de Dados

### User

| Campo | Tipo |
|--------|------|
| id | Integer |
| nome | String |
| email | String |
| password | String |

---

### Product

| Campo | Tipo |
|--------|------|
| id | Integer |
| nome | String |
| descricao | String |
| preco | Decimal |
| estoque | Integer |
| userId | Integer |

---

### Order

| Campo | Tipo |
|--------|------|
| id | Integer |
| userId | Integer |
| productId | Integer |
| quantidade | Integer |
| total | Decimal |
| status | Enum |

Status disponíveis:

- PENDENTE
- PAGO
- CANCELADO

---

## 🔗 Relacionamentos

```
User
│
├── hasMany(Product)
│
├── hasMany(Order)
│
Product
│
└── hasMany(Order)

Order
│
├── belongsTo(User)
│
└── belongsTo(Product)
```

---

## 📬 Rotas da API

### Usuários

| Método | Endpoint |
|---------|----------|
| POST | /users |
| POST | /login |

---

### Produtos

| Método | Endpoint |
|---------|----------|
| POST | /products |
| GET | /products |
| PUT | /products/:id |
| DELETE | /products/:id |

---

### Pedidos

| Método | Endpoint |
|---------|----------|
| POST | /orders |
| GET | /orders |

---

## 🧪 Testes

Todas as rotas da API foram testadas manualmente utilizando o **Postman**, validando:

- Cadastro de usuários
- Login com JWT
- Cadastro de produtos
- Listagem de produtos
- Atualização de produtos
- Exclusão de produtos
- Criação de pedidos
- Atualização automática do estoque
- Validação de estoque insuficiente
- Proteção de rotas com JWT
- Rate Limit

---

## 📖 Aprendizados

Durante o desenvolvimento deste projeto foram aplicados os seguintes conceitos:

- Arquitetura MVC
- CRUD completo
- Relacionamentos com Sequelize
- Modelagem de banco de dados
- MySQL
- Autenticação com JWT
- Criptografia de senhas com Bcrypt
- Middlewares
- Controle de estoque
- Regras de negócio
- Tratamento de erros
- Organização de código

---

## 🚀 Melhorias Futuras

- Deploy da API no Render
- Documentação com Swagger
- Testes automatizados com Jest
- Docker
- TypeScript
- Paginação
- Filtro de produtos
- Painel administrativo

---
## ⚙️ Configuração

Antes de iniciar o projeto, crie um arquivo chamado **.env** na raiz da aplicação utilizando o arquivo **.env.example** como modelo.


Após configurar as variáveis de ambiente, execute:
**npm run dev**

## 👨‍💻 Autor

**Jean Lucas de Souza Araújo**

Estudante de Engenharia de Software e Desenvolvedor Backend em formação, focado em Node.js, Express, Sequelize e MySQL. Buscando oportunidades de estágio para aplicar e aprimorar conhecimentos em desenvolvimento de APIs REST.

### GitHub

github.com/yJeanx11x

### LinkedIn
www.linkedin.com/in/jeanlucas-s/