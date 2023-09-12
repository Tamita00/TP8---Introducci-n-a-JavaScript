function Ej7(){
const inputNombres = prompt("Ingrese una lista de nombres separados por coma:");

const listaNombres = inputNombres.split(",").map(nombre => nombre.trim());

const nombresConA = listaNombres.filter(nombre => nombre.charAt(0).toLowerCase() === "a");

const listaNombresElement = document.getElementById("listaNombres");
listaNombresElement.innerHTML = "";

nombresConA.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent = "Ej7, " + nombre;
    listaNombresElement.appendChild(li);
});
}

Ej7();