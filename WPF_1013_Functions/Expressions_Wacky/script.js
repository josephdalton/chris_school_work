// Chris Lynch 10/24/13 Functionals Wacky

var oreosBox = "25"; 
var amountPeople = "3" 
var amountEach = "5"; 


if(oreosBox >= amountEach) 

{
	
		console.log("Everyone can have at least", amountEach, " Oreo's!")
}
else if(oreosBox >= (amountEach * amountPeople))
{
	console.log("Everyone can have at least", amountEach, " Oreo's!")
	
	}
else {
	
		console.log("Sorry, there is not enough Oreo's for all", amountPeople, " People..."); 
}


