public class casteo {
    public static void main(String[] args) {
        double d = 3.2;
        int i = (int)d; //Al convertir, redondea hacia abajo. 
        System.out.println(d);
        System.out.println(i);

        int a = 30;
        int b = 12;

        System.out.println(a/b); //Al ser enteros me devolvera la diviision exacta, 
        //en vez de 2.5 devolvera solo 2. Si deseo division completa
        //ocupo double o lo casteo a doubel

        System.out.println((double) a/b);

    }
}
