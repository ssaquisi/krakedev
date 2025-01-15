//aleatorio = Math.random(); 
    //devuelve un numero random entre 0 y 1

jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3){
        console.log("ES MAYOR A 3");
        console.log("GANASTE");
    }else{
        console.log("ES MENOR A 3");
        console.log("ESTAS DE MALAS");

    }
}

//Crear una función llamada lanzarDado
//no recibe parámetros
//Retorna un número aleatorio entre 1 y 6

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random(); //entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado); //entre 0 y 5
    valorDado=numeroEntero+1;
    return valorDado; //retorna un valor entre 1 y 6
}