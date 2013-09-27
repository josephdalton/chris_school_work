// Chris Lynch 9/24/13 Functionals Personal


function calcFood(){
	var teaSpn = 2; /* define how much to feed per day */
	var weekDys = 7; /* define days in a week */
	var monthDys = 31; /* define days in this month  */
	var foodWk = teaSpn * weekDys; /* calculate and store the tea spoons per week */
	var foodMon = teaSpn * monthDys; /* calculate and store the amount of tea spoons a month */
	
console.log("My ferret eats " + teaSpn + " Tsp. per day. Thats " + foodWk + " Tsp. per week and " + foodMon + " Tsp. per month. ") /* output the information to console log calling the function data */
	
}

calcFood(); /* call the function in the document */



