document.write("<h1>*Muhammad Sadiq CCO-116650*</h1>");

document.write("<h2>Current Date and Time</h2>")
var currentDate = new Date()
document.write(currentDate)

document.write("<br><br>")

//display full month name
var monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var month = currentDate.getMonth();
var monthFullName = monthsName[month];

alert("Current Month : "+ monthFullName);


//display first 3 letters of current day
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var today = currentDate.getDay()
var currentDay = dayNames[today]
var abbrCurrentDay = currentDay.slice(0,3)
alert("Today is "+ abbrCurrentDay)

if (currentDay === "Saturday" || currentDay === "Sunday"){
    alert("Its Fun Day")
}else {
    alert("its working day")
}

var dayDate = currentDate.getDate()
if (dayDate<16){
    alert("First Fifteen Days of the month")
}else{
    alert("Last fifteen days of the month")
}

document.write("<br><br>")
document.write("<h2>Time Elapsed in Milliseconds and seconds since Jan 1970</h2>")
document.write("Current Date: "+currentDate);
document.write("<br>")
document.write("Elapsed milliseconds sins January 1, 1970: "+currentDate.getTime());
document.write("<br>")
document.write("Ellapse minutes since January 1, 1970: "+currentDate.getTime()/60000);

document.write("<br><br>")

if(currentDate.getHours()<12){
    alert("Its AM")


}else{
    alert("Its PM")
}

var laterDate = new Date(2020, 11, 31); // Months are zero-indexed, so 11 represents December

document.write("Last day of December 2020: " + laterDate);

document.write("<br><br>")

var ramadan = new Date(`18 june 2015`)
var difference = currentDate-ramadan
var daysPassed = difference/(1000 * 60 *60 *24)
alert( Math.floor(daysPassed)+" Days has passed since 1st Ramadan 2015")

var begening = new Date(`01 jan 2015`)
var reffernceDate= new Date(`05 june 2015`)
var difference2 = ramadan-begening
var timeElapse= difference2/(1000*60)
document.write("On " +reffernceDate+","+ Math.ceil(difference/(1000*60))+" seconds had passed since beggining of 2015")


document.write("<br><br>")


document.write("<h2>Past 1 Hour</h2>")

var pastHour = new Date()
// Extract the current hours
var passedHour = pastHour.getHours();

// Reset the date object an hour ahead
pastHour.setHours(passedHour - 1);

// Display the updated date object in the browser
document.write("Current date and time: " +currentDate)
document.write("<br>")
document.write("1 hour ago, it was  " + pastHour);

document.write("<br><br>")

document.write("<h2>100 Years Back Time</h2>")
var pastYear = new Date()
// Extract the current hours
var passedYear = pastYear.getFullYear();

// Reset the date object an hour ahead
pastYear.setFullYear(passedYear - 100);

// Display the updated date object in the browser
document.write("Current date and time: " +currentDate)
document.write("<br>")
document.write("1 hour ago, it was  " + pastYear);

document.write("<br><br>")

//user birth year

var userAge = parseInt(prompt("What is Your Age?"));

pastYear.setFullYear(passedYear-userAge)
alert("Your age is :"+userAge+"\nYour Birth Year is: "+pastYear.getFullYear())



document.write("<br><br>")


document.write("<h2>K.Electric Bill </h2>")

var numberOfUnits= 210
var chargesPerUnit = 38
var netAmount = numberOfUnits*chargesPerUnit
var lateSurcharge = 350
var grossAmount = netAmount+lateSurcharge

document.write("Customer Namer: Muhammad Sadiq<br>")
document.write( "Month: "+currentDate.toLocaleString(`default`,{month:`long`})+"<br>")
document.write("Number of Units: "+ numberOfUnits+"<br>")
document.write("Charges Per Unit: "+chargesPerUnit+"<br><br>" )
document.write("Net Amount Payable (Within Due Date)"+netAmount+"<br>")
document.write("Late Surcharge: "+lateSurcharge+"<br>")
document.write("Gross Amount Payabel (after due date): "+grossAmount)