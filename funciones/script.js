
//alert ("Hello plebes");

//Inicializando una variable
var caja 
//asignando valor a una variable
var caja = "hola"
//mostrando resultado en la pantalla
console.log(caja);

//tipos de datos primitivos y no primitivos
/*
string
number
boolean
undefined
null
symbol
object (no primitivo)
*/

//string son cadenas de texto, van entre comillas simples o dobles

var segundaCaja = "segunda caja";

//number, no lleva comillas y se usa para numeros 
var edad = 29;

// boolean solo tiene true o false
var tieneCuenta = false;

//undefined se declara pero no se inicializa con ningun valor
var tercerCaja = undefined;

//null es un valor que no tenemos pero que declaramos
var listaDeCitas = null; 
 /* //////////////////////////////////////////////////////*/


 //string
 var nombreUsuario = "Luis";
 var correoElectronico = "luis@gmail.com";

 //num
 var edadUsuario = 30;
 var precioExtraccion = 500;

 //boolean
 var clienteActivo = true;
 var clientePromos = false;

 //undefined 
 var proximaCita = undefined;
 var procedimiento = undefined;

 //null
 var confirmacionCita = null;
 var confirmacionFacturacion = null;

//string a num
    var nuevoNombre = parseInt(nombreUsuario);
    console.log(nuevoNombre);
    console.log(typeof(nuevoNombre));

//num a string
    var nuevaEdad = edadUsuario.toString();
    console.log (nuevaEdad);
    console.log (typeof(nuevaEdad))



 /*//////////////////////////// 
 
 typeof - es una palabra reservada para saber que tipo de dato tiene un valor asignado en una variable*/

 /*console.log(typeof(edadUsuario));*/

 //var es una declaracion de variable es de alcance global, disponible en todo el codigo.

 //let es para un contexto mas local, se utiliza dentro de bloques de codigo.

 //const es una variable constante que no cambia

 //cambiar un numerico a string
/* var edadDos = edad.toString();
 console.log(edadDos);
 console.log(typeof(edadDos));*/

