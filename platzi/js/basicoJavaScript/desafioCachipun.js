function cachipun(jugador, maquina) {
    if (jugador === maquina) {
        console.log("Empate")
    }else if ((jugador === "tijera" && maquina === "papel") || (jugador === "papel" && maquina === "piedra") || (jugador === "piedra" && maquina === "tijera")){
        console.log("Ganaste")
    }else {
        console.log("perdiste")
    }
}

function cachipunS(jugador, maquina) {
    switch(true) {
        case jugador === maquina:
            console.log("Empate")
            break;
        case jugador === "tijera" && maquina === "papel":
            console.log("Ganaste")
            break;
        case jugador === "papel" && maquina === "piedra":
            console.log("Ganaste")
            break;
        case jugador === "piedra" && maquina === "tijera":
            console.log("Ganaste")
            break;
        default:
            console.log("Perdiste")
            break;
    }
}