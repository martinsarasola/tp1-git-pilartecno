/*  
  Ejercicio 1: 
  Implementar la función 'extractValues' que toma un objeto y retorna un array con todos los valores del objeto.
  Ejemplo: 
  extractValues({a: 1, b: 2, c: 3}) debería retornar [1, 2, 3]
*/

function extractValues(obj) {
  return Object.values(obj);
}

var objeto = {a: 1, b: 2, c: 3};
var valores = extractValues(objeto);

/*  
  Ejercicio 2: 
  Implementar la función 'arrayToLengthCounters' que toma un array de strings y retorna un objeto donde cada elemento
  del array se convierte en una clave del objeto y el valor es la longitud de cada string.
  Ejemplo: 
  arrayToLengthCounters(['gato', 'perro', 'elefante']) debería retornar {gato: 4, perro: 5, elefante: 8}
*/

function arrayToLengthCounters(arr) {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    result[element] = element.length;
  }
  return result;
}

var array = ['gato', 'perro', 'elefante'];
var counters = arrayToLengthCounters(array);

/*  
  Ejercicio 3: 
  Implementar la función 'findKeysInCommon' que toma dos objetos y retorna un array con los nombres de las 
  propiedades que tienen en común.
  Ejemplo:
  findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}) debería retornar ['b', 'c']
*/

function findKeysInCommon(obj1, obj2) {
  var keysObj1 = Object.keys(obj1);
  var commonKeys = keysObj1.filter(function(key) {
    return obj2.hasOwnProperty(key);
  });
  return commonKeys;
}

var objeto1 = {a: 1, b: 2, c: 3};
var objeto2 = {b: 4, c: 5, d: 6};
var keysComunes = findKeysInCommon(objeto1, objeto2);


// Llamamos a las funciones y mostramos los resultados

function main() {
  console.log(extractValues({a: 1, b: 2, c: 3}));
  console.log(arrayToLengthCounters(['gato', 'perro', 'elefante']));
  console.log(findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}));
}

main();
