import _ from 'underscore';
import { pedirCarta, crearDeck, acumularPuntos, crearCarta, turnoComputadora} from "./usercases";

const miModulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S']
        , especiales = ['A', 'J', 'Q', 'K'];
    let puntosJugadores = [];

    const btnPedir = document.querySelector('#btnPedir')
        , btnDetener = document.querySelector('#btnDetener')
        , btnNuevo = document.querySelector('#btnNuevo')
        , puntosHTML = document.querySelectorAll('small')
        , divCartasJugadores = document.querySelectorAll('.divCartas');

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnDetener.disabled = false;
        btnPedir.disabled = false;
    }

    //Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck),
        puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
        crearCarta(carta, 0, divCartasJugadores);

        if (puntosJugador >= 21) {
            turnoComputadora(puntosJugador,deck,puntosJugadores,puntosHTML,divCartasJugadores);
            btnPedir.disabled = true;
            btnDetener.disabled = true;
        }
    });

    btnDetener.addEventListener('click', () => {
        turnoComputadora(puntosJugadores[0],deck,puntosJugadores,puntosHTML,divCartasJugadores);
        btnDetener.disabled = true;
        btnPedir.disabled = true;
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    }

})();