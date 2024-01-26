const Hapi = require("@hapi/hapi");
const routes = require("../../routes/claims.routes");
const api = require("../../routes/api.on.air");

const server = Hapi.server({
  port: 3000,
  host: "localhost",
});

server.route(routes);
server.route(api);

class UnhandledRejectionHandler {
  handle(err) {
    console.log(err);
    process.exit(1);
  }
}

const handler = new UnhandledRejectionHandler();

process.on("unhandledRejection", handler.handle);

module.exports = {
  init: async () => {
    await server.initialize();
    return server;
  },
  start: async () => {
    await server.start();
    console.log(`Servidor rodando em: ${server.info.uri}`);
    return server;
  },
  handleUnhandledRejection: handler.handle,
};
