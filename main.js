function validateUsername(name) {
  const username = userInputs.name.value;
  if (username === "") {
    const err = new Error("Nome de usuário inválido");
    err.input = "name";
    throw err;
  }
}

function validateEmail(email) {
  if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)) {
    const err = new Error("Email inválido");
    err.input = "email";
    throw err;
  }
}

function resetFormStyles() {
  Object.entries(userInputs).forEach(([key, value]) => {
    value.classList.remove("success", "error");
  });
}

const userInputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
};

const form = document.getElementById("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  try {
    userInputs.name.classList.add("success");
    validateEmail(userInputs.email.value);
    validateUsername(userInputs.name.value);
    userInputs.name.classList.add("success");
    userInputs.email.classList.add("success");
    console.log(userInputs.email.value);
  } catch (err) {
    userInputs[err.input].classList.add("error");

    document.querySelector(`#${err.input}-error`).textContent = err.message;
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
