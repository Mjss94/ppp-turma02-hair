const { expect } = require("chai");
const request = require("./helpers/api");

describe("Auth API Tests", () => {
  const timestamp = Date.now();
  const user = {
    username: `testuser${timestamp}`,
    password: "Senha123!",
    hairType: "oleoso" // ou outro tipo aceito pela sua API
  };

  it("POST /users/register → deve registrar um usuário", async () => {
    const res = await request
      .post("/users/register")
      .set("Content-Type", "application/json")
      .send(user);

    // Debug: mostrar corpo e status da resposta
    console.log("REGISTER RESPONSE STATUS:", res.status);
    console.log("REGISTER RESPONSE BODY:", res.body);

    expect(res.status).to.be.oneOf([200, 201]);
    expect(res.body).to.have.property("username", user.username);
  });

  it("POST /users/login → deve logar e retornar token", async () => {
    const res = await request
      .post("/users/login")
      .set("Content-Type", "application/json")
      .send({
        username: user.username,
        password: user.password
      });

    // Debug: mostrar corpo e status da resposta
    console.log("LOGIN RESPONSE STATUS:", res.status);
    console.log("LOGIN RESPONSE BODY:", res.body);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("token");

    process.env.TEST_TOKEN = res.body.token;
  });
});
