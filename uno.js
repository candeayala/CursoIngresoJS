
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;
	base=prompt("ingrese base");
	base=parseInt(base);
	altura=prompt("ingrese altura");
	altura=parseInt(altura);
	perimetro=base*3;
	superficie= base*altura/2;
	alert("la superficie es :" + superficie + " y el perimetro es :"+ perimetro);


}
