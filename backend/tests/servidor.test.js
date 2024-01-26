const serverModule = require("../app/lib/server");
const Hapi = require("@hapi/hapi");

describe("Server", () => {
  let server;
  let handleUnhandledRejectionMock;
  let exitMock;

  beforeAll(async () => {
    server = await serverModule.init();
    handleUnhandledRejectionMock = jest.spyOn(
      serverModule,
      "handleUnhandledRejection"
    );
    exitMock = jest.spyOn(process, "exit").mockImplementation(() => {});
  });

  afterAll(async () => {
    await server.stop();
    handleUnhandledRejectionMock.mockRestore();
    exitMock.mockRestore();
  });

  test("deve inicializar o servidor", async () => {
    expect(typeof server).toBe("object");
  });

  test("deve ter rotas configuradas", async () => {
    const routes = server.table();
    expect(routes).toHaveLength(5);
  });

  test("deve iniciar o servidor", async () => {
    const startedServer = await serverModule.start();
    expect(typeof startedServer).toBe("object");
  });

  test("deve tratar rejeições não tratadas corretamente", async () => {
    const errorMessage = "Erro de teste";

    // Substituir console.log por uma função jest mock durante os testes
    const originalConsoleLog = console.log;
    console.log = jest.fn();

    // Simular uma rejeição não tratada
    process.emit("unhandledRejection", errorMessage);

    // Aguardar para garantir que a rejeição seja processada
    await new Promise((resolve) => setTimeout(resolve, 10));

    // Verificar se console.log foi chamado pelo menos uma vez com a mensagem de erro correta
    expect(console.log).toHaveBeenCalledWith(errorMessage);

    // Restaurar console.log para a implementação original após os testes
    console.log = originalConsoleLog;
  });
});
