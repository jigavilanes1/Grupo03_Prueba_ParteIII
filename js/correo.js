function validar() {
	// body...
	var correo, telefono, expresion;
	correo= document.getElementById('txtEmail').value;
	telefono= document.getElementById('txtTelefono').value;
	expresion= /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	var ventana_secundaria;

	if(!expresion.test(correo)){
		alert("El correo no es válido");

		return false;
	}else{
		document.getElementById("txtFecha").disabled=false;
		document.getElementById("txtTelefono").disabled=false;
		document.getElementById("boton").disabled=false;
		document.getElementById("txtEmail").disabled=true;
		document.getElementById("txtVali").disabled=true;
	}
}
function enviar() {
		var correo, telefono, expresion;
		correo= document.getElementById('txtEmail').value;
		telefono= document.getElementById('txtTelefono').value;
		expresion= /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
		var ventana_secundaria;
	if(telefono.length!=10){
		alert("El telefono no es correcto");
		return false;
	}
	else if(isNaN(telefono)){
		alert("El telefono ingresado no es un número");
		return false;
	}
	else{
		alert("Datos ingresados correctamente");
	}
}