function Ej1(){
    
let nombre;
let fechaNacimiento;

nombre = prompt("Introduce tu nombre");
fechaNacimiento = prompt("Introduce tu fecha de nacimiento con el siguiente formato: 'YYYY-MM-DD'");

let edad = calcularEdad(fechaNacimiento);

document.getElementById('edad').innerHTML = "Ej 1, edad: " + edad;
}

Ej1();