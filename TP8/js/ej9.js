function Ej9(){
    const palabraNumero = document.getElementById('palabraNumero');
    let palabra = prompt("Ingrese una cadena de texto");
    let numero = prompt("Ingrese un numero");

    palabraNumero.innerHTML = "Ej 9, " +  palabra.slice(0, numero);
}
Ej9()