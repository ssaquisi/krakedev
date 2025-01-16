calcularTasaInteres = function(ingresoAnual){
    if (ingresoAnual < 300000){ // Ingreso menor a 300 000 tiene una tasa del 16%
        return (ingresoAnual * 0.16);
    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) { // Ingreso mayor o igual a 300 000 y menor a 500 000 (sin incluir) tiene una tasa del 15%
        return (ingresoAnual * 0.15);
    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) { // Ingreso mayor o igual a 500 000 y menor a 1000000 (sin incluir) tiene una tasa del 14%
        return (ingresoAnual * 0.14);
    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) { // Ingreso mayor o igual a 1000000 y menor a 2000000 (sin incluir) tiene una tasa del 13%
        return (ingresoAnual * 0.13);
    } else{ // Última condición, si la empresa vende 2000000 o más, entonces la tasa es del 12%
        return (ingresoAnual * 0.12);
    }
}

calcularCapacidadPago = function(edad, ingresos, egresos){
    let cuota;
    if(edad <= 50){ // Persona de hasta 50 años
        let sobrante = ingresos - egresos // restando los egresos de los ingresos
        let capacidad = sobrante * 0.40 // capacidad del 40% de lo que le sobró al restar egresos de ingresos
        cuota = capacidad; // asigno el valor de la capacidad a la cuota
    } else{ // Persona mayor a 50 años
        let sobrante = ingresos - egresos // restando los egresos de los ingresos
        let capacidad = sobrante * 0.30 // capacidad del 30% de lo que le sobró al restar egresos de ingresos
        cuota = capacidad; // asigno el valor de la capacidad a la cuota
    }   
    return cuota;
}

calcularDescuento = function(precio, cantidad){
    let valorPagarFinal;
    let valorProductosSinDescuento = precio * cantidad;

    // Vamos a ver los descuentos que ocurren y en qué casos
    if(cantidad < 3){ // No hay descuentos
        valorPagarFinal = valorProductosSinDescuento;
    } else if(cantidad >= 3 && cantidad <= 5){ // Descuento del 2%
        let descuento = valorProductosSinDescuento * 0.02;
        valorPagarFinal = valorProductosSinDescuento - descuento;
    } else if(cantidad >= 6 && cantidad <= 11){ // Descuento del 3%
        let descuento = valorProductosSinDescuento * 0.03;
        valorPagarFinal = valorProductosSinDescuento - descuento;
    } else{ // Descuento del 4% para 12 o más productos
        let descuento = valorProductosSinDescuento * 0.04;
        valorPagarFinal = valorProductosSinDescuento - descuento;
    }

    return valorPagarFinal;
}

determinarColesterolLDL = function(nivelColesterol){
    // LDL tiene los siguientes niveles
    // Menos de 100 mg/dl NIVEL DE COLESTEROL DESEABLE
    // Entre 100 - 160 mg/dl NIVEL DE COLESTEROL ALTO
    // Más de 160 mg/dl NIVEL DE COLESTEROL MUY ALTO
    if(nivelColesterol < 100){
        return "NIVEL DE COLESTEROL DESEABLE"; // Mensaje en ese rango
    } else if(nivelColesterol >= 100 && nivelColesterol <= 160){
        return "NIVEL DE COLESTEROL ALTO"; // Mensaje en ese rango
    } else { // Valores mayores a 160
        return "NIVEL DE COLESTEROL MUY ALTO";
    }
}

validarClave = function(clave){
    let validez;
    // Clave válida si tiene al menos 8 caracteres y máximo 16 caracteres. En este caso se devuelve TRUE.
    // Es decir, si la clave no llega a los 8 caracteres, o es mayor a los 16 caracteres, devuelvo FALSO. 
    if(clave.length < 8 || clave.length > 16){ // LA PROPIEDAD .length CUENTA CUÁNTAS LETRAS HAY.
        validez = false;
    } else{
        validez = true;
    }
    return validez;
}

