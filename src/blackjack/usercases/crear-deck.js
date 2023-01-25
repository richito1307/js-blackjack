import _ from 'underscore';

/**
 * Esta funcion genera una baraja mezclada
 * @param {array<string>} tipos Pne
 * @param {array<string>} especiales Si 
 * @returns array<string> Retorna un nuevo deck de cartas
 */

export const crearDeck = (tipos, especiales) => {

    if(!tipos || tipos.length === 0) throw new Error('Tipos es obligatorio como un arreglo de string');
    if(!tipos || especiales.length === 0) throw new Error('Tipos es obligatorio como un arreglo de string');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);
}