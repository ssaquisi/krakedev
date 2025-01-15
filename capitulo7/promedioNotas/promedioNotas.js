calcularPromedioNotas=function(){
    let nota1 = recuperarFlotante("txtNota1");
    let nota2 = recuperarFlotante("txtNota2");
    let nota3 = recuperarFlotante("txtNota3");

    let promedio = calcularPromedio(nota1,nota2,nota3);
    let promedioRedondeado=promedio.toFixed(2);
    
    cambiarTexto("lblPromedio",promedioRedondeado);

    if(promedioRedondeado>0 && promedioRedondeado<5){
        cambiarTexto("lblMensajeImagen","REPROBADO");
        cambiarImagen("imgResultado","./imagenes/reprobado.gif");
    }else if(promedioRedondeado>=5 && promedioRedondeado<=8){
        cambiarTexto("lblMensajeImagen","BUEN TRABAJO");
        cambiarImagen("imgResultado","./imagenes/buen_trabajo.gif");
    }else if(promedioRedondeado>8 && promedioRedondeado<=10){
        cambiarTexto("lblMensajeImagen","EXCELENTE");
        cambiarImagen("imgResultado","./imagenes/excelente.gif");
    }else{
        cambiarTexto("lblMensajeImagen","DATOS INCORRECTOS");
        cambiarImagen("imgResultado","./imagenes/incorrecto.gif");
    }
}