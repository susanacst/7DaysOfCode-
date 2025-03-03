var listaFrutas = [];
var listaLacteos = [];
var listaCongelados = [];
var listaSnacks = [];
var listaBebidas = [];

let agregarAlimento = true;

while (agregarAlimento) {
  let respuestaUsuario = prompt(
    "¿Deseas agregar un alimento a tu lista de compras? (1)Sí (2)No"
  );

  if (respuestaUsuario === "2") {
    //si el usuario no quiere agregar más alimentos
    agregarAlimento = false;
    break;
  } else if (respuestaUsuario !== "1") {
    //introduce cualquier otra opción
    alert("Opción no válida. Por favor, responde con 1 o 2.");
    continue;
  }

  let alimento = prompt("¿Qué alimento deseas agregar?");
  let categoriaAlimento = prompt(
    "¿A qué categoría pertenece? (1)Frutas (2)Lácteos (3)Congelados (4)Snacks (5)Bebidas"
  );

  switch (categoriaAlimento) {
    case "1":
      listaFrutas.push(alimento);
      alert(`${alimento} añadido a la categoría de Frutas.`);
      break;
    case "2":
      listaLacteos.push(alimento);
      alert(`${alimento} añadido a la categoría de Lácteos.`);

      break;
    case "3":
      listaCongelados.push(alimento);
      alert(`${alimento} añadido a la categoría de Congelados.`);

      break;
    case "4":
      listaSnacks.push(alimento);
      alert(`${alimento} añadido a la categoría de Snacks.`);

      break;
    case "5":
      listaBebidas.push(alimento);
      alert(`${alimento} añadido a la categoría de Bebidas.`);

      break;
    default:
      alert("Categoría no válida.");
  }
}

alert(
  "Lista de compras:\n\n" +
    (listaFrutas.length > 0 ? "Frutas: " + listaFrutas.join(", ") + "\n" : "") +
    (listaLacteos.length > 0
      ? "Lácteos: " + listaLacteos.join(", ") + "\n"
      : "") +
    (listaCongelados.length > 0
      ? "Congelados: " + listaCongelados.join(", ") + "\n"
      : "") +
    (listaSnacks.length > 0 ? "Snacks: " + listaSnacks.join(", ") + "\n" : "") +
    (listaBebidas.length > 0
      ? "Bebidas: " + listaBebidas.join(", ") + "\n"
      : "")
);
