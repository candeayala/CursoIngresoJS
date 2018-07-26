function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta='si';
	while(respuesta=="si")
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		contador=contador+1;
		acumulador= acumulador+numero;
		contador=parseInt(contador);
		acumulador=parseInt(acumulador);
		respuesta= prompt("desea continuar?");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN