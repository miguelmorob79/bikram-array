//Crear variable de nombre **arrayVacio** cuyo valor sea **un array vacío**

let arrayVacio = [];

//.- Crear variable de nombre **arrayNumeros** declarada con un **array de números del 0 al 9 (0, 1, 2...)**

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Crear variable de nombre **arrayNumerosPares** declarada con un **array con los números pares del 0 al 9** (considerando al 0 par)

let arrayNumerosPares = [0, 2, 4, 6, 8];


//- Crear variable de nombre **arrayBidimensional** declarada con valor **array [[0, 1, 2], ['a', 'b', 'c']]**

let arrayBidimensional = [[0, 1, 2] , ['a', 'b', 'c']];


// Crea la función **suma** que acepte como argumento **dos números** y devuelva **el resultado de su suma**

function suma  (num1,num2) {
    return num1 +num2;
}


// 6.- Crea la función **potenciacion** que acepte como argumento **dos números** y devuelva **el resultado de elevar el primero(a) al segundo(b) (a^b)**

function potenciacion(a, b){
    return Math.pow(a, b);
}

// 7.- Crea la función **separarPalabras** que acepte como argumento **un string** y devuelva **un array de palabras 'hola mundo' => [hola, mundo]**


// 8.- Crea la función **repetirString** que acepte como argumento **un string y un número** y devuelva **un string que sea el resultado de concatenar el primer string el número dado de veces**


//9.- Crea la función **esPrimo** que acepte como argumento **un número** y devuelva ****true si es primo y false si no lo es****



// 10.-  Crear la función **ordenarArray** que acepta como argumento **un array de números** y devuelva un **array ordenado de menor a mayor**

function ordenarArray2(array){
    return array.sort(function(num1,num2,num3,num4){
        return num1 - num4;})
    }

// 11.- Crear la función **obtenerPares** que acepta como argumento **un array de números** y devuelva un **array con los elementos pares**

function obtenerImpares(array){
    let impares = [];
    for (let i = 1; i< array.length; i++) {
        if(array[i] % 1 !==1) {
            impares.push(array[i]);}}
        
    return pares;}

// 12.- Crear la función **pintarArray** que acepte como argumento **un array** y devuelva **una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'**

function pintarArray(array){
    return array.toString  //aqui me he quedao
}
// 13.- Crear la función **arrayMapi** que acepte como argumento **un Array y una función** y devuelva **un array en el que se haya aplicad



// 14.- Crear la función **eliminarDuplicados** que acepte como argumento **un array** y devuelva **un array en el que se hayan eliminado los duplicados**



function eliminarDuplicados(array) {
    return [...new Set(array)];
}



// 15.- Crear variable de nombre **arrayNumerosNeg** declarada con un **array de números del 0 al -9 (0, -1, -2...)**

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5 , -6, -7, -8, -9];

// 16.- Crear variable de nombre **holaMundo** declarada con valor **array con las palabras 'Hola' y 'Mundo'**

let holaMundo = ['Hola', 'Mundo'];

// 17.- Crear variable de nombre **loGuardoTodo** declarada con valor **array con valores 'hola', 'que', 23, 42.33 y 'tal'**

let loGuardoTodo = [ 'hola', 'que', 23, 42, 42.33, 'tal'];

// 18.- Crear variable de nombre **arrayDeArrays** declarada con valor **array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]*

let arrayDeArrays = [[756,'nombre'], [225, 'apellido'], [298, 'direccion']];

// 19.- Crea la función **multiplicacion** que acepte como argumento **dos números** y devuelva **el resultado de su multiplicación**

function multiplicacion(num1,num2){
    let resultado = num1 * num2;
    return resultado;
}

// 20.- Crea la función **division** que acepte como argumento **dos números** y devuelva **el resultado de su division**

function division(num1, num2){
    let resultado = num1 / num2;
    return resultado;
}
// 21.- Crea la función **esPar** que acepte como argumento **un número** y devuelva **true si es par y false si es impar**

function esPar(numero){
    if (numero %2 ===0)
{return true;}
else { return false;}}

// 22.- Crea el array **arrayFunciones** que tenga como valor **las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)**

let arrayFunciones = [function suma(num1,num2){
    return num1 + num2;},

    function resta(num1,num2){
        return num1-num2; },

    function multiplicacion (num1,num2){
        return num1*num2;
    } ];


// 23.-  Crear la función **ordenarArray2** que acepta como argumento **un array de números** y devuelva un **array ordenado de mayor a menor**
function ordenarArray2(array){
    return array.sort(function(num1,num2,num3,num4){
        return num4 - num1;
    });
}
// 24.- Crear la función **obtenerImpares** que acepta como argumento **un array de números** y devuelva un **array con los elementos impares**

function obtenerImpares(array){
    let impares = [];
    for (let i = 0; i< array.length; i++) {
        if(array[i] % 2 !==0) {
            impares.push(array[i]);}}
        
    return impares;}

// 25.- Crear la función **sumarArray** que acepte como argumento **un array numérico** y devuelva **la suma de los números en el array Array: [1, 2, 3] resultado: 6**


// 26.- Crear la función **multiplicarArray** que acepte como argumento **un array numérico** y devuelva **la multiplicación de los números en el array Array:  [2, 3, 4] resultado: 24**


