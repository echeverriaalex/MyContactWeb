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

//constante();

function mostrarFotos(){

    for(let i =0; i < fotos.length(); i++){

        document.getElementById("mifoto").src = fotos[i];
    }

    for(foto in fotos){

        //document.get
    }
}

//mostrarFotos();

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


/*
var people = {

    name = "alex",
    lastname = "echeverria",
    age = 23
};


people.name;


person = new Person();
person.name = "Alex Nahuel";
*/

var minombre= "Alex Nahuel Echeverria";
console.log(minombre.length);



var numberObj = new Number(20);
console.log(numberObj);

var numero = numberObj.valueOf();
console.log(numero);

var numberString = "1234570.65";
var num = parseInt(numberString);
console.log(num);


console.log(Number(true));

var n = Number.MAX_VALUE;
console.log(n);

n= Number.MIN_VALUE;
console.log(n);

n = Number.NaN;
console.log(n);