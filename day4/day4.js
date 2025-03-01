 // dia 4 empieza aqui
 let numeroRandom = Math.floor(Math.random() * 10);

 let continuarTurno = true;
 let intentos = 1;
 let numeroUsuario;

 // console.log(numeroRandom);

 while (continuarTurno) {
   numeroUsuario = prompt(
     "Es un número del 0 al 10, ¿cuál número estaré pensando?"
   );
   if (numeroRandom == numeroUsuario) {
     alert("Felicidades, acertaste al número que estaba pensando.");
     continuarTurno = false;
   } else {
     if (intentos < 3) {
       alert(
         `Error, llevas ${intentos} intento(s).`
       );
       intentos++;
       
     } else if (intentos == 3) {
       alert(
         `Error, el número era ${numeroRandom} ¡Suerte a la próxima!.`
       );
       continuarTurno = false;
     }
   }
 }