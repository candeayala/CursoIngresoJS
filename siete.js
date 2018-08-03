function mostrar()
{

	var notas;
	var contador=0;
	var sexo;
	var notaMasBaja;
	var SexoDeNotaBaja;
	var contadorVaronesAprobados=0;
	var acumuladorNota=0;

	while(contador<5)
	{	
		contador++;
		notas=prompt("ingrese notas");
		notas=parseInt(notas);
		sexo=prompt("ingrese sexo");

		while(sexo!="f" && sexo !="m")
		{
			sexo=prompt("reingrese sexo");
		}
		while(notas<0 || notas>10)
		{
			notas=prompt("ingrese notas entre 0 y 10");
			nota=parseInt(nota);
		}
		acumuladorNota=acumuladorNota+notas;

		if (contador==1)
		{
			notaMasBaja=notas;
			SexoDeNotaBaja=sexo;
		}
		
		if (sexo=="m"&& nota>5)
		{
			contadorVaronesAprobados++;
		}
		
		

		/*
		if(sexo== "f" && notas== notaMasBaja)
		{
			SexoDeNotaBaja="femenino";
		}
		else if (sexo=="m"&& notas== notaMasBaja)
		{
			SexoDeNotaBaja="masculino";
		}*/

	}
	alert("el promedio de las notas totales es : "+ (acumuladorNota/5) + " la nota más baja es :"+ notaMasBaja + " y el Sexo es :" + SexoDeNotaBaja);
}
