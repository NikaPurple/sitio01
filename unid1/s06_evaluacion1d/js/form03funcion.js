function fnGenerarTabla(res,num,nom,ape,tur,gen)
{

    document.write( 
        `   <table border="1">
                <tr>
                    <td colspan="3" class="titulo">Datos personales: ${res}</td>
                </tr>
                <tr>
                    <td class="subTitulo">Nombres:</td>
                    <td rowspan="4"> <img src="img/f${num}.jpg"> </td>
                    <td class="subTitulo">Turno:</td>
                </tr>
                <tr>
                    <td id="tdDer">${nom}</td>
                    <td id="tdDer">${fnTurno(tur)}</td>
                </tr>
                <tr>
                    <td class="subTitulo">Apellidos:</td>
                    <td class="subTitulo">Genero:</td>
                </tr>
                <tr>
                    <td id="tdDer">${ape}</td>
                    <td id="tdDer">${fnGenero(gen)}</td>
                </tr>
               
            </table>
            <br>
        ` );
}

function fnTurno(turno)
{
	if(turno=="M"){
        return "DÍA";
    } else if (turno == "N"){
        return "NOCHE"
    }
}

function fnGenero(xGenero){
    if(xGenero=="M"){
        return "MASCULINO";
    } else if (xGenero == "F"){
        return "FEMENINO"
    }
	
}
