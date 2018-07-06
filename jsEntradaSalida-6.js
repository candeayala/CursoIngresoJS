/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	

	numeroUno=document.getElementById("numeroUno").value;
	numeroDos=document.getElementById("numeroDos").value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
		
	resultado= numeroUno+numeroDos;
	alert(resultado);
	//num1= document.getElementById('numeroUno').value;
	//num2= document.getElementById('numeroDos').value;


	//suma= numeroUno+numeroDos;
	//alert("La suma es " + suma);

}

