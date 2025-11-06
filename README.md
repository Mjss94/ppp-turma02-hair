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

2. Instale o mochawesome para relatórios de testes em HTML:
   ```bash
   npm install --save-dev mochawesome
   ```

3. Para rodar os testes automatizados e gerar o relatório HTML:
   ```bash
   npx mocha --reporter mochawesome
   ```
   O relatório será gerado na pasta `mochawesome-report/mochawesome.html`. Abra esse arquivo no navegador para visualizar os resultados dos testes de forma gráfica.

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. Acesse a documentação Swagger em [http://localhost:3000/docs](http://localhost:3000/docs)

## Estrutura do Projeto
- `src/routes` — Rotas da API
- `src/controllers` — Lógica dos endpoints
- `src/services` — Regras de negócio
- `src/models` — Modelos e dados em memória
- `src/middleware` — Middleware de autenticação
- `resources/swagger.json` — Documentação Swagger

- `test/` — Testes automatizados da API (Mocha + Chai)
- `test/helpers/` — Arquivos utilitários para os testes

## Observações
- Todos os dados são armazenados em memória.
- Para acessar endpoints protegidos, inclua o token JWT no header `Authorization: Bearer <token>`.

## Testes Automatizados

Os testes automatizados estão localizados na pasta `test/` e utilizam Mocha, Chai e Mochawesome para geração de relatórios em HTML. Para rodar os testes e visualizar o relatório, siga as instruções acima.

### Estrutura dos testes

- `test/auth.test.js`: Testa o registro e login de usuários, incluindo a obtenção do token JWT.
- `test/treatments.test.js`: Testa os endpoints de listagem de tratamentos e filtragem por tipo.
- `test/logs.test.js`: Testa o registro de logs de lavagem e a listagem dos logs do usuário autenticado.
- `test/helpers/api.js`: Helper que configura o Chai HTTP apontando para a API local, facilitando as requisições nos testes.

#### Exemplo de uso nos testes

```js
// Exemplo de teste em test/auth.test.js
it("POST /users/register → deve registrar um usuário", async () => {
   const res = await request
      .post("/users/register")
      .set("Content-Type", "application/json")
      .send({ username: "Maria", password: "123456", hairType: "4a" });
   expect(res.status).to.be.oneOf([200, 201]);
   expect(res.body).to.have.property("username", "Maria");
});
```

Consulte cada arquivo em `test/` para mais exemplos e detalhes.
