function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Febrero":
		alert("Este mes no tiene mas de 29 dias");
		break;
	default:
		alert("este mes tiene 30 o mas dias");
		break;
}
	
	


}//FIN DE LA FUNCIÓN