// El rango ASCII en que se encuentran las letras mayúsculas es del 65 al 90
esMayuscula = function(caracter){
    let esMayuscula;
    let codigoASCII = caracter.charCodeAt(0) // Asegurarme de escoger el primer caracter. Esto me devuelve UN NÚMERO QUE ES EL CÓDIGO ASCII
    if(codigoASCII >= 65 && codigoASCII <= 90){ // Verificar si ese codigo se encuentra en el rango de letras mayúsculas
        esMayuscula = true;
    } else{
        esMayuscula = false;
    }

    return esMayuscula;
}

// El rango ASCII en que se encuentran las letras minúsculas es del 97 al 122
esMinuscula = function(caracter){
    let esMinuscula;
    let codigoASCII = caracter.charCodeAt(0) // Asegurarme de escoger el primer caracter. Esto me devuelve UN NÚMERO QUE ES EL CÓDIGO ASCII
    if(codigoASCII >= 97 && codigoASCII <= 122){ // Verificar si ese codigo se encuentra en el rango de letras minúsculas
        esMinuscula = true;
    } else{
        esMinuscula = false;
    }
    
    return esMinuscula;
}

// El rango ASCII en que se encuentran los dígitos es del 48 al 57
esDigito = function(caracter){
    let esDigito;
    let codigoASCII = caracter.charCodeAt(0) // Asegurarme de escoger el primer caracter. Esto me devuelve UN NÚMERO QUE ES EL CÓDIGO ASCII
    if(codigoASCII >= 48 && codigoASCII <= 57){ // Verificar si ese codigo se encuentra en el rango de letras minúsculas
        esDigito = true;
    } else{
        esDigito = false;
    }
    
    return esDigito;
}

darPermiso = function(notaMatematica, notaFisica, notaGeometria){
    let permiso;
    // Si saca más de 90 en cualquiera de las tres materias. PUEDE SER CUALQUIERA, USAMOS ||
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        permiso = true;
    } else{
        permiso = false; // En ninguna sacó más de 90
    }
    return permiso;
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria){
    let permiso;
    // Solo puede salir si ocurre lo siguiente:
    // MÁS DE 90 en Matemáticas ó Física 
    // SOLO SI SACA MÁS DE 80 en Geometría
    if(notaMatematica > 90 || notaFisica > 90){ // Si cualquiera de las dos se cumple, validamos la última condición
        if(notaGeometria > 80){ // Si se cumple
            permiso = true;
        } else{
            permiso = false; // Si no se cumple
        }
    } else{
        permiso = false; // Porque no cumplió la condición más básica
    }
    return permiso;
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria){
    let permiso;
    // Solo puede salir si ocurre lo siguiente:
    // MÁS DE 90 en Matemáticas ó Física ó Geometría
    // SOLO SI LA NOTA DE FISICA ES MAYOR A LA DE MATEMATICAS
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){ // Si cualquiera de las tres se cumple, validamos la última condición
        if(notaFisica > notaMatematica){ // Si se cumple
            permiso = true;
        } else{
            permiso = false; // Si no se cumple
        }
    } else{
        permiso = false; // Porque no cumplió la condición más básica
    }
    return permiso;
}

// PROBANDO FUNCIONES
// Para correr esto, abres una terminal en la carpeta donde está este archivo js
// pones node condicionales.js
// Y ya, así debería correr y mostrarte los resultados

console.log("\nPROBANDO LA FUNCIÓN DE CALCULAR TASA DE INTERÉS\n")
console.log(calcularTasaInteres(250000)) // menor de 300000, debe salir con una tasa del 16%
console.log(calcularTasaInteres(2000000)) // entra en la última condición con tasa del 12%
console.log(calcularTasaInteres(4500000.1)) // entre 300000 y 500000 (sin incluir) con tasa del 15%
console.log(calcularTasaInteres(800000)) // entre 500000 y 1000000 (sin incluir) con tasa del 14%
console.log(calcularTasaInteres(1500000)) // entre 1000000 y 2000000 (sin incluir) con tasa del 13%

