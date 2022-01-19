$(document).ready(function () {

    $('#game-btn').on('click', function () {

        // Declaración de variables
        let num = prompt("¿Cuántas veces desea jugar?")
        let gamesNum = parseInt(num);
        let playedGames = 0;
        let gameWins = 0;
        let gameLoose = 0;
        let gameDraw = 0;
        let lostChances = 0;
        lost = 0;

        // Inicio ciclo while para el juego según veces que el usuario desee
        while (gamesNum > playedGames) {
            let choice = prompt("Elige tu opción: [ 1: piedra · 2: papel · 3: tijera ]")
            let pcChoice = Math.floor(Math.random() * 3);

            choice = choice.toUpperCase();

            // Validación de la opción seleccionada
            if (choice === "1" || choice === "2" || choice === "3" || choice === "PIEDRA" || choice === "PAPEL" || choice === "TIJERA") {
                switch (choice) {
                    case "1":
                        if (pcChoice === 1) {
                            alert("Tu seleccion: PIEDRA \nSelección de la máquina: PIEDRA");
                            alert("ES UN EMPATE!");
                            gameDraw++;
                        } else if (pcChoice === 2) {
                            alert("Tu seleccion: PIEDRA \nSelección de la máquina: PAPEL");
                            alert("HAZ PERDIDO... LOOSER!");
                            gameLoose++;
                        } else {
                            alert("Tu seleccion: PIEDRA \nSelección de la máquina: TIJERA");
                            alert("HAZ GANADO CAMPEÓN!");
                            gameWins++;
                        }
                        break;

                    case "PIEDRA":
                        if (pcChoice === 1) {
                            alert("Tu seleccion: PIEDRA \nSelección de la máquina: PIEDRA");
                            alert("ES UN EMPATE!");
                            gameDraw++;
                        } else if (pcChoice === 2) {
                            alert("Tu seleccion: PIEDRA \nSelección de la máquina: PAPEL");
                            alert("HAZ PERDIDO... LOOSER!");
                            gameLoose++;
                        } else {
                            alert("Tu seleccion: PIEDRA \nSelección de la máquina: TIJERA");
                            alert("HAZ GANADO CAMPEÓN!");
                            gameWins++;
                        }
                        break;

                    case "2":
                        if (pcChoice === 1) {
                            alert("Tu seleccion: PAPEL \nSelección de la máquina: PIEDRA");
                            alert("HAZ GANADO CAMPEÓN!");
                            gameWins++;
                        } else if (pcChoice === 2) {
                            alert("Tu seleccion: PAPEL \nSelección de la máquina: PAPEL");
                            alert("ES UN EMPATE!");
                            gameDraw++;
                        } else {
                            alert("Tu seleccion: PAPEL \nSelección de la máquina: TIJERA");
                            alert("HAZ PERDIDO... LOOSER!");
                            gameLoose++;
                        }
                        break;

                    case "PAPEL":
                        if (pcChoice === 1) {
                            alert("Tu seleccion: PAPEL \nSelección de la máquina: PIEDRA");
                            alert("HAZ GANADO CAMPEÓN!");
                            gameWins++;
                        } else if (pcChoice === 2) {
                            alert("Tu seleccion: PAPEL \nSelección de la máquina: PAPEL");
                            alert("ES UN EMPATE!");
                            gameDraw++;
                        } else {
                            alert("Tu seleccion: PAPEL \nSelección de la máquina: TIJERA");
                            alert("HAZ PERDIDO... LOOSER!");
                            gameLoose++;
                        }
                        break;

                    case "3":
                        if (pcChoice === 1) {
                            alert("Tu seleccion: TIJERA \nSelección de la máquina: PIEDRA");
                            alert("HAZ PERDIDO... LOOSER!");
                            gameLoose++;
                        } else if (pcChoice === 2) {
                            alert("Tu seleccion: TIJERA \nSelección de la máquina: PAPEL");
                            alert("HAZ GANADO CAMPEÓN!");
                            gameWins++;
                        } else {
                            alert("Tu seleccion: TIJERA \nSelección de la máquina: TIJERA");
                            alert("ES UN EMPATE!");
                            gameDraw++;
                        }
                        break;

                    case "TIJERA":
                        if (pcChoice === 1) {
                            alert("Tu seleccion: TIJERA \nSelección de la máquina: PIEDRA");
                            alert("HAZ PERDIDO... LOOSER!");
                            gameLoose++;
                        } else if (pcChoice === 2) {
                            alert("Tu seleccion: TIJERA \nSelección de la máquina: PAPEL");
                            alert("HAZ GANADO CAMPEÓN!");
                            gameWins++;
                        } else {
                            alert("Tu seleccion: TIJERA \nSelección de la máquina: TIJERA");
                            alert("ES UN EMPATE!");
                            gameDraw++;
                        }
                        break;
                }
            } else {
                lostChances = (gamesNum - (playedGames + 1));
                alert("INGRESASTE UNA OPCIÓN INVÁLIDA TE QUEDAN " + lostChances + " OPORTUNIDADES");
                lost++;
            }
            playedGames++;

        //Validación e impresión de resumen en el juego
        }
        if (gameWins > gameLoose) {
            alert("· Partidas Ganadas: " + gameWins + "\n· Partidas Perdidas: " + gameLoose + "\n· Partidas Empatadas: " + gameDraw + "\n· Jugadas Desperdiciadas: " + lost + "\n\nHAZ GANADO EL JUEGO!");
        } else if (gameLoose > gameWins) {
            alert("· Partidas Ganadas: " + gameWins + "\n· Partidas Perdidas: " + gameLoose + "\n· Partidas Empatadas: " + gameDraw + "\n· Jugadas Desperdiciadas: " + lost + "\n\nHAZ PERDIDO EL JUEGO!");
        } else if(gameWins === 0 && gameLoose === 0 && gameDraw === 0 && lost >= 1){
            alert("DESPERDICIASTE TUS PARTIDAS!");
        }else if (gamesNum <= 0){
            alert("NO PUEDES JUGAR 0 ó MENOS VECES... LARRY!")
        }else {
            alert("· Partidas Ganadas: " + gameWins + "\n· Partidas Perdidas: " + gameLoose + "\n· Partidas Empatadas: " + gameDraw + "\n· Jugadas Desperdiciadas: " + lost + "\n\nHAZ EMPATADO EL JUEGO!");
        }
    });

    // Tooltips Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});