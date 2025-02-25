// Día 1: operadores de comparación
// Diferencia entre 
// "==" igual a , compara valor
// "===" idéntico a, compara valor y tipo

let numeroUn = 1
let stringUn = '1'

let numeroTreinta = 30
let stringTreinta = '30'

let numeroDiez = 10
let stringDiez = '10'

//ejercicio 1 
if (numeroUn == stringUn ) {
    console.log(`Las variables ${numeroUn} y ${stringUn} tienen el mismo valor, pero son de tipos diferentes.`)
  } 
else {
    console.log(`Las variables ${numeroUn} y ${stringUn} no tienen el mismo valor.`)
  }

//   ejercicio 2
if ( numeroTreinta === stringTreinta) {
    console.log(`Las variables ${numeroTreinta} y ${stringTreinta} tienen el mismo valor y el mismo tipo`)
  } 
  else {
    console.log(`Las variables  ${numeroTreinta} y ${stringTreinta} no tienen el mismo tipo`)
  }

//ejercicio 3
if (numeroDiez == stringDiez) {
  console.log(`Las variables ${numeroDiez} y ${stringDiez} tienen el mismo valor, pero tipos diferentes`)
}
else {
  console.log(`Las variables ${numeroDiez} y ${stringDiez} no tienen el mismo valor`)
}