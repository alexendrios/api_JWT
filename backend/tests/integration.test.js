const request = require("supertest");
const { validatePayload } = require("../src/validation");
const { init } = require("../app/lib/server");

let rota;


jest.mock("../src/validation", () => ({
  validatePayload: jest.fn(() => null),
}));

describe("Testes de Integração", () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    await server.stop();
  });

  test("Deve retornar 404 se a aplicação está no ar e realizar um GET por uma roat que bão existe", async () => {
    const response = await request(server.listener).get("/0");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      statusCode: 404,
      error: "Not Found",
      message: "Not Found",
    });
  });

   test("Deve retornar 200 se a aplicação está no ar", async () => {
     const response = await request(server.listener).get("/");
     expect(response.status).toBe(200);
     expect(response.body).toEqual({
       message: "API JWT no AR",
       company: "ITAU",
       description: "Desafio QA",
     });
   });

  test("Deve retornar 201 para um payload válido", async () => {
    rota =
      "/eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJTZWVkIjoiNzg0MSIsIk5hbWUiOiJUb25pbmhvIEFyYXVqbyJ9.QY05sIjtrcJnP533kQNk8QXcaleJ1Q01jWY_ZzIZuAg";
    const payload = {
      Role: "External",
      Seed: "72341",
      Name: "Maria Olivia",
    };

    const response = await request(server.listener)
      .post(rota)
      .send(payload);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      message: "As informações contidas atendem a descrição",
    });
  });

    test("Deve retornar 400 para uma jwt invalida", async () => {
      rota =
        "/eyJhbGciOiJzI1NiJ9.dfsdfsfryJSr2xrIjoiQWRtaW4iLCJTZrkIjoiNzg0MSIsIk5hbrUiOiJUb25pbmhvIEFyYXVqbyJ9.QY05fsdfsIjtrcJnP533kQNk8QXcaleJ1Q01jWY_ZzIZuAg";
      const payload ="";

      const response = await request(server.listener).post(rota).send(payload);

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        message: "JWT inválido",
      });
    });

     test("Deve retornar 400 para um clain Name possui caractere com número", async () => {
       // Mock da função validatePayload para retornar uma mensagem de erro
       validatePayload.mockImplementationOnce(
         () => "A propriedade Name não pode conter caracteres numéricos."
       );
       rota =
         "/eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiRXh0ZXJuYWwiLCJTZWVkIjoiODgwMzciLCJOYW1lIjoiTTRyaWEgT2xpdmlhIn0.6YD73XWZYQSSMDf6H0i3-kylz1-TY_Yt6h1cV2Ku-Qs";
       const payload = {
         Role: "External",
         Seed: "72341",
         Name: "M4ria Olivia",
       };

       const response = await request(server.listener).post(rota).send(payload);

       expect(response.status).toBe(400);
       expect(response.body).toEqual({
         message: "A propriedade Name não pode conter caracteres numéricos.",
       });
     });

     test("Deve retornar 400 para mais de 3 claims", async () => {
       // Mock da função validatePayload para retornar uma mensagem de erro
       validatePayload.mockImplementationOnce(
         () => "O payload deve conter exatamente 3 propriedades."
       );
       rota =
         "/eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiTWVtYmVyIiwiT3JnIjoiQlIiLCJTZWVkIjoiMTQ2MjciLCJOYW1lIjoiVmFsZGlyIEFyYW5oYSJ9.cmrXV_Flm5mfdpfNUVopY_I2zeJUy4EZ4i3Fea98zvY";
       const payload = {
         Role: "External",
         Org: "BR",
         Seed: "72341",
         Name: "M4ria Olivia",
       };

       const response = await request(server.listener).post(rota).send(payload);

       expect(response.status).toBe(400);
       expect(response.body).toEqual({
         message: "O payload deve conter exatamente 3 propriedades.",
       });
     });


});
