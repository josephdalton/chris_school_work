// Chris Lynch 10/24/13 Conditionals Personal

/* input how much money I can spend */
var moneytoSpend = "300";
/* input the amount of money on my debit card */
var myCredit = "1000";
/* the amout of cloths I just bought */
var costCloths = "220";

/* using a ternary I use the cash I spend to be greater then or equal to the cost and I make sure that I have enough in my bank just incase I dont have enough cash */
(costCloths >= moneytoSpend || costCloths >= myCredit)?(console.log('You have enough cash to buy your Cloths!')):(console.log('Sorry, but you do not have enough cash to buy your items. You currenty have', moneytospend, ' and ', myCredit, ' On your debit card.'));

