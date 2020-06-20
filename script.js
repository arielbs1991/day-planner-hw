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


// var date = new Date();
var startDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").append(startDate);
var textArea1 = $("#09").val();
var textArea2 = $("#10").val();
var textArea3 = $("#11").val();
var textArea4 = $("#12").val();
var textArea5 = $("#13").val();
var textArea6 = $("#14").val();
var textArea7 = $("#15").val();
var textArea8 = $("#16").val();
var textArea9 = $("#17").val();
var textArea10 = $("#18").val();
// console.log(textArea1);

var textArea1Color = $("#09");
var textArea2Color = $("#10");
var textArea3Color = $("#11");
var textArea4Color = $("#12");
var textArea5Color = $("#13");
var textArea6Color = $("#14");
var textArea7Color = $("#15");
var textArea8Color = $("#16");
var textArea9Color = $("#17");
var textArea10Color = $("#18");

var textAreaGroup = [textArea1, textArea2, textArea3, textArea3, textArea4, textArea5, textArea6, textArea7, textArea8, textArea9];
// console.log(textAreaGroup);

var textDisplayBox = $('.inputField');
textDisplayBox.placeholder = "Click here to enter event in this timeblock"; //need to put on the page

var currentHour = moment().format("HH");
// console.log(currentHour);
var eventHour = $(".hour")

function loadPage() {
    if (currentHour > 09) {
        textArea1Color.css("background-color", "gray");
    } else if (currentHour === 09) {
        textArea1Color.css("background-color", "white");
    } else if (currentHour < 09) {
        textArea1Color.css("background-color", "blue");
    }
    if (currentHour > 10) {
        textArea2Color.css("background-color", "gray");
    } else if (currentHour === 10) {
        textArea2Color.css("background-color", "white");
    } else if (currentHour < 10) {
        textArea2Color.css("background-color", "blue");
    };
    if (currentHour > 11) {
        textArea3Color.css("background-color", "gray");
    } else if (currentHour === 11) {
        textArea3Color.css("background-color", "white");
    } else if (currentHour < 11) {
        textArea3Color.css("background-color", "blue");
    };
    if (currentHour > 12) {
        textArea4Color.css("background-color", "gray");
    } else if (currentHour === 12) {
        textArea4Color.css("background-color", "white");
    } else if (currentHour < 12) {
        textArea4Color.css("background-color", "blue");
    };
    if (currentHour > 13) {
        textArea5Color.css("background-color", "gray");
    } else if (currentHour === 13) {
        textArea5Color.css("background-color", "white");
    } else if (currentHour < 13) {
        textArea5Color.css("background-color", "blue");
    };
    if (currentHour > 14) {
        textArea6Color.css("background-color", "gray");
    } else if (currentHour === 14) {
        textArea6Color.css("background-color", "white");
    } else if (currentHour < 14) {
        textArea6Color.css("background-color", "blue");
    };
    if (currentHour > 15) {
        textArea7Color.css("background-color", "gray");
    } else if (currentHour === 15) {
        textArea7Color.css("background-color", "white");
    } else if (currentHour < 15) {
        textArea7Color.css("background-color", "blue");
    };
    if (currentHour > 16) {
        textArea8Color.css("background-color", "gray");
    } else if (currentHour === 16) {
        textArea8Color.css("background-color", "white");
    } else if (currentHour < 16) {
        textArea8Color.css("background-color", "blue");
    };
    if (currentHour > 17) {
        textArea9Color.css("background-color", "gray");
    } else if (currentHour === 17) {
        textArea9Color.css("background-color", "white");
    } else if (currentHour < 17) {
        textArea9Color.css("background-color", "blue");
    }
    if (currentHour > 18) {
        textArea10Color.css("background-color", "gray");
    } else if (currentHour === 18) {
        textArea10Color.css("background-color", "white");
    } else if (currentHour < 18) {
        textArea10Color.css("background-color", "blue");
    }
};
loadPage();

// $(".saveBtn").on("click", function () {
//     alert("this button has been pushed");
//     var input = $("textarea").val();
//     console.log(input);
//     localStorage.setItem("data", input);
// });
// var input1 = ($("textarea")[i].value);

$("#9amBtn").on("click", function () {
    var input1 = $("textarea")[0].value;
    localStorage.setItem("data1", input1);
    console.log(input1);
});
$("#10amBtn").on("click", function () {
    var input2 = $("textarea")[1].value;
    localStorage.setItem("data2", input2);
    console.log(input2);
});
$("#11amBtn").on("click", function () {
    var input3 = $("textarea")[2].value;
    localStorage.setItem("data3", input3);
    console.log(input3);
});
$("#12pmBtn").on("click", function () {
    var input4 = $("textarea")[3].value;
    localStorage.setItem("data4", input4);
    console.log(input4);
});
$("#1pmBtn").on("click", function () {
    var input5 = $("textarea")[4].value;
    localStorage.setItem("data5", input5);
    console.log(input5);
});
$("#2pmBtn").on("click", function () {
    var input6 = $("textarea")[5].value;
    localStorage.setItem("data6", input6);
    console.log(input6);
});
$("#3pmBtn").on("click", function () {
    var input7 = $("textarea")[6].value;
    localStorage.setItem("data7", input7);
    console.log(input7);
});
$("#4pmBtn").on("click", function () {
    var input8 = $("textarea")[7].value;
    localStorage.setItem("data8", input8);
    console.log(input8);
});
$("#5pmBtn").on("click", function () {
    var input9 = $("textarea")[8].value;
    localStorage.setItem("data9", input9);
    console.log(input9);
});
$("#6pmBtn").on("click", function () {
    var input10 = $("textarea")[9].value;
    localStorage.setItem("data10", input10);
    console.log(input10);
});

// var inputText1 = JSON.parse(localStorage.getItem("data1"));
var inputText1 = data1;
var inputText2 = data2;
var inputText3 = data3;
var inputText4 = data4;
var inputText5 = data5;
var inputText6 = data6;
var inputText7 = data7;
var inputText8 = data8;
var inputText9 = data9;
var inputText10 = data10;






