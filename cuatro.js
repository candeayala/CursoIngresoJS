function mostrar()
{
	var num1;
	var num2;
	var suma;
	var division;
	num1= parseInt(prompt("ingrese numero"));
	num2= parseInt(prompt("ingrese otro numero"));

	if (num1==num2) 
	{
		alert(num1 + " y " + num2);
	}

	else if (num1>num2) 
	{
		division= num1/num2;
		alert(division);
	}

	else 
	{
		suma= num1 + num2;

		if (suma<50) 
		{
			alert("la suma es " + suma + " y es menor a 50");
		}	
		else
		{
			alert(suma);
		}
	}
	
}
