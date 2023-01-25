import { valorCarta } from "./valor-carta";
/**
 * Acumula puntos de un jugador
 * @param {string} carta 
 * @param {Number} turno 
 * @param {Array<number>} puntosJugadores 
 * @param {} puntosHTML 
 * @returns Array<number>
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}