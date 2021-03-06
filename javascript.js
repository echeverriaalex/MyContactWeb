//document.getElementById("mifoto").innerHTML = "iconos/"

var fotos = [];
fotos[0] = "imagenes/fotoFormal.jpg";
fotos[1] = "imagenes/fotoInformal.jpg"

 name = "Alex";


document.getElementById("biografia") = "Hola bebota";

function visualizarFotoFormal(){

    document.getElementById("mifoto").src = fotos[0];
}

function visualizarFotoInformal(){

    document.getElementById("mifoto").src = fotos[1];
}

function mostrarSecreto(){

    contenido = document.getElementById("secreto");

    document.getElementById("secreto").innerHTML =  "trabajo en Souto autoservicio :)";
}

function mostrarFecha(){

    var date = new Date();
    year = date.getFullYear();
    day = date.getDay();
    month = date.getMonth();

    alert(date);
}

mostrarFecha();
//mostrarSecreto();