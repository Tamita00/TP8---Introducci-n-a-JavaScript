//1

function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

//2

function TirandoFruta(frutas, userIngresa){
    
    let busqueda = frutas.find(fruta => fruta === userIngresa);
    let resultado;
    if (busqueda == null){
        resultado = "Ej2, No hay más " + userIngresa;
    }
    else{
        resultado = "Ej2, Tenemos " + busqueda;
    }
    return resultado;
}

//3
function ComparandoDatosA() {
    let comparacionA;
    if (10 == '10') comparacionA = "Si es";
    else comparacionA = "Ej3, No es";
    return comparacionA;
}

function ComparandoDatosB(comparacionB) {

    if (10 === '10') comparacionB = "Si es";
    else comparacionB = "Ej3, No es";
    return comparacionB;
}

function ComparandoDatosC() {
    let comparacionC;
    return comparacionC = "Ej3, " + typeof 10.6;
}

//4

//BUTI


//5
function DoblePalabra(palabra){
    
}