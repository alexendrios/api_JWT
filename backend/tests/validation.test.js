const { validatePayload } = require("../src/validation");

describe("Validação do payload", () => {
  test("Caso 1 - JWT, as informações contidas atendem a descrição", () => {
    const payload = {
      Role: "Admin",
      Seed: "7841",
      Name: "Toninho Araujo",
    };
    expect(validatePayload(payload)).toBeNull();
  });

  test("Caso 2 - Abrindo o JWT, a Claim Name possui caracter de números", () => {
    const payload = {
      Role: "External",
      Seed: "72341",
      Name: "M4ria Olivia",
    };
    const errorMessage = validatePayload(payload);
    expect(errorMessage).toEqual(
      "A propriedade Name não pode conter caracteres numéricos."
    );
  });

  test("Caso 3 - Abrindo o JWT, foi encontrado mais de 3 claims", () => {
        const payload = {
          Role: "Member",
          Org: "BR",
          Seed: "14627",
          Name: "Valdir Aranha",
        };

        const errorMessage = validatePayload(payload);
        expect(errorMessage).toEqual(
          "O payload deve conter exatamente 3 propriedades."
        );
  });

  test("Caso 4 - A claim Role deve conter apenas 1 dos três valores (Admin, Member e External)",
    () => {
      const payload = {
        Role: "",
        Seed: "14627",
        Name: "Valdir Aranha",
      };

      const errorMessage = validatePayload(payload);
      expect(errorMessage).toEqual(
        "A propriedade Role deve conter um dos valores: Admin, Member ou External."
      );
    });

    test("Caso 5 - A claim Seed deve ser um número primo", () => {
       const payload = {
         Role: "Admin",
         Seed: "1224",
         Name: "Toninho Araujo",
       };

      const errorMessage = validatePayload(payload);
       expect(errorMessage).toEqual(
        "A propriedade Seed deve ser um número primo."
      );
    });

    test("Caso 6 - O tamanho máximo da claim Name é de 256 caracteres.", () => {
      const payload = {
        Role: "External",
        Seed: "72341",
        Name: "Lorem ipsum dolor sit amet, aconsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doloraaa",
      };

      const errorMessage = validatePayload(payload);
      expect(errorMessage).toEqual(
        "O tamanho máximo da propriedade Name é de 256 caracteres."
      );
    });
    
});
