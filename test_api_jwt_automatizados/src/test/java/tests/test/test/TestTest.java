package tests.test.test;
import io.qameta.allure.Description;
import io.qameta.allure.Feature;
import io.qameta.allure.Owner;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpStatus;
import org.hamcrest.CoreMatchers;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import tests.test.request.TestRequest;
import static org.hamcrest.Matchers.containsString;

@Slf4j
@Feature("Test")
@Owner("ITAU")
public class TestTest {

    TestRequest testRequest = new TestRequest();
    String pathValido = " http://localhost:3000/";
    String pathInvalido = " http://localhost:3000/0";

    @Test
    @Tag("regressao")
    @DisplayName("TC01 - Teste Verificar se a aplicação está no ar - GET")
    @Description("Deve realizar o Teste com sucesso.")
    public void deveRealizarTesteComSucesso(){
        testRequest.test(pathValido)
                .then()
                .statusCode(HttpStatus.SC_OK)
                .log().all()
                .assertThat()
                .body("message", containsString("API JWT no AR"));
    }

    @Test
    @Tag("regressao")
    @DisplayName("TC02 - Teste Verificar se a aplicação está no ar - GET")
    @Description("Deve realizar o Teste com a uri inválida.")
    public void deveRealizarTesteComAUriInvalida(){
        testRequest.test(pathInvalido)
                .then()
                .statusCode(HttpStatus.SC_NOT_FOUND)
                .log().all()
                .assertThat()
                .body("error", containsString("Not Found"));
    }
}