//TODO: GIVEN I am using a daily planner to create a schedule
//TODO: WHEN I open the planner
//TODO: THEN the current day is displayed at the top of the calendar x
//TODO: WHEN I scroll down
//TODO: THEN I am presented with timeblocks for standard business hours x
//TODO: WHEN I view the timeblocks for that day
//TODO: THEN each timeblock is color coded to indicate whether it is in the past, present, or future >
//TODO: WHEN I click into a timeblock
//TODO: THEN I can enter an event
//TODO: WHEN I click the save button for that timeblock
//TODO: THEN the text for that event is saved in local storage
//TODO: WHEN I refresh the page
//TODO: THEN the saved events persist


var d = new Date();
var startDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").append(startDate);
textArea1=$("#9am");
textArea2=$("#10am");
textArea3=$("#11am");
textArea4=$("#12pm");
textArea5=$("#1pm");
textArea6=$("#2pm");
textArea7=$("#3pm");
textArea8=$("#4pm");
textArea9=$("#5pm");

