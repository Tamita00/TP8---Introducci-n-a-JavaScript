function Ej2(){
    const frutas = ["Manzana", "Banana", "Uvas", "Pera", "Naranja", "Mandarina", "Anana", "Melon", "Sandia", "Durazno"];
    let userIngresa = prompt("Ingresa una fruta");

    document.getElementById('resultado').innerHTML = TirandoFruta(frutas, userIngresa);
}

Ej2()