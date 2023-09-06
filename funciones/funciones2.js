//FUNCIONES
//PROGRAMA PARA HACER UNA LIMONADA 
function exprimirLimones(cantidad){
    console.log("Exprimiendo " + cantidad + "Limones");
    let jugoExtraido = cantidad * 10; //considerando obtener 10 ml de jugo por cada limon
    console.log ("Se obtuvo " + jugoExtraido + "ML de jugo de limon");
    return jugoExtraido;
}


// funcion para mezclar el jugo de limon con agua y azucar
function mezclarJugoDeLimon (cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar) {
    console.log("Mezclando " + cantidadDeJugo + "ml de jugo de limon con " + cantidadDeAgua + "ml de agua y " + cantidadDeAzucar + "gr de azucar");
}


//FUNCION PARA SERVIR UNA LIMONADA
function servirLimonada () {
    console.log("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true;
}

//FUNCION PRINCIPAL QUE PREPARA LIMONADA
function prepararLimonada (cantidadDeLimones){
    let jugoDeLimon = exprimirLimones (cantidadDeLimones);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10);
    servirLimonada();
}

//llamamos a la funcion principal 
var vasoDeLimonada = false;
prepararLimonada(5); //llamando al programa


//Crear un programa donde verifiquemos un proceso dentro de nuestro consultorio dental.