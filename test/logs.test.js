const { expect } = require("chai");
const request = require("./helpers/api");

describe("Logs - API Tests", () => {

  it("POST /logs/add → deve adicionar um log de lavagem (com token)", async () => {
    const token = process.env.TEST_TOKEN;

    const logData = {
      date: new Date().toISOString(),
      treatment: "hidratação",
      feedback: "Muito bom!"
    };

    const res = await request
      .post("/logs/add")
      .set("Authorization", `Bearer ${token}`)
      .send(logData);

    console.log("LOG ADD RESPONSE STATUS:", res.status);
    console.log("LOG ADD RESPONSE BODY:", res.body);

    expect(res.status).to.be.oneOf([200, 201]);
    expect(res.body).to.have.property("date");
    expect(res.body).to.have.property("treatment");
  });

  it("GET /logs/list → deve listar logs do usuário (com token)", async () => {
    const token = process.env.TEST_TOKEN;

    const res = await request
      .get("/logs/list")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

});
