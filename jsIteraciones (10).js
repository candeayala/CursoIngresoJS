function mostrar()
{
	var numero;
	var negativos;
	var positivos;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;

	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if (numero<0)
		{
			negativos=numero;
			contadorNegativos++;
			acumuladorNegativos= acumuladorNegativos+negativos;
		}
		else if (numero>0)
		{
			positivos=numero;
			contadorPositivos++;
			acumuladorPositivos=acumuladorPositivos+positivos;
		}
		else
		{
			contadorCeros++
		}
		if(numero%2==0)
		{
			contadorPares++;
		}



		respuesta=prompt("desea continuar?");
	}

	document.write("la suma de los negativos es: "+ acumuladorNegativos + "<br/>"); 
	document.write("la suma de los positivos es: "+ acumuladorPositivos + "<br/>"); 
	document.write("la cantidad de positivos es: "+ contadorPositivos + "<br/>"); 
	document.write("la cantidad de los negativos es: "+ contadorNegativos + "<br/>"); 
	document.write("la cantidad de ceros es: "+ contadorCeros + "<br/>"); 
	document.write("la cantidad de numeros pares es: "+ contadorPares + "<br/>"); 
	document.write("el promedio de positivos es: "+ acumuladorPositivos/contadorPositivos + "<br/>");
	document.write("el promedio de negativos es: "+ acumuladorNegativos/contadorNegativos + "<br/>"); 
	document.write("la diferencia entre positivos y negativos es: "+ (acumuladorPositivos - acumuladorNegativos) + "<br/>");
}//FIN DE LA FUNCIÓN