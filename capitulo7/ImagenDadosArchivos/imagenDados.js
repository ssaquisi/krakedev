let puntos = 0;
let lanzamientos = 5;



jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
    
}



modificarPuntos=function(numero){
    puntos = puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    if(puntos > 20){
        cambiarTexto("lblMensaje","GANASTE!!")
        limpiar();
        
    }
    //si el jugador obtiene +20 puntos
    //mostrar en pantalla un mensaje GANASTE!!
    //invocar a limpiar
}

//No recibe parámetros
//resta 1 a la variable lanzamientos, guarda el resultado en la misma variable
//y muestra en pantalla
modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    if(lanzamientos == 0){
        cambiarTexto("lblMensaje","GAME OVER")
        limpiar();
    }
    //si lanzamientos llega a 0
    //mostrar en pantalla el mensaje GAME OVER
    //invoca a limpiar
}


limpiar=function(){
    //colocar puntaje en 0 y lanzamientos en 5
    //en las variables y en pantalla
    //quitar la imagen ""
    puntos=0;
    lanzamientos=5;
    cambiarTexto("lblPuntos",puntos);
    cambiarTexto("lblLanzamientos",lanzamientos);
   
    cambiarImagen("imgDado","");

}


lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}

mostrarCara=function(numero){
    if(numero == 1){
        cambiarImagen("imgDado","dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado","dados6.png");
    }
}