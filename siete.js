function mostrar()
{
	var notas;
	var contador=0;
	var sexo;
	var notaMasBaja;
	var SexoDeNotaBaja;
	var contadorVaronesAprobados;
	var acumuladorNota;

	while(contador<5)
	{	
		contador++;
		notas=prompt("ingrese notas");
		notas=parseInt(notas);
		while(notas<0 || notas>10)
		{
			notas=prompt("ingrese notas entre 0 y 10");
		}
		acumuladorNota=acumuladorNota+notas;

		sexo=prompt("ingrese sexo");

		while(sexo!="f" && sexo !="m")
		{
			sexo=prompt("reingrese sexo");
		}

	}
	alert("el promedio de las notas totales es : "+ acumuladorNota/5 + " la nota más baja es :"+ );

	

}
