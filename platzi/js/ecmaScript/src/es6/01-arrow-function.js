function square(num) {
    return num * num;
}

const square = (num) => {   //Al ser una funcion que no deberia modificarse, es mejor declararla como constante.
    return num * num;
}

const square = num => num * num; //Tambien funcion flecha pero simplificada, si solo tiene un parametro podemos implicitar la palbra return y los parentesis.
//Si necesita de mayor logica y otros scope debe hacerse con la version extendida.