const fnValidar02 = () => {
	let xPreferencia = document.getElementById("lstPreferencias").value;
    if(xPreferencia=="" || /^\s+$/.test(xPreferencia)){
        alert("Seleccione una PREFERENCIA");
        return false;
    }
    
    let xMes = document.getElementById("lstMes").value;
    if(xMes==""){
        alert("Seleccione el MES actual");
        return false;
    }

    return true;
}