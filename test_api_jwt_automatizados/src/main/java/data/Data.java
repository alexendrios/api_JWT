package data;

public class Data {

    public static String getSucessClaim(){
        return "\n{\n" +
                "\"Role\": \"Admin\",\n"+
                "\"Seed\": \"7841\",\n"+
                "\"Name\": \"Toninho Araujo\"\n"+
                "}";
    }

    public static String getInvalidClaim(){
        return "";
    }

    public static String getNumeroClaim(){
        return "\n{\n" +
                "\"Role\": \"External\",\n" +
                "\"Seed\": \"72341\",\n" +
                " \"Name\": \"M4ria Olivia\"\n" +
                "}";
    }
    public static String getMaisTresClaim(){
        return "\n{\n" +
                "\"Role\": \"Member\",\n" +
                "\"Org\": \"BR\",\n" +
                "\"Seed\": \"14627\",\n" +
                "\"Name\": \"Valdir Aranha\"\n" +
                "}";
    }
    public static String getClaimRoleSemValor(){
        return "\n{\n" +
                "\"Role\": \"\",\n"+
                "\"Seed\": \"7841\",\n"+
                "\"Name\": \"Toninho Araujo\"\n"+
                "}";
    }

    public static String getClaimSeedNumeroNaoPrimo(){
        return "\n{\n" +
                "\"Role\": \"Admin\",\n"+
                "\"Seed\": \"8261244\",\n"+
                "\"Name\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doloraaa\"\n"+
                "}";

    }


    public static String getClaimNameCaracteresMaximo256(){
        return "\n{\n" +
                "\"Role\": \"Admin\",\n"+
                "\"Seed\": \"7841\",\n"+
                "\"Name\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doloraaa\"\n"+
                "}";

    }

    public static String getClaimNameCaracteresMaior256(){
        return "\n{\n" +
                "\"Role\": \"Admin\",\n"+
                "\"Seed\": \"7841\",\n"+
                "\"Name\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doloraaab\"\n"+
                "}";

    }

    public static String getJwtValido(){
        return "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJTZWVkIjoiNzg0MSIsIk5hbWUiOiJUb25pbmhvIEFyYXVqbyJ9.QY05sIjtrcJnP533kQNk8QXcaleJ1Q01jWY_ZzIZuAg";
    }

    public static String getJwtInvalida(){
        return "eyJhbGciOiJzI1NiJ9.dfsdfsfryJSr2xrIjoiQWRtaW4iLCJTZrkIjoiNzg0MSIsIk5hbrUiOiJUb25pbmhvIEFyYXVqbyJ9.QY05fsdfsIjtrcJnP533kQNk8QXcaleJ1Q01jWY_ZzIZuAg";
    }

    public static String getJwtNumero(){
        return "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiRXh0ZXJuYWwiLCJTZWVkIjoiODgwMzciLCJOYW1lIjoiTTRyaWEgT2xpdmlhIn0.6YD73XWZYQSSMDf6H0i3-kylz1-TY_Yt6h1cV2Ku-Qs";
    }

    public static String getJwtMaisTresClaim(){
        return "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiTWVtYmVyIiwiT3JnIjoiQlIiLCJTZWVkIjoiMTQ2MjciLCJOYW1lIjoiVmFsZGlyIEFyYW5oYSJ9.cmrXV_Flm5mfdpfNUVopY_I2zeJUy4EZ4i3Fea98zvY";
    }
}

