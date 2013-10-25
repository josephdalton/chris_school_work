// Chris Lynch 10/24/13 Functionals Wacky

/* inputing the amout of oreos in a package */
var oreosBox = "25"; 
/* inputing how many people are eating them */
var amountPeople = "3" 
/* how many each person one wants */
var amountEach = "5"; 
/* input by multiplying how many each by the amount of people */
var eachPerson = (amountEach * amountPeople);

/* if the oreosBox  equal to or greater than  eachPerson display the console  */
if(oreosBox >= eachPerson)
{
	/* if the if statement is true, display how many oreos everyone can have */
	console.log("Everyone can have at least", amountEach, " Oreo's!")	
	}
/* if the oreosBox true to amount of people, everyone can have one only!   */
else if(amountPeople && oreosBox ) 
{
	/* if this statement is true, it overrides the first statement, and displays this amount of oreos. */
	console.log("Sorry, everyone can have only one oreo!")
}
else {
	/* if neither of thoes are true, this displays that there are no oreos, or not enough. */
	console.log("Sorry, there is not enough Oreo's for all", amountPeople, " People..."); 
}


//No functions present
