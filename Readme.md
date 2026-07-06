# 🚀 Order Management API

API REST para gerenciamento de produtos e pedidos, desenvolvida com Node.js, Express, Sequelize e MySQL.

---

# 📋 Status do Projeto

## 🏗️ Configuração Inicial

- [x] Criar projeto Node.js
- [x] Instalar Express
- [x] Instalar Sequelize
- [x] Instalar MySQL2
- [x] Instalar JWT
- [x] Instalar bcrypt
- [x] Instalar Zod
- [x] Instalar Express express-rate-limit
- [x] Configurar arquivo .env
- [x] Configurar conexão com banco de dados

---

# 👤 Usuários

## Model User

- [x] Criar model User
- [x] Criar relacionamento User → Order
- [x] Sincronizar tabela no banco

### Campos

- [x] id
- [x] nome
- [x] email
- [x] password
- [x] role

---

## Autenticação

### Cadastro

- [x] Criar schema de validação
- [x] Validar dados
- [x] Criptografar senha
- [x] Criar usuário

### Login

- [x] Validar email
- [x] Validar senha
- [x] Comparar senha com bcrypt
- [x] Gerar token JWT
- [x] Retornar token

### Middleware JWT

- [x] Criar middleware JWT
- [x] Verificar token
- [x] Salvar usuário em req.user
- [x] Proteger rotas

---

# 📦 Produtos

## Model Product

- [x] Criar model Product
- [x] Sincronizar tabela

### Campos

- [x] id
- [x] nome
- [x] descricao
- [x] preco
- [x] estoque

---

## CRUD Produtos

### Create

- [x] Criar produto

### Read

- [x] Listar produtos
- [ ] Buscar produto por ID

### Update

- [x] Atualizar produto

### Delete

- [x] Excluir produto

---

# 🛒 Pedidos

## Model Order

- [x] Criar model Order
- [x] Relacionar User → Order
- [x] Relacionar Product → Order
- [x] Sincronizar tabela

### Campos

- [x] id
- [x] quantidade
- [x] total
- [x] status
- [x] UsuarioId
- [x] ProdutoId

---

## CRUD Pedidos

### Create

- [x] Criar pedido
- [x] Verificar estoque disponível
- [x] Calcular valor total
- [x] Atualizar estoque

### Read

- [x] Listar pedidos do usuário
- [ ] Buscar pedido por ID

### Update

- [x] Atualizar status do pedido

### Delete

- [x] Cancelar pedido

---

# 🔐 Regras de Negócio

- [x] Usuário só pode ver seus próprios pedidos
- [ ] Usuário só pode editar seus próprios pedidos
- [x] Usuário só pode cancelar seus próprios pedidos
- [x] Admin pode gerenciar produtos
- [x] Não permitir estoque negativo
- [x] Atualizar estoque automaticamente

---

# 🛡️ Segurança

## Validação

- [x] Criar schemas com Zod
- [x] Validar usuários
- [x] Validar produtos
- [x] Validar pedidos

## Proteção

- [x] Implementar JWT
- [ ] Implementar Rate Limit
- [x] Middleware global de erro
- [ ] Variáveis de ambiente

---

# 📂 Arquitetura MVC

## Config

- [x] database.js

## Controllers

- [x] authController.js
- [x] productController.js
- [x] orderController.js

## Models

- [x] User.js
- [x] Product.js
- [x] Order.js

## Routes

- [x] authRoutes.js
- [x] productRoutes.js
- [x] orderRoutes.js

## Middlewares

- [x] authMiddleware.js
- [x] errorMiddleware.js
- [x] rateLimit.js

---

# 🧪 Testes (Opcional)

- [ ] Instalar Jest
- [ ] Testar autenticação
- [ ] Testar produtos
- [ ] Testar pedidos

---

# 🚀 Deploy

- [ ] Configurar GitHub
- [ ] Criar README
- [ ] Fazer deploy no Render
- [ ] Configurar banco online
- [ ] Testar API em produção

---

# 📊 Progresso

## Nível Atual

```text
[░░░░░░░░░░░░░░░░░░░░] 75%
```

## Objetivo Final

- [ ] API completa
- [x] JWT funcionando
- [x] Relacionamentos Sequelize
- [x] Segurança implementada
- [ ] Deploy realizado
- [ ] Projeto pronto para portfólio

---

## 👨‍💻 Autor

Jean Lucas de Souza Araújo

Projeto desenvolvido para prática de Backend com Node.js, Express, Sequelize, MySQL e JWT.

