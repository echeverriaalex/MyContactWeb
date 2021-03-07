//document.getElementById("mifoto").innerHTML = "iconos/"

var fotos = [];
fotos[0] = "imagenes/fotoFormal.jpg";
fotos[1] = "imagenes/fotoInformal.jpg"

function constante(){

    const nombre = "Alex";

    console.log(nombre);
    nombre = "sadasd";

    console.log(nombre);
}

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
    date.getho

    //alert(date);
}

function actualizarReloj(){

    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if(hour < 10)
        hour = "0" + hour;
    document.getElementById("hour").innerHTML = hour + " : ";

    if(minutes < 10)
        minutes = "0" + minutes;
    document.getElementById("minutes").innerHTML =  minutes+ " : ";

    if(seconds < 10)
        seconds = "0" + seconds;
    document.getElementById("seconds").innerHTML = seconds;    
}

function actualizarFecha(){
    
    
    var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Septiembre",
                "Octubre", "Noviembre", "Diciembre"];
    
    var date = new Date();
    var day = date.getDay();
    document.getElementById("day").innerHTML = days[day];

    var month = date.getMonth();
    document.getElementById("month").innerHTML = months[month];

    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
}

mostrarFecha();
//mostrarSecreto();
var tiempoReloj = 1000; // cada 1 segundo se actualiza
var tiempoFecha = (1000*60)*60;
setInterval(actualizarReloj, tiempoReloj);
setInterval(actualizarFecha, tiempoFecha);