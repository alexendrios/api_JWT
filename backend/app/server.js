const Hapi = require("@hapi/hapi");
const routes = require("../routes/claims.routes");
const api = require("../routes/api.on.air");


const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route(routes);
  server.route(api)

  await server.start();
  console.log("Servidor rodando em:", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();