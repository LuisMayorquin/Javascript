//FUNCIONES
/*
Una funcion es un bloque de codigo que realiza una tarea especifica cuando se le llama.
Cada funcion de JS es un objeto llamado funcion
*/

function saludar () {
    console.log("Esta es una funcion");
}
saludar();
/*
Las funciones son objetos especiales con la capacidad adicional de ser llamdos como funciones, significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones, esto facilita la creacion de funciones de orden superior, como funciones de devolucion de llamadas y funciones que generan otras funciones.
 */

/*Declarar funciones

palabra reservada- function - nombre de la funcion - parentesis (), pueden contener parametros o no, seguido de las llaves, para mostrar el bloque del codigo  {
    dependiendo de las instrucciones dentro del cuerpo de la funcion y del proposito de la misma, se determina si la funcion retorna o no un valor.
}
*/
//llamamos una funcion y almacenamos un resultado
function suma (a, b) {
    return a + b;
}
var resultado = suma(5,5); //almacenas la suma de la funcion en la variable resultado
console.log(resultado); // funcion mostrada en consola
//igual se podría imprimir con console.log(suma(5, 5))

//funcion que muestre un msj en la consola
function saludo (nombre) {
    console.log("Hola, " + nombre + "!");
}
saludo("luis");
/** * La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama. */

/*Hoisting
Yo puedo invocar una funcion antes de siquiera declararla

--
Es fundamental en el entendimiento de la forma en que se ejeecuta nuestro código JS, esto aplica tanto para variables como para funciones. Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.
*/
console.log(miVariable); //no da error pero imprime undefined
var miVariable = 10;
//scope - es el alcance, hace referencia al alcance de una variable en el codigo JS.
/**
 * Global - significa que se puede utilizar una variable dentro de cualquier parte del codigo
 * 
 * var: no es tan recomendado, por comportamiendo de la varieble y la poca adaptabilidad.
 * let - es preferible e incluso mas segura de utilizar porque ademas de funcionar de manera global tambien de manera local 
 * 
 * const - se refiere a constante, quiere decir que el valor no puede ser re-asignado 
 */

//variable local
function funcionConVariableLocal() {
    var mensaje = "";
    console.log(mensaje);
}
//funcionConVariableLocal ();
//var mensaje = "hello";
//console.log(mensaje);

/**
 * En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error.
 */

//variable global
var mensajeGlobal = "esta es una variable global";

function funcionConVariableGlobal () {
    console.log(mensajeGlobal);
}
funcionConVariableGlobal (); //llamada a la funcion

/**En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. */

//FUNCIONES TRADICIONALES




//FUNCIONES ANONIMAS
/**
 * Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o parametros en otras funciones.
 * La diferencia principal de estas funciones es que se declaran sin un nombre.

 */
//function () {
    //console.log("Hola plebes"); //funcion anonima
//}
const saludoAnonimo = function () {
    console.log("Hola Plebes");
}
saludoAnonimo();

//FUNCIONES FLECHA
/**
 * Una forma mas concisa de definir funciones anonimas, se le llama flecha debido a su sintaxis que utiliza =>
 * Basicamente se trata de reemplazar la palabra function y a;adir la funcion flecha => antes de abrir las llaves
 */
const resta = (a, b) => a - b;
/**
 * esta funcion flecha es una forma mas corta de 
    const resta = function (a.b) {
        return a - b;
    }
 */

console.log(resta(5,3));

//tipos de funciones, hoisting, scope, invocacion