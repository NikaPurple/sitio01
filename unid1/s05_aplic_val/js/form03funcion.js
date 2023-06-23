function fnGenerarTabla(res,num,nom,ape,tur)
{
    ///document.write( `Tabla ${num} <br>` );
    ///document.write( `Tabla `+num+`<br>` );
    document.write( 
        `Tabla ${num} 
            <table border="1">
                <tr>
                    <td id="tdIzq">COL1 - FIL1 Nombres:</td>
                    <td id="tdDer">COL2 - FIL1 ${nom}</td>
                    <td rowspan="3"> <img src="img/f${num}.jpg"> </td>
                </tr>
                <tr>
                    <td id="tdIzq">COL1 - FIL2 Apellidos:</td>
                    <td id="tdDer">COL2 - FIL2 ${ape}</td>
                    <!--<td>COL3 - FIL2</td>-->
                </tr>
                <tr>
                    <td id="tdIzq">COL1 - FIL3 Turno:</td>
                    <td id="tdDer">COL2 - FIL3 ${res}</td>
                    <!--<td>COL3 - FIL3</td>-->
                </tr>
                <tr>
                    <td colspan="3" class="titulo">COL1 - FIL4 RESUMEN: ${res}</td>
                    <!--<td>COL2 - FIL4</td>
                    <td>COL3 - FIL4</td>-->
                </tr>
            </table>
        ` );
}

function fnTurno(turno)
{

}
.