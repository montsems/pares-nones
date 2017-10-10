document.getElementById("no").onclick = function noJugar() {
	document.getElementById("pantallaUno").style.display = "none";
	document.getElementById("pantallaDosA").style.display = "block";
};

document.getElementById("si").onclick = function jugar() {
	document.getElementById("pantallaUno").style.display = "none";
	document.getElementById("pantallaDosB").style.display = "block";
};

document.getElementById("siOtraVez").onclick = function jugarSi() {
	document.getElementById("pantallaDosA").style.display = "none";
	document.getElementById("pantallaDosB").style.display = "block";
};

function maquina() {
	document.getElementById("lanzarJugada").style.display = "block";
	document.getElementById("engranajes").style.display = "none";
};

document.getElementById("iniciaJugada").onclick = function inicio() {
	document.getElementById("pantallaDosB").style.display = "none";
	document.getElementById("pantallaTres").style.display = "block";
	
};

document.getElementById("fotoUno").onclick = function jugadaUno() {
	document.getElementById("fotoDos").style.display = "none";
	document.getElementById("fotoTres").style.display = "none";
	document.getElementById("fotoCuatro").style.display = "none";
	document.getElementById("fotoCinco").style.display = "none";
	document.getElementById("fotoSeis").style.display = "none";
	document.getElementById("fotoSiete").style.display = "none";
	document.getElementById("fotoOcho").style.display = "none";
	document.getElementById("fotoNueve").style.display = "none";
	document.getElementById("fotoDiez").style.display = "none";
	document.getElementById("engranajes").style.display = "block";
	window.setTimeout(maquina, 1000);
};

document.getElementById("fotoDos").onclick = function jugadaDos() {
	document.getElementById("fotoUno").style.display = "none";
	document.getElementById("fotoTres").style.display = "none";
	document.getElementById("fotoCuatro").style.display = "none";
	document.getElementById("fotoCinco").style.display = "none";
	document.getElementById("fotoSeis").style.display = "none";
	document.getElementById("fotoSiete").style.display = "none";
	document.getElementById("fotoOcho").style.display = "none";
	document.getElementById("fotoNueve").style.display = "none";
	document.getElementById("fotoDiez").style.display = "none";
	document.getElementById("engranajes").style.display = "block";
	window.setTimeout(maquina, 1000);
};

document.getElementById("fotoTres").onclick = function jugadaTres() {
	document.getElementById("fotoDos").style.display = "none";
	document.getElementById("fotoUno").style.display = "none";
	document.getElementById("fotoCuatro").style.display = "none";
	document.getElementById("fotoCinco").style.display = "none";
	document.getElementById("fotoSeis").style.display = "none";
	document.getElementById("fotoSiete").style.display = "none";
	document.getElementById("fotoOcho").style.display = "none";
	document.getElementById("fotoNueve").style.display = "none";
	document.getElementById("fotoDiez").style.display = "none";
	document.getElementById("engranajes").style.display = "block";
	window.setTimeout(maquina, 1000);
};

document.getElementById("fotoCuatro").onclick = function jugadaCuatro() {
	document.getElementById("fotoDos").style.display = "none";
	document.getElementById("fotoTres").style.display = "none";
	document.getElementById("fotoUno").style.display = "none";
	document.getElementById("fotoCinco").style.display = "none";
	document.getElementById("fotoSeis").style.display = "none";
	document.getElementById("fotoSiete").style.display = "none";
	document.getElementById("fotoOcho").style.display = "none";
	document.getElementById("fotoNueve").style.display = "none";
	document.getElementById("fotoDiez").style.display = "none";
	document.getElementById("engranajes").style.display = "block";
	window.setTimeout(maquina, 1000);
};

document.getElementById("fotoCinco").onclick = function jugadaCinco() {
	document.getElementById("fotoDos").style.display = "none";
	document.getElementById("fotoTres").style.display = "none";
	document.getElementById("fotoCuatro").style.display = "none";
	document.getElementById("fotoUno").style.display = "none";
	document.getElementById("fotoSeis").style.display = "none";
	document.getElementById("fotoSiete").style.display = "none";
	document.getElementById("fotoOcho").style.display = "none";
	document.getElementById("fotoNueve").style.display = "none";
	document.getElementById("fotoDiez").style.display = "none";
	document.getElementById("engranajes").style.display = "block";
	window.setTimeout(maquina, 1000);
};

