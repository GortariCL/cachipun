$(document).ready(function(){

    $('#game-btn').on('click', function(){

        let num = prompt("¿Cuántas veces desea jugar?")
        let cantJuegos = parseInt(num);
        let jugados = 0;
        let gameWins = 0;
        let gameLoose = 0;
        let gameDraw = 0;

        while(cantJuegos > jugados){
            let choice = prompt("Elige tu opción: [1=piedra - 2=papel - 3=tijera]") 
            let pcChoice = Math.floor(Math.random()*3);
            

            if (choice !== "1" || choice !== "2" || choice !== "3"){
                choice = choice.toUpperCase();
            }else{
                choice = choice;
            }
            
            switch (choice){
                case "1":
                    if(pcChoice === 1){
                        alert("Tu seleccion: PIEDRA \nSelección de la máquina: PIEDRA");
                        alert("ES UN EMPATE!");
                        gameDraw++;
                    }else if(pcChoice === 2){
                        alert("Tu seleccion: PIEDRA \nSelección de la máquina: PAPEL");
                        alert("HAZ PERDIDO... LOOSER!");
                        gameLoose++;
                    }else{
                        alert("Tu seleccion: PIEDRA \nSelección de la máquina: TIJERA");
                        alert("HAZ GANADO CAMPEÓN!");
                        gameWins++;
                    }
                    break;

                    case "PIEDRA":
                    if(pcChoice === 1){
                        alert("Tu seleccion: PIEDRA \nSelección de la máquina: PIEDRA");
                        alert("ES UN EMPATE!");
                        gameDraw++;
                    }else if(pcChoice === 2){
                        alert("Tu seleccion: PIEDRA \nSelección de la máquina: PAPEL");
                        alert("HAZ PERDIDO... LOOSER!");
                        gameLoose++;
                    }else{
                        alert("Tu seleccion: PIEDRA \nSelección de la máquina: TIJERA");
                        alert("HAZ GANADO CAMPEÓN!");
                        gameWins++;
                    }
                    break;

                    case "2":
                    if(pcChoice === 1){
                        alert("Tu seleccion: PAPEL \nSelección de la máquina: PIEDRA");
                        alert("HAZ GANADO CAMPEÓN!");
                        gameWins++;
                    }else if(pcChoice === 2){
                        alert("Tu seleccion: PAPEL \nSelección de la máquina: PAPEL");
                        alert("ES UN EMPATE!");
                        gameDraw++;
                    }else{
                        alert("Tu seleccion: PAPEL \nSelección de la máquina: TIJERA");
                        alert("HAZ PERDIDO... LOOSER!");
                        gameLoose++;
                    }
                    break;

                    case "PAPEL":
                    if(pcChoice === 1){
                        alert("Tu seleccion: PAPEL \nSelección de la máquina: PIEDRA");
                        alert("HAZ GANADO CAMPEÓN!");
                        gameWins++;
                    }else if(pcChoice === 2){
                        alert("Tu seleccion: PAPEL \nSelección de la máquina: PAPEL");
                        alert("ES UN EMPATE!");
                        gameDraw++;
                    }else{
                        alert("Tu seleccion: PAPEL \nSelección de la máquina: TIJERA");
                        alert("HAZ PERDIDO... LOOSER!");
                        gameLoose++;
                    }
                    break;

                    case "3":
                    if(pcChoice === 1){
                        alert("Tu seleccion: TIJERA \nSelección de la máquina: PIEDRA");
                        alert("HAZ PERDIDO... LOOSER!");
                        gameLoose++;
                    }else if(pcChoice === 2){
                        alert("Tu seleccion: TIJERA \nSelección de la máquina: PAPEL");
                        alert("HAZ GANADO CAMPEÓN!");
                        gameWins++;
                    }else{
                        alert("Tu seleccion: TIJERA \nSelección de la máquina: TIJERA");
                        alert("ES UN EMPATE!");
                        gameDraw++;
                    }
                    break;

                    case "TIJERA":
                    if(pcChoice === 1){
                        alert("Tu seleccion: TIJERA \nSelección de la máquina: PIEDRA");
                        alert("HAZ PERDIDO... LOOSER!");
                        gameLoose++;
                    }else if(pcChoice === 2){
                        alert("Tu seleccion: TIJERA \nSelección de la máquina: PAPEL");
                        alert("HAZ GANADO CAMPEÓN!");
                        gameWins++;
                    }else{
                        alert("Tu seleccion: TIJERA \nSelección de la máquina: TIJERA");
                        alert("ES UN EMPATE!");
                        gameDraw++;
                    }
                    break;
            }
            jugados++;            
        }
        if(gameWins > gameLoose){
            alert("· Partidas ganadas: "+gameWins+"\n· Partidas Perdidas: "+gameLoose+"\n· Partidas empatadas: "+gameDraw+"\n\nHAZ GANADO EL JUEGO!");
        }else if(gameLoose > gameWins){
            alert("· Partidas ganadas: "+gameWins+"\n· Partidas Perdidas: "+gameLoose+"\n· Partidas empatadas: "+gameDraw+"\n\nHAZ PERDIDO EL JUEGO!");
        }else{
            alert("· Partidas ganadas: "+gameWins+"\n· Partidas Perdidas: "+gameLoose+"\n· Partidas empatadas: "+gameDraw+"\n\nHAZ EMPATADO EL JUEGO!");
        }
    });

});