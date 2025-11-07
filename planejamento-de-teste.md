# Planejamento de Teste

## 1. Objetivo do Teste
O objetivo dos testes é garantir que a API Cronograma Capilar funcione conforme o esperado, atendendo aos requisitos funcionais e de segurança, proporcionando confiabilidade nas operações de registro, autenticação, manipulação de tratamentos e logs de uso.

## 2. Escopo dos Testes
- Testar todos os endpoints da API (usuários, tratamentos, logs)
- Verificar autenticação e autorização via JWT
- Validar respostas para entradas válidas e inválidas
- Testar persistência em memória
- Cobrir cenários de sucesso e falha

## 3. Requisitos a Serem Testados
- Registro de usuário com tipos de cabelo válidos
- Login e geração de token JWT
- Listagem de tratamentos e filtragem por tipo
- Registro de logs de lavagem e feedback
- Listagem de logs do usuário autenticado
- Respostas corretas para erros (401, 403, 404, 409, 400)

## 4. Estratégia de Teste Mista
- **Teste Manual:**
  - Testar manualmente via Swagger UI (`/docs`) e ferramentas como Postman para validar fluxos principais e casos de borda.
  - Verificar mensagens de erro, autenticação e fluxo de uso real.
- **Teste Automatizado:**
  - Utilizar Mocha, Chai e Mochawesome para cobrir cenários automatizados dos endpoints principais.
  - Gerar relatórios em HTML para acompanhamento dos resultados.

## 5. Critérios de Aceitação
- Todos os endpoints devem retornar os status codes corretos para sucesso e erro.
- O token JWT deve ser obrigatório para rotas protegidas.
- Não deve ser possível registrar usuários duplicados.
- Logs só podem ser registrados/listados por usuários autenticados.
- O feedback do usuário deve ser registrado corretamente.
- O relatório de testes automatizados deve apresentar 100% de sucesso nos cenários cobertos.

## 6. Ferramentas de Teste
- Mocha (framework de testes)
- Chai (assertions)
- Mochawesome (relatórios HTML)
- Swagger UI (testes manuais)
- Postman (testes manuais)

## 7. Bugs Encontrados
- [ ] Nenhum bug encontrado até o momento.
- (Preencher aqui caso bugs sejam identificados durante os testes)