document.getElementById("fotoSeis").onclick = function jugadaSeis() {
	document.getElementById("fotoDos").style.display = "none";
	document.getElementById("fotoTres").style.display = "none";
	document.getElementById("fotoCuatro").style.display = "none";
	document.getElementById("fotoCinco").style.display = "none";
	document.getElementById("fotoUno").style.display = "none";
	document.getElementById("fotoSiete").style.display = "none";
	document.getElementById("fotoOcho").style.display = "none";
	document.getElementById("fotoNueve").style.display = "none";
	document.getElementById("fotoDiez").style.display = "none";
	document.getElementById("engranajes").style.display = "block";
	window.setTimeout(maquina, 1000);
};

document.getElementById("fotoSiete").onclick = function jugadaSiete() {
	document.getElementById("fotoDos").style.display = "none";
	document.getElementById("fotoTres").style.display = "none";
	document.getElementById("fotoCuatro").style.display = "none";
	document.getElementById("fotoCinco").style.display = "none";
	document.getElementById("fotoSeis").style.display = "none";
	document.getElementById("fotoUno").style.display = "none";
	document.getElementById("fotoOcho").style.display = "none";
	document.getElementById("fotoNueve").style.display = "none";
	document.getElementById("fotoDiez").style.display = "none";
	document.getElementById("engranajes").style.display = "block";
	window.setTimeout(maquina, 1000);
};

document.getElementById("fotoOcho").onclick = function jugadaOcho() {
	document.getElementById("fotoDos").style.display = "none";
	document.getElementById("fotoTres").style.display = "none";
	document.getElementById("fotoCuatro").style.display = "none";
	document.getElementById("fotoCinco").style.display = "none";
	document.getElementById("fotoSeis").style.display = "none";
	document.getElementById("fotoSiete").style.display = "none";
	document.getElementById("fotoUno").style.display = "none";
	document.getElementById("fotoNueve").style.display = "none";
	document.getElementById("fotoDiez").style.display = "none";
	document.getElementById("engranajes").style.display = "block";
	window.setTimeout(maquina, 1000);
};

document.getElementById("fotoNueve").onclick = function jugadaNueve() {
	document.getElementById("fotoDos").style.display = "none";
	document.getElementById("fotoTres").style.display = "none";
	document.getElementById("fotoCuatro").style.display = "none";
	document.getElementById("fotoCinco").style.display = "none";
	document.getElementById("fotoSeis").style.display = "none";
	document.getElementById("fotoSiete").style.display = "none";
	document.getElementById("fotoOcho").style.display = "none";
	document.getElementById("fotoUno").style.display = "none";
	document.getElementById("fotoDiez").style.display = "none";
	document.getElementById("engranajes").style.display = "block";
	window.setTimeout(maquina, 1000);
};

document.getElementById("fotoDiez").onclick = function jugadaDiez() {
	document.getElementById("fotoDos").style.display = "none";
	document.getElementById("fotoTres").style.display = "none";
	document.getElementById("fotoCuatro").style.display = "none";
	document.getElementById("fotoCinco").style.display = "none";
	document.getElementById("fotoSeis").style.display = "none";
	document.getElementById("fotoSiete").style.display = "none";
	document.getElementById("fotoOcho").style.display = "none";
	document.getElementById("fotoNueve").style.display = "none";
	document.getElementById("fotoUno").style.display = "none";
	document.getElementById("engranajes").style.display = "block";
	window.setTimeout(maquina, 1000);
};

	function juego(){
	
	var pares = document.getElementById("pares");
	var nones = document.getElementById("nones"); 
		if(pares.checked) {
			var jugador = pares.value;
			var maquina = nones.value;};
		
		if(nones.checked) {
			var jugador = nones.value;
			var maquina = pares.value;}; 
	
		
		//console.log(jugador);
		//console.log(maquina);
	
	var numJugador =  document.querySelectorAll('input[name=jugada]');
          for(var i=0; i<numJugador.length; i++){
              if(numJugador[i].checked){
                 numJugador = numJugador[i].value;
              } 
          	};
         
	var numMaquina = Math.floor(Math.random()*11);
		document.getElementById("numeroMaquina").innerHTML = numMaquina;
	
		//console.log(numJugador);
		//console.log(numMaquina);
		
	var suma = Number(numJugador) + Number(numMaquina);
		
		if(suma%2 === 0){var resultado = "pares"}
		if(suma%2 === 1){var resultado = "nones"};
		
		document.getElementById("total").innerHTML = suma;
		
		if(resultado === jugador){
		document.getElementById("resultado").innerHTML = "Has ganado!!";}else{
		document.getElementById("resultado").innerHTML = "Has perdido!!";
		};
		
	}

document.getElementById("lanzarJugada").onclick = function lanzarJugada() {
	document.getElementById("pantallaTres").style.display = "none";
	document.getElementById("pantallaCuatro").style.display = "block";
	juego();
};