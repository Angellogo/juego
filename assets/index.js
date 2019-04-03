const formularioUno = document.querySelector('#formularioUno');
const personajeSel = formularioUno.personaje;

const formularioDos = document.querySelector('#formularioDos');
const personajeSelDos = formularioDos.personaje;


//Secciones
const seleccionUno = document.getElementById('seleccion-1');
const seleccionDos = document.getElementById('seleccion-2');
const resulFinal = document.getElementById('resultado');


const textoResultado = document.getElementById('textoResultado');

//Cartas de seleccion
const carta1 = document.getElementById('res1');
const carta2 = document.getElementById('res2');



function seleccion (){
	const valorSeleccion = personajeSel.value;
	const valorDosSeleccion = personajeSelDos.value;

	juegoCartas(valorSeleccion,valorDosSeleccion);
	//ocultar la secciones
	seleccionUno.style.display ="none";
	seleccionDos.style.display="block";

}


function seleccion2 (){
	const valorSeleccion = personajeSel.value;
	const valorDosSeleccion = personajeSelDos.value;

	juegoCartas(valorSeleccion,valorDosSeleccion);
	//ocultar la secciones
	seleccionDos.style.display ="none";
	// seleccionDos.style.display="block";

}


function juegoCartas(valorSeleccion,valorDosSeleccion){
	if(valorSeleccion == valorDosSeleccion){
	carta1.src = 'img/' + valorSeleccion + '.png';
	carta2.src = 'img/' + valorDosSeleccion + '.png';

	carta1.classList.add('perdedorClass');
	carta2.classList.add('perdedorClass');
	textoResultado.innerHTML = 'Es un Empate!';

} else if(valorSeleccion == 1 && valorDosSeleccion == 2){
	carta1.src = 'img/' + valorSeleccion + '.png';
	carta2.src = 'img/' + valorDosSeleccion + '.png';

	carta1.classList.add('perdedorClass');
	carta2.classList.add('ganadorClass');
	textoResultado.innerHTML = 'Papaleta Gana!';

}else if(valorSeleccion == 1 && valorDosSeleccion == 3){
	carta1.src = 'img/' + valorSeleccion + '.png';
	carta2.src = 'img/' + valorDosSeleccion + '.png';

	carta1.classList.add('perdedorClass');
	carta2.classList.add('ganadorClass');
	textoResultado.innerHTML = 'Patitos Gana!';
}

	



 else if(valorSeleccion == 2 && valorDosSeleccion == 1){
	carta1.src = 'img/' + valorSeleccion + '.png';
	carta2.src = 'img/' + valorDosSeleccion + '.png';

	carta1.classList.add('perdedorClass');
	carta2.classList.add('ganadorClass');
	textoResultado.innerHTML = 'Destructor<br>de mundos gana!';

}else if(valorSeleccion == 2 && valorDosSeleccion == 3){
	carta1.src = 'img/' + valorSeleccion + '.png';
	carta2.src = 'img/' + valorDosSeleccion + '.png';

	carta1.classList.add('perdedorClass');
	carta2.classList.add('ganadorClass');
	textoResultado.innerHTML = 'Patitos Ganan!';
}


 else if(valorSeleccion == 3 && valorDosSeleccion == 1){
	carta1.src = 'img/' + valorSeleccion + '.png';
	carta2.src = 'img/' + valorDosSeleccion + '.png';

	carta1.classList.add('perdedorClass');
	carta2.classList.add('ganadorClass');
	textoResultado.innerHTML = 'Destructor<br>de mundos Gana!';

}else if(valorSeleccion == 3 && valorDosSeleccion == 2){
	carta1.src = 'img/' + valorSeleccion + '.png';
	carta2.src = 'img/' + valorDosSeleccion + '.png';

	carta1.classList.add('perdedorClass');
	carta2.classList.add('ganadorClass');
	textoResultado.innerHTML = 'Papaleta Gana!';
}
     

}
















