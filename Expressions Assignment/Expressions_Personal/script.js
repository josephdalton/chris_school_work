// Chris Lynch 10/9/13 Conditionals Personal

var mileGallon = 25;
var tankAmount = 13.5;
var mileDistance = 350;
var milesLeft = mileGallon * tankAmount;

if(milesLeft > (mileDistance * 2))
{
	console.log("You haven enough gas to drive to New York. You have", milesLeft, " miles left");
}
else{
	
	console.log("Sorry, you dont have enough gas to go to New York, time to get some gas! You have", milesLeft, " miles left");
	
	};