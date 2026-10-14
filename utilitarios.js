function recuperarTexto(idComponente){
    //Recuperamos propiedades de las cajas de texto
    let componente = document.getElementById(idComponente);
    //Recuperamos el valor de las cajas de texto que los usuarios ingresan
    let valor = componente.value;

    return valor;

    //Convertimos el texto a numero flotante 
    let sueldoBase = parseFloat(componenteSueldoBaseStr);

    }