const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span");

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.classList = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!(email.validity.valid && country.validity.valid)) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Please enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "The value you enter has to be an e-mail address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  if (country.validity.valueMissing) {
    countryError.textContent = "please enter a country"
  } else if (country.validity.tooShort) {
    countryError.textContent = `Email should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
  }

  emailError.className = "error active";
  countryError.className = "error active"
}

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span");

country.addEventListener("input", () => {
  if (country.validity.valid) {
    emailError.textContent = "";
    emailError.classList = "error";
  } else {
    showError();
  }
});