public class tiposDatos {
    public static void main(String[] args) {
        // =============Datos numericos=============
        //Enteros
        /*byte: 1 byte
        short: 2 bytes
        int: 4 bytes
        double : 4 bytes
        long: 8 bytes*/

        int n = 1234567890; //solo almacenas numero de hasta 10 digitos, es comodin ente los tipos enteros
        long nL =12345678901L; //Los tipos de datos long deben llevar una L al final de lo contario, es reconocido
        // por el compilador como uin int y no soportara mas de 10 digitos.

        //flotantes
        float nF = 123.4543543F; //Debe llevar una F al final, sino, es tomado como un double por el compilador, se ocupa
        // cuando no se necesita demasiada presicion.

        double nD = 123.4543543; // Se utiliza cuando se necesita mucha presicion, comodin.


        // =============Datos texto=============

        char textCh = 'a'; //Solo puede almacenar un caracterm y debe ir entre comillas simples.
        String textStr = "aaaaaaaaaaaaaaaaa"; //Almacena mas de un caracter, debe ir entre comillas dobles.

        // =============Datos logicos=============

        boolean verd = true;
        boolean fals = false;


        //**************A PARTIR DE JAVA 10 *************
        var saldo = 100; //puedo usar var y java autoinfiere el tipo de dato
        var text = "Hola Mundo!";
        //Se pueden operar tal cual como si hubiese indicado el tipo de dato como prefijo en la variable, solo
        //puedo ocupar esta sintaxis para java 10 o superior, en infreior no funcionara.
    }
}
