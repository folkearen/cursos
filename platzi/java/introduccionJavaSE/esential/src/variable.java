public class variable {
//No es recomendable tener más de un método main en un proyecto, pero para terminoa de prueba y desarrollo podemos
// tener multiples entradas a nuestra aplicacion
    public static void main(String[] args) {
        //Declaro la variable
        int speed;
        speed = 19; //inicializo la variable
        System.out.println(speed);
        //Declaro e inicializo la variable
        String user = "Alan";
        System.out.println(user);
        //Alterar variables

        int ingreso = 100;
        System.out.println(ingreso);
        ingreso += 100;
        System.out.println(ingreso);
        ingreso-= 50;
        System.out.println(ingreso);
        ingreso += (30*2) - 45;
        System.out.println(ingreso);

        user += " Muñoz Badillo";
        System.out.println(user);

        //Naming, la variables deb-en comenzar con letra, _ o $, estos signos pueden ir en otra parte de la variable,
        // pero no se pueden incluir otros signos, se diferencia mayuscula de minuscula
        int Salario = 1;
        int salario = 2;
        int $salario = 0;
        int _salario = 3;
        System.out.println($salario);
        System.out.println(Salario);
        System.out.println(salario);
        System.out.println(_salario);
        //todas son variables ditintas
        String nombre_2 = "";
        String nombre$2 = "";
        //Es convencion ocupar mayuscula para las cosntantes
        final int MAX_WIDTH = 0;
        System.out.println(nombre_2);
        System.out.println(nombre$2);
        System.out.println(MAX_WIDTH);
        // final palabra reservada para constantes
    }
}
