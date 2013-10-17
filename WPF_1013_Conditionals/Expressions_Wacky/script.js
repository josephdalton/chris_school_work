// Chris Lynch 10/16/13 Conditionals Wacky

/* Define the cost and the amount of money I have */
var foodCost = "3";
var myMoneyvar = prompt('How much money do you Have?');
var myMoney = myMoneyvar;

/* Calcuate the amout of ice cream I can afford */
var calculateAmount = myMoney / foodCost;

/* if my money is equal or greater then show the output */
if(myMoney <= foodCost)
{
	/* displaying the physical output of data, and the calculation of the total amount I can buy */
	console.log("You can afford a bowl of Ice Cream! Infact, you can afford", calculateAmount, " with all of your money! Woohoo :)");
}
/* Unless I have less then $3, it displays this message */
else if(myMoney < foodCost){
	
		console.log("Sorry, you cannot afford any Ice Cream :(");

	
	}
	/* For any other reason, display this output for any errors or other outcomes that are not true. */
else{
	console.log("Sorry, you cannot have Ice Cream:(");
	
	};