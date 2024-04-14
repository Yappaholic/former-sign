const password = document.querySelector("#password")
const email = document.querySelector("input[type=email]")
const emailDiv = document.querySelector(".email")
const passwordConfirm = document.querySelector("#re-password")
const main = document.querySelector(".Password")
const error = document.createElement("p")
const button = document.querySelector("button")
const emailError = document.createElement("p")
emailError.textContent = "Please enter valid email"
function passwordCheck() {
  if (password.value != passwordConfirm.value) {
    error.textContent = "Passwords do not match";
    main.appendChild(error)
  } else if (password.value === passwordConfirm.value && main.contains(error)) {
    main.removeChild(error)
  }
};
button.addEventListener("click", passwordCheck)

email.addEventListener("invalid", () => emailDiv.appendChild(emailError))


