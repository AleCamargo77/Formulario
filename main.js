function validateEmail(email) {
  if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)) {
    const err = new Error("Email inválido");
    err.input = email;
    throw err;
  }
}

const userInputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
};

console.log(userInputs.email);
const form = document.getElementById("form");
const smal = document.querySelector("small");

console.log(smal);
form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  try {
    userInputs.name.classList.add("success");
    validateEmail(userInputs.email.value);
    userInputs.email.classList.add("success");
    console.log(userInputs.email.value);
  } catch (err) {
    userInputs.email.classList.add("error");
    document.querySelector(`#email-error`).innerHTML = "Email inválido";
  }
});
// function validatePassword() {
//   const passwordValue = document.getElementById("password").value;
//   const paswordIsValid = passwordValue.match(
//     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
//   );

//   if (paswordIsValid) {
//     console.log(passwordValue);
//   } else {
//     throw new Error("Password invalid");
//   }
// }
