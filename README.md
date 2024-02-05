# Projeto api-jwt

> ### Descrição
>
>  Construa uma aplicação que exponha uma API web que recebe por parâmetros um JWT (string) e verifica se é válido conforme as regras abaixo:
>
> - Deve ser um JWT válido
> - Deve conter apenas 3 claims (Name, Role e Seed)
> - A claim Name não pode ter caracteres numéricos
> - A claim Role deve conter apenas 1 dos três valores (Admin, Member e External)
> - A claim Seed deve ser um número primo
> - O tamanho máximo da claim Name é de 256 caracteres.
>
> #### Definição
>
> **Input:** Um JWT (string).
>
> **Output:** Um boolean indicando se é válido ou não.
> Use a linguagem de programação na qual você considera ter mais conhecimento.
## Desenvolvimento
> #### Tecnologias utilizada
> 
> ***Desenvolvimento da Aplicação***
> - NodeJS
> 
> ***Testes automatizados***
> - Java - 11
> - intalação do Maven

# setup

- [Instalação Node.js](https://nodejs.org/en)
- Instalação do ambiente javaJDK11
- Instalação do Mavaen
- [Configuração das Variáveis de ambiente](https://medium.com/beelabacademy/configurando-vari%C3%A1veis-de-ambiente-java-home-e-maven-home-no-windows-e-unix-d9461f783c26)
- inatalação do allure

```bash
npm install -g allure-commandline
```

# Projeto backend

Comando rodar testes 
```bash
npm test
```
comando para deicar a aplicação online
```bash
npm start

//ou se dedejar ver a aplicação com Prometeus e Kafka

docker-compose up -d
```

# testes automatixados
com a aplicação no ar rodar
comando
```bash
mvn clean test
```