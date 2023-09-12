function Ej4(){
    const CityHTML = document.getElementById('City');
    let ciudad = new Object();
    ciudad.Nombre = "Nueva York";
    ciudad.FechaFundacion = 1624;
    ciudad.Poblacion = 8,468,000;
    ciudad.Extension = "783,8 km²";

    for(let propiedad in ciudad){
        CityHTML.innerHTML += (`Ej4, ${propiedad} : ${ciudad[propiedad]} <br>`)
    }
    
}

Ej4();