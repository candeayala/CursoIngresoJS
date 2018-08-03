function mostrar()
{
	var peso;
	var temperatura;
	var nombre;
	var contadorDeTemperatura=0;
	var contadorDeTemperaturaPares=0;
	var respuesta="si";
	var contador=0;
	var contadorDeAnimales0Grados=0;
	var sumaDePesos=0;
	var minimoBajoCero;
	var maximoBajoCero;
	var banderaDelPrimerBajoCero=0;

	while(respuesta!="n")
	{	
		contador++;
		nombre=prompt("ingrese nombre");
		peso=prompt("ingrese peso");
		peso=parseInt(peso);

		while(isNaN(peso)|| peso<0 || peso>1000)
		{
			peso=prompt("reingrese peso");
			peso=parseInt(peso);
		}
		temperatura=prompt("ingrese temperatura");
		temperatura=parseInt(temperatura);

		while(isNaN(temperatura)|| temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("reingrese temperatura");
			temperatura=parseInt(temperatura);
		}
		while()
		{
			if(temperatura)
			{
				contadorDeTemperaturaPares++;
			}
			if(temperatura<0)
			{
				contadorDeAnimales0Grados++;
			}

		}
	}
	
}
