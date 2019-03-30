const formularioUno = document.querySelector('#formularioUno');
const personajeSel = formularioUno.primerPersonaje;

const formularioDos = document.querySelector('#formularioDos');
const personajeSelDos = formularioDos.segundoPersonaje;



function seleccion (){
	const valorSeleccion = personajeSel.value;
	const valorDosSeleccion = personajeSelDos.value;

	console.log('primer Personaje ' + valorSeleccion);
	console.log('segundo personaje' + valorDosSeleccion);
}




seleccion();