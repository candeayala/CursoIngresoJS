/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var Marca;
 	var precio=35;
 	var precioFinal;
 	var impuesto;


 	cantidad=document.getElementById('Cantidad').value;
 	Marca=document.getElementById('Marca').value;
 	cantidad=parseInt(cantidad);

 	if (cantidad>=6)
 	{
 		precioFinal= precio*cantidad/2;
 		precioFinal=parseInt(precioFinal);
 		document.getElementById("precioDescuento").value= precioFinal;
 	}

 	if (cantidad==5)
 	{
 		switch(Marca)
 		{
 			case "ArgentinaLuz":
 				precioFinal= (precio-(precio*40/100))*5;
 				precioFinal=parseInt(precioFinal);
 				document.getElementById("precioDescuento").value= precioFinal;
 				break;
 			case "FelipeLamparas":
 			case "JeLuz":
 			case "HazIluminacion":
 			case "Osram":
 				precioFinal= (precio-(precio*30/100))*5;
 				precioFinal=parseInt(precioFinal);
 				document.getElementById("precioDescuento").value= precioFinal;
 				break;
 		}
 	}
 	
 	if (cantidad==4)
 	{
 		switch(Marca)
 		{
 			case"ArgentinaLuz":
 			case"FelipeLamparas":
 				precioFinal= (precio-(precio*25/100))*4;
 				precioFinal=parseInt(precioFinal);
 				document.getElementById("precioDescuento").value= precioFinal;
 				break;
 			default:
 				precioFinal= (precio-(precio*20/100))*4;
 				precioFinal=parseInt(precioFinal);
 				document.getElementById("precioDescuento").value= precioFinal;
 				break;

 		}
 	}
 	if(cantidad ==3)
 	{
 		switch(Marca)
 		{
 			case"ArgentinaLuz":
 				precioFinal= (precio-(precio*15/100))*3;
 				precioFinal=parseInt(precioFinal);
 				document.getElementById("precioDescuento").value= precioFinal;
 				break;
 			case"FelipeLamparas":
 				precioFinal= (precio-(precio*10/100))*3;
 				precioFinal=parseInt(precioFinal);
 				document.getElementById("precioDescuento").value= precioFinal;
 				break;
 			default:
 				precioFinal= (precio-(precio*5/100))*3;
 				precioFinal=parseInt(precioFinal);
 				document.getElementById("precioDescuento").value= precioFinal;
 				break; 
 		}
 	}
 	if(precioFinal>120)
 	{
 		impuesto= precioFinal+ (precioFinal*10/100);

 		alert("IIBB Usted pagó " + impuesto)
 	}

 		
 	

}
