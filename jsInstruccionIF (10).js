function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota= Math.floor(Math.random() * 10) + 1; 
	
	if (nota >= 9)
	{
		alert("excelente" + nota);

	}
	if else (nota>4)
	{
		alert("aprobo" + nota);
	}
	else
	{
		alert("vamos, la proxima se puede" + nota);
	}

}//FIN DE LA FUNCIÓN