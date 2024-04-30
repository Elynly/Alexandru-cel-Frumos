const date = new Date();
let anotherDate = new Date(date.getFullYear(), date.getMonth(), 32);
let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth()).getDay();
let numOfDaysInMonth = 32 - anotherDate.getDate();
let countdays = 1;
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let monthLeft = document.getElementById("month-reduce");
let monthSpan = document.getElementById("month");
let monthRight = document.getElementById("month-increase");
let yearLeft = document.getElementById("year-reduce");
let yearSpan = document.getElementById("year");
let yearRight = document.getElementById("year-increase");
let daysOfWeek = document.getElementById("days");
let myTable = document.getElementById("table");
let menuIcon = document.getElementById("menu-icon");
let menuText = document.getElementById("menu-text");

//Populating the table header with days of the week

for (let i = 0, cell; (cell = daysOfWeek.cells[i]); i++) {
  cell.innerText = days[i];
}

//Populating table cells with this month's calender

for (let i = 0; i < 6; i++) {
  if (i === 1) {
    for (let j = firstDayOfMonth; j < 7; j++) {
      if (countdays <= numOfDaysInMonth) {
        myTable.rows[i].cells[j].innerText = countdays;
        // Highlights today's date
        if (countdays === date.getDate()) {
          myTable.rows[i].cells[j].style.backgroundColor = "#070729";
          myTable.rows[i].cells[j].style.color = "yellow";
        }
        countdays += 1;
      }
    }
  } else if (i > 1) {
    for (let j = 0; j < 7; j++) {
      if (countdays <= numOfDaysInMonth) {
        myTable.rows[i].cells[j].innerText = countdays;
        // Highlights today's date
        if (countdays === date.getDate()) {
          myTable.rows[i].cells[j].style.backgroundColor = "#070729";
          myTable.rows[i].cells[j].style.color = "yellow";
        }
        countdays += 1;
      }
    }
  }
}

if (countdays <= numOfDaysInMonth) {
  let a = numOfDaysInMonth - countdays;
  for (let i = 0; i <= a; i++) {
    let elem = myTable.rows[1].cells[i];
    elem.innerText = countdays;
    // Highlights today's date
    if (countdays === date.getDate()) {
      elem.style.backgroundColor = "#070729";
      elem.style.color = "yellow";
    }
    countdays += 1;
    elem.style.backgroundColor = "#3F51B5";
  }
}

monthSpan.innerText = month[date.getMonth()];
yearSpan.innerText = date.getFullYear();
monthLeft.addEventListener("click", reduceMonth);
monthRight.addEventListener("click", increaseMonth);
yearLeft.addEventListener("click", reduceYear);
yearRight.addEventListener("click", increaseYear);

function increaseMonth() {
  let currMonth = monthSpan.innerHTML;
  let index = month.indexOf(currMonth);
  if (index < 11) {
    monthSpan.innerText = month[index + 1];
  } else {
    monthSpan.innerText = month[0];
  }
  fillCells(yearSpan.innerText, month.indexOf(monthSpan.innerText), myTable);
}
function reduceMonth() {
  let currMonth = monthSpan.innerHTML;
  let index = month.indexOf(currMonth);
  if (index > 0) {
    monthSpan.innerText = month[index - 1];
  } else {
    monthSpan.innerText = month[11];
  }
  fillCells(yearSpan.innerText, month.indexOf(monthSpan.innerText), myTable);
}

function reduceYear() {
  let currYear = yearSpan.innerText;
  if (currYear > 0) {
    yearSpan.innerText = Number(currYear) - 1;
  } else {
    yearSpan.innerText = date.getFullYear();
  }
  fillCells(yearSpan.innerText, month.indexOf(monthSpan.innerText), myTable);
}
function increaseYear() {
  let currYear = yearSpan.innerText;
  yearSpan.innerText = Number(currYear) + 1;
  fillCells(yearSpan.innerText, month.indexOf(monthSpan.innerText), myTable);
}

//populates calender cells for any year and month

let fillCells = function (year, month, tableElement) {
  let newDate = new Date(Number(year), Number(month));
  let anotherDate = new Date(Number(year), Number(month), 32);
  let firstDayOfMonth = newDate.getDay();
  let numOfDaysInMonth = 32 - anotherDate.getDate();
  let countdays = 1;

  // resets everything in the cells if fillCells is called
  for (let i = 1; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      tableElement.rows[i].cells[j].innerText = "";
      tableElement.rows[i].cells[j].style.color = "inherit";
      tableElement.rows[i].cells[j].style.backgroundColor = "inherit";
    }
  }
  for (let i = 1; i < 6; i++) {
    if (i === 1) {
      for (let j = firstDayOfMonth; j < 7; j++) {
        if (countdays <= numOfDaysInMonth) {
          let myElement = tableElement.rows[i].cells[j];
          myElement.innerText = countdays;
          // Highlights today's date
          if (
            countdays === date.getDate() &&
            newDate.getFullYear() === date.getFullYear() &&
            newDate.getMonth() === date.getMonth()
          ) {
            myElement.style.backgroundColor = "#070729";
            myElement.style.color = "yellow";
          }
          countdays += 1;
        }
      }
    } else if (i > 1) {
      for (let j = 0; j < 7; j++) {
        if (countdays <= numOfDaysInMonth) {
          let myElement = tableElement.rows[i].cells[j];
          myElement.innerText = countdays;
          // Highlights today's date
          if (
            countdays === date.getDate() &&
            newDate.getFullYear() === date.getFullYear() &&
            newDate.getMonth() === date.getMonth()
          ) {
            myElement.style.backgroundColor = "#070729";
            myElement.style.color = "yellow";
          }
          countdays += 1;
        }
      }
    }
  }
  if (countdays <= numOfDaysInMonth) {
    let a = numOfDaysInMonth - countdays;
    for (let i = 0; i <= a; i++) {
      let elem = myTable.rows[1].cells[i];
      elem.innerText = countdays;
      // Highlights today's date
      if (
        countdays === date.getDate() &&
        newDate.getFullYear() === date.getFullYear() &&
        newDate.getMonth() === date.getMonth()
      ) {
        elem.style.backgroundColor = "#070729";
        elem.style.color = "yellow";
      }
      elem.style.backgroundColor = "#3F51B5";
      countdays += 1;
    }
  }
};

//Resets the calendar to current date

document.getElementById("reset").addEventListener("click", () => {
  monthSpan.innerHTML = month[date.getMonth()];
  yearSpan.innerHTML = date.getFullYear();
  fillCells(date.getFullYear(), date.getMonth(), myTable);
});

//Displays current year in footer
document.getElementById("year-footer").innerText = date.getFullYear();

//Displays current date and time at bottom of page

setInterval(displayTime, 1000);
function displayTime() {
  let myDate = new Date();
  let dateToday = document.getElementById("date-today");
  dateToday.innerText =
    myDate.toLocaleDateString() + "  " + myDate.toLocaleTimeString();
}

menuIcon.addEventListener("click", () => {
  menuText.classList.toggle("show-menu");
});
