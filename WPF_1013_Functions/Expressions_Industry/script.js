// Chris Lynch 10/24/13 Functionals Industry

/* inputting how many fixes a week */
var fixesWeek = 16;

/* dividing 52 weeks by the amount per week to get the per day amount outside the equasion */
var perDayCalc = fixesWeek / 52;

/* defining the vars in an anonomyus function which allow 
the stored data to be changed and used again in another 
script on the page */
var compFix = function(fixesMonth, fixesYear){
		/* find out how many servers per day I fix */
		var yearFixesCalc = fixesWeek / fixesMonth;
		/* using the per day amount above, multiply that 
		the amout of days in a year and get the amount fixed 
		in a year */
		var fixYearCalc = yearFixesCalc * fixesYear;

/* output the information in the console log */
console.log("You fix", yearFixesCalc, "computers each day of the week. In one year you fix", fixYearCalc, " servers." ) 
	
}
/* this uses the information to help solve more complex solutions with changing parts. 
Using the 16 computers per week, and multiplying the amount times 
the amount of weeks, and the amount of days per year. */
compFix(perDayCalc, 365); 


