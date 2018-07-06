function mostrar()
{
	var num1;
	var num2;
	var suma;
	var resta;
	num1= parseInt(prompt("ingrese numero"));
	num2= parseInt(prompt("ingrese otro numero"));

	if (num1==num2) 
	{
		alert(num1 + " y " + num2);
	}

	else if (num1>num2) 
	{
		resta= num1-num2;
		alert(resta);
	}

	else 
	{
		suma= num1 + num2;
		alert(suma);

		if (suma>10) 
		{
			alert("la suma es " + suma + " y superó el 10");
		}

		
	}

}
