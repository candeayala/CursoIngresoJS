function mostrar()
{
	var dia;
	dia=prompt("ingrese un dia de la semana");

	switch(dia)
	{
		case "sabado":
		case "domingo":
			alert("buen fin de semana");
			break;
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
			alert("a trabajar");
			break;
		default:
			alert("dia no valido");
	}
}
