//funciones.js

function saludo(){
	document.write("\
		<h1>Ejemplo de saludos</h1>\
			<ol>\
				<li>hola</li>\
				<li>¿qué hay?</li>\
				<li>whats up?</li>\
			</ol>");
}

function crearArrayTradicional(){
	let primos = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
 	
 	const divArregloTradicional = document.querySelector("div");

	//const divArregloTradicional = document.getElementById("divArrayIndice");
	//innerHTML, innerText, textContent
	//divArregloTradicional.innerText= "<hr>    <strong>   Arreglo          de   primos = 		</strong>" + primos + "<hr>";
	divArregloTradicional.innerHTML= "<hr>    <strong>   Arreglo          de   primos = 		</strong>" + primos + "<hr>";
}

function arrayAsociativos(){
const alumno= new Object ();
alumno["nombre"]= "juan";
alumno["apellidoP"]= "sanches";
alumno["apellidoM"]= "perez";
alumno["semestre"]= 6;
alumno["regular"]= true;
alumno.direccion = new Array;
alumno.direccion.calle = "av.insurgentes";
alumno.direccion.numExterior = 330;
alumno.direccion.colonia = "david gustavo Gutierrez";
alumno.direccion.cp = 77010;

//notacion JSon
let nuevoAlumno ={
	nombre: "Erick",
	apellidoP: "solorio",
	apellidoM: "gutierrez",
	semestre: 6,
	regular: false,
	direccion: {
		calle: "Av.Insurgentes",
		numExterior: 330,
		colonia: "David Gustavo Gutiérrez",
		cp: 77010
	}

}

const divAsoc = document.getElementsByTagName("div");

divAsoc[1].innerText = "alumno nombre = " + alumno["nombre"];//div asociativos
divAsoc[1].innerHTML = "alumno nombre = " + alumno.nombre + "br/> Apellido paterno" + alumno.apellidoP +
"br/> direccio" + alumno.direccion.calle + "" + alumno.direccion.numExterior;//div asociativos


let elemClass = document.getElementsByClassName("POO");
elemClass[2] 

}
document.write("hola mundo")
