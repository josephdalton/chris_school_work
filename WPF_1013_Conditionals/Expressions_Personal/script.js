// Chris Lynch 10/16/13 Conditionals Personal

/* The cost of Xbox One */
var xboxCost = "499";
/* The total amount of money I have */
var myMoney = "354"; //This Data is being stored as a string not a number

/* using an ternary to see if I have enough money for the xbox one and displaying the results*/
(myMoney >= xboxCost || xboxCost < myMoney)?(console.log('You have enough money to buy the Xbox One!')):(console.log('Sorry, but you do not have enough money for Xbox One.'));
