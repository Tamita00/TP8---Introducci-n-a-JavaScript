function Ej8(){
    const fraseHTML = document.getElementById('Frase');
    let cadenaIngresada = prompt("Ingrese una cadena de texto");
    const palabraAremplazar = prompt("Ingrese la palabra que desea reemplazar");
    const palabraReemplazo = prompt("Ingrese la palabra de reemplazo");
    let fraseFinal = cadenaIngresada.replace(palabraAremplazar,palabraReemplazo);
    fraseHTML.innerHTML = "Ej 8, " + ejer8(cadenaIngresada, palabraAremplazar,palabraReemplazo);
}
Ej8()