// Chris Lynch 9/24/13 Functionals Industry


var calcPages = function(scriptDay, daysYear, daysMonth){
	var scriptsYr = scriptDay * daysYear;
	var scriptsMo = scriptDay * daysMonth;
	
console.log("My job requires me to make " + scriptsMo + " Javascripts a Month. " + "That's " + scriptsYr + " scripts each year!")
	
}

calcPages(4, 365, 31);



