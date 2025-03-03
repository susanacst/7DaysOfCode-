let decision = prompt("¿Qué ruta deseas seguir? (1)Front-End (2)Back-End");
let mensajeMostrar = "";
let lenguajeElegido;
let respuestaRuta;
let respuestaBucle;
let tecnologiaAprender;

// 1
if (decision == 1) {
  mensajeMostrar = "¡Genial! Elegiste Front-End";
} else if (decision == 2) {
  mensajeMostrar = "¡Genial! Elegiste Back-End";
}
alert(mensajeMostrar);
// 2
switch (decision) {
  case "1":
    lenguajeElegido = prompt(
      "¿Qué ruta de Front-End deseas seguir? (1)Vue (2)React"
    );
    if (lenguajeElegido == 1) {
      alert("¡Genial! Elegiste Vue");
    } else {
      alert("¡Genial! Elegiste React");
    }
    break;
  case "2":
    lenguajeElegido = prompt(
      "¿Qué ruta de Back-End deseas seguir? (1)C# (2)Java"
    );
    if (lenguajeElegido == 1) {
      alert("¡Genial! Elegiste C#");
    } else {
      alert("¡Genial! Elegiste Java");
    }
    break;
  default:
    alert("Elija una de las dos opciones que se le presentan a continuación.");
}
//3
respuestaRuta = prompt(
  "¿Deseas continuar especializandote (1) O prefieres seguir desarrollándote como fullstack (2)?"
);
if (respuestaRuta == 1) {
  alert("Muy bien, continúas en la ruta.");
} else {
  alert("Muy bien, ahora serás fullstack.");
}

//4
let continuar = true;
let listaDeAprendizaje = [];

while (continuar) {
  respuestaBucle = prompt(
    "¿Hay alguna otra tecnología que te gustaría aprender (1)Sí (2)No"
  );
  if (respuestaBucle == 1) {
    tecnologiaAprender = prompt("¿Cuál tecnología que te gustaría aprender?");
    listaDeAprendizaje.push(tecnologiaAprender);
    alert(`Suena muy interesante aprender ${tecnologiaAprender} ¡Esfuerzate!.`);
  } else {
    continuar = false;
  }
}
alert("Aquí tienes tu lista de aprendizaje:  " + listaDeAprendizaje);
