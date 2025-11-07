
# 💇‍♀️ API Cronograma Capilar

API Rest para acompanhamento de cronograma capilar.

## ✨ Funcionalidades
- 🧑‍🤝‍🧑 Registro de usuário e tipo de cabelo (3b, 3c, 4a, 4b, 4c, 4d)  
- 🧴 Consulta de cremes disponíveis e instruções de uso para hidratação, nutrição e reconstrução  
- 📅 Registro do dia de lavagem e tratamento aplicado  
- 📄 Consulta dos registros de lavagem e tratamentos  
- 📝 Registro de feedback do usuário após cada tratamento  
- 🔒 Autenticação via JWT  
- 📖 Documentação Swagger disponível em `/docs`

## 🛠️ Endpoints

### 👤 Usuário
- `POST /users/register` — Registro de usuário  
- `POST /users/login` — Login do usuário  

### 💆‍♀️ Tratamentos
- `GET /treatments/list` — Listar todos os tratamentos  
- `GET /treatments/type/:type` — Listar tratamentos por tipo  

### 📅 Logs
- `POST /logs/add` — Adicionar log de lavagem (requer autenticação)  
- `GET /logs/list` — Listar logs do usuário (requer autenticação)  

## ⚡ **Como usar**

1. 📦 **Instale as dependências**  
   ```bash
   npm install
   
2. 🧪 Instale o Mochawesome para relatórios de testes em HTML:
   ```bash
   npm install --save-dev mochawesome
   
3. 🧰 Execute os testes automatizados e gere o relatório HTML:
   ```bash
   npx mocha --reporter mochawesome

### 📄 O relatório será gerado em:

mochawesome-report/mochawesome.html

👉 Abra esse arquivo no navegador para visualizar os resultados de forma gráfica.

### 4. ▶️ Como Iniciar o Servidor

Para iniciar o servidor de desenvolvimento, utilize o seguinte comando:

```bash
npm start

```

### 5. 🌐 Acesse a documentação Swagger:

http://localhost:3000/docs


## 🗂️ **Estrutura do Projeto**
```
src/
 ├─ routes/          → Rotas da API
 ├─ controllers/     → Lógica dos endpoints
 ├─ services/        → Regras de negócio
 ├─ models/          → Modelos e dados em memória
 ├─ middleware/      → Middleware de autenticação
resources/
 └─ swagger.json     → Documentação Swagger
test/
 ├─ helpers/         → Utilitários para os testes
 ├─ auth.test.js     → Testes de autenticação
 ├─ treatments.test.js → Testes de tratamentos
 └─ logs.test.js     → Testes de logs

```

## 🔒 Observações  

- 💾 Todos os dados são armazenados **em memória**.  
- 🔑 Para acessar endpoints protegidos, inclua o token JWT no header:
  
Authorization: Bearer <token>

---

## 🧪 Testes Automatizados  

Os testes utilizam **Mocha**, **Chai** e **Mochawesome** 🧬  

### 📂 Estrutura dos Testes  

- `test/auth.test.js` → Testa registro e login de usuários (gera o token JWT).  
- `test/treatments.test.js` → Testa listagem e filtragem de tratamentos.  
- `test/logs.test.js` → Testa registro e listagem de logs autenticados.  
- `test/helpers/api.js` → Configura o Chai HTTP para requisições locais.  

### 🧾 Exemplo de Teste  

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
### 📋 **Tecnologias Utilizadas**

- Node.js

- Express

- JWT (Json Web Token)

- Swagger UI

- Mocha / Chai / Mochawesome


## **Documentos Adicionais** 

## 📌 [Acesse a Wiki da API Cronograma Capilar](https://github.com/Mjss94/ppp-turma02-hair/wiki/%F0%9F%93%8C-API-Cronograma-Capilar)

## 📌 [Planejamento de Teste](https://github.com/Mjss94/ppp-turma02-hair/blob/main/planejamento-de-teste.md)


## Autor

**Nome:** Maria Jaciara   
- GitHub: [Mjss94](https://github.com/Mjss94)  
- LinkedIn: [Maria Jaciara](https://www.linkedin.com/in/maria-jaciara-477993149/)  
- E-mail: [maryjacy2013@gmail.com](mailto:maryjacy2013@gmail.com)


