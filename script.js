const pantallaInicio =
    document.getElementById("pantallaInicio");


const pantallaJuego =
    document.getElementById("pantallaJuego");


const pantallaFinal =
    document.getElementById("pantallaFinal");


const arena =
    document.getElementById("arena");


const jugador1 =
    document.getElementById("jugador1");


const jugador2 =
    document.getElementById("jugador2");


const figuras =
    document.getElementById("figuras");


const nombre1Input =
    document.getElementById("nombre1");


const nombre2Input =
    document.getElementById("nombre2");


const color1Input =
    document.getElementById("color1");


const color2Input =
    document.getElementById("color2");


const nombreJuego1 =
    document.getElementById("nombreJuego1");


const nombreJuego2 =
    document.getElementById("nombreJuego2");


const control1 =
    document.getElementById("control1");


const control2 =
    document.getElementById("control2");


const puntos1Texto =
    document.getElementById("puntos1");


const puntos2Texto =
    document.getElementById("puntos2");


const rondaTexto =
    document.getElementById("ronda");


const tiempoTexto =
    document.getElementById("tiempo");


const rolesTexto =
    document.getElementById("roles");


const mapaTexto =
    document.getElementById("mapa");


const mensaje =
    document.getElementById("mensaje");


const error =
    document.getElementById("error");


const resultado =
    document.getElementById("resultado");


/* ================= VARIABLES ================= */

let nombre1 = "";

let nombre2 = "";

let color1 = "";

let color2 = "";

let teclas = {};

let jugando = false;

let ronda = 1;

let puntos1 = 0;

let puntos2 = 0;

let tiempo = 60;

let intervalo;

let animacion;


/* ================= DASH ================= */

let dashDisponible = true;

let dashEnUso = false;

const DURACION_DASH = 180;

const COOLDOWN_DASH = 1200;


/* ================= JUGADORES ================= */

let p1 = {

    x: 25,

    y: 25,

    velocidad: 5

};


let p2 = {

    x: 850,

    y: 500,

    velocidad: 5

};


/* ================= MAPA ================= */

const mapas = [

    {

        nombre:
            "🏙️ LABERINTO PIXEL",

        color:
            "#263b2b"

    }

];


/* ==================================================
   OBSTÁCULOS ORDENADOS
================================================== */

const mapasFiguras = [

    [

        /* ===== FILA 1 ===== */

        {
            tipo: "rectangulo",
            x: 80,
            y: 55,
            w: 120,
            h: 25
        },

        {
            tipo: "cuadrado",
            x: 250,
            y: 45,
            w: 50,
            h: 50
        },

        {
            tipo: "rombo",
            x: 360,
            y: 55,
            w: 45,
            h: 45
        },

        {
            tipo: "rectangulo",
            x: 470,
            y: 55,
            w: 120,
            h: 25
        },

        {
            tipo: "cuadrado",
            x: 650,
            y: 45,
            w: 50,
            h: 50
        },

        {
            tipo: "linea",
            x: 750,
            y: 70,
            w: 100,
            h: 10
        },


        /* ===== FILA 2 ===== */

        {
            tipo: "lineaVertical",
            x: 70,
            y: 140,
            w: 10,
            h: 80
        },

        {
            tipo: "cuadrado",
            x: 150,
            y: 145,
            w: 50,
            h: 50
        },

        {
            tipo: "rectangulo",
            x: 270,
            y: 155,
            w: 100,
            h: 25
        },

        {
            tipo: "rombo",
            x: 430,
            y: 145,
            w: 45,
            h: 45
        },

        {
            tipo: "cuadrado",
            x: 550,
            y: 140,
            w: 50,
            h: 50
        },

        {
            tipo: "rectangulo",
            x: 680,
            y: 155,
            w: 100,
            h: 25
        },


        /* ===== FILA 3 ===== */

        {
            tipo: "rectangulo",
            x: 45,
            y: 260,
            w: 110,
            h: 25
        },

        {
            tipo: "rombo",
            x: 210,
            y: 250,
            w: 45,
            h: 45
        },

        {
            tipo: "cuadrado",
            x: 320,
            y: 260,
            w: 50,
            h: 50
        },

        {
            tipo: "rectangulo",
            x: 440,
            y: 270,
            w: 110,
            h: 25
        },

        {
            tipo: "rombo",
            x: 600,
            y: 250,
            w: 45,
            h: 45
        },

        {
            tipo: "cuadrado",
            x: 720,
            y: 260,
            w: 50,
            h: 50
        },


        /* ===== FILA 4 ===== */

        {
            tipo: "linea",
            x: 80,
            y: 350,
            w: 120,
            h: 10
        },

        {
            tipo: "cuadrado",
            x: 250,
            y: 335,
            w: 50,
            h: 50
        },

        {
            tipo: "rectangulo",
            x: 360,
            y: 350,
            w: 110,
            h: 25
        },

        {
            tipo: "lineaVertical",
            x: 520,
            y: 330,
            w: 10,
            h: 80
        },

        {
            tipo: "rombo",
            x: 590,
            y: 340,
            w: 45,
            h: 45
        },

        {
            tipo: "rectangulo",
            x: 700,
            y: 350,
            w: 110,
            h: 25
        },


        /* ===== FILA 5 ===== */

        {
            tipo: "cuadrado",
            x: 60,
            y: 440,
            w: 50,
            h: 50
        },

        {
            tipo: "rectangulo",
            x: 160,
            y: 455,
            w: 110,
            h: 25
        },

        {
            tipo: "rombo",
            x: 320,
            y: 430,
            w: 45,
            h: 45
        },

        {
            tipo: "cuadrado",
            x: 430,
            y: 440,
            w: 50,
            h: 50
        },

        {
            tipo: "rectangulo",
            x: 540,
            y: 455,
            w: 110,
            h: 25
        },

        {
            tipo: "rombo",
            x: 700,
            y: 430,
            w: 45,
            h: 45
        }

    ]

];


