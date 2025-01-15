calcularPromedioNotas=function(){
    let nota1 = recuperarFlotante("txtNota1");
    let nota2 = recuperarFlotante("txtNota2");
    let nota3 = recuperarFlotante("txtNota3");

    let promedio = calcularPromedio(nota1,nota2,nota3);
    let promedioRedondeado=promedio.toFixed(2);
    
    cambiarTexto("lblPromedio",promedioRedondeado);

    if(promedioRedondeado>7){
        cambiarImagen("imgResultado","./imagenes/exito.gif");
    }else{
        cambiarImagen("imgResultado","./imagenes/fracaso.gif")
    }
}