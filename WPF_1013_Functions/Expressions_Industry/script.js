// Chris Lynch 10/24/13 Functionals Industry


/* defining the vars in an anonomyus function which allow 
the stored data to be changed and used again in another 
script on the page */
var compFix = calc(fixesWeek, fixesMonth, fixesYear)
		/* find out how many servers per day I fix */
		var yearFixesCalc = fixesWeek / fixesMonth;
		/* using the per day amount above, multiply that 
		the amout of days in a year and get the amount fixed 
		in a year */
		var fixYearCalc = yearFixesCalc * fixesYear;
{
/* output the information in the console log */
console.log("You fix", yearFixesCalc, " each day of the week. In one year you fix", fixYearCalc, " servers." ) 
	
}
/* this uses the information to help solve more complex solutions. 
Using the 16 computers per week, and multiplying the amount times 
the amount of weeks, and the amount of days per year. */
compFix(16, fixesWeek * "52", 365); 


