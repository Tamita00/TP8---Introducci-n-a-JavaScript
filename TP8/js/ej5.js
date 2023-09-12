function Ej5(){
    const dobleHTML = document.getElementById('doble');
    const numeros = [1, 2, 3, 4, 5];
    const numDobles = numeros.map(num => num*2);

    dobleHTML.innerHTML = numDobles.join(', ');

}
    
    Ej5();