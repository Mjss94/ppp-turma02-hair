# API Cronograma Capilar

API Rest para acompanhamento de cronograma capilar.

## Funcionalidades
- Registro de usuário e tipo de cabelo (3b, 3c, 4a, 4b, 4c, 4d)
- Consulta de cremes disponíveis e instruções de uso para hidratação, nutrição e reconstrução
- Registro do dia de lavagem e tratamento aplicado
- Consulta dos registros de lavagem e tratamentos
- Registro de feedback do usuário após cada tratamento
- Autenticação via JWT
- Documentação Swagger disponível em `/docs`

## Endpoints

### Usuário
- `POST /users/register` — Registro de usuário
- `POST /users/login` — Login do usuário

### Tratamentos
- `GET /treatments/list` — Listar todos os tratamentos
- `GET /treatments/type/:type` — Listar tratamentos por tipo

### Logs
- `POST /logs/add` — Adicionar log de lavagem (requer autenticação)
- `GET /logs/list` — Listar logs do usuário (requer autenticação)

## Como usar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```
3. Acesse a documentação Swagger em [http://localhost:3000/docs](http://localhost:3000/docs)

## Estrutura do Projeto
- `src/routes` — Rotas da API
- `src/controllers` — Lógica dos endpoints
- `src/services` — Regras de negócio
- `src/models` — Modelos e dados em memória
- `src/middleware` — Middleware de autenticação
- `resources/swagger.json` — Documentação Swagger

## Observações
- Todos os dados são armazenados em memória.
- Para acessar endpoints protegidos, inclua o token JWT no header `Authorization: Bearer <token>`.
