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
    isValid = false;
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
    let ageDay = ageDate.getUTCDay();
    outputDay.textContent = ageDay;
    outputMonth.textContent = ageMonth;
    outputYear.textContent = ageYears;
  } else {
    alert("error");
  }
}
