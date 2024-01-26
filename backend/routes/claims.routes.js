const { validatePayload } = require("../src/services/validation");

const get_post = (request, h) => {
  const payload = request.payload;
  const validationError = validatePayload(payload);
  if (validationError) {
    return h.response({ message: validationError }).code(400);
  }

  return h
    .response({ message: "As informações contidas atendem a descrição" })
    .code(201);
};

module.exports = [
  {
    method: "POST",
    path: "/eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJTZWVkIjoiNzg0MSIsIk5hbWUiOiJUb25pbmhvIEFyYXVqbyJ9.QY05sIjtrcJnP533kQNk8QXcaleJ1Q01jWY_ZzIZuAg",
    handler: get_post,
  },
  {
    method: "POST",
    path: "/eyJhbGciOiJzI1NiJ9.dfsdfsfryJSr2xrIjoiQWRtaW4iLCJTZrkIjoiNzg0MSIsIk5hbrUiOiJUb25pbmhvIEFyYXVqbyJ9.QY05fsdfsIjtrcJnP533kQNk8QXcaleJ1Q01jWY_ZzIZuAg",
    handler: (request, h) => {
      return h.response({ message: "JWT inválido" }).code(400);
    },
  },
  {
    method: "POST",
    path: "/eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiRXh0ZXJuYWwiLCJTZWVkIjoiODgwMzciLCJOYW1lIjoiTTRyaWEgT2xpdmlhIn0.6YD73XWZYQSSMDf6H0i3-kylz1-TY_Yt6h1cV2Ku-Qs",
    handler: get_post,
  },
  {
    method: "POST",
    path: "/eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiTWVtYmVyIiwiT3JnIjoiQlIiLCJTZWVkIjoiMTQ2MjciLCJOYW1lIjoiVmFsZGlyIEFyYW5oYSJ9.cmrXV_Flm5mfdpfNUVopY_I2zeJUy4EZ4i3Fea98zvY",
    handler: get_post,
  },
];