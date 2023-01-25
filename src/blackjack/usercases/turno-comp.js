import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./ganador";
import { pedirCarta } from "./pedir-carta";

export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, puntosHTML, divCartasJugadores) => {
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
    } while (puntosComputadora <= puntosMinimos && puntosComputadora <= 21);
    determinarGanador(puntosJugadores);
}