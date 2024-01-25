package tests.claims.test;
import io.qameta.allure.*;

import io.restassured.response.Response;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpStatus;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import tests.claims.request.ClaimsRequest;

import static data.Data.*;
import static org.hamcrest.Matchers.*;

@Slf4j
@Feature("Claims")
@Owner("ITAU")
public class ClaimsTeste {
    private String uri = "http://localhost:3000";
    private String jwt_valido = "/"+getJwtValido();

    @Test
    @Tag("regressao")
    @DisplayName("TC03 - Cadastro de um Produto com Sucesso.")
    @Description("Deve realizar o cadastro de um Produto com Sucesso.")
    public void deveRealizarOCadastroDeUmProdutoComSucesso() {
        System.out.println(getSucessClaim());
        new ClaimsRequest().cadastroClaim(uri+jwt_valido,getSucessClaim())
                .then()
                .log().all()
                .statusCode(HttpStatus.SC_CREATED);
    }

}
