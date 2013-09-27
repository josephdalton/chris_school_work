// Chris Lynch 9/24/13 Functionals Wacky

var candyAmount = "1"; /* the total amount of candy there is */
var eachPerson = "2" /* how much candy each person will eat */
var peopleC = "5"; /* define the amount of people having candy */


if(candyAmount <= (peopleC * eachPerson)) /* the if statement saying if the amount of people times amount of candy each person is greater than the total candy amount is equal to or grater than the amount of candy */

{
	
		console.log("There is not enough candy for all " + peopleC + " people, time to get some more!")/* if statement true, output the information to console */
}

else {
	
		console.log("There is enough candy for all " + peopleC + " people!"); /* if there is not enough candy, the console will output this else */
}


