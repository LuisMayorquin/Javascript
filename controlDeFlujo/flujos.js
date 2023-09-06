//FLUJO DE CONTROL

/**
 * Cuando hablamos de flujos de control, hablamos del orden natural en el que se ejecutan las instrucciones de nuestro programa (arriba-abajo  izquierda-derecha). Estas instrucciones pueden ser una funcion, un console.log, un ciclo etc. 
 

 * La importancia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (un elemento o instruccion detonante - condicionales).

Para alterear el flujo necesitamos CONDICIONALES....
    *las Condicionales son palabras reservadas que nos permiten evaluar si una condicion se cumple o no, bajo ciertos criterios estipulados por el programador. Las respuestas o salidas esperadas siempre partiran de un true o un false.

    tengo la camisa limpia?
    si - voy a la fiesta
    no - no voy

    tengo esta variable?
    si - ejecuta la linea 57 del codigo
    no - ejecuta la linea 30 del codigo

CONDICIONAL if (si)

if nos sirve para validar si una condicion se cumple o no, si se cumple, entonces ejecutamos un bloque de codigo que esta dentro del if, si no se cumple, entonces no hacemos nada.
     Nota: es la condicion mas sencilla pero mas limitante por que solo nos da una opcion.

if (condicion) {
    //bloque de codigo que se ejecuta si la condicion es verdadera.
}
EJEMPLO: Felipe va  a ir una fiesta y necesita tener su camisa favorita limpia para ir

 */
if(camisaLimpia = true){ //siempre tiene que ser true para que se jecute el codigo
    console.log("felipe va a la party");
}

//ELSE
/*
 Significa (de otro modo, si no, al contrario)

 if (condicional detonante){
    //bloque de codigo que se ejecuta si la condicion es verdadera
 } else {
    //bloque de codigo que se ejecuta si es falso
 }

 */
if (camisaLimpia = false){
    camisa.log("felipe va a la fiesta"); //true
} else {
    console.log("felipe no va"); //false
}

//hibrido else if
/*
esta condicion nos ayuda a jugar con mas opciones y mas detonantes, para tener muchas posibilidades en el mismo codigo, para lograr esto se une el else con el if (else if)

*/
//ejemplo -  felipe tiene hambre y quiere comer chilaquiles verdes 


//ejemplo - escribe un programa que muestre 3 mensajes diferentes el primer msj se muestra si son las 13 horas y debe imprimier "vamos a descanso", el segundo mensaje imprime si son las 14 vamos a comer, el tercer mensaje se muestra si no se cumple nada de lo anterior y debe imprimir "lo siento "

//prompt es una forma de ingresar datos y poder hacer uso de ellos

//pido un dato y lo guardo en una variable
let hora = prompt ("hola dime un numero");


//let hora = 13; antes del prompt

if(hora == 12){
    console.log("descanso");
} else if (hora ==14) {
    console.log("comida");
} else {
    console.log("sorry babe no hay descansos");
}

/**

SWITCH (cambiar o intercambiar / segun sea el caso)
Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de la opcion deseada (estado de la variable).

Evalua una expresion comparando el valor de una variable con la expresion o caso, y ejecuta las declaraciones asociadas con ese caso, asi como los casos que siguen. 

elementos principales del switch: un valor a evaluar, un detonante por cada caso, una salida para cada caso y una salida en general.

expresion con un valor
switch (expresion){
    case 1:
        // bloque de codigo que se ejecuta si la opcion seleccionada es igual a 1
        break;
    case 2:
        // bloque de codigo que se ejecuta si la opcion seleccionada es igual a 2
        break;

    case 3:
        // bloque de codigo que se ejecuta si la opcion seleccionada es igual a 3
        break;
    
    default:
        // bloque de codigo que se ejecuta si ninguna opcion coincide
        break;
}


 */

//practica de funciones  aplicables a un consultorio dental

//funcion calcular costo de una consulta (condicional)

//variables
let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;
let costo;

if(clienteFrecuente == true){
    costoTotal * prom
    console.log(costoTotal);
}

let especialidad = prompt ("Busque el tipo de especialidad requerida...")
switch(especialidad) {

    case "Odontologia":
        console.log("Servicio de Odontologia Disponible");
        break;
    case "Endodoncia":
        console.log("Servicio de Endodoncia Disponible");
        break;
    case "Ortodoncia":
        console.log("Servicio de Ortodoncia Disponible");
        break;
    case "Ortopediatra":
        console.log("Servicio de Ortopediatria Disponible");
        break;
    case "Periodoncia":
        console.log("Servicio de Periodoncia Disponible");
        break;
    case "Maxilofacial":
        console.log("Servicio Maxilofacial Disponible");
        break;   
    case "Patologia Bucal":
        console.log("Servicio de Patologia Bucal Disponible"); 
        break;
    case "Prostodoncia":
        console.log("Servicio de Prostodoncia y rehabilitacion oral Disponible");
        break;
    default:
        console.log("Servicio no disponible");


}

