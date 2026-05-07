let currentDate = new Date;
let ageDay = "";
let ageMonth = "";
let ageYear = "";

const userDay = document.getElementById("day");
const userMonth = document.getElementById("month");
const userYear = document.getElementById("year");
const display = document.getElementById("display");
const calculatorButton = document.getElementById("calcButton");

let day = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

let actualSelectedMonth = "";
    userMonth.addEventListener("change", () => {
    actualSelectedMonth = userMonth.selectedIndex + 1;
});

function ageCalculation(actualSelectedMonth) {

    let dayInput = userDay.value;
    let yearInput = userYear.value;

    let actualMonth = month+1;
    let daysInMonth = new Date(year, actualMonth, 0).getDate();

    //  for ANY month the user types in
    let daysInSelectedMonth = new Date(yearInput, actualSelectedMonth, 0).getDate();

    function ageDifference() {
    ageYear = year - yearInput;
    ageMonth = actualMonth - actualSelectedMonth;
    ageDay = day - dayInput;
} 

    if (year > yearInput && actualMonth > actualSelectedMonth && day > dayInput ) {
        ageDifference();
    } else if (year > yearInput && actualMonth < actualSelectedMonth && day > dayInput ) {
        ageYear = year - yearInput;
        ageMonth = 12 + actualMonth - actualSelectedMonth;
        ageDay = day - dayInput;
    } else if (year > yearInput && actualMonth > actualSelectedMonth && day < dayInput ) {
        ageYear = year - yearInput;
        ageMonth = actualMonth - actualSelectedMonth - 1;
        ageDay = (daysInMonth - dayInput) + day;
    } else if (year > yearInput && actualMonth < actualSelectedMonth && day < dayInput ) {
        ageYear = year - yearInput -1;
        ageMonth = ((12 - actualSelectedMonth) + actualMonth) - 1;
        ageDay = (daysInSelectedMonth - dayInput) + day;
    } else if (year == yearInput && actualMonth == actualSelectedMonth && day == dayInput ) {
        ageDifference();
    }else if (year == yearInput && actualMonth > actualSelectedMonth && day == dayInput ) {
        ageDifference();
    } else if (year > yearInput && actualMonth > actualSelectedMonth && day == dayInput) {
        ageDifference();
    } else if (year > yearInput && actualMonth < actualSelectedMonth && day == dayInput) {
        ageYear = year - yearInput - 1;
        ageMonth = 12 + actualMonth - actualSelectedMonth;
        ageDay = day - dayInput;
    } else if (year == yearInput && actualMonth > actualSelectedMonth && day < dayInput) {
       ageYear = year - yearInput;
       ageMonth = actualMonth - actualSelectedMonth - 1;
       ageDay = (daysInSelectedMonth - dayInput) + day;
    } else if (year > yearInput && actualMonth == actualSelectedMonth && day == dayInput) {
       ageDifference();
    } else if (year > yearInput && actualMonth == actualSelectedMonth && day < dayInput) {
       ageYear = year - yearInput -1;
       ageMonth = 12 - 1;
       ageDay = daysInMonth + day - dayInput;
    } else if (year > yearInput && actualMonth == actualSelectedMonth && day > dayInput) {
       ageDifference();
    }

    display.innerText = `You are ${ageYear} years, ${ageMonth}months and ${ageDay}days🥰`;

}

calculatorButton.addEventListener("click", () => {
   ageCalculation(actualSelectedMonth);
});

    