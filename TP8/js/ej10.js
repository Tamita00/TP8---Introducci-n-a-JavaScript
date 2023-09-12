function Ej10(){
    const ReemplazoHTML = document.getElementById('Reemplazo');
    let StringComas = prompt("Ingresa una lista de elementos separados por comas");
    let StringGuion = StringComas.replaceAll(",","-");
    ReemplazoHTML.innerHTML = StringGuion;
}

Ej10();