/* ================= COMENZAR ================= */

function comenzarPartida() {

    nombre1 =
        nombre1Input.value.trim();

    nombre2 =
        nombre2Input.value.trim();


    if (nombre1 === "") {

        error.textContent =
            "⚠️ PLAYER 1 DEBE ESCRIBIR SU NOMBRE.";

        return;
    }


    if (nombre2 === "") {

        error.textContent =
            "⚠️ PLAYER 2 DEBE ESCRIBIR SU NOMBRE.";

        return;
    }


    color1 =
        color1Input.value;

    color2 =
        color2Input.value;


    nombreJuego1.textContent =
        nombre1;

    nombreJuego2.textContent =
        nombre2;


    control1.textContent =
        nombre1;

    control2.textContent =
        nombre2;


    jugador1.style.color =
        color1;

    jugador2.style.color =
        color2;


    pantallaInicio.style.display =
        "none";

    pantallaFinal.style.display =
        "none";

    pantallaJuego.style.display =
        "block";


    ronda = 1;

    puntos1 = 0;

    puntos2 = 0;


    actualizarPuntos();

    prepararRonda();

    iniciarRonda();
}


/* ================= INICIAR RONDA ================= */

function iniciarRonda() {

    if (jugando)
        return;


    jugando = true;

    tiempo = 60;

    tiempoTexto.textContent =
        tiempo;


    if (
        ronda === 1 ||
        ronda === 3
    ) {

        rolesTexto.textContent =
            "🏃 " +
            nombre1 +
            " CORRE  |  🔪 " +
            nombre2 +
            " PERSIGUE";

    } else {

        rolesTexto.textContent =
            "🏃 " +
            nombre2 +
            " CORRE  |  🔪 " +
            nombre1 +
            " PERSIGUE";
    }


    mensaje.textContent =
        "▶ ¡CORRE!";


    clearInterval(intervalo);


    intervalo =
        setInterval(function() {

            tiempo--;

            tiempoTexto.textContent =
                tiempo;


            if (tiempo <= 0) {

                terminarRonda(
                    "corredor"
                );

            }

        }, 1000);


    cancelAnimationFrame(
        animacion
    );


    animacion =
        requestAnimationFrame(
            mover
        );
}


/* ================= PREPARAR RONDA ================= */

function prepararRonda() {

    p1.x = 25;

    p1.y = 25;


    p2.x = 850;

    p2.y = 500;


    const mapa =
        mapas[0];


    arena.style.background =
        mapa.color;


    mapaTexto.textContent =
        mapa.nombre;


    rondaTexto.textContent =
        ronda;


    crearFiguras();

    actualizarJugadores();

    actualizarArmas();

    dashDisponible = true;

    dashEnUso = false;

    jugador1.classList.remove("dashActivo");

    jugador2.classList.remove("dashActivo");
}


/* ================= CREAR OBSTÁCULOS ================= */

function crearFiguras() {

    figuras.innerHTML = "";


    const lista =
        mapasFiguras[0];


    lista.forEach(
        function(figura) {

            const elemento =
                document.createElement(
                    "div"
                );


            elemento.classList.add(
                "figura"
            );


            elemento.classList.add(
                figura.tipo
            );


            elemento.style.left =
                figura.x + "px";


            elemento.style.top =
                figura.y + "px";


            elemento.style.width =
                figura.w + "px";


            elemento.style.height =
                figura.h + "px";


            figuras.appendChild(
                elemento
            );

        }
    );
}


