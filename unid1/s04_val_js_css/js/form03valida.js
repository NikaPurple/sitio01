const fnValidar03 = () => {

	let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia="";
	let elegioPreferencia=false;
	for(let i=0; i<elementoPref.length; i++){
		if(elementoPref[i].checked){
			valorElegidoPreferencia=elementoPref[i].value;
			elegioPreferencia = true
		}
	}

	let elementoEstado = document.getElementsByName("radEstado");
	let valorElegidoEstado="";
	let elegioEstado=false;
	for(let i=0; i<elementoEstado.length; i++){
		if(elementoEstado[i].checked){
			valorElegidoEstado=elementoEstado[i].value;
			elegioEstado = true
		}
	}

	if(!elegioPreferencia){
		alert("Elija una Preferencia");
		return false;
	} else{
		alert("Su preferencia elegida es "+valorElegidoPreferencia );
	}

	if(!eligioEstado){
		alert("Elija un ESTADO civil");
		return false;
	} else{
		alert("Su estado civil es "+valorElegidoEstado);
	}

	
	return true;
}