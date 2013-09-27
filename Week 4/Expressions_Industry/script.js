// Chris Lynch 9/24/13 Functionals Industry


var calcPages = function(scriptDay, daysYear, daysMonth){ /* defines the functions using an anonymous function  */
	var scriptsYr = scriptDay * daysYear; /* multiplying scripts per day times days per year */
	var scriptsMo = scriptDay * daysMonth; /* multiplying scripts per day for times per month */
	
console.log("My job requires me to make " + scriptsMo + " Javascripts a Month. " + "That's " + scriptsYr + " scripts each year!") /* output the informaton and calculations from the stored information and functions  */
	
}

calcPages(4, 365, 31); /* calls the function and inputs the numerical data to be stored */



