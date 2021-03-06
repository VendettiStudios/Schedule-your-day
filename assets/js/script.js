// Dom elements
// gets current day month and time in specific format
let day = moment().format('dddd, MMMM Do YYYY');
let nineAM = $("#9am");
let tenAM = $("#10am");
let elevenAM = $("#11am");
let twelveAM = $("#12pm");
let onePM = $("#1pm");
let twoPM = $("#2pm");
let threePM = $("#3pm")
let fourPM = $("#4pm")
let fivePM = $("#5pm")
let userInput;
$('#currentDay').html(day);
// gets current time
let hoursNow = moment().hour();

// goes through timeblocks array to compare numbers to current time
let TimeBlocks = $(".container").children();
background()
// save button, saves users input, and connects it to a time within the local storage

$(".saveBtn").on("click", function () {
    userInput = $(this).siblings(".description").val().trim();
    console.log(userInput);
    hours = $(this).siblings().text().trim();
    console.log(hours)
    localStorage.setItem(hours, JSON.stringify(userInput));
})

// gets saved information from local storage
initPage()
function initPage() {
    console.log("hours" + " " + hoursNow);
    let init9 = JSON.parse(localStorage.getItem("9 AM"));
    nineAM.val(init9);
    console.log("hours" + hoursNow)

    let init10 = JSON.parse(localStorage.getItem("10 AM"));
    tenAM.val(init10);

    let init11 = JSON.parse(localStorage.getItem("11 AM"));
    elevenAM.val(init11);

    let init12 = JSON.parse(localStorage.getItem("12 PM"));
    twelveAM.val(init12);

    let init13 = JSON.parse(localStorage.getItem("1 PM"));
    onePM.val(init13);

    let init14 = JSON.parse(localStorage.getItem("2 PM"));
    twoPM.val(init14);

    let init15 = JSON.parse(localStorage.getItem("3 PM"));
    threePM.val(init15);

    let init16 = JSON.parse(localStorage.getItem("4 PM"));
    fourPM.val(init16);

    let init17 = JSON.parse(localStorage.getItem("5 PM"));
    fivePM.val(init17);
}

// sets background color based off time of day, past present & future colors
function background() {
    TimeBlocks.each(function () {
        let hour = parseInt($(this).attr("data-hour").split('-')[0]);

        console.log(hour)

        if (hour < hoursNow) {
            $(this).addClass("past");
        }
        else if (hour === hoursNow) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }

    });
}