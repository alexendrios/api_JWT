module.exports = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return {message: 'API JWT no AR', company: 'ITAU', description: 'Desafio QA'}
    },
  },
];
