function mostrar()
{
	var precio;
	var descuento;
	var elPrecioFinal;
	var descuentoEnDinero;
	var precioConDescuento;
	var iva;

	precio= prompt("ingrese precio");
	descuento=prompt("ingrese descuento");

	precio=parseInt(precio);
	descuento=parseInt(descuento);
	descuentoEnDinero= precio * descuento/100;
	precioConDescuento= precio - descuentoEnDinero;
	iva= precio*21/11;
	elPrecioFinal= precioConDescuento + iva;
	alert("el descuento en dinero es de :"+ descuentoEnDinero + " el precio con descuento es de :"+ precioConDescuento + " y el iva es de : "+ iva);
	document.getElementById("elPrecioFinal").value= elPrecioFinal;
}
