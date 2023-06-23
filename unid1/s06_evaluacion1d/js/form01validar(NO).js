function fnValidar01()
{
    let xTexto1 = document.getElementById("txt1").value;
    if (xTexto1 == "" || /^\s+$/.test(xTexto1)) {
        alert("escriba su nombre");
        return false;
    }

    let xTexto2 = document.getElementById("txt2").value;
    if (xTexto2 == "") {
        alert("escriba su nombre");
        return false;
    }

    let xNumero = document.getElementById("num").value;
    if(xNumero==""){
        alert("Falta número");
        return false;
    }
    ///if(2<xNumero.length){
    ///    alert("2 numeros");
    ///    return false;
    ///}
    ///if(3<xNumero.length){
    ///    alert("2 numeros");
   ///     return false;
   /// }
  

    return true;   
}