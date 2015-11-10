function doClick(e) {
    alert($.lema.text);
}

function Registrarse(e) {
	$.view3.visible = false;
	$.view4.visible = true;
}

function IniciarSesion(e) {
	$.view3.visible = true;
	$.view4.visible = false;
	$.tfUsuario.value = "";
	$.tfContraseña.value = "";
	$.tfNombreUsuario.value = "";
	$.tfContraseña2.value = "";
	$.tfContraseña3.value = "";
	
}
 
function Ingresar(e) {
	var usuario ="victor";
	usuario = $.tfUsuario.value;
	var ventana2 = Alloy.createController('ventana2').getView(); 
	
	if(usuario == "victor"){
		alert("Bienvenido " + usuario);
		ventana2.open();	
	}
}

$.index.open();

