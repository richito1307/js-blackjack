/**
 * Esta funcion me premite tomar una carta
 * @param {Array<string>} deck 
 * @returns string Retorna una nueva carta
 */
export const pedirCarta = (deck) => {
    if (deck.length === 0) {
        throw 'No hay mas cartas en el deck';
    }
    return deck.pop();
}