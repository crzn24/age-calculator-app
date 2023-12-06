// selectors for output elements
const outputYear = document.querySelector(".output-year"); //since class use .
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const submitbtn = document.querySelector(".submit-btn");

// selectors for input elements
const inputYear = document.querySelector("#year"); //since id use #
const inputMonth = document.querySelector("#month");
const inputDay = document.querySelector("#day");
let isValid = false;

// selectors for errors
const errorYear = document.querySelector(".error-year"); //since id use #
const errorMonth = document.querySelector(".error-month");
const errorDay = document.querySelector(".error-day");

////////// event listeners ///////////////
// submit button event listener
submitbtn.addEventListener("click", CalculateDate);

// function CalculateDate() {
//   console.log("clicked!");
// }

//listener for day input
inputDay.addEventListener("input", (e) => {
  //   console.log("day!");
  if (+inputDay.value > 31) {
    errorDay.textContent = "Must be a valid day";
    isValid = false;
    return; // need to return to start function over or it will end
  } else {
    isValid = true;
    errorDay.textContent = "";
  }
  if (+inputDay.value === 0) {
    isValid = false;
    errorDay.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorDay.textContent = "";
  }
});

//listener for month input
inputMonth.addEventListener("input", (e) => {
  //   console.log("month!");
  if (+inputMonth.value > 12) {
    errorMonth.textContent = "Must be a valid month";
    isValid = false;
    return; // need to return to start function over or it will end
  } else {
    isValid = true;
    errorMonth.textContent = "";
  }
  if (+inputMonth.value === 0) {
    isValid = false;
    errorMonth.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorMonth.textContent = "";
  }
});

//listener for year input
inputYear.addEventListener("input", (e) => {
  //   console.log("year!");
  if (+inputYear.value > 2023) {
    errorYear.textContent = "Must be a valid year";
    isValid = false;
    return; // need to return to start function over or it will end
  } else {
    isValid = true;
    errorYear.textContent = "";
  }
  if (+inputYear.value === 0) {
    isValid = false;
    errorYear.textContent = "This field is required";
    return;
  } else {
    errorYear.textContent = "";
  }
});

// submit button function
function CalculateDate() {
  if (isValid) {
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    console.log(birthday);
    let birthdayObject = new Date(birthday);
    let ageDifference = Date.now() - birthdayObject; //this is in milliseconds
    let ageDate = new Date(ageDifference);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate() - 2;
    console.log(ageDay);
    outputDay.textContent = ageDay;
    outputMonth.textContent = ageMonth;
    outputYear.textContent = ageYears;
  } else {
    alert("Please enter a date.");
  }
}

// function age() {
//   // vars
//   var d1 = document.getElementById("date").value;
//   var m1 = document.getElementById("month").value;
//   var y1 = document.getElementById("year").value;

//   //   stores current date
//   var date = new Date();
//   var d2 = date.getDate();
//   var m2 = 1 + date.getMonth();
//   var y2 = date.getFullYear();
//   var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (d1 > d2) {
//     d2 = d2 + month[m2 - 1];
//     m2 = m2 - 1;
//   }
//   if (m1 > m2) {
//     m2 = m2 + 12;
//     y2 = y2 - 1;
//   }
//   //   Subtract user DOB from current time and store as constants d, m, y
//   var d = d2 - d1;
//   var m = m2 - m1;
//   var y = y2 - y1;

//   document.getElementById("age").innerHTML =
//     "Your Age is " + y + " Years " + m + " Months " + d + " Days";
// }
