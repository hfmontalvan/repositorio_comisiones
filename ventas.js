const VENTAS_META =5;

calcularComision = function(numeroVentas, precioProducto){
    let comision = 0;
    if(numeroVentas>VENTAS_META){
        let ventasExtra = numeroVentas - VENTAS_META;
        comision = ventasExtra * precioProducto * 0.10;
    }
    return comision;
}
calcular = function(){

    //Recuperamos propiedades de las cajas de texto
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    //Recuperamos el valor de las cajas de texto que los usuarios ingresan
    let componenteSueldoBaseStr = componenteSueldoBase.value;
    //Convertimos el texto a numero flotante 
    let sueldoBase = parseFloat(componenteSueldoBaseStr);

    let componenteNumeroVentas = document.getElementById("txtVentas");
    let componenteNumeroVentasStr = componenteNumeroVentas.value;
    let numeroVentas = parseFloat(componenteNumeroVentasStr);

    let componentePrecioProducto = document.getElementById("txtPrecio");
    let componentePrecioProductoStr = componentePrecioProducto.value;
    let precioProducto = parseFloat(componentePrecioProductoStr);

    let comision = calcularComision(numeroVentas,precioProducto);
    
    let total = sueldoBase + comision; 

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;


}

