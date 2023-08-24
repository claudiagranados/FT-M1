'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //condición de corte que haya un elemento
  //caso base
  if(array.length <=1) return array;
//índice entre corchetes-floor para redondear para abajo-mathrandom da número aleatorio entre 0 y 1
let calcularPivot = Math.floor(Math.random() * array.length)
let pivot = array[calcularPivot]

//crear arrays para guardar, se necesitan 3 

let equals = [] //para el pivote y los que sean iguales al pivote
let left = []
let right = []

//un for para empezar a recorrer el array
for(let i = 0; i < array.length; i++){
  if(array[i] !== pivot){
    //evaluar si es mayor o menor
    if(array [i] < pivot) left.push(array[i])
    else right.push(array[i])
  }
  else equals.push(array[i])

}
//recursión primero entran los chiquitos left, equals no recursión
return quickSort(left).concat(equals).concat(quickSort(right))
//recursión es ir dando vueltas si tienes más de 2 elementos
// se van apilando (a equals no se le hace)
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //caso base
  if(array.length <=1 ) return array
  
  let mitad = Math.floor(array.length / 2)
  //hay que quedarse con la mitad de un lado y la mitad de otro
  let left = array.slice(0, mitad)
  let right = array.slice(mitad)

  array = [] //array vacio-reciclado para reutilizar la memoria

//antes que recorrer arrays hay que dividir todo
  left = mergeSort(left)
  right = mergeSort(right)

//comparar índices mientras haya elementos en arrays
  while(left.length && right.length){
    if(left[0] < right [0]) array.push(left.shift()) //shift saca al primer elemento del array
    else array.push(right.shift())
  }
  return array.concat(left, right)

}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
