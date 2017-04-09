
var g = true;
function valor(){
	if(g)
		g=false;
	else
		g= true;
	alert(g);
}

function valida(e){
	tecla =(document.all)?e.keyCode : e.which;
	if(8==tecla){
		return true;
	}
	patron =/[0-9]/;
	tecla_final = String.fromCharCode(tecla);
	return patron.test(tecla_final);

}