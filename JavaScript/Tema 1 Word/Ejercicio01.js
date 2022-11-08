
    var numero = new array ();
    var numeroUser=prompt("Por favor, introduce valores numéricos. Cuando no quieras introducir más, introduce un valor negativo");
    var contadorNumeros=0;

    if(numero.isNumb){

    while(numeroUser>=0){

        numero.push(numeroUser);
        contadorNumeros++;

    }

    }else {
        document.write("El valor introducido debe de ser un valor numérico");
    }

    document.write(numero);
    document.write(contadorNumeros);