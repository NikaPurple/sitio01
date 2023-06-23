const fnValidar01 = () => {
	let xTexto = document.getElementById("txtTexto").value;
    //Llama mediante el ID y convierte lo ingresado por el usuario en un valor
    //alert(xTexto);
    if (xTexto=="" || /^\s+$/.test(xTexto)){
        alert("falta texto");
        return false;
    }
    let xNumero = document.getElementById("txtNumero").value;
    if(xNumero==""){
        alert("Falta número");
        return false;
    }

    return true;
}