/* ================= TECLADO ================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "ArrowUp" ||
            event.key === "ArrowDown" ||
            event.key === "ArrowLeft" ||
            event.key === "ArrowRight"
        ) {

            event.preventDefault();

        }


        teclas[
            event.key.toLowerCase()
        ] = true;


        /* ================= DASH ================= */

        if (
            event.key === "Shift" &&
            !event.repeat &&
            jugando
        ) {

            const corredorEsP1 =
                ronda === 1 ||
                ronda === 3;

            const corredor =
                corredorEsP1 ? p1 : p2;

            activarDash(
                corredor,
                corredorEsP1
            );
        }

    }
);


document.addEventListener(
    "keyup",
    function(event) {

        if (
            event.key === "ArrowUp" ||
            event.key === "ArrowDown" ||
            event.key === "ArrowLeft" ||
            event.key === "ArrowRight"
        ) {

            event.preventDefault();

        }


        teclas[
            event.key.toLowerCase()
        ] = false;

    }
);


/* ================= DASH ================= */

function activarDash(
    jugador,
    esP1
) {

    if (
        !dashDisponible ||
        dashEnUso
    ) {
        return;
    }


    dashDisponible = false;

    dashEnUso = true;


    const velocidadAnterior =
        jugador.velocidad;


    jugador.velocidad = 11;


    const elemento =
        esP1
            ? jugador1
            : jugador2;


    elemento.classList.add(
        "dashActivo"
    );


    mensaje.textContent =
        "💨 ¡DASH!";


    setTimeout(
        function() {

            jugador.velocidad =
                velocidadAnterior;

            jugador1.classList.remove(
                "dashActivo"
            );

            jugador2.classList.remove(
                "dashActivo"
            );

            dashEnUso = false;

        },
        180
    );


    setTimeout(
        function() {

            dashDisponible = true;

            if (jugando) {

                mensaje.textContent =
                    "💨 DASH LISTO";

            }

        },
        1200
    );
}


/* ================= CUCHILLO DEL PERSEGUIDOR ================= */

function actualizarArmas() {

    const perseguidorEsP1 =
        ronda === 2;


    if (perseguidorEsP1) {

        jugador1.innerHTML =
            "🔪";

        jugador2.innerHTML =
            "●";

        jugador1.classList.add(
            "asesino"
        );

        jugador2.classList.remove(
            "asesino"
        );

    } else {

        jugador1.innerHTML =
            "●";

        jugador2.innerHTML =
            "🔪";

        jugador1.classList.remove(
            "asesino"
        );

        jugador2.classList.add(
            "asesino"
        );
    }
}


/* ================= MOVIMIENTO ================= */

function mover() {

    if (!jugando)
        return;


    let corredor;

    let perseguidor;


    if (
        ronda === 1 ||
        ronda === 3
    ) {

        corredor = p1;

        perseguidor = p2;

    } else {

        corredor = p2;

        perseguidor = p1;

    }


    moverConColision(
        p1,
        teclas["a"],
        teclas["d"],
        teclas["w"],
        teclas["s"]
    );


    moverConColision(
        p2,
        teclas["arrowleft"],
        teclas["arrowright"],
        teclas["arrowup"],
        teclas["arrowdown"]
    );


    actualizarJugadores();


    if (
        colisionJugadores(
            corredor,
            perseguidor
        )
    ) {

        terminarRonda(
            "perseguidor"
        );

        return;
    }


    animacion =
        requestAnimationFrame(
            mover
        );
}


/* ================= MOVIMIENTO + COLISIÓN ================= */

function moverConColision(
    jugador,
    izquierda,
    derecha,
    arriba,
    abajo
) {

    let dx = 0;

    let dy = 0;


    if (izquierda)
        dx -= jugador.velocidad;


    if (derecha)
        dx += jugador.velocidad;


    if (arriba)
        dy -= jugador.velocidad;


    if (abajo)
        dy += jugador.velocidad;


    if (dx !== 0) {

        const nuevoX =
            jugador.x + dx;


        if (
            !chocaObstaculo(
                nuevoX,
                jugador.y
            )
        ) {

            jugador.x =
                nuevoX;

        }

    }


    if (dy !== 0) {

        const nuevoY =
            jugador.y + dy;


        if (
            !chocaObstaculo(
                jugador.x,
                nuevoY
            )
        ) {

            jugador.y =
                nuevoY;

        }

    }


    limitarMovimiento(
        jugador
    );
}


/* ================= COLISIÓN OBSTÁCULOS ================= */

