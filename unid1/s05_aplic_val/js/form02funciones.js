function fnValidar02()
{
    let xNombre = document.getElementById("txtNombres").value;
    if (xNombre == "" || /^\s+$/.test(xNombre)) {
        alert("escriba su nombre");
        return false;
    }

    let xApellido = document.getElementById("txtApellidos").value;
    if (xApellido == "" || /^\s+$/.test(xApellido)) {
        alert("escriba su apellido");
        return false;
    }

    let xDireccion = document.getElementById("txtDireccion").value;
    if (xDireccion == "" || /^\s+$/.test(xDireccion)) {
        alert("escriba su dirección");
        return false;
    }

    let xEdad = document.getElementById("txtEdad").value;
    if (xEdad == "" || /^\s+$/.test(xEdad)) {
        alert("escriba su edad");
        return false;
    }

    let xGenero = document.getElementsByName("rdGenero");
	let valorGenero ="";
	let eligioGenero=false;
	for(let i=0; i<xGenero.length; i++){
		if(xGenero[i].checked){
			valorGenero =xGenero[i].value;
			eligioGenero = true
		}
	}
    if(!eligioGenero){
		alert("Elija su Genero");
		return false;
	} 

    let xEstado = document.getElementsByName("lstEstado");
    let eligioEstado=false;
    if(!eligioEstado){
		alert("Elija su Estado Civil");
		return false;
	} 

    return true;   
}