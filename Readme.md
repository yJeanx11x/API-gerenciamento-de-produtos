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
- [ ] Criar relacionamento User → Order
- [ ] Sincronizar tabela no banco

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

- [ ] Criar model Order
- [ ] Relacionar User → Order
- [ ] Relacionar Product → Order
- [ ] Sincronizar tabela

### Campos

- [ ] id
- [ ] quantidade
- [ ] total
- [ ] status
- [ ] UsuarioId
- [ ] ProdutoId

---

## CRUD Pedidos

### Create

- [ ] Criar pedido
- [ ] Verificar estoque disponível
- [ ] Calcular valor total
- [ ] Atualizar estoque

### Read

- [ ] Listar pedidos do usuário
- [ ] Buscar pedido por ID

### Update

- [ ] Atualizar status do pedido

### Delete

- [ ] Cancelar pedido

---

# 🔐 Regras de Negócio

- [ ] Usuário só pode ver seus próprios pedidos
- [ ] Usuário só pode editar seus próprios pedidos
- [ ] Usuário só pode cancelar seus próprios pedidos
- [ ] Admin pode gerenciar produtos
- [ ] Não permitir estoque negativo
- [ ] Atualizar estoque automaticamente

---

# 🛡️ Segurança

## Validação

- [x] Criar schemas com Zod
- [x] Validar usuários
- [x] Validar produtos
- [ ] Validar pedidos

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
- [ ] productController.js
- [ ] orderController.js

## Models

- [ ] User.js
- [ ] Product.js
- [ ] Order.js

## Routes

- [ ] authRoutes.js
- [ ] productRoutes.js
- [ ] orderRoutes.js

## Middlewares

- [ ] authMiddleware.js
- [ ] errorMiddleware.js
- [ ] rateLimit.js

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
[░░░░░░░░░░░░░░░░░░░░] 0%
```

## Objetivo Final

- [ ] API completa
- [ ] JWT funcionando
- [ ] Relacionamentos Sequelize
- [ ] Segurança implementada
- [ ] Deploy realizado
- [ ] Projeto pronto para portfólio

---

## 👨‍💻 Autor

Jean Lucas de Souza Araújo

Projeto desenvolvido para prática de Backend com Node.js, Express, Sequelize, MySQL e JWT.

