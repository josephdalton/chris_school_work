// JavaScript Document
//Chris Lynch, 10/10/13 Expressions Industry
//Amount of hard drive space used and left calculation


var lenghtTime = ["30", "60", "90"]; /* how many days in a month 0,1,2 */
var driveSpace = 500; /* total data on hard drive */
var spaceDay = 2; /* How many gigabytes per day used */
var timeLength = lenghtTime[0]; /* creating the time length var */
var mathVar = lenghtTime[0] * spaceDay; /* multiplying days times amount per day  */
var spaceLeft = driveSpace - mathVar; /* subtract the space used on hard drive  */

 
console.log("You have", driveSpace," Gigabytes of space. If you use", spaceDay, "Gigabytes per day, in", lenghtTime[0], " days you will have", mathVar , " Gigabytes of data. You have", spaceLeft," Gigabytes of data left."   ); /* exporting the data into the text*/










