function Ej11(){
    
    const recaudacion = document.getElementById('pizzeria');
    const inputPedidos = prompt("Ingresa la lista de objetos pedidos y sus totales separados por coma (nombre:total):");
    const pedidosArray = inputPedidos.split(",");
    let recaudacionTotal = 0;

    for (let i = 0; i < pedidosArray.length; i++) {
        const pedido = pedidosArray[i].trim().split(":");
        const nombre = pedido[0];
        const total = parseFloat(pedido[1]);

        recaudacionTotal += total;
    }
    
    recaudacion.innerHTML = recaudacionTotal;
}

Ej11();