/**
 * Operador
- Elemento que nos permite realizar una operacion entre dos o mas elementos


*Operadores aritmeticos (+, -, *, /)

*Operadores de asignacion (=, ==, === //asignacion, igualdad, igualdad estricta)

*Operadores de cadenas (toLowerCase, toUpperCase, trim, toString, concat)

*Operadores logicos (&&, ||, !)

*Operadores de comparacion (< >, <=, >=)

 */

/*//////////////////////////////////

OPERADORES ARITMETICOS

Son operadores que nos permiten tener valores numericos como sus operandos y retornar un valor numerico unico, corresponder a operaciones matematicas.

let res = 5 + 5; //resultado contendra el valor 10

let res1 = 10 - 4; // resultado contendra 6

let res2 = 6*3; //resultado contiene valor 18

let res3 = 15 / 3; res contendra 5

let res = 10 % 3; res contendra 1 (el resto del 10 dividido por 3)

incremento 
let numero = 5;
numero ++;
//ahora el numero contendra 6

decremento -- se usa para disminuir de 1 en 1
let numero1 = 8;
numero--; //ahora numero1 contendra el valor 7


*/

//operadores de asignacion EJEMPLOS
/**
 * DOBLE IGUAL
5 == "5"; // esto da true, ya que en JS convierte la cadena "5" a un numero antes de la comparacion 

*TRIPLE IGUAL - O IGUALDAD ESTRICTA
5 === "5" // false, porque no son del mismo tipo y los tipos tambien difieren 

 */

function convertir(celsius) { /*Se crea una funcion llamada convertir con un parametro para recibir los celcius */
    let resultado; /*se declara una variable para el resultado */
    resultado = (celsius * 9/5) +32; /*se le asigna a la variable la formula para hacer la conversion  */
    return resultado; /*se retorna el resultado */
}

console.log(convertir(22));