console.log("\nPROBANDO LA FUNCIÓN DE CALCULAR CAPACIDAD DE PAGO\n")
console.log(calcularCapacidadPago(18, 400, 356)) // Persona de 18 años que tiene ingresos de 400 dólares y egresos de 356 dólares
console.log(calcularCapacidadPago(58, 600, 350)) // Persona de 58 años que tiene ingresos de 600 dólares y egresos de 350 dólares


console.log("\nPROBANDO LA FUNCIÓN DE CALCULAR DESCUENTO\n")
console.log(calcularDescuento(20.5, 2)) // 2 productos a $20.5 NO DEBERÍA RECIBIR DESCUENTO
console.log(calcularDescuento(20.5, 3)) // 3 productos a $20.5 DEBERÍA RECIBIR DESCUENTO DEL 2%
console.log(calcularDescuento(20.5, 7)) // 7 productos a $20.5 DEBERÍA RECIBIR DESCUENTO DEL 3%
console.log(calcularDescuento(20.5, 12)) // 12 productos a $20.5 DEBERÍA RECIBIR DESCUENTO DEL 4%
console.log(calcularDescuento(20.5, 13)) // 13 productos a $20.5 DEBERÍA RECIBIR DESCUENTO DEL 4%

console.log("\nPROBANDO LA FUNCIÓN PARA DETERMINAR COLESTEROL LDL\n")
console.log(determinarColesterolLDL(150.2)) // NIVEL ALTO
console.log(determinarColesterolLDL(162.58)) // NIVEL MUY ALTO

console.log("\nPROBANDO LA FUNCIÓN PARA VALIDAR CLAVE\n")
console.log(validarClave("ClaveValida")) // Más de 8 caracteres y menos de 16 --- TRUE
console.log(validarClave("NoVale")) // Menos de 8 caracteres --- FALSE
console.log(validarClave("abcdefdtghqertyui")) // Más de 16 caracteres --- FALSE

console.log("\nPROBANDO LA FUNCIÓN PARA SABER SI ES MAYÚSCULA\n")
console.log(esMayuscula("a")) // NO ES MAYÚSCULA -- FALSE
console.log(esMayuscula("B")) // SÍ ES MAYÚSCULA -- TRUE

console.log("\nPROBANDO LA FUNCIÓN PARA SABER SI ES MINÚSCULA\n")
console.log(esMinuscula("a")) // SÍ ES MINÚSCULA -- TRUE
console.log(esMinuscula("B")) // NO ES MINÚSCULA -- FALSE

console.log("\nPROBANDO LA FUNCIÓN PARA SABER SI ES DÍGITO\n")
console.log(esDigito("n")) // NO ES DÍGITO DEL 0 AL 9 -- FALSE
console.log(esDigito("5")) // SÍ ES DÍGITO DEL 0 AL 9 -- TRUE

console.log("\nPROBANDO LA FUNCIÓN PARA DAR PERMISO\n")
console.log(darPermiso(40, 50, 60)) // Ninguna es mayor de 90 --- FALSE
console.log(darPermiso(97, 10, 56)) // Al menos UNA es mayor de 90 --- TRUE

console.log("\nPROBANDO LA FUNCIÓN PARA OTORGAR PERMISO\n")
console.log(otorgarPermiso(91, 45, 78)) // Sacó más de 90 en matemáticas, pero menos de 80 en geometría --- FALSE
console.log(otorgarPermiso(91, 45, 82)) // Sacó más de 90 en matemáticas, y más de de 80 en geometría --- TRUE
console.log(otorgarPermiso(89, 45, 90)) // No sacó más de 90 ni en física ni en matemáticas --- FALSE

console.log("\nPROBANDO LA FUNCIÓN PARA DEJAR SALIR\n")
console.log(dejarSalir(85, 92, 65)) // Al menos una nota es MAYOR DE 90. Física es mayor que Matemática --- TRUE
console.log(dejarSalir(56, 45, 80)) // NINGUNA ES MAYOR DE 90 --- FALSE
console.log(dejarSalir(45, 44, 95)) // Al menos una nota es MAYOR DE 90. Pero física NO es mayor que matemáticas --- FALSE

console.log("\n")