function chocaObstaculo(
    x,
    y
) {

    const jugadorAncho =
        24;


    const jugadorAlto =
        24;


    const elementos =
        figuras.querySelectorAll(
            ".figura"
        );


    for (
        let obstaculo of elementos
    ) {

        const arenaRect =
            arena.getBoundingClientRect();


        const obstaculoRect =
            obstaculo.getBoundingClientRect();


        const ox =
            obstaculoRect.left -
            arenaRect.left;


        const oy =
            obstaculoRect.top -
            arenaRect.top;


        const ow =
            obstaculoRect.width;


        const oh =
            obstaculoRect.height;


        if (

            x < ox + ow &&

            x + jugadorAncho > ox &&

            y < oy + oh &&

            y + jugadorAlto > oy

        ) {

            return true;

        }

    }


    return false;
}


/* ================= LÍMITES ================= */

function limitarMovimiento(
    jugador
) {

    const ancho =
        arena.clientWidth;


    const alto =
        arena.clientHeight;


    if (jugador.x < 0)
        jugador.x = 0;


    if (jugador.y < 0)
        jugador.y = 0;


    if (
        jugador.x >
        ancho - 24
    )

        jugador.x =
            ancho - 24;


    if (
        jugador.y >
        alto - 24
    )

        jugador.y =
            alto - 24;
}


/* ================= ACTUALIZAR ================= */

function actualizarJugadores() {

    jugador1.style.left =
        p1.x + "px";


    jugador1.style.top =
        p1.y + "px";


    jugador2.style.left =
        p2.x + "px";


    jugador2.style.top =
        p2.y + "px";
}


/* ================= COLISIÓN JUGADORES ================= */

function colisionJugadores(
    corredor,
    perseguidor
) {

    const dx =
        corredor.x -
        perseguidor.x;


    const dy =
        corredor.y -
        perseguidor.y;


    const distancia =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    return distancia < 27;
}


/* ================= TERMINAR RONDA ================= */

function terminarRonda(
    ganador
) {

    jugando = false;


    clearInterval(
        intervalo
    );


    cancelAnimationFrame(
        animacion
    );


    jugador1.classList.remove(
        "dashActivo"
    );

    jugador2.classList.remove(
        "dashActivo"
    );


    if (
        ganador === "corredor"
    ) {

        if (
            ronda === 1 ||
            ronda === 3
        ) {

            puntos1++;


            mensaje.textContent =
                "★ " +
                nombre1 +
                " SOBREVIVIÓ +1";

        } else {

            puntos2++;


            mensaje.textContent =
                "★ " +
                nombre2 +
                " SOBREVIVIÓ +1";
        }

    }


    if (
        ganador === "perseguidor"
    ) {

        if (
            ronda === 1 ||
            ronda === 3
        ) {

            puntos2++;


            mensaje.textContent =
                "🔪 " +
                nombre2 +
                " ATRAPÓ AL CORREDOR +1";

        } else {

            puntos1++;


            mensaje.textContent =
                "🔪 " +
                nombre1 +
                " ATRAPÓ AL CORREDOR +1";
        }

    }


    actualizarPuntos();


    if (ronda < 3) {

        ronda++;


        setTimeout(
            function() {

                prepararRonda();


                mensaje.textContent =
                    "★ ROUND " +
                    ronda +
                    " READY";


                iniciarRonda();

            },
            1800
        );

    } else {

        setTimeout(
            finalizarJuego,
            1800
        );

    }
}


/* ================= PUNTOS ================= */

function actualizarPuntos() {

    puntos1Texto.textContent =
        puntos1;


    puntos2Texto.textContent =
        puntos2;
}


/* ================= FINAL ================= */

function finalizarJuego() {

    pantallaJuego.style.display =
        "none";


    pantallaFinal.style.display =
        "flex";


    if (
        puntos1 > puntos2
    ) {

        resultado.innerHTML =
            "🏆 " +
            nombre1 +
            " GANA<br><br>" +
            puntos1 +
            " - " +
            puntos2;

    } else if (
        puntos2 > puntos1
    ) {

        resultado.innerHTML =
            "🏆 " +
            nombre2 +
            " GANA<br><br>" +
            puntos2 +
            " - " +
            puntos1;

    } else {

        resultado.innerHTML =
            "🤝 EMPATE<br><br>" +
            puntos1 +
            " - " +
            puntos2;

    }
}


/* ================= VOLVER AL INICIO ================= */

function volverInicio() {

    pantallaFinal.style.display =
        "none";


    pantallaInicio.style.display =
        "flex";


    mensaje.textContent =
        "PREPARANDO PARTIDA...";


    error.textContent =
        "";


    teclas = {};


    jugando = false;


    clearInterval(
        intervalo
    );


    cancelAnimationFrame(
        animacion
    );


    dashDisponible = true;

    dashEnUso = false;

    jugador1.classList.remove(
        "dashActivo"
    );

    jugador2.classList.remove(
        "dashActivo"
    );
}