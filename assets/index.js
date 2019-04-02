const formularioUno = document.querySelector('#formularioUno');
const personajeSel = formularioUno.personaje;

const formularioDos = document.querySelector('#formularioDos');
const personajeSelDos = formularioDos.personaje;

//Secciones
const seleccionUno = document.getElementById('seleccion-1');
const seleccionDos = document.getElementById('seleccion-2');

const textoResultado = document.getElementById('textoResultado');

//Cartas de seleccion
const carta1 = document.getElementById('res1');
const carta2 = document.getElementById('res2');


function seleccion (){
	const valorSeleccion = personajeSel.value;
	const valorDosSeleccion = personajeSelDos.value;

	juegoCartas(valorSeleccion,valorDosSeleccion);
	//ocultar la secciones
	// seleccionUno.style.display ="none";
	// seleccionDos.style.display="block";



	console.log('primer Personaje ' + valorSeleccion);
	console.log('segundo personaje' + valorDosSeleccion);
}


function juegoCartas(valorSeleccion,valorDosSeleccion){
	if(valorSeleccion == valorDosSeleccion){
	carta1.src = 'img/' + carta1 + 'png';
	carta2.src = 'img/' + carta2 + 'png';

	carta1.classList.add('perdedorClass');
	carta2.classList.add('perdedorClass');
	textoResultado.innterHTML = 'Empate';
	console.log('empate')

} else if(valorSeleccion == 1 && valorDosSeleccion == 2){
	carta1.src = 'img/' + carta1 + 'png';
	carta2.src = 'img/' + carta2 + 'png';

	cart1.classList.add('perdedorClass');
	textoResultado.innterHTML = 'Perdiste';
	console.log('perdiste')
}else if(valorSeleccion == 1 && valorDosSeleccion == 3){
	carta1.src = 'img/' + carta1 + 'png';
	carta2.src = 'img/' + carta2 + 'png';

	cart1.classList.add('perdedorClass');
	textoResultado.innterHTML = 'Ganaste';
}
     

}

















seleccion();