function mostrar()
{
	var numero;
	numero=prompt("ingrese numero");
	numero=parseInt(numero);
	var contador;
	var acumuladorPares=0;
	for (contador=1;contador<numero;contador++)
	{	
		if(numero%2==0)
		{
			acumuladorPares++;
		}	

	}
		
	console.log("la cantidad de pares es :"+acumuladorPares);	



}//FIN DE LA FUNCIÓN