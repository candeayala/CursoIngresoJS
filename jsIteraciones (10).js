function mostrar()
{

	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var acumuladorPositivo=0;
	var acumuladorNegativo=0;
	var numero;
	var negativos=0;
	var positivos=0;

	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if (numero<0)
		{
			negativos=negativos+numero;
			contadorNegativos++;
			acumuladorNegativo=acumuladorNegativo+numero;
		}
		else if (numero>0)
		{
			positivos=positivos+numero;
			contadorPositivos++;
			acumuladorPositivo=acumuladorPositivo+numero;
		}
		else
		{
			contadorCeros++;
		}
		if(numero%2==0)
		{
			contadorPares++
		}

		

		respuesta=prompt("ingrese no para salir");
	}
	document.write("la suma de los negativos es: "+ negativos);
	document.write(" la suma de los positivos es: "+ positivos);
	document.write(" la cantidad de negativos es: "+ contadorNegativos);
	document.write(" la cantidad de positivos es: "+ contadorPositivos);
	document.write(" la cantidad de ceros es: "+ contadorCeros);
	document.write(" la cantidad de numeros pares es: "+ contadorPares);
	document.write(" el promedio de los positivos es : "+ acumuladorPositivo/contadorPositivos);
	document.write(" el promedio de los negativos es : "+ acumuladorNegativo/contadorNegativos);
	document.write(" la diferencia entre positivos y negativos es : "+ acumuladorPositivo- acumuladorNegativo);










}//FIN DE LA FUNCIÓN