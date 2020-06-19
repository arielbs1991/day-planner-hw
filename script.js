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
textArea1 = $("#09");
textArea2 = $("#10");
textArea3 = $("#11");
textArea4 = $("#12");
textArea5 = $("#13");
textArea6 = $("#14");
textArea7 = $("#15");
textArea8 = $("#16");
textArea9 = $("#17");

var textDisplayBox = $('.inputField');
textDisplayBox.placeholder = "Click here to enter event in this timeblock"; //need to put on the page

var hourRow = $('.time-block');

var currentHour = moment().format("HH");
var eventHour = $('.hour');
console.log(textArea1.attr("id"));
console.log(currentHour);

function loadPage (){
if (currentHour > textArea1.attr("id")) {
    hourRow.css("background-color", "gray");
} else if (startDate === textArea1.attr("id")) {
    hourRow.css("background-color", "green");
} else if (startDate < textArea1.attr("id")) {
    hourRow.css("background-color", "blue");
}};
if (currentHour > textArea2.attr("id")) {
    hourRow.css("background-color", "gray");
} else if (startDate === textArea2.attr("id")) {
    hourRow.css("background-color", "green");
} else if (startDate < textArea2.attr("id")) {
    hourRow.css("background-color", "blue");
};
if (currentHour > textArea3.attr("id")) {
    hourRow.css("background-color", "gray");
} else if (startDate === textArea3.attr("id")) {
    hourRow.css("background-color", "green");
} else if (startDate < textArea3.attr("id")) {
    hourRow.css("background-color", "blue");
};
if (currentHour > textArea4.attr("id")) {
    hourRow.css("background-color", "gray");
} else if (startDate === textArea4.attr("id")) {
    hourRow.css("background-color", "green");
} else if (startDate < textArea4.attr("id")) {
    hourRow.css("background-color", "blue");
};
if (currentHour > textArea5.attr("id")) {
    hourRow.css("background-color", "gray");
} else if (startDate === textArea5.attr("id")) {
    hourRow.css("background-color", "green");
} else if (startDate < textArea5.attr("id")) {
    hourRow.css("background-color", "blue");
};
if (currentHour > textArea6.attr("id")) {
    hourRow.css("background-color", "gray");
} else if (startDate === textArea6.attr("id")) {
    hourRow.css("background-color", "green");
} else if (startDate < textArea6.attr("id")) {
    hourRow.css("background-color", "blue");
};
if (currentHour > textArea7.attr("id")) {
    hourRow.css("background-color", "gray");
} else if (startDate === textArea7.attr("id")) {
    hourRow.css("background-color", "green");
} else if (startDate < textArea7.attr("id")) {
    hourRow.css("background-color", "blue");
};
if (currentHour > textArea8.attr("id")) {
    hourRow.css("background-color", "gray");
} else if (startDate === textArea8.attr("id")) {
    hourRow.css("background-color", "green");
} else if (startDate < textArea8.attr("id")) {
    hourRow.css("background-color", "blue");
};
if (currentHour > textArea9.attr("id")) {
    hourRow.css("background-color", "gray");
} else if (startDate === textArea9.attr("id")) {
    hourRow.css("background-color", "green");
} else if (startDate < textArea9.attr("id")) {
    hourRow.css("background-color", "blue");
};
loadPage();
//something is wrong with the values of my time, come back to it with help




