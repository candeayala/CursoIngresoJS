function mostrar()
{
	var numero;
	var contador;
	var acumulador;

	numero=prompt("ingrese numero");
	numero=parseInt(numero);

	for (contador=1;contador<numero;contador++)
	{	
		acumulador=contador%2;

		if(acumulador==0)
		{
			console.log("la cantidad de pares es :"+ contador);	
		}	

	}
		
	



}//FIN DE LA FUNCIÓN