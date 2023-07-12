public class Operadores {

    public static void main(String[] args) {
                    /*
        * Tipos de operadores
        * Asignación
        * a += b
        * a -= b
        * a *= b
        * a /= b
        * a %= b
        *
        * Incremento
        * */
        int lives = 4;
        lives --;
        lives ++;
        System.out.println(lives);

        //Prefijo, usa el estado actual de la varibale y luego incrementa
        int puntosA = 100 + lives++;
        System.out.println(puntosA);
        System.out.println(lives);

        //sufijo
        int puntosB = 100 + ++lives; // Incrementa la variable y luego usa su valor
        System.out.println(puntosB);
        System.out.println(lives);

        //En caso de solo incrementar, hacen exactamente los mismo
        int sum = 1;
        System.out.println(sum);
        sum++;
        System.out.println(sum);
        ++sum;
        System.out.println(sum);
